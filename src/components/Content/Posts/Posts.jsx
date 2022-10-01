import Short from "./Short/Short";


const Posts = (props) => {
    let news = props.content.map((el) => {
        return <Short id={el.id} title={el.title} category={el.category} />;
    });
    return (
        <div class="wrapper">
            {news}
        </div>
    );
};

export default Posts;
