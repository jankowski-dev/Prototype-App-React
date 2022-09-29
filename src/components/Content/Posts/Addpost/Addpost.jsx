import React from "react";
import { updateTextareaActionCreater } from "../../../../redux/actionCreaters";
import { sendPostActionCreater } from "../../../../redux/actionCreaters";

const Addpost = (props) => {


    let refId = React.createRef();
    let refCategory = React.createRef();
    let refTitle = React.createRef();

    let sendPost = () => {
        let data = {
            title: refTitle.current.value,
            category: refCategory.current.value,
            id: refId.current.value,
        }
        props.dispatch(sendPostActionCreater(data));
        props.dispatch(updateTextareaActionCreater(''));
    }

    let updateOnChange = () => {
        let text = refTitle.current.value;
        props.dispatch(updateTextareaActionCreater(text));
    }

    return (
        <div class="wrapper">
            <div>Id</div>
            <input ref={refId} />
            <div>Category</div>
            <input ref={refCategory} />
            <div>Title</div>
            <textarea ref={refTitle} rows="5" value={props.default} onChange={updateOnChange} />
            <button onClick={sendPost}>Отправить</button>
        </div>
    );
}


export default Addpost;