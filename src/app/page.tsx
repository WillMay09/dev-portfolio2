import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="py-24">
      <div className='container'>
        <h1 className="text-3xl font-bold"></h1>
        <Button>Hello there</Button>
      </div>
    </section>
    </>
  );
}
