import { SendDashFill } from 'react-bootstrap-icons'

const Subscribe = () => {
  return (
    <div className="bg-base-200 p-5 rounded-lg flex  flex-col lg:flex-row justify-between items-center">
      <div className=" lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl mb-3 font-semibold">
          Let&rsquo;s Join To Our Newsletters
        </h1>
        <p className="text-xl">
          We&rsquo;ll also send you creative tips, trends, resources and the
          occasional promo.
        </p>
      </div>
      <div className="flex gap-3 lg:w-1/2 ">
        <input
          type="text"
          placeholder="Enter your email."
          className="input input-bordered focus:outline-none w-full rounded-3xl"
        />
        <button className="btn btn-neutral rounded-3xl">
          <SendDashFill size={18} />
        </button>
      </div>
    </div>
  )
}

export default Subscribe
