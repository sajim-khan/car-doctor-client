const BookingRow = ({ booking }) => {
  const { img, price, customerName, date, service, email } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-40 h-40">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div className="">
            <div className="font-bold text-2xl ml-10">{customerName}</div>
            <div className="font-bold ml-10">{email}</div>
          </div>
        </div>
      </td>
      <td className="text-center text-2xl font-bold ">{service}</td>
      <td className="text-center text-2xl font-bold ">{`$` + price}</td>
      <td className="text-center text-2xl font-bold">{date}</td>
      <th>
        <button className="btn btn-warning">Pending</button>
      </th>
    </tr>
  );
};

export default BookingRow;
