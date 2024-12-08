import Image from 'next/image'
import authorImage from '../images/author/wjm159@scarletmail.rutgers.edu-7709a79-bw2.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-2'>
      <div className='nd:mt-0 mt-2 flex-1'>
        <h1 className='title no-underline'>Hey, I&#39;m William Mayhood</h1>
        <p>
          I&#39;m a software engineer based in Morris County, New Jersey.
          I&#39;m passionate about learning new technologies and sharing
          knowledge with others
        </p>
      </div>
      <div className='relative'>
        <Image className='flex-1 rounded-lg grayscale'
        src={authorImage}
        alt="William Mayhood"
        width={175}
        height={175}
        priority />
      </div>
    </section>
  )
}
