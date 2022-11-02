
import UsersAPI from "./UsersAPI";
import { connect } from "react-redux";
import { setUsers, preloader, setCurrentPage, setTotalCounts } from "../../../redux/reducers/usersReduser";



const mapStateToProps = (state) => {
    return {
        content: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        preloader: (data) => {
            dispatch(preloader(data));
        },
        setCurrentPage: (data) => {
            dispatch(setCurrentPage(data));
        },
        setTotalCounts: (data) => {
            dispatch(setTotalCounts(data));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;