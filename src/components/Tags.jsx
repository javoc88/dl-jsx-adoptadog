import Badge from "react-bootstrap/Badge";

function Tags({ color, text }) {
  return (
    <>
      <Badge pill bg={color}>
        {text}
      </Badge>
    </>
  );
}

export default Tags;
