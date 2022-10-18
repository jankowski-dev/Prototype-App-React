
import User from "./User/User";
import axios from "axios";

const Users = (props) => {
    if (props.content.allUsers.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    return (
        <div className="wrapper">

            {props.content.allUsers.map((el) => {
                return <User id={el.id} name={el.name} status={el.status} />;
            })};
        </div>
    );
}

export default Users;