'use server'
import {z} from 'zod'
import { ContactFormSchema } from './schemas'
import {Resend} from 'resend'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY environment variable");
}
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs){
    //make sure the data matches the correct dataformat
    const result = ContactFormSchema.safeParse(data)

    if(result.error){
        console.log(result.error)
        return{error: result.error.format()}
    }
    try{//server validation
        const {name, email, message} = result.data
        const { data, error} = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            cc: ['Acme <onboarding@resend.dev>'],
            subject: 'Contact form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage ${message}`,
            react: ContactFormEmail({name, email, message})

        })

        if (!data || error){
            console.error("Resend API Error:", error);
            throw new Error('Failed to send email')
        }

        return {success:true}

    }catch(error){
        return {error}
    }


}