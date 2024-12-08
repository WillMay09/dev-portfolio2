import Header from "@/components/header";
import Intro from "@/components/intro";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {MDXRemote} from 'next-mdx-remote/rsc'
export default function Home() {
  const content = `# This is a markdown heading`
  //defines an h1, parsing it into html
  return (
    <>
    <section className="py-24">
      <div className='container'>
       <Intro />
       <MDXRemote source={content} />
      </div>
    </section>
    </>
  );
}
