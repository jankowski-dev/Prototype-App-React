
import User from "./User/User";

const Users = (props) => {
    debugger;
    return (
        <div class="wrapper">
            {props.content.users.map((el) => {
                return <User id={el.id} name={el.name} status={el.status} />;
            })};
        </div>
    );
}

export default Users;