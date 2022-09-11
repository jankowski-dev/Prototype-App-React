import React from "react";

const Addpost = (props) => {


let refId = React.createRef();
let refCategory = React.createRef();
let refTitle = React.createRef();

let run = () => {
    let data = {
        id: refId.current.value,
        category: refCategory.current.value,
        title: refTitle.current.value
    }

    props.sendPost(data);
    
}
    return (
        <div class="wrapper">
          <div>Id</div>
          <input ref={refId} />
          <div>Category</div>
          <input ref={refCategory} />
          <div>Title</div>
          <textarea ref={refTitle} rows="5" />
          <button onClick={ run }>Отправить</button>
        </div>
    );
}


export default Addpost;