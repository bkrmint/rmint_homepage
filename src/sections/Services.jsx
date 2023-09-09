import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section id="how" >
      <div>
      <h2 className="font-palanquin text-4xl capitalize font-bold  padding-b lg:max-w-lg">
          How it <span className="text-coral-red">works</span>
        </h2>
      </div>
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
        </div>
    </section>


  )
}

export default Services