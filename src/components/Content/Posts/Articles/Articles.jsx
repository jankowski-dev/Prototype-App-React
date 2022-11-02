import ArticlesShort from "./ArticlesShort";

const Articles = (props) => {
    return (
            (<div class="wrapper">
        {props.articlesList.map((el) => {
            return <ArticlesShort title={el.title} creator={el.creator} link={el.link} />;
        })};
    </div>)
    )
}

export default Articles;