import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Namelist from './Componet/NameList/NameList';

function App() {

  const title='Welcome to the new blog';
  const like=50;
  //const person={name:'thisara', age:30};
  const link="google.com";
  return (
    <div className="">
      <Namelist></Namelist>
      <Navbar></Navbar>
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
    </div>
  );
}

export default App;
