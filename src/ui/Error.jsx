import { useNavigate, useRouteError } from "react-router-dom";
import BackButton from "./Buttons/BackButton";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>
        <BackButton>&larr; Go back</BackButton>
      </button>
    </div>
  );
}

export default NotFound;
