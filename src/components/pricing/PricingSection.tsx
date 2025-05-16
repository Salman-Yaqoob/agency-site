import { useState } from "react";
import PriceGrid from "./PriceGrid";

// data/pricingPlans.js

export const pricingPlans = [
  {
    id: "basic",
    price: {
      currency: "€",
      amount: 19.99,
      period: "mo",
    },
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    popular: false,
    accent: {
      position: "bottom-left", // you can map this to a Tailwind class like 'rounded-bl-full'
      color: "blue", // map to your gradient / color choice
    },
    buttonText: "Purchase Now",
  },
  {
    id: "standard",
    price: {
      currency: "€",
      amount: 19.99,
      period: "mo",
    },
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    popular: true,
    badgeText: "POPULAR",
    accent: {
      position: null, // no corner accent on the popular card
      color: null,
    },
    buttonText: "Purchase Now",
  },
  {
    id: "premium",
    price: {
      currency: "€",
      amount: 70.99,
      period: "mo",
    },
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
    popular: false,
    accent: {
      position: "top-right", // e.g. 'rounded-tr-full'
      color: "green",
    },
    buttonText: "Purchase Now",
  },
];

function PricingSection() {
  const [mouse, setMouse] = useState(false);

  function handleMouseEnt() {
    setMouse(true);
  }
  function handleMouseOut() {
    setMouse(false);
  }

  return (
    <div id="pricing" className="dark:bg-secondry-bg bg-slate-100">
      <div className="sec-container flex flex-col gap-10 px-2 py-8">
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-primary mb-1 text-lg font-bold">Pricing Table</h2>
          <h4 className="text-4xl font-extrabold tracking-wide">
            Our Pricing Plan
          </h4>
          <p className="text-tx-medium w-[50%] text-center text-base font-medium">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div
          onMouseEnter={handleMouseEnt}
          onMouseLeave={handleMouseOut}
          className="isolate mx-auto grid w-[80%] grid-cols-1 lg:grid-cols-3"
        >
          {pricingPlans.map((data, idx) => (
            <PriceGrid
              onMouse={mouse}
              key={data.id}
              price={data.price}
              popular={data.popular}
              features={data.features}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
