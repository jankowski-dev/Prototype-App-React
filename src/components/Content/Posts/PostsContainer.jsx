
import Posts from "./Posts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        content: state.articles.main,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
