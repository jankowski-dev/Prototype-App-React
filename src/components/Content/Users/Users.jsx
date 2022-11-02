
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