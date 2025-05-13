function HomeSec() {
  return (
    <div className="mt-20 mb-7 lg:mt-0">
      <section className="sec-container grid grid-cols-1 items-center justify-center gap-3 lg:h-screen lg:w-full lg:grid-cols-2">
        <div className="flex flex-col gap-10 pt-10 sm:pt-16 md:gap-4 md:pt-20 lg:pt-0">
          <h1 className="row-auto text-3xl leading-8 font-bold tracking-wider md:text-4xl md:leading-16 lg:text-5xl lg:tracking-wide">
            Build beautiful website with TailGrids blocks.
          </h1>
          <p className="text-tx-medium text-sm leading-7 font-semibold md:text-base md:leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            egestas tortor. Morbi sed odio id purus pellentesque iaculis nulla
            facilisi.
          </p>
          <h3 className="text-lg font-semibold tracking-wide">
            Subscribe to get notified when we launch 🎉
          </h3>
          <div className="flex flex-row gap-2 sm:flex-col lg:flex-row xl:flex-col">
            <input
              type="text"
              name=""
              id=""
              placeholder="work your email"
              className="focus:ring-primary w-80 rounded-lg px-4 py-3 text-lg ring ring-gray-400 outline-none placeholder:text-lg placeholder:text-gray-400"
            />
            <button className="primary-btn w-32">Notify Me</button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img src="/camera.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

export default HomeSec;
