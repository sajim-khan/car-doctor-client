const serviceCard = ({ service }) => {
  const { _id, service_id, title, img, price, description, facility } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="font-bold text-red-600 my-2">Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default serviceCard;
