

const Header = () => {
    return (
<header>
        <div class="logo_mobile"> <div class="logo"><p>SN</p></div></div>

        <div class="container_header">
          <button class="profile" onclick="counter()">
            <img src="img/profile.svg" />
            <p>Michael Mitnick</p>
          </button>
  
          <div class="menu-btn">
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