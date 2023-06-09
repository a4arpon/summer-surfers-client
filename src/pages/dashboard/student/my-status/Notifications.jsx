const Notifications = () => {
  return (
    <div>
      <div className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Your course will start soon. Be prepare for it. Collect all those
          equipments what needed for this course. We send equipments
          requirements on your email.
        </span>
      </div>
    </div>
  )
}

export default Notifications
