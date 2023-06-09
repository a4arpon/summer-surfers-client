import loaderImg from '../../assets/svgs/clockLoader.svg'
const Loader = () => {
  return (
    <div className="flex justify-center flex-col items-center relative h-full">
      <img src={loaderImg} className="h-96 w-fit" />
      <h1 className="text-3xl font-semibold text-secondary absolute">
        Loading...
      </h1>
    </div>
  )
}

export default Loader
