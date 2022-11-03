import ArticlesShort from "./ArticlesShort";
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import { setArticlesItem, setArticlesList, setCategory } from "../../../redux/reducers/articlesReducer";
import style from "./Articles.module.css"


class ArticlesAPI extends React.Component {


    componentDidMount() {

        axios.get(`https://newsdata.io/api/1/news?apikey=pub_1296967894235cdfe7b80e28d985b11833d7b&country=us&category=${this.props.articlesCategory.activeCategory}`).then(response => {
            console.log(response.data.results);
            this.props.setList(response.data.results);
        });
    }

    render() {
        return (
            <>
                <div className={style.filter}>
                    <div className={style.filterItem} onClick={() => { this.props.setActiveCategory(this.props.articlesCategory.general) }}>{this.props.articlesCategory.general}</div>
                    <div className={style.filterItem} onClick={() => { this.props.setActiveCategory(this.props.articlesCategory.technology) }}>{this.props.articlesCategory.technology}</div>
                    <div className={style.filterItem} onClick={() => { this.props.setActiveCategory(this.props.articlesCategory.science) }}>{this.props.articlesCategory.science}</div>
                    <div className={style.filterItem} onClick={() => { this.props.setActiveCategory(this.props.articlesCategory.business) }}>{this.props.articlesCategory.business}</div>
                </div>

                <div className="wrapper">
                    {console.log(this.props.articlesCategory.activeCategory)}
                    {this.props.articlesList.map((el) => {
                        return <ArticlesShort {...el} />;
                    })};
                </div>
            </>)
    }
}

const mapStateToProps = (state) => {
    return {
        articlesList: state.articles.articlesList,
        articlesItem: state.articles.articlesItem,
        articlesCategory: state.articles.articlesCategory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setList: (payload) => {
            dispatch(setArticlesList(payload));
        },
        setItem: (payload) => {
            dispatch(setArticlesItem(payload));
        },
        setActiveCategory: (payLoad) => {
            dispatch(setCategory(payLoad));
        },
    }
}

const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlesAPI);

export default ArticlesContainer;