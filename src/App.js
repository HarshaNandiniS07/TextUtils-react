
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Themebtn from './components/Themebtn';
// In app.css u may add the styles , for whatever u are writing here 
// import {
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

const toggleMode=()=>{
  if(Mode==="dark"){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    setMode("light");
    setBText("enable light mode !");
    showAlert("Dark mode has been enabled !","success");

    // changes title dynamically 
    document.title="TextUtils - Dark Mode";
  }
  else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    setMode("dark");
    setBText("enable dark mode !");
    showAlert("Light mode has been enabled !","success");
    document.title="TextUtils - Light Mode";

  }
}
const showAlert=(message,type)=>{
 setAlert({
  msg : message,
 type : type 
 })
 setTimeout(()=>{
  setAlert(null);
 },2000)
 // automatically closes the message after 2 sec
}

  const [btext,setBText] = useState("enable dark mode!");
  const [Mode,setMode] = useState("dark");
  // whether dark mode is enabled or not
  const [alertT, setAlert] = useState(null);
  // we make alert as an object here 
  //Using an alert as an object allows you to manage various properties related to the alert in a more structured and flexible way. This approach can be beneficial when you need to handle more complex alert scenarios, such as managing different types of alerts, customizing their appearances, or incorporating additional functionalities. Some advantages of using an object for managing alerts
  // alert may be of diff types : primary,success,warning,danger

  return (<>

<Navbar aboutText="about textUtils"/>
{/* switch button */}
<div className="form-check form-switch">
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{btext}</label>
</div>
<Themebtn></Themebtn>

{/*the above args pass    ed are props*/}

<Alert alert={alertT}></Alert>
<div className="container">
<TextForm showAlert={showAlert} heading="Enter the text to analyse " textdis="EXAMPLE TEXT AREA"/>


{/* <About>
</About>  */}
{/* <Routes> */}
{/* <Routes>
<Route path="/about" element={ <About/>}/>
<Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse " textdis="EXAMPLE TEXT AREA"/>}/>
</Routes> */}

  {/* </Route> */}
{/* </Routes> */}
  



{/* uncomment the above to get a textutil that performs various functions with a text */}


</div> </>);

 
 
}
{/* if u use the name 'container' for the div class, the content will be brought to the middle, the textbox now will be displayed at the middle */}

export default App;



//  the above code was pasted from bootstrap navbar components (a template)










// sample 

// function App() {
//   return (
//      <>
//      <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//      </nav>
//          <h1>hello {name} </h1>  /*the content inside {}, will be taken as js, will be resolved -this prints hello harsha */
//      <div className="bar">
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quaerat voluptatem tempora.
//      </div>
//      </>
//   );
// }

// export default App;

//this App.js is the site that we view in the localhost