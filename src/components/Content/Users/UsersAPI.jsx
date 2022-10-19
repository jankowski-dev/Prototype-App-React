
import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersAPI extends React.Component {

    componentDidMount() {

        this.props.preloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.content.pageSize}&page=${this.props.content.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCounts(response.data.totalCount);
            this.props.preloader(false);
        });
    }

    updateAJAXRequest = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.preloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.content.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCounts(response.data.totalCount);
            this.props.preloader(false);
        });
    }

    render() {


        return <Users
            totalCounts={this.props.content.totalCounts}
            pageSize={this.props.content.pageSize}
            currentPage={this.props.content.currentPage}
            updateAJAXRequest={this.updateAJAXRequest}
            preloader={this.props.content.preloader}
            allUsers={this.props.content.allUsers} />;
    }
}

export default UsersAPI;