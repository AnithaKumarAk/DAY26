import Card from "../components/Card";
import { data } from "../data/ds";
import "../App.css";


const Ds = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default Ds;