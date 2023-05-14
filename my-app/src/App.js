
import React,{ useEffect, useState } from "react";

function User(){
  
  const[user,setuser]=useState([])

  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setuser(data))
 
  })
  

  return(
<div>
  {
    user.map(x => <Person nam={x.name} jsx={x.username} ></Person>)
  }
</div>
  )
}

function Person(props){
  let t={
    height:'150px',
    width:'30%',
    margin:'0 auto',
    marginBottom:'10px',
    border:'2px solid  red',
    backgroundColor:'green',
    textAlign:'center',
    fontSize:'10px',
  }
  return(
    <div style={t}>
      <h1>name :{props.nam}</h1>
      <h2>username:{props.jsx}</h2>
    </div>
  )
}

function App(){
 
return (
    <div className="App">
      <header className="App-header">
        <User></User>

       </header>
    </div>
  );
}

export default App;
