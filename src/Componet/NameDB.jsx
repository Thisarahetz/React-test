import React,{useEffect, useState} from 'react';
import NameList3 from './NameList/NameList3';


function MyList() {

    const[nameList3,setnameList1]=useState([{
        "id"  : "0",
        "name" : "testmy",
        "email" : "exapal@gmail.com"
    }]);

    useEffect(() =>{
        //console.log('RENder method Called');
        fetch("http://localhost:8080/User/all").then((response) => {
          //console.log(Response);
          return response.json();
        }).then(responseData =>{
          //console.log(responseData)
          setnameList1(responseData);
        });
    },[]);
        
    

        const nameListComponet1=()=>{
            return nameList3.map((aname) => {
                return(
                    <NameList3
                    id={aname.id}
                    name={aname.name}
                    email={aname.email}
                    />
                    );
            });
         
        }
        return(
            <React.Fragment>
              <ul className="list-group-item-danger">{nameListComponet1()}</ul>
            </React.Fragment>
        );

    
}
export default MyList;