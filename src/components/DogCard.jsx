import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function DogCard({ image, name, description, color, text }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags color={color} text={text} />
      </Card.Body>
    </Card>
  );
}

export default DogCard;
