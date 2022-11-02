
import style from "./Articles.module.css";


const ArticlesShort = (props) => {
    return (
        <a class={style.content_container} href="/">
      <div class={style.prop_short}>
        <div class={style.category_short}>{props.category}</div>
        <div class={style.id_short}>#{props.creator}</div>
      </div>
      <div class={style.title_short}>{props.title}</div>
      <div class={style.date_short}>
        <div class={style.date}>Today, 01:41 PM</div>
        <div class={style.views}>2375 views</div>
      </div>
    </a>
    );
}

export default ArticlesShort;