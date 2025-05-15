import { useState } from "react";

import { FaArrowUpRightDots } from "react-icons/fa6";
import { GoCircle } from "react-icons/go";
import { FaSnapchatGhost } from "react-icons/fa";
import { GoInfinity } from "react-icons/go";

import {
  ChevronLeft,
  ChevronRight,
  Dot,
  Facebook,
  Instagram,
} from "lucide-react";

const thier = [
  {
    Icon: GoInfinity,
    company: "Lineicons",
    description: `File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.`,
    author: { name: "Larry Diamond", title: "Chief Executive Officer" },
    photo: "/testimonial/test.jpg",
  },
  {
    Icon: Facebook,
    company: "Facebook",
    description: "Connect with friends, share what you’re up to.",
    author: { name: "Mark Zuckerberg", title: "Founder & CEO" },
    photo: "/testimonial/test1.jpg",
  },
  {
    Icon: Instagram,
    company: "Instagram",
    description: "Capture and share the world’s moments in photos & videos.",
    author: { name: "Kevin Systrom", title: "Co-founder" },
    photo: "/testimonial/test2.jpg",
  },
  {
    Icon: FaSnapchatGhost,
    company: "Snapchat",
    description: "Snap and chat with friends in real-time.",
    author: { name: "Evan Spiegel", title: "Co-founder & CEO" },
    photo: "/testimonial/test3.jpg",
  },
];

function Testimonials() {
  const [design, setDesign] = useState(false);
  const [testi, setTesti] = useState(0);

  const Icon = thier[testi].Icon;

  function handleMouseEnt() {
    setDesign(true);
  }
  function handleMouseOut() {
    setDesign(false);
  }

  function handleTestiForward() {
    if (testi >= 3) setTesti(0);
    else {
      setTesti((prev) => prev + 1);
    }
  }
  function handleTestiBackward() {
    if (testi <= 0) setTesti(3);
    else {
      setTesti((prev) => prev - 1);
    }
  }

  return (
    <div className="">
      <div className="sec-container relative flex flex-col items-center gap-2 px-10 py-16">
        <div className="mx-auto grid w-[60%] grid-cols-2 items-center justify-center gap-2">
          <div
            className="relative isolate h-[400px]"
            onMouseEnter={handleMouseEnt}
            onMouseOut={handleMouseOut}
          >
            {design && (
              <div>
                <FaArrowUpRightDots
                  className="absolute -top-3 -left-2 -z-10 rotate-180 text-green-500"
                  size={40}
                />
              </div>
            )}
            <img
              src={thier[testi].photo}
              alt="alt"
              className="h-full w-full object-cover object-top transition-all duration-200"
            />
            {design && (
              <div>
                <GoCircle
                  size={40}
                  className="text-primary absolute -right-4 -bottom-4 -z-10"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center transition-all duration-200">
            <div className="mt-[5%] flex w-[75%] flex-col gap-4">
              <div className="flex items-center gap-4">
                <Icon size={35} className=" " />
                <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                  {thier[testi].company}
                </h2>
              </div>
              <p className="text-tx-medium mb-4 text-xl leading-10 font-medium italic md:text-2xl">
                "<span className="">{thier[testi].description}</span>"
              </p>
              <div className="mt-6 border-t border-gray-700 pt-2">
                <p className="font-bold">{thier[testi].author.name}</p>
                <p className="text-sm text-gray-500">
                  {thier[testi].author.title}
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div className="absolute bottom-3 left-[50%] flex translate-x-[-50%] items-center gap-3 *:cursor-pointer">
            <button onClick={handleTestiBackward}>
              <ChevronLeft
                size={20}
                className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800"
              />
            </button>
            <button onClick={handleTestiForward}>
              <ChevronRight
                size={20}
                className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-all duration-200">
          <Dot size={30} className={testi === 0 ? "text-primary" : ""} />
          <Dot size={30} className={testi === 1 ? "text-primary" : ""} />
          <Dot size={30} className={testi === 2 ? "text-primary" : ""} />
          <Dot size={30} className={testi === 3 ? "text-primary" : ""} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
