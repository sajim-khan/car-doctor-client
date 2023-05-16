import { useEffect, useState } from "react";
import ServiceCard from "../Service/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-600 my-4">Service</h1>
        <p className="text-5xl font-bold my-5">Our Service Area</p>
        <p className="items-center">
          The majority have suffered alteration in some form, by injected
          humour, or random <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            services.map(service => <ServiceCard
              key={service._id}
              service= {service}
            ></ServiceCard>  )
        }
      </div>
    </div>
  );
};

export default Service;
