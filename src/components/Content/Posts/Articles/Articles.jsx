import ArticlesShort from "./ArticlesShort";

const Articles = (props) => {
    return (
            (<div class="wrapper">
        {props.articlesList.map((el) => {
            return <ArticlesShort {...el} />;
        })};
    </div>)
    )
}

export default Articles;