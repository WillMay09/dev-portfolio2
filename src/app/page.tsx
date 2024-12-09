import Header from "@/components/header";
import Intro from "@/components/intro";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {MDXRemote} from 'next-mdx-remote/rsc'
import RecentPosts from "@/components/recent-posts";
export default function Home() {
  
  //defines an h1, parsing it into html
  return (
    
    <section className="py-24">
      <div className='container'>
       <Intro />
       <RecentPosts />
      </div>
    </section>
    
  );
}
