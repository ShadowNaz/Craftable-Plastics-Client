//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

function App() {
	const [ingredientList, setIngredientList] = useState([]);
	
	useEffect(()=> {
		Axios.get("htpp://localhost:3001").then((response) => {
			setIngredientList(response.data);
		});
	}, []);

  return (
    <div className="App">
		<div id="content">
		 Hello SJ. Welcome to the meeting!
		</div>
    </div>
  );
}

export default App;
