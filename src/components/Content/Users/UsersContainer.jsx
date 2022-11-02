
import UsersAPI from "./UsersAPI";
import { connect } from "react-redux";
import { setUsers, preloader, setCurrentPage, setTotalCounts } from "../../../redux/reducers/usersReduser";



const mapStateToProps = (state) => {
    return {
        content: state.users,
    }
}


const UsersContainer = connect(mapStateToProps, {
    setUsers,
    preloader,
    setCurrentPage,
    setTotalCounts
})(UsersAPI);

export default UsersContainer;