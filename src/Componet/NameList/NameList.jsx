import React,{useEffect, useState} from 'react';
import NameList2 from './NameList2';


function NameList(){

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
    fetch("https://randomuser.me/api").then((Response) => {
      //console.log(Response);
      return Response.json();
    }).then(ResponseData =>{
      //console.log(ResponseData)
      setnameList(nameList >= [...nameList, ResponseData.results[0]]);
    });
},[]);


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
     
    };
   // const addUser=() =>{
    //  console.log('button clicked');
   // };

    const addUserHandlare = () =>{
      const newUser =  {
        id:new Date(),
          "name": {
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
      
      
                
    };
    setnameList((nameList) => nameList.concat(newUser));
    //setnameList(nameList.concat(newUser));
  };
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