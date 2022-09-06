
import style from './Title.module.css';

const Title = (props) => {
    return (
        <div class={style.prop_container}>
        <div class={style.title}>Main news all day</div>
        <p>Screencast your information</p>
      </div>
    );
}


export default Title;