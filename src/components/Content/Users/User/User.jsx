import style from "./../../Posts/Short/Short.module.css";

const User = (props) => {
  return (
    <a className={style.content_container} href="/">
      <div className={style.prop_short}>
        <div className={style.category_short}>{props.name}</div>
        <div className={style.id_short}>#{props.id}</div>
      </div>
      <img src={props.image} className={style.image}></img>
      <div className={style.title_short}>{props.status}</div>
    </a>
  );
}

export default User;