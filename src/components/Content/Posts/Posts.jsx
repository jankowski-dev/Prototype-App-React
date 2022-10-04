import Short from "./Short/Short";


const Posts = (props) => {

    return (
        <div class="wrapper">
            {props.content.map((el) => {
                return <Short id={el.id} title={el.title} category={el.category} />;
            })};
        </div>
    );
};

export default Posts;
