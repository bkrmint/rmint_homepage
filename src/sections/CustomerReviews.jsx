import { chat } from "../assets/images"
import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container">
    <div className="flex flex-1 flex-col ">
      <h3 className="font-planquin text-center text-4xl font-bold">
        How Do I <span className="text-coral-red">
          Know _____? </span>
        
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg">
        As a member you will have access to our community agent who can help you further with your questions. 
      </p>
    </div>
      <div className="flex-1">
        <img src={chat} width={473} height={387} className="object-contain w-full" />
      </div>

      
    </section>
  )
}

export default CustomerReviews