import { NavLink } from "react-router-dom";
import style from "./Aside.module.css";

const Aside = () => {
  return (
    <aside class={style.sidebar}>
      <nav class={style.navigation}>
        <div class={style.logo}>
          <p>SN</p>
        </div>
        <NavLink to="/" className={classLink}>
          <img src="img/home.svg" alt="" />
        </NavLink>

        <NavLink to="/favorites" className={classLink}>
          <img src="img/favorites.svg" alt="" />
        </NavLink>

        <NavLink to="statistics" className={classLink}>
          <img src="img/statistics.svg" alt="" />
        </NavLink>

        <NavLink to="users" className={classLink}>
          <img src="img/last.svg" alt="" />
        </NavLink>

        <NavLink to="subscribe" className={classLink}>
          <img src="img/subscribe.svg" alt="" />
        </NavLink>

      </nav>
      <NavLink to="settings" className={classLink}>
        <img src="img/settings.svg" alt="" />
      </NavLink>
    </aside>
  );
};

const classLink = ({ isActive }) =>
  style.element_menu + " " + (isActive ? style.active : "");

export default Aside;
