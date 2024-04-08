import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Not Found Page </h1>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
}
