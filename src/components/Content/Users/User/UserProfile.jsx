import preloader from "./../../../../image/load.gif";
import style from "./../../Users/Users.module.css";


const UserProfile = (props) => {
    return (
        <>
        {props.preloader ? <div className={style.preloader}><img src={preloader} alt="#" /></div> : false}
        This is user's profile <br /> 
        {props.userProfile.aboutMe}<br /> 
        {props.userProfile.contacts.facebook}<br /> 
        {props.userProfile.contacts.vk}<br /> 
        {props.userProfile.contacts.github}<br /> 
        </>
    )
}

export default UserProfile;