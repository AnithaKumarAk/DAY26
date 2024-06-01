import { data as fsd } from "../data/fsd";
import { data as cyberSec } from "../data/cs";
import { data as dsData } from "../data/ds";
import Card from "../components/Card";
import "../App.css";

const All = () => {
  const data = [...fsd, ...cyberSec, ...dsData];

  return (
    <div className="card-container">
      {data.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default All;