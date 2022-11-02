import { NavLink } from "react-router-dom";
import style from "./../../Posts/Short/Short.module.css";

const User = (props) => {
  return (
    <a className={style.content_container} href="/">
      <div className={style.prop_short}>
        <div className={style.category_short}>{props.name}</div>
        <div className={style.id_short}>#{props.id}</div>
      </div>
     <NavLink to={`${"/profile/" + props.id}`}><img src={props.image} className={style.image} alt="#" /></NavLink>
      <div className={style.title_short}>{props.status}</div>
    </a>
  );
}
// {`${"/profile/" + props.id}`}
export default User;