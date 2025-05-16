import { FaCircle } from "react-icons/fa6";

function PriceGrid({ popular = false, idx = 0, price, features, onMouse }) {
  return (
    <div
      className={`${popular ? "bg-primary text-dark-ptx z-10 scale-105" : "dark:bg-dark-pbg relative"} flex cursor-pointer flex-col items-center gap-5 overflow-hidden rounded-lg px-3 py-10 text-center shadow-2xl transition-all duration-300 ${onMouse ? "hover:z-20" : "z-0"} hover:translate-y-[-20px]`}
    >
      <div className="flex flex-col items-center gap-1">
        {popular ? (
          <h2 className="rounded-full border border-white px-3 py-1">
            {" "}
            Popular
          </h2>
        ) : (
          <FaCircle
            className={`${idx === 0 ? "text-primary absolute -top-4 -left-4" : "text-primary absolute -right-4 -bottom-4"} `}
            size={40}
          />
        )}
        <h3 className="text-base font-semibold uppercase">starting from</h3>
        <h3 className={`${popular ? "" : "text-primary"} text-xl font-bold`}>
          <span>{price.currency}</span> {price.amount}/{price.period}
        </h3>
      </div>
      <div className="text-tx-medium flex flex-col gap-2 text-sm">
        {features.map((data) => (
          <p>{data}</p>
        ))}
      </div>
      <button
        className={`border-tx-medium cursor-pointer rounded-full border px-4 py-2 transition-all duration-200 ${popular ? "text-primary bg-light-pbg border-0 hover:opacity-85" : "hover:bg-primary hover:text-dark-ptx hover:border-transparent"} text-primary`}
      >
        Purchase Now
      </button>
    </div>
  );
}

export default PriceGrid;
