import React from "react";

const Addpost = (props) => {

    let refId = React.createRef();
    let refCategory = React.createRef();
    let refTitle = React.createRef();

    const updateOnChange = () => {
        let text = refTitle.current.value;
        props.updateOnChange(text);
    }

    const sendPost = () => {
        let text = {
            title: refTitle.current.value,
            category: refCategory.current.value,
            id: refId.current.value
        }
        props.sendPost(text);
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