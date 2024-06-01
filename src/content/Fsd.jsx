import Card from "../components/Card";
import { data } from "../data/fsd";
import "../App.css";


const Fsd = () => {
  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default Fsd;