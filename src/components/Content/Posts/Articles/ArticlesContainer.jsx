import Articles from "./Articles";
import { connect } from "react-redux";
import axios from "axios";
import React from "react";
import { setArticlesItem, setArticlesList } from "../../../../redux/reducers/articlesReducer";


class ArticlesAPI extends React.Component {

    componentDidMount() {
        let requestAJAX = "https://newsdata.io/api/1/news?apikey=pub_1296967894235cdfe7b80e28d985b11833d7b&q=tech&country=us&category=technology"
        axios.get(requestAJAX).then(response => {
            console.log(response.data.results);
            debugger;
            this.props.setList(response.data.results);
        });
    }

    render() {
        return <Articles {...this.props} />
        
    }


}




const mapStateToProps = (state) => {
    return {
        articlesList: state.articles.articlesList,
        articlesItem: state.articles.articlesItem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setList: (payload) => {
            dispatch(setArticlesList(payload));
        },
        setItem: (payload) => {
            dispatch(setArticlesItem(payload));
        }
    }
}


const ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlesAPI);

export default ArticlesContainer;