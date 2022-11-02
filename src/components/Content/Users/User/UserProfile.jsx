import preloader from "./../../../../image/load.gif";
import style from "./../../Posts/Short/Short.module.css";
import { NavLink } from "react-router-dom";


const UserProfile = (props) => {
    return (
        // {props.preloader ? <div className={style.preloader}><img src={preloader} alt="#" /></div> : false}
        
        <div className={style.content_container} >
      <div className={style.prop_short}>
        <div className={style.category_short}>{props.userProfile.aboutMe}</div>
        <div className={style.id_short}>#{props.id}</div>
      </div>
     <NavLink to={`${"/profile/" + props.id}`}><img src={props.image} className={style.image} alt="#" /></NavLink>
      <div className={style.title_short}>{props.status}</div>
      </div>
    )
}

export default UserProfile;