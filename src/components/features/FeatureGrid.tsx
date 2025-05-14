

function FeatureGrid({title, Icon , description}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-primary flex h-28 w-28 items-center justify-center rounded-2xl">
        <Icon size={50} className="text-light-pbg" />
      </div>
      <h5 className="mt-8 text-3xl font-bold tracking-wide">{title}</h5>
      <p className="text-tx-medium w-8/12 text-center text-sm font-medium">
        {description}
      </p>
    </div>
  );
}

export default FeatureGrid;
