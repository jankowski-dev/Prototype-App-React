

import style from "./Articles.module.css";


const ArticlesShort = (props) => {
  return (
    <a href={props.link} target="_blank" class={style.content_container} >
      <div class={style.prop_short}>
        <div class={style.category_short}>{props.id}</div>
        <div class={style.id_short}>#{props.creator}</div>
        <img src={props.image_url} alt="" />
      </div>
      <div class={style.title_short}>{props.name}</div>
      <div class={style.date_short}>
        <div class={style.date}>{props.pubDate}</div>
        <div class={style.views}></div>
      </div>
    </a>
  );
}

export default ArticlesShort;