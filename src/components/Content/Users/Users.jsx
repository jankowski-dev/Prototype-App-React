
import User from "./User/User";
import React from "react";
import preloader from "./../../../image/load.gif";
import style from "./Users.module.css";


const Users = (props) => {

    let totalCountPage = Math.ceil(props.totalCounts / props.pageSize);
    totalCountPage = 10;
    let pageArray = [];
    for (let i = 1; i <= totalCountPage; i++) {
        pageArray.push(i);
    }

    return (<>

        <div class={style.pagWrapper}> {pageArray.map(el => {
            return <span className={`${props.currentPage === el && style.activeLink} ${style.pagination}`} onClick={() => { props.updateAJAXRequest(el) }}>{el} </span>
        })}
        </div>

        <div className="wrapper">
            {props.preloader ? <div className={style.preloader}><img src={preloader} alt="#" /></div> : false}
            {props.allUsers.map((el) => {
                return <User id={el.id} name={el.name} status={el.status} image={el.photos.large} />;
            })};
        </div>
    </>
    )
}

export default Users;






// const Users = (props) => {

//     if (props.content.allUsers.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users?count=100").then(response => {
//             props.setUsers(response.data.items);
//         })
//     }

//     return (
//         <div className="wrapper">

//             {props.content.allUsers.map((el) => {
//                 return <User id={el.id} name={el.name} status={el.status} image={el.photos.small} />;
//             })};
//         </div>
//     );
// }


// class Users extends React.Component {


//     // getUsers = () => {
//     //     this.props.runPreloader(true);
//     //     axios.get("https://social-network.samuraijs.com/api/1.0/users?count=100").then(response => {
//     //         this.props.runPreloader(false);
//     //         this.props.setUsers(response.data.items);
//     //     });
//     // }

//     componentDidMount() {

//         this.props.runPreloader(true);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.content.pageSize}&page=${this.props.content.currentPage}`).then(response => {
//             this.props.setUsers(response.data.items);
//             this.props.setTotalCounts(response.data.totalCount);
//             this.props.runPreloader(false);
//         });
//     }

//     updateAJAXRequest(pageNumber) {
//         this.props.setCurrentPage(pageNumber)
//         this.props.runPreloader(true);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.content.pageSize}&page=${pageNumber}`).then(response => {
//             this.props.setUsers(response.data.items);
//             this.props.setTotalCounts(response.data.totalCount);
//             this.props.runPreloader(false);
//         });
//     }

//     render() {
//         let totalCountPage = Math.ceil(this.props.content.totalCounts / this.props.content.pageSize);
//         let pageArray = [];
//         for (let i = 1; i <= totalCountPage; i++) {
//             pageArray.push(i);
//         }

//         return (<>

//             <div> {pageArray.map(el => {
//                 return <span className={this.props.content.currentPage === el && style.activeLink} onClick={() => { this.updateAJAXRequest(el) }}>{el} </span>
//             })}
//             </div>

//             <div className="wrapper">
//                 {this.props.content.preloader ? <div className={style.preloader}><img src={preloader} alt="#" /></div> : false}
//                 {this.props.content.allUsers.map((el) => {
//                     debugger;
//                     if (el.photos.small) {
//                         return <User id={el.id} name={el.name} status={el.status} image={el.photos.small} />;
//                     }
//                 })};

//             </div>
//             {/* <button onClick={this.getUsers} className={style.button}>Get users</button> */}
//         </>
//         )
//     }
// }

// export default Users;