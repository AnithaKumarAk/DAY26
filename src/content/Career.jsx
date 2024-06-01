import { data } from "../data/career";
const Career = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return (
          <div key={index} className="card">
            <h4 className="title">{data.company}</h4>
            <img src={data.img} alt={data.company} />
            <p className="text">{data.package}</p>
            <p className="text">{data.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Career;