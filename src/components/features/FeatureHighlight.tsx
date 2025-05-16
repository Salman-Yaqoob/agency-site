function FeatureHighlight() {
  const features = [
    {
      id: 1,
      number: "01",
      title: "Refreshing Design",
      description:
        "Clean, refreshing and high-quality that gives positive vibes. Figma source file also provided so you can use to prototype, experiment, play or adjust.",
    },
    {
      id: 2,
      number: "02",
      title: "Developer Friendly",
      description:
        "Developer experience is our #1 priority, entire library is designed, coded, and organized in a way that saves hundreds of hours and increases productivity.",
    },
  ];

  return (
    <div className="mb-20">
      <div className="sec-container grid grid-cols-1 grid-rows-[0.75fr_1fr] items-center gap-6 lg:grid-cols-[0.75fr_1fr] lg:grid-rows-1">
        <div className="relative h-[70] rounded-tl-[70px] px-10 md:h-auto lg:px-0">
          <div className="h-full w-full overflow-hidden rounded-tl-[70px]">
            <img
              src="/lady.jpg"
              alt="lady"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-2 z-10 flex h-[23%] w-[60%] items-center justify-center rounded-tr-[70px] bg-gradient-to-r from-blue-600 to-sky-600 text-center shadow-2xl">
            <p className="w-[90%] text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
              We make clean & professional design
            </p>
          </div>
        </div>
        <section className="flex flex-col gap-4 px-4">
          {/* Badge */}
          <p className="text-tx-medium mb-2 text-lg font-semibold uppercase">
            What We Do!
          </p>

          {/* Heading */}
          <h2 className="mb-8 text-5xl font-bold tracking-wider">
            We develop &amp; create awesome website.
          </h2>

          {/* Feature List */}
          <div className="space-y-8">
            {features.map(({ id, number, title, description }) => (
              <div key={id} className="flex items-start gap-6">
                {/* Number */}
                <span className="text-3xl font-bold text-blue-500">
                  {number}
                </span>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureHighlight;
