import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="mt-10 relative">
        <div className="absolute right-0 top-0 text-md font-semibold text-gray-700">
          <Link href="/">Ronas.IT</Link>
        </div>
        <div className="flex">
          <div className="bg-[#c2e9dd] rounded-3xl px-8 py-10 w-[45%] h-[650px] flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-semibold">Cosy POS</h1>
              <p className="mt-10 font-semibold text-gray-700">
                How we created
                <br /> UI/UX design for the restaurant
                <br /> management system
              </p>
            </div>
            <div>
              <button className="px-7 py-2 bg-gray-100 block text-xl rounded-3xl">Point of Sale</button>
              <button className="px-7 py-2 bg-gray-100 block text-xl rounded-3xl mt-3">UI/UX</button>
            </div>
          </div>
          <div className="w-[55%] relative">
            <div className="w-[100px] h-[100px] bg-[#e5dade] rounded-full absolute top-14 right-0 left-0 mx-auto"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
