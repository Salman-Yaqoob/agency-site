function Expoler() {
  return (
    <div className="from-primary bg-gradient-to-r to-sky-500 py-20">
      <div className="sec-container flex flex-col items-center gap-1 text-center">
        <h2 className="text-3xl font-bold">What Are You Looking For?</h2>
        <h3 className="text-2xl font-medium">Get Started Now</h3>
        <p className="text-tx-medium mt-1 w-[40%] text-base font-medium">
          There are many variations of passages of Lorem Ipsum but the majority
          have suffered in some form.
        </p>
        <button className="text-dark-ptx mt-5 cursor-pointer rounded-xl bg-green-500 px-3 py-2 text-lg font-semibold shadow-2xs transition-all duration-200 hover:bg-green-500/80 active:translate-y-[2px]">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Expoler;
