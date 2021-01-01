import React from 'react';
import moment from 'moment';


function NameList2(props){
    return(
        <div>
        <ol>
            <li>{props.name}</li>
            <li>   {props.city} </li>
            <li>   {props.email} </li>
            <li> Birthday:{moment(props.birthday).format('DD-MM-YY')}   </li>
            <li>   <img src={props.avatar} alt="" className=""/>         
            </li>;
        </ol> 
    </div>

    );

}

export default NameList2;