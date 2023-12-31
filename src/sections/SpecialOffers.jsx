import { Link } from "react-router-dom"

import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  const handleClick = () => {
    const stripeURL = "https://buy.stripe.com/6oE3gh2tA0sE6Oc288"
    window.open(stripeURL)
  }

  return (
    <section id="specialoffer" className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Join our <span className="text-coral-red">
          Exclusive 
          </span> Club 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on an exclusive journey that redefines your experience. From premier selections to incredible savings, we offer unparalleled value that sets us apart. 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          To get access to any of our restaurants, you need to be a member. Membership offers Personalized experiences. Become a member and get going with the best of the best.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Membership is <span className="text-coral-red">$10/year.</span> It will take you to stripe checkout page.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button 
          label="Buy Membership" 
          iconURL={arrowRight}
          handleClick={handleClick} />
          {/* <Button
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          /> */}
        </div>

      </div>
    </section>
  )
}

export default SpecialOffers