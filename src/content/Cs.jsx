import Card from "../components/Card";
import { data } from "../data/cs";
import "../App.css";

const Cs = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default Cs;