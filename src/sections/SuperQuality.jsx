import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" 
    className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide <span className="text-coral-red"> Superior Experience </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium ingredients, our meticulously crafted menu is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to match quality and excellence of the celebrities recipe ensures your satisfaction. We are committed to providing you with the best experience possible, every time you visit.
        </p>
        <div className="mt-11">
          <Button 
          label="View Details" 
          iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
        src={shoe8}
        alt="shoe"
        width={370}
        height={322}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality