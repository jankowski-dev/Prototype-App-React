import { updateTextareaActionCreater } from "../../../../redux/actionCreaters";
import { sendPostActionCreater } from "../../../../redux/actionCreaters";
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
            dispatch(updateTextareaActionCreater(text));
        },
        sendPost: (data) => {
            dispatch(sendPostActionCreater(data));
            dispatch(updateTextareaActionCreater(''));
        }
    }
}

const AddpostContainer = connect(mapStateToProps, mapDispatchToProps)(Addpost);


export default AddpostContainer;