import FeatureGrid from "./FeatureGrid";

import { Smile, PaintRoller, LayoutGrid, MessageCircle } from "lucide-react";

// 1. Define your data array, bundling the Icon component itself
const features = [
  {
    id: 1,
    title: "Easy To Use",
    description:
      "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    Icon: Smile,
  },
  {
    id: 2,
    title: "Awesome Design",
    description:
      "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    Icon: PaintRoller,
  },
  {
    id: 3,
    title: "Easy To Customize",
    description:
      "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    Icon: LayoutGrid,
  },
  {
    id: 4,
    title: "Any Time Support",
    description:
      "Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.",
    Icon: MessageCircle,
  },
];

function FeaturesSection() {
  return (
    <div className="mt-10 mb-10" id="features">
      <div className="sec-container flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-primary mb-4 text-lg font-bold">Core Features</h2>
          <h4 className="text-4xl font-extrabold tracking-wide">
            Our Awesome Features
          </h4>
          <p className="text-tx-medium w-9/12 text-center text-base font-medium">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {features.map((data, idx) => (
            <FeatureGrid
              key={idx}
              title={data.title}
              Icon={data.Icon}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
