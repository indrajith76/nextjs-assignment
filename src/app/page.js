import Image from "next/image";
import Link from "next/link";
import Page from "./dashboard/page";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Home() {
  return (
    <main className="container mx-auto overflow-hidden">
      <section className="mt-10 relative">
        <div className="absolute right-0 top-0 text-md font-semibold text-gray-700">
          <Link href="/">Ronas.IT</Link>
        </div>
        <div className="flex">
          <div className="bg-[#c2e9dd] rounded-3xl px-8 py-10 w-[45%] h-[650px] flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-semibold">Cosy POS</h1>
              <p className="mt-10 font-semibold text-gray-700 w-8 lg:w-56">
                How we created UI/UX design for the restaurant management system
              </p>
            </div>
            <div>
              <button className="px-7 py-2 bg-gray-100 block text-xl rounded-3xl">
                Point of Sale
              </button>
              <button className="px-7 py-2 bg-gray-100 block text-xl rounded-3xl mt-3">
                UI/UX
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[55%] relative">
            <div className="w-[100px] h-[100px] bg-[#e5dade] rounded-full absolute top-14 right-0 left-0 mx-auto"></div>
            <div className="absolute right-0 top-36 md:top-28">
              <div className="rounded-2xl overflow-hidden h-[700px] overflow-y-scroll lg:h-auto">
                <Page />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-96 px-5 md:px-28 mb-40 relative">
        <div className="bg-[#c9caef] w-[600px] h-[600px] rounded-full absolute -top-[450px] left-44 -z-10"></div>
        <div className="grid lg:grid-cols-2 gap-5 z-10">
          <div className="relative">
            <h1 className="text-7xl font-medium mb-10">Key task</h1>
            <p className="lg:w-80 text-xl leading-7 font-semibold text-slate-800">
              About a month ago a startupper contacted us and asked to create a
              UI/UX for a restaurant management system. Our key challenge was to
              create a UI/UX design for a tablet restaurant app within 3 weeks.
            </p>
            <p className="text-9xl absolute -z-10 right-0 bottom-0 text-[#b6e3d6] ">
              <BiSolidQuoteLeft />
            </p>
          </div>
          <div className="pt-28 lg:pt-52">
            <p className="text-xl md:text-3xl text-slate-800 leading-8 md:leading-10">
              I want to create a solution that can automate the
              restaurant&apos;s internal processes. The problem is I need the
              design to be completed within 3 weeks. I&apos;m going to receive
              the funding from an investor but without the mockup, I can&apos;t
              prove the feasibility of my idea.
            </p>
            <p className="text-xl md:text-3xl text-slate-800 leading-10 mt-10">- Gregg</p>
          </div>
        </div>
      </section>
    </main>
  );
}
