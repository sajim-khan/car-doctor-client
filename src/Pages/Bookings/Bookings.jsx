import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl mb-5 text-center">
        Your Bookings: {bookings.length}
      </h2>

      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th className="text-center text-2xl">Name</th>
            <th className="text-center text-2xl">Job</th>
            <th className="text-center text-2xl">Price</th>
            <th className="text-center text-2xl">Date</th>
            <th className="text-center text-2xl">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow key={bookings._id} booking={booking}></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
