import './App.css';
import Navbar from './Navbar';
import Home from './Componet/Home/Home';
import Namelist from './Componet/NameList/NameList';
import NameDB from './Componet/NameList/NameDB';
import Nevbar from './Componet/Hader/Nevbar';
import About from './Componet/About/About';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {

  const title='Welcome to the new blog';
  const like=50;
  //const person={name:'thisara', age:30};
  const link="google.com";
  return (
    <div className="container">
      <BrowserRouter>
      <Nevbar></Nevbar>
      <Switch>
              <Route path="/home"><Home></Home></Route>
              <Route path="/about"><About></About></Route>
              <Route path="/namelist"><Namelist></Namelist></Route>
              <Route path="/"><About></About></Route>
              
      </Switch>
      
      
      
      

      </BrowserRouter>
      
      {/* <Namelist></Namelist>
        <Navbar></Navbar>
        <NameDB></NameDB>
      
      <Home></Home>
      <div className="">
          <h1>
            {title}
          </h1>
          <p>
            like {like} thisara 
          </p>
          <p>
            { "name thisara age 10"}
          </p>
          <p>
            {[1,2,3,4,3,2]}
            {Math.random()*10}
          </p>
          <p>
            <a href={link}>
                google
            </a>
          </p>
      </div>
      */}

    
    </div>
  );
}

export default App;
