import style from "./Shortnews.module.css";

const Shortnews = () => {
  return (
    <a class={style.content_container} href="#">
      <div class={style.prop_short}>
        <div class={style.category_short}>Javascript</div>
        <div class={style.id_short}>#3347</div>
      </div>
      <div class={style.title_short}>Final script revision and reviews</div>
      <div class={style.date_short}>
        <div class={style.date}>Today, 01:41 PM</div>
        <div class={style.views}>2375 views</div>
      </div>
    </a>
  );
};

export default Shortnews;
