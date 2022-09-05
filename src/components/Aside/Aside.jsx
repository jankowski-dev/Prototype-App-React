import style from "./Aside.module.css";

const Aside = () => {
  return (
    <aside class={style.sidebar}>
      <nav class={style.navigation}>
        <div class={style.logo}>
          <p>SN</p>
        </div>
        <button class={style.element_menu}>
          <img src="img/home.svg" alt="" />
        </button>

        <button class={style.element_menu}>
          <img src="img/favorites.svg" alt="" />
        </button>

        <button class={style.element_menu}>
          <img src="img/last.svg" alt="" />
        </button>

        <button class={style.element_menu}>
          <img src="img/statistics.svg" alt="" />
        </button>

        <button class={style.element_menu}>
          <img src="img/subscribe.svg" alt="" />
        </button>
      </nav>
      <button class={style.element_menu}>
        <img src="img/settings.svg" alt="" />
      </button>
    </aside>
  );
};

export default Aside;
