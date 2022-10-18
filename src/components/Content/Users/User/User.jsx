import style from "./../../Posts/Short/Short.module.css";

const User = (props) => {
  return (
    <a class={style.content_container} href="#">
      <div class={style.prop_short}>
        <div class={style.category_short}>{props.name}</div>
        <div class={style.id_short}>#{props.id}</div>
      </div>
      <div class={style.title_short}>{props.status}</div>
    </a>
  );
}

export default User;