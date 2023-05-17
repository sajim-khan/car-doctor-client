import { Link } from "react-router-dom";

const serviceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="font-bold text-red-600 my-2">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/book/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default serviceCard;
