const MyClass = () => {
  return (
    <div className="flex justify-between mt-10">
      <iframe
        height="480"
        className="w-full lg:w-1/2"
        src="https://www.youtube.com/embed/V7z7BAZdt2M"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="px-5">
        <h1 className="text-3xl">
          Module 2: Know About Camera and Crash Overview
        </h1>
        <details>
          <summary>Module Notes</summary>
          <p>1. EXPOSURE - THE MAIN ELEMENT OF PHOTOGRAPHY</p>
          <p>2. APERTURE - A FUNDAMENTAL CONCEPT IN PHOTOGRAPHY</p>
          <p>3. SHUTTER SPEED - A KEY ELEMENT FOR BEGINNER PHOTOGRAPHY</p>
          <p>4. ISO - A MUST IN ANY BEGINNER&rsquo;S PHOTOGRAPHY GUIDE</p>
          <p>
            5. EXPOSURE TRIANGLE - THE SECRET TO UNDERSTANDING THE PHOTOGRAPHY
            BASICS
          </p>
          <p>6. DEPTH OF FIELD - A BASIC CONCEPT IN PHOTOGRAPHY</p>
        </details>
      </div>
    </div>
  )
}

export default MyClass
