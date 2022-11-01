
import axios from "axios";
import React from "react";
import UserProfile from "./UserProfile";



class UserAPI extends React.Component {

    componentDidMount() {

        this.props.preloader(true);
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
            this.props.preloader(false);
        });
    }

    render() {
        
        return (
            
            <UserProfile {...this.props.content} />
        )
    }


} 

export default UserAPI;