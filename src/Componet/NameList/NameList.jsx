import React,{useEffect, useState} from 'react';
import NameList2 from './NameList2';



function NameList(){
  const[loadData,setLoaddata]=useState(new Date());
  const[nameList,setnameList]=useState([{
    "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        },
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          }           
},
{   "name": {
    "title": "mr",
    "first": "braasdsadsd",
    "last": "thisara"
  },
  "location": {
    "street": "9278 new road",
    "city": "kilcoole",
    "state": "waterford",
},
"email": "brad.gibson@example.com",
"dob": {
  "date": "1993-07-20T09:44:18.674Z",
  "age": 26
},
"picture": {
  "large": "https://randomuser.me/api/portraits/men/76.jpg",
  "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
},


},
{   "name": {
  "title": "mr",
  "first": "braasdsadsd",
  "last": "thisara"
},
"location": {
  "street": "9278 new road",
  "city": "kilcoole",
  "state": "waterford",
},
"email": "brad.gibson@example.com",
"dob": {
"date": "1993-07-20T09:44:18.674Z",
"age": 26
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/76.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
},


}]);
   // const nameList=[]; //declare array

useEffect(() =>{
    //console.log('RENder method Called');
    fetch("https://randomuser.me/api").then((response) => {
      //console.log(Response);
      return response.json();
    }).then(responseData =>{
      //console.log(responseData)
      setnameList((nameList)=>[...nameList,responseData.results[0]]);
    });
},[loadData]);



  // useEffect(() =>{
  //   //console.log('RENder method Called');
  //   const ALL_USERS_REST_API_URL = 'http://localhost:8080/user/all';
  //   console.log(axios.get(ALL_USERS_REST_API_URL));
  //   //fetch("http://localhost:8080/User/find/2").then((respons) => {
  //   //  
  //  // }
  //  // )
  // }

  // )


    const nameListComponet=()=>{
        return nameList.map((aname) => {
            return(
                <NameList2
                name={`${aname.name.first} ${aname.name.last}`}
                city={aname.location.city + aname.location.city}
                email={aname.email}
                birthday={aname.dob.date}
                avatar={aname.picture.medium}
                
                />
                );
        });
     
    }
   // const addUser=() =>{
    //  console.log('button clicked');
   // };

    const addUserHandlare = () =>{
      // const newUser =  {
      //   id:new Date(),
      //     "name": {
      //     "title": "mr",
      //     "first": "braasdsadsd",
      //     "last": "thisara"
      //   },
      //   "location": {
      //     "street": "9278 new road",
      //     "city": "kilcoole",
      //     "state": "waterford",
      // },
      // "email": "brad.gibson@example.com",
      // "dob": {
      //   "date": "1993-07-20T09:44:18.674Z",
      //   "age": 26
      // },
      // "picture": {
      //   "large": "https://randomuser.me/api/portraits/men/76.jpg",
      //   "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
      //   "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      // },
      setLoaddata(new Date());
      
                
    };
   // setnameList((nameList) => nameList.concat(newUser));
    //setnameList(nameList.concat(newUser));
  
    return(
      <React.Fragment>
        <div className='btn'>
          <button className="btn btn-group-lg btn-outline-primary bg-2" onClick={addUserHandlare}>add Name</button>
        </div>
        <ul className="list-group-item-danger">{nameListComponet()}</ul>
      </React.Fragment>
  );

    
}

export default NameList;