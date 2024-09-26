import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Person = (props)=> {
  return(
    <>
      <h1 style={{ color: 'blue'}}>First Name:{props.name}</h1>
      <h2 style={{color:'red'}}>Last Name: {props.lastName}</h2>
      <h3 style={{color:'pink'}}>Age:{props.age}</h3>
    </>
  )
}

const Props = () => {
  const navigate = useNavigate(); 

  const goToUseStatePage = () => {
    navigate('/counter'); 
  };

  return (
    <div className="App"> 
      <Person name="vetri" lastName="Selvam" age={22} />
      <Person name="Pranav" lastName="H" age={22} />
      <Person name="Naveenkumar" lastName="A" age={22} />
      <Person name="Rajaramana" lastName="RB" age={22} />
      <button onClick={goToUseStatePage}>Go to counter Page</button>
    </div>
  );
}
export default Props;