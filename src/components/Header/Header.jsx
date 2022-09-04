
import style from './Header.module.css';

const Header = () => {
    return (
<header>
        <div className={style.logo_mobile}> <div className={style.logo}><p>SN</p></div></div>

        <div className={style.container_header}>
          <button className={style.profile} onclick="counter()">
            <img src="img/profile.svg" />
            <p>Michael Mitnick</p>
          </button>
  
          <div className={style.menu_btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    );
}


export default Header;