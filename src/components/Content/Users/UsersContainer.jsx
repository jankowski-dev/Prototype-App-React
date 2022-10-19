
import Users from "./Users";
import { connect } from "react-redux";
import { setUsersAC, preloaderAC, setCurrentPageAC, setTotalCountsAC } from "../../../redux/reducers/usersReduser";

const mapStateToProps = (state) => {
    return {
        content: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        runPreloader: (data) => {
            dispatch(preloaderAC(data));
        },
        setCurrentPage: (data) => {
            dispatch(setCurrentPageAC(data));
        },
        setTotalCounts: (data) => {
            dispatch(setTotalCountsAC(data));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;