import { Facebook, GitBranchIcon, Instagram, Volleyball } from "lucide-react";
import { useState } from "react";
import { BsSnapchat } from "react-icons/bs";

function TeamCards({ name, role, photo }) {
  const [dot, setDot] = useState(false);

  function handleMouseEnt() {
    setDot(true);
  }

  function handleMouseOut() {
    setDot(false);
  }

  return (
    <div className="dark:bg-dark-pbg flex flex-col items-center justify-center rounded-lg px-10 py-5 shadow-md">
      {/* <div className="flex flex-1/3 flex-col items-center justify-center overflow-hidden rounded-full px-10"></div> */}
      <div
        className="relative isolate transition-all duration-200"
        onMouseEnter={handleMouseEnt}
        onMouseLeave={handleMouseOut}
      >
        <img
          src={photo}
          alt=""
          className="h-[120px] w-[120px] rounded-full bg-center"
        />
        {dot && (
          <div className="text-primary absolute bottom-0 left-2 -z-10">
            <Volleyball size={30} />
          </div>
        )}
      </div>

      <h2 className="mt-6 mb-4 text-lg font-semibold">{name}</h2>
      <h5 className="text-tx-medium mb-3 text-base">{role}</h5>
      <div className="text-tx-medium/60 *:hover:text-primary flex items-center justify-around gap-4 transition-all duration-200 *:cursor-pointer">
        <Facebook size={12} />
        <Instagram size={12} />
        {/* <GitBranchIcon  /> */}
        <BsSnapchat size={12} />
      </div>
    </div>
  );
}

export default TeamCards;
