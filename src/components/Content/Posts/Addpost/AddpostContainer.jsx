import { sendPostAC, updateTextareaAC } from "../../../../redux/reducers/postReducer";
import Addpost from "./Addpost";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    return {
        default: state.articles.default,
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