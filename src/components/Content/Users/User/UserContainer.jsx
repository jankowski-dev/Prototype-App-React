
import UserAPI from "./UserAPI";
import { connect } from "react-redux";
import { setUserProfile, preloader} from "../../../../redux/reducers/usersReduser";



const mapStateToProps = (state) => {
    return {
        content: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (data) => {
            dispatch(setUserProfile(data));
        },
        preloader: (data) => {
            dispatch(preloader(data));
        },
    }
}


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserAPI);

export default UserContainer;