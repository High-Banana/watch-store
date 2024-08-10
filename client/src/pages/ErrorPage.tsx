import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to={"/"}>Go back to home</Link>
    </div>
  );
}
