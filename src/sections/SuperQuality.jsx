import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" 
    className=" flex justify-between items-center max-lg:flex-col-reverse gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We are  <span className="text-coral-red"> Innovating Your Dining Experience </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We are personalizing your dining experience with the best recipes from the best chefs in the world that you watch on YouTube or Instagram or TickTok. We are bringing the best of the best to your neighborhood restaurant.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to match quality and excellence of the celebrities recipe ensures your satisfaction. We are committed to providing you with the best experience possible, every time you visit.
        </p>
        {/* <div className="mt-11">
          <Button 
          label="View Details" 
          iconURL={arrowRight} />
        </div> */}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
        src={shoe8}
        alt="shoe"
        width={670}
        height={622}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality