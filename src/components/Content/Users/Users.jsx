
import User from "./User/User";
import axios from "axios";
import React from "react";
import preloader from "./../../../image/load.gif";
import style from "./Users.module.css";
// import { render } from "react-dom";

// const Users = (props) => {

//     if (props.content.allUsers.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users?count=100").then(response => {
//             props.setUsers(response.data.items);
//         })
//     }

//     return (
//         <div className="wrapper">

//             {props.content.allUsers.map((el) => {
//                 return <User id={el.id} name={el.name} status={el.status} image={el.photos.small} />;
//             })};
//         </div>
//     );
// }


class Users extends React.Component {


    getUsers = () => {
        this.props.runPreloader(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=50").then(response => {
            this.props.runPreloader(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (<>

            <button onClick={this.getUsers} className={style.button}>Get users</button>
            <div className="wrapper">
                {this.props.content.preloader ? <div className={style.preloader}><img src={preloader} alt="#" /></div> : false}
                {this.props.content.allUsers.map((el) => {
                    return <User id={el.id} name={el.name} status={el.status} image={el.photos.small} />;
                })};

            </div>
        </>
        )
    }
}

export default Users;