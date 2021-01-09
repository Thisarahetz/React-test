import React from 'react';



function NameList3(props){
    return(
        <div>
            <ol>
                <li>{props.id}</li>
                <li>{props.name}</li>
                <li>{props.email}</li>

            </ol>
        </div>
    )
}

export default NameList3;