import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200  mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-12">
          <p className="text-3xl font-bold text-orange-600 mb-4">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which do not look even slightly believable.
            .
          </p>
          <p>
            The majority have suffered alteration in some form, by injected
            humour, or random words look even slightly believable.
          </p>
          <button className="btn bg-orange-600 mt-5">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
