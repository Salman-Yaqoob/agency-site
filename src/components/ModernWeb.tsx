function ModernWeb() {
  return (
    <div className="dark:bg-secondry-bg mb-7 bg-slate-100 py-8">
      <div className="sec-container grid h-1/4 grid-cols-1 items-center justify-center gap-3 lg:grid-cols-2">
        <p className="text-2xl font-bold tracking-wide sm:text-3xl lg:text-4xl">
          Tailwind CSS UI Components for Modern Web Apps
        </p>
        <div className="flex h-auto items-center justify-between gap-4">
          <img
            src="../../public/TailwindCSS.png"
            alt="tailwind"
            className="w-28 sm:w-32 md:w-40"
          />
          <img
            src="../../public/MUIMaterialUI.png"
            alt="tailwind"
            className="w-28 sm:w-32 md:w-40"
          />
          <img
            src="../../public/Tailwind.png"
            alt="tailwind"
            className="w-28 sm:w-32 md:w-40"
          />
        </div>
      </div>
    </div>
  );
}

export default ModernWeb;
