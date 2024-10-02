const ProjectSkeletonLoader = () => {
  return (
    <div
      className="flex flex-col gap-y-10 w-full border-b border-b-white/30 py-6
      md-lg:gap-14
      md-lg:py-12
      md-lg:flex-row
      2xl:justify-center"
    >
      <div className="self-center animate-pulse bg-zinc-800 h-[350px] w-full min-w-[300px] max-w-[400px]"></div>
      <div
        className="flex flex-col items-center justify-between flex-1 pb-5
        lg:items-start"
      >
        <div
          className="w-full 
          max-[900px]:max-w-[400px]
          2xl:w-3/5"
        >
          <h2 className="animate-pulse bg-zinc-800 h-8 w-4/5 mb-7 inline-block"></h2>
          <p className="animate-pulse bg-zinc-800 h-[200px] w-11/12 mb-8"></p>
        </div>
        <div
          className="flex items-center gap-x-12
          md:max-lg:gap-x-6"
        >
          <div className="animate-pulse bg-zinc-800 h-7 w-20"></div>
          <div className="animate-pulse bg-zinc-800 h-7 w-20"></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSkeletonLoader