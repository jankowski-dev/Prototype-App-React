
import axios from "axios";
import React from "react";
import Users from "./Users";

class UsersAPI extends React.Component {

    componentDidMount() {

       
          
          axios.get(`https://newsdata.io/api/1/news?apikey=pub_1296967894235cdfe7b80e28d985b11833d7b&q=tech&country=us&category=technology `).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });



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