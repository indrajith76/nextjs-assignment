"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  BiBowlHot,
  BiBowlRice,
  BiDollarCircle,
  BiMenuAltLeft,
  BiSearch,
} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Page = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    setChartData({
      labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      datasets: [
        {
          label: false,
          data: [500, 400, 300, 200, 300, 400, 200],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          display: false,
        },
      },
    });
  }, []);

  return (
    <section className="bg-black p-5 relative 2xl:container mx-auto">
      <div className="flex gap-5 border border-slate-600 p-5 rounded-xl">
        <div className="w-[250px] hidden md:flex flex-col justify-between">
          <div>
            <Image
              width={100}
              height={100}
              className="mb-10"
              src="https://cardconnect.com/assets/blog/cozypos-trademark-logo.png"
              alt=""
            />
            <ul>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Menu
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Tables
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Reservation
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Chat
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Dashboard
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Accounting
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Setting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-gray-400 flex items-center gap-2 border p-1 rounded-full mb-2 text-sm">
              <Image
                className="w-[14%] rounded-full"
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHO6b9-w3GKg6WiuzHKUcUsLc2bHrg1nxgQ&usqp=CAU"
                alt=""
              />
              Lastle K.
            </button>
            <button className="text-gray-400 flex items-center gap-2 border p-1 rounded-full mb-2 text-sm">
              <Image
                className="w-[14%] rounded-full"
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHO6b9-w3GKg6WiuzHKUcUsLc2bHrg1nxgQ&usqp=CAU"
                alt=""
              />
              Camaron W.
            </button>
            <button className="text-gray-400 flex items-center gap-2 border p-1 rounded-full mb-2 text-sm">
              <Image
                className="w-[14%] rounded-full"
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHO6b9-w3GKg6WiuzHKUcUsLc2bHrg1nxgQ&usqp=CAU"
                alt=""
              />
              Jacob J.
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="block md:hidden relative mb-10">
            <ul
              className={`absolute ${
                menuStatus ? "block" : "hidden"
              } border border-slate-800 rounded-lg right-0 top-12 bg-black z-30 duration-300`}
            >
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Menu
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Tables
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Reservation
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Chat
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Dashboard
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Accounting
                </Link>
              </li>
              <li className="px-4 py-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-gray-100 my-2">
                <Link className="block" href="/">
                  Setting
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-between">
              <Image
                width={100}
                height={100}
                src="https://cardconnect.com/assets/blog/cozypos-trademark-logo.png"
                alt=""
              />
              <button
                onClick={() => setMenuStatus(!menuStatus)}
                className="border border-slate-500 p-2 rounded-lg text-2xl text-slate-500 "
              >
                {menuStatus ? <AiOutlineClose /> : <BiMenuAltLeft />}
              </button>
            </div>
          </div>
          <div className="relative">
            <BiSearch className="text-gray-400 absolute top-0 bottom-0 my-auto ml-2 text-xl" />
            <input
              type="text"
              name=""
              className="pl-8 h-9 bg-gray-800 text-white rounded-lg w-full lg:w-auto"
              id=""
              placeholder="Search"
            />
          </div>

          <div className="my-8 flex items-center justify-between">
            <h2 className="text-white text-3xl">Dashboard</h2>
            <select
              name=""
              id=""
              className="bg-gray-800 text-white p-2 rounded-lg"
            >
              <option value="">Feb 4, 2023</option>
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex flex-col justify-between bg-purple-200 p-5 rounded-lg h-[150px]">
              <p className="text-4xl">
                <BiDollarCircle className="bg-white p-2 rounded-full" />
              </p>
              <div>
                <p className="text-sm">Revenue</p>
                <h4 className="text-[20px] md:text-3xl font-medium">$1200.56</h4>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-900 p-5 rounded-lg h-[150px] text-white">
              <p className="text-4xl">
                <BiDollarCircle className="bg-white text-black p-2 rounded-full" />
              </p>
              <div>
                <p className="text-sm">Paid orders</p>
                <h4 className="text-[20px] md:text-3xl font-medium">120</h4>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-900 p-5 rounded-lg h-[150px] text-white">
              <p className="text-4xl">
                <BiDollarCircle className="bg-white text-black p-2 rounded-full" />
              </p>
              <div>
                <p className="text-sm">Tip amount</p>
                <h4 className="text-[20px] md:text-3xl font-medium">$185.56</h4>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-900 p-5 rounded-lg h-[150px] text-white">
              <p className="text-4xl">
                <BiDollarCircle className="bg-white text-black p-2 rounded-full" />
              </p>
              <div>
                <p className="text-sm">Dishes sold</p>
                <h4 className="text-[20px] md:text-3xl font-medium">200</h4>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[400px] border border-gray-600 p-4 rounded-lg">
              <p className="flex justify-between mb-3">
                <span className="text-white">Today's upsale</span>
                <Link className="text-white underline" href="/">
                  See All
                </Link>
              </p>
              <ul>
                <li className="text-white flex items-center gap-2 mb-2">
                  <BiBowlHot className="bg-gray-800 text-[40px] p-2 text-white rounded-lg" />
                  <div>
                    <p>Roast chicken</p>
                    <p>
                      <small>Order: 120</small>
                    </p>
                  </div>
                </li>
                <li className="text-white flex items-center gap-2 mb-2">
                  <BiBowlRice className="bg-gray-800 text-[40px] p-2 text-white rounded-lg" />
                  <div>
                    <p>Carbonara Paste</p>
                    <p>
                      <small>Order: 120</small>
                    </p>
                  </div>
                </li>
                <li className="text-white flex items-center gap-2 mb-2">
                  <BiBowlHot className="bg-gray-800 text-[40px] p-2 text-white rounded-lg" />
                  <div>
                    <p>Fried egg</p>
                    <p>
                      <small>Order: 120</small>
                    </p>
                  </div>
                </li>
                <li className="text-white flex items-center gap-2">
                  <BiBowlRice className="bg-gray-800 text-[40px] p-2 text-white rounded-lg" />
                  <div>
                    <p>Norwegina soup</p>
                    <p>
                      <small>Order: 120</small>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full border border-gray-600 p-4 rounded-lg">
              <p className="flex justify-between mb-3">
                <span className="text-white">Accepted Order</span>
                <select
                  name=""
                  id=""
                  className="bg-gray-800 text-white p-2 rounded-lg"
                >
                  <option value="">Week</option>
                </select>
              </p>
              <div className="relative w-full md:h-[250px]">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
