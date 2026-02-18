import { Card, Button } from "react-bootstrap";

export default function Book({ data }) {
  return (
    <Card className="mb-3 shadow">
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.subtitle}
        </Card.Subtitle>

        <Card.Text>
          <strong>Author:</strong> {data.author} <br />
          <strong>Publisher:</strong> {data.publisher} <br />
          <strong>Pages:</strong> {data.pages}
        </Card.Text>

        <Card.Text>{data.description}</Card.Text>

        <Button
          variant="primary"
          href={data.website}
          target="_blank"
        >
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  );
}