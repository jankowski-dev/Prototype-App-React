
import User from "./User/User";
import axios from "axios";

const Users = (props) => {

    // if (props.content.allUsers.length === 0) {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         props.setUsers(response.data.items);
    //     })
    // }

    // if (props.content.allUsers.length === 0) {
    //     axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=14&api_key=lbnx1UciwwsuBWbZPdhUchnd3fiSn7J38nC1Ci6u")
    //         .then(response => {
    //             props.setUsers(response.data.photos);
    //         })
    // }


    if (props.content.allUsers.length === 0) {
        // debugger;
        axios.get("https://api.nasa.gov/EPIC/api/natural?api_key=lbnx1UciwwsuBWbZPdhUchnd3fiSn7J38nC1Ci6u")
            .then(response => {
                let imageArray = [];
                let objectArray = [];
                imageArray = response.data.map(el => {
                    return el.image + ".png"
                });
                for (let i = 0; i <= imageArray.length; i++) {
                    objectArray = imageArray.map(el => {
                        return {
                            image: `https://api.nasa.gov/EPIC/archive/natural/2022/10/14/png/${el}?api_key=lbnx1UciwwsuBWbZPdhUchnd3fiSn7J38nC1Ci6u`,
                            id: 1,
                            sol: 22,
                            status: "ok",
                            name: "earth",
                        }
                    })
                }
                console.log(objectArray);
                props.setUsers(objectArray);
            })
    }


    return (
        <div className="wrapper">

            {props.content.allUsers.map((el) => {
                return <User id={el.id} name={el.sol} status={el.status} image={el.image} />;
            })};
        </div>
    );
}

export default Users;