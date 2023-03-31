import { Link } from "react-router-dom";
import "../styles/Forgot.css";

export const Forgot = () => {

  return (
    <div className="Forgot">
      <Link to={"/Login"}>Назад</Link>
      <div>Забыл?</div>
    </div>
  );
};
