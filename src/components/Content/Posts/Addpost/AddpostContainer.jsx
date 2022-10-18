import { sendPostAC } from "../../../../redux/reducers/postReducer";
import { updateTextareaAC } from "../../../../redux/reducers/formReducer";
import Addpost from "./Addpost";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    return {
        default: state.default.defaultTitle,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateOnChange: (text) => {
            dispatch(updateTextareaAC(text));
        },
        sendPost: (data) => {
            dispatch(sendPostAC(data));
            dispatch(updateTextareaAC(''));
        }
    }
}

const AddpostContainer = connect(mapStateToProps, mapDispatchToProps)(Addpost);


export default AddpostContainer;