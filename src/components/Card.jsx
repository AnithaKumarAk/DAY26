import "../style/card.css"
const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} alt={data.name} />
      <p>{data.title}</p>
    </div>
  );
};

export default Card;