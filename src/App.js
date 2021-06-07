//import logo from './logo.svg';
//import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
/*	const [ingredientList, setIngredientList] = useState([]);
	
	useEffect(()=> {
		Axios.get("htpp://localhost:3001").then((response) => {
			setIngredientList(response.data);
		});
	}, []);*/

	return (
		<Router>
	<div>
			<img src="/1070197-1200w.png" alt=""/>
		<div style={{position: 'absolute', top: '150px', left: '50px', color: 'black'}}><h1>Craftable Plastics</h1>
			<p><h2>Recycling Plastic into usable projects.</h2></p>
		</div>	
	</div>
	<div>
		<div class="container">
			<hr/>
			<br/>
			<div class="row card-group gutter-bottom-4">
			<div class="col-md-4">
			<Link to="/checklist">
				<div class="card"> <img class="card-img-top" src="/checklist-image.png" alt="Card image cap"/>
				<div class="card-body" style={{backgroundColor: 'black', color: 'white'}}>
					<h2 class="card-title"><b>Ingredient Checklist</b></h2>
					<p class="card-text">Your check list of common plastics that you can use to do your part in helping our planet.</p>
					<br/>
					<br/>
				</div>
				</div>
			</Link>
			</div>
			<div class="col-md-4">
			<Link to="/achievements">
				<div class="card"> <img class="card-img-top" src="/achievements-image.png" alt="Card image cap"/>
				<div class="card-body" style={{backgroundColor: 'black', color: 'white'}}>
					<h2 class="card-title"><b>Achievements</b></h2>
					<p class="card-text">Check you achievement progress to see how much you've completed and have to complete.</p>
					<br/>
					<br/>
				</div>
				</div>
			</Link>
			</div>
			<div class="col-md-4">
			<Link to="/quests">
				<div class="card"> <img class="card-img-top" src="/quest-image.png" alt="Card image cap"/>
				<div class="card-body" style={{backgroundColor: 'black', color: 'white'}}>
					<h2 class="card-title"><b>Quests</b></h2>
					<p class="card-text">See what daily, weekly or monthly quests are available for you to do.</p>
					<br/>
					<br/>
				</div>
				</div>
			</Link>
			</div>
			</div>
		</div>

				<hr />

				{/*
					A <Switch> looks through all its children <Route>
					elements and renders the first one whose path
					matches the current URL. Use a <Switch> any time
					you have multiple routes, but you want only one
					of them to render at a time
				*/}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/checklist">
						<Checklist />
					</Route>
					<Route path="/achievements">
						<Achievements />
					</Route>
					<Route path="/quests">
						<Quests />
					</Route>
					<Route path="/pictures">
						<Pictures />
					</Route>
					<Route path="/results">
						<Results />
					</Route>
					<Route path="/recipes/1">
						<RecipeOne />
					</Route>
					<Route path="/recipes/2">
						<RecipeTwo />
					</Route>
					<Route path="/recipes/3">
						<RecipeThree />
					</Route>
					<Route path="/plans/1">
						<PlanOne />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

// You can think of these components as "pages"
// in your app.

function Home() {
	return (
		<div>
			&nbsp;
		</div>
	);
}

function Checklist() {
	return (
<div class="container">
	<br/>
	<br/>
	<div><h2>Ingredients List - Select from below</h2></div>
	<br/>
	<br/>
	<div class="row">
		<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
				<div><img src="/tiles/buttons-tile.png" /></div>
				<div style={{height:"30px"}}>
					<div>
						<label class="label">
							<input	class="label__checkbox" type="checkbox" />
							<span class="label__text">
								<span class="label__check">
									<i class="fa fa-check icon"></i>
								</span>
							</span>
						</label> Buttons
					</div> 
				</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/cardboard-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" checked/>
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Cardboard
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/paper-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Construction Paper
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/crayon-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Crayons
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/paint-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" checked/>
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Paint
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/bag-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Bag
				</div> 
			</div>
			</div>
			<br/>
		</div>
		<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/bottle-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" checked/>
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Bottle
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/can-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Can
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/cup-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Cup
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/fork-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Fork
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/jug-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Jug
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/knife-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Knife
				</div> 
			</div>
			</div>
			<br/>
		</div>
		<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/spoon-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Plastic Spoon
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/scissors-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Scissors
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/spraypaint-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Spray Paint
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/stickers-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Stickers
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/string-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" />
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> String
				</div> 
			</div>
			</div>
			<br/>
			<div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}> 
			<div><img src="/tiles/twine-tile.png" /></div>
			<div style={{height:"30px"}}>
				<div>
					<label class="label">
					<input	class="label__checkbox" type="checkbox" checked/>
					<span class="label__text">
						<span class="label__check">
						<i class="fa fa-check icon"></i>
						</span>
					</span>
					</label> Twine
				</div> 
			</div>
			</div>
			<br/>
		</div>
		<div class="col-md-3" style={{backgroundColor: "black", color: "white"}}>
			<br/>		
			<center><h2><strong>Selected Ingredients&nbsp;</strong></h2></center>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="/icons/CARDBOARD.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>&nbsp;Cardboard</div>
			</div>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="/icons/paintbrush.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>&nbsp;Paint</div>
			</div>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="/icons/milkgallon.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>&nbsp;Plastic Bottle</div>
			</div>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="/icons/balloftwine.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>&nbsp;Twine</div>
			</div>
			<br/>
			<br/>
			<div style={{position:"relative", bottom: "20px", left:"0px", width:"100%"}}>
				<center><Link to="/results"><input type="button" name="button" id="button" value="Find Recipes" class="btn btn-primary"/></Link></center><br/>
			</div>
			
		</div>
	</div>
	<br/>
	<br/>
	<br/>
	<hr/>
	<div class="row"> </div>
</div>

	);
}

function Achievements() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h2>Quests - See what you have completed</h2>
  </div>
  <br/>
  <br/>
  <div class="row card-group gutter-bottom-4">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><b>Dedicated</b></h2>
          <p class="card-text">Complete 1 Project Every Week for 4 Weeks.</p>
			<div class="progress" style={{height: "30px"}}>
				<div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40"
				aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
				3/4
			  </div>
			</div>
          <br/>
		  <br/>
          <br/>
        </div>
      </div>
		<br/>
		<br/>
       <div class="card">
        <div class="card-body">
          <h2 class="card-title"><b>Inventor</b></h2>
          <p class="card-text">Submit a Project/Idea to the Website.</p>
			<div class="progress" style={{height: "30px"}}>
				<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40"
				aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
				1/1
				</div>
			</div>
		  <br/>Complete! Share it with your friends.<br/>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden="true" class="svg-icon ">
				<path d="M36 18a18 18 0 10-20.81 17.78V23.2h-4.57V18h4.57v-3.97c0-4.5 2.68-7 6.8-7 1.97 0 4.03.35 4.03.35v4.43h-2.28c-2.23 0-2.93 1.4-2.93 2.81V18h5l-.8 5.2h-4.2v12.58A18 18 0 0036 18z" fill="#1877F2"></path>
			</svg>&nbsp;&nbsp;&nbsp;
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden="true" class="svg-icon ">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M33.75 7.93c-1.16.53-2.4.88-3.71 1.04a6.61 6.61 0 002.84-3.66 12.73 12.73 0 01-4.1 1.6 6.37 6.37 0 00-4.72-2.09 6.55 6.55 0 00-6.46 6.63c0 .52.05 1.02.16 1.5A18.2 18.2 0 014.44 6.04a6.75 6.75 0 002 8.85 6.35 6.35 0 01-2.93-.83v.09c0 3.2 2.23 5.89 5.2 6.5a6.16 6.16 0 01-2.93.1 6.49 6.49 0 006.04 4.6 12.76 12.76 0 01-9.57 2.76 18 18 0 009.9 2.97c11.9 0 18.4-10.1 18.4-18.85l-.02-.86c1.26-.94 2.36-2.1 3.22-3.43z" fill="#1DA1F2"></path>
			</svg>&nbsp;&nbsp;&nbsp;
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden="true" class="svg-icon ">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 0c-4.89 0-5.5.02-7.42.1C8.66.2 7.35.5 6.2.96a8.82 8.82 0 00-3.19 2.07c-1 1-1.62 2-2.08 3.19a13.21 13.21 0 00-.83 4.37C.02 12.5 0 13.1 0 18c0 4.89.02 5.5.1 7.42.1 1.92.4 3.23.84 4.37a8.82 8.82 0 002.08 3.19c1 1 2 1.62 3.19 2.08 1.14.44 2.45.74 4.37.83 1.92.09 2.53.11 7.42.11 4.89 0 5.5-.02 7.42-.1 1.92-.1 3.23-.4 4.37-.84a8.82 8.82 0 003.19-2.08c1-1 1.62-2 2.08-3.19.44-1.14.74-2.45.83-4.37.09-1.92.11-2.53.11-7.42 0-4.89-.02-5.5-.1-7.42-.1-1.92-.4-3.23-.84-4.37a8.82 8.82 0 00-2.08-3.19c-1-1-2-1.62-3.19-2.07A13.21 13.21 0 0025.42.1C23.5.02 22.9 0 18 0zm0 3.24c4.8 0 5.38.02 7.27.1 1.76.09 2.71.38 3.35.63.84.32 1.44.71 2.07 1.34a5.58 5.58 0 011.34 2.07c.25.64.54 1.6.62 3.35.09 1.9.1 2.46.1 7.27 0 4.8-.01 5.38-.1 7.27a9.96 9.96 0 01-.62 3.35 5.58 5.58 0 01-1.34 2.07 5.58 5.58 0 01-2.07 1.34c-.64.25-1.6.54-3.35.62-1.9.09-2.46.1-7.27.1-4.8 0-5.38-.01-7.27-.1a9.96 9.96 0 01-3.35-.62 5.58 5.58 0 01-2.07-1.34 5.58 5.58 0 01-1.34-2.07 9.96 9.96 0 01-.62-3.35c-.09-1.9-.1-2.46-.1-7.27 0-4.8.01-5.38.1-7.27.08-1.76.37-2.71.62-3.35.32-.84.71-1.44 1.34-2.07a5.58 5.58 0 012.07-1.34 9.96 9.96 0 013.35-.62c1.9-.09 2.46-.1 7.27-.1zm0 5.52a9.24 9.24 0 100 18.48 9.24 9.24 0 000-18.48zM18 24a6 6 0 110-12 6 6 0 010 12zM29.77 8.4a2.16 2.16 0 11-4.32 0 2.16 2.16 0 014.32 0z" fill="#fff"></path>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 0c-4.89 0-5.5.02-7.42.1C8.66.2 7.35.5 6.2.96a8.82 8.82 0 00-3.19 2.07c-1 1-1.62 2-2.08 3.19a13.21 13.21 0 00-.83 4.37C.02 12.5 0 13.1 0 18c0 4.89.02 5.5.1 7.42.1 1.92.4 3.23.84 4.37a8.82 8.82 0 002.08 3.19c1 1 2 1.62 3.19 2.08 1.14.44 2.45.74 4.37.83 1.92.09 2.53.11 7.42.11 4.89 0 5.5-.02 7.42-.1 1.92-.1 3.23-.4 4.37-.84a8.82 8.82 0 003.19-2.08c1-1 1.62-2 2.08-3.19.44-1.14.74-2.45.83-4.37.09-1.92.11-2.53.11-7.42 0-4.89-.02-5.5-.1-7.42-.1-1.92-.4-3.23-.84-4.37a8.82 8.82 0 00-2.08-3.19c-1-1-2-1.62-3.19-2.07A13.21 13.21 0 0025.42.1C23.5.02 22.9 0 18 0zm0 3.24c4.8 0 5.38.02 7.27.1 1.76.09 2.71.38 3.35.63.84.32 1.44.71 2.07 1.34a5.58 5.58 0 011.34 2.07c.25.64.54 1.6.62 3.35.09 1.9.1 2.46.1 7.27 0 4.8-.01 5.38-.1 7.27a9.96 9.96 0 01-.62 3.35 5.58 5.58 0 01-1.34 2.07 5.58 5.58 0 01-2.07 1.34c-.64.25-1.6.54-3.35.62-1.9.09-2.46.1-7.27.1-4.8 0-5.38-.01-7.27-.1a9.96 9.96 0 01-3.35-.62 5.58 5.58 0 01-2.07-1.34 5.58 5.58 0 01-1.34-2.07 9.96 9.96 0 01-.62-3.35c-.09-1.9-.1-2.46-.1-7.27 0-4.8.01-5.38.1-7.27.08-1.76.37-2.71.62-3.35.32-.84.71-1.44 1.34-2.07a5.58 5.58 0 012.07-1.34 9.96 9.96 0 013.35-.62c1.9-.09 2.46-.1 7.27-.1zm0 5.52a9.24 9.24 0 100 18.48 9.24 9.24 0 000-18.48zM18 24a6 6 0 110-12 6 6 0 010 12zM29.77 8.4a2.16 2.16 0 11-4.32 0 2.16 2.16 0 014.32 0z" fill="url(#paint0_radial)"></path>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 0c-4.89 0-5.5.02-7.42.1C8.66.2 7.35.5 6.2.96a8.82 8.82 0 00-3.19 2.07c-1 1-1.62 2-2.08 3.19a13.21 13.21 0 00-.83 4.37C.02 12.5 0 13.1 0 18c0 4.89.02 5.5.1 7.42.1 1.92.4 3.23.84 4.37a8.82 8.82 0 002.08 3.19c1 1 2 1.62 3.19 2.08 1.14.44 2.45.74 4.37.83 1.92.09 2.53.11 7.42.11 4.89 0 5.5-.02 7.42-.1 1.92-.1 3.23-.4 4.37-.84a8.82 8.82 0 003.19-2.08c1-1 1.62-2 2.08-3.19.44-1.14.74-2.45.83-4.37.09-1.92.11-2.53.11-7.42 0-4.89-.02-5.5-.1-7.42-.1-1.92-.4-3.23-.84-4.37a8.82 8.82 0 00-2.08-3.19c-1-1-2-1.62-3.19-2.07A13.21 13.21 0 0025.42.1C23.5.02 22.9 0 18 0zm0 3.24c4.8 0 5.38.02 7.27.1 1.76.09 2.71.38 3.35.63.84.32 1.44.71 2.07 1.34a5.58 5.58 0 011.34 2.07c.25.64.54 1.6.62 3.35.09 1.9.1 2.46.1 7.27 0 4.8-.01 5.38-.1 7.27a9.96 9.96 0 01-.62 3.35 5.58 5.58 0 01-1.34 2.07 5.58 5.58 0 01-2.07 1.34c-.64.25-1.6.54-3.35.62-1.9.09-2.46.1-7.27.1-4.8 0-5.38-.01-7.27-.1a9.96 9.96 0 01-3.35-.62 5.58 5.58 0 01-2.07-1.34 5.58 5.58 0 01-1.34-2.07 9.96 9.96 0 01-.62-3.35c-.09-1.9-.1-2.46-.1-7.27 0-4.8.01-5.38.1-7.27.08-1.76.37-2.71.62-3.35.32-.84.71-1.44 1.34-2.07a5.58 5.58 0 012.07-1.34 9.96 9.96 0 013.35-.62c1.9-.09 2.46-.1 7.27-.1zm0 5.52a9.24 9.24 0 100 18.48 9.24 9.24 0 000-18.48zM18 24a6 6 0 110-12 6 6 0 010 12zM29.77 8.4a2.16 2.16 0 11-4.32 0 2.16 2.16 0 014.32 0z" fill="url(#paint1_radial)"></path>
				<defs>
					<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-78.89 28.52 12.32) scale(36.6879)">
						<stop stop-color="#FED576"></stop>
						<stop offset=".14" stop-color="#FED576"></stop>
						<stop offset=".52" stop-color="#EE6141"></stop>
						<stop offset="1" stop-color="#BF348F"></stop>
					</radialGradient>
					<radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-.8 2280.97 -1835.77) scale(46.2902 36.9531)">
						<stop offset=".69" stop-color="#AE3596" stop-opacity="0"></stop>
						<stop offset=".82" stop-color="#813BAB"></stop>
						<stop offset=".95" stop-color="#3E6ADD"></stop>
					</radialGradient>
				</defs>
			</svg>
         <br/>
        </div>
      </div>
   </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><b>Expert Crafter</b></h2>
          <p class="card-text">Complete 12 Projects</p>
			<div class="progress" style={{height: "30px"}}>
				<div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40"
				aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
				6/12
				</div>
			</div>
          <br/>
		  <br/>
          <br/>
        </div>
      </div>
		<br/>
		<br/>
       <div class="card">
        <div class="card-body">
          <h2 class="card-title"><b>Fledgling</b></h2>
          <p class="card-text">Complete Your First Project</p>
			<div class="progress" style={{height: "30px"}}>
				<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40"
				aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
				1/1
				</div>
			</div>
		  <br/>Complete! Share it with your friends.<br/>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden="true" class="svg-icon ">
				<path d="M36 18a18 18 0 10-20.81 17.78V23.2h-4.57V18h4.57v-3.97c0-4.5 2.68-7 6.8-7 1.97 0 4.03.35 4.03.35v4.43h-2.28c-2.23 0-2.93 1.4-2.93 2.81V18h5l-.8 5.2h-4.2v12.58A18 18 0 0036 18z" fill="#1877F2"></path>
			</svg>&nbsp;&nbsp;&nbsp;
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden="true" class="svg-icon ">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M33.75 7.93c-1.16.53-2.4.88-3.71 1.04a6.61 6.61 0 002.84-3.66 12.73 12.73 0 01-4.1 1.6 6.37 6.37 0 00-4.72-2.09 6.55 6.55 0 00-6.46 6.63c0 .52.05 1.02.16 1.5A18.2 18.2 0 014.44 6.04a6.75 6.75 0 002 8.85 6.35 6.35 0 01-2.93-.83v.09c0 3.2 2.23 5.89 5.2 6.5a6.16 6.16 0 01-2.93.1 6.49 6.49 0 006.04 4.6 12.76 12.76 0 01-9.57 2.76 18 18 0 009.9 2.97c11.9 0 18.4-10.1 18.4-18.85l-.02-.86c1.26-.94 2.36-2.1 3.22-3.43z" fill="#1DA1F2"></path>
			</svg>&nbsp;&nbsp;&nbsp;
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" aria-hidden="true" class="svg-icon ">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 0c-4.89 0-5.5.02-7.42.1C8.66.2 7.35.5 6.2.96a8.82 8.82 0 00-3.19 2.07c-1 1-1.62 2-2.08 3.19a13.21 13.21 0 00-.83 4.37C.02 12.5 0 13.1 0 18c0 4.89.02 5.5.1 7.42.1 1.92.4 3.23.84 4.37a8.82 8.82 0 002.08 3.19c1 1 2 1.62 3.19 2.08 1.14.44 2.45.74 4.37.83 1.92.09 2.53.11 7.42.11 4.89 0 5.5-.02 7.42-.1 1.92-.1 3.23-.4 4.37-.84a8.82 8.82 0 003.19-2.08c1-1 1.62-2 2.08-3.19.44-1.14.74-2.45.83-4.37.09-1.92.11-2.53.11-7.42 0-4.89-.02-5.5-.1-7.42-.1-1.92-.4-3.23-.84-4.37a8.82 8.82 0 00-2.08-3.19c-1-1-2-1.62-3.19-2.07A13.21 13.21 0 0025.42.1C23.5.02 22.9 0 18 0zm0 3.24c4.8 0 5.38.02 7.27.1 1.76.09 2.71.38 3.35.63.84.32 1.44.71 2.07 1.34a5.58 5.58 0 011.34 2.07c.25.64.54 1.6.62 3.35.09 1.9.1 2.46.1 7.27 0 4.8-.01 5.38-.1 7.27a9.96 9.96 0 01-.62 3.35 5.58 5.58 0 01-1.34 2.07 5.58 5.58 0 01-2.07 1.34c-.64.25-1.6.54-3.35.62-1.9.09-2.46.1-7.27.1-4.8 0-5.38-.01-7.27-.1a9.96 9.96 0 01-3.35-.62 5.58 5.58 0 01-2.07-1.34 5.58 5.58 0 01-1.34-2.07 9.96 9.96 0 01-.62-3.35c-.09-1.9-.1-2.46-.1-7.27 0-4.8.01-5.38.1-7.27.08-1.76.37-2.71.62-3.35.32-.84.71-1.44 1.34-2.07a5.58 5.58 0 012.07-1.34 9.96 9.96 0 013.35-.62c1.9-.09 2.46-.1 7.27-.1zm0 5.52a9.24 9.24 0 100 18.48 9.24 9.24 0 000-18.48zM18 24a6 6 0 110-12 6 6 0 010 12zM29.77 8.4a2.16 2.16 0 11-4.32 0 2.16 2.16 0 014.32 0z" fill="#fff"></path>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 0c-4.89 0-5.5.02-7.42.1C8.66.2 7.35.5 6.2.96a8.82 8.82 0 00-3.19 2.07c-1 1-1.62 2-2.08 3.19a13.21 13.21 0 00-.83 4.37C.02 12.5 0 13.1 0 18c0 4.89.02 5.5.1 7.42.1 1.92.4 3.23.84 4.37a8.82 8.82 0 002.08 3.19c1 1 2 1.62 3.19 2.08 1.14.44 2.45.74 4.37.83 1.92.09 2.53.11 7.42.11 4.89 0 5.5-.02 7.42-.1 1.92-.1 3.23-.4 4.37-.84a8.82 8.82 0 003.19-2.08c1-1 1.62-2 2.08-3.19.44-1.14.74-2.45.83-4.37.09-1.92.11-2.53.11-7.42 0-4.89-.02-5.5-.1-7.42-.1-1.92-.4-3.23-.84-4.37a8.82 8.82 0 00-2.08-3.19c-1-1-2-1.62-3.19-2.07A13.21 13.21 0 0025.42.1C23.5.02 22.9 0 18 0zm0 3.24c4.8 0 5.38.02 7.27.1 1.76.09 2.71.38 3.35.63.84.32 1.44.71 2.07 1.34a5.58 5.58 0 011.34 2.07c.25.64.54 1.6.62 3.35.09 1.9.1 2.46.1 7.27 0 4.8-.01 5.38-.1 7.27a9.96 9.96 0 01-.62 3.35 5.58 5.58 0 01-1.34 2.07 5.58 5.58 0 01-2.07 1.34c-.64.25-1.6.54-3.35.62-1.9.09-2.46.1-7.27.1-4.8 0-5.38-.01-7.27-.1a9.96 9.96 0 01-3.35-.62 5.58 5.58 0 01-2.07-1.34 5.58 5.58 0 01-1.34-2.07 9.96 9.96 0 01-.62-3.35c-.09-1.9-.1-2.46-.1-7.27 0-4.8.01-5.38.1-7.27.08-1.76.37-2.71.62-3.35.32-.84.71-1.44 1.34-2.07a5.58 5.58 0 012.07-1.34 9.96 9.96 0 013.35-.62c1.9-.09 2.46-.1 7.27-.1zm0 5.52a9.24 9.24 0 100 18.48 9.24 9.24 0 000-18.48zM18 24a6 6 0 110-12 6 6 0 010 12zM29.77 8.4a2.16 2.16 0 11-4.32 0 2.16 2.16 0 014.32 0z" fill="url(#paint0_radial)"></path>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 0c-4.89 0-5.5.02-7.42.1C8.66.2 7.35.5 6.2.96a8.82 8.82 0 00-3.19 2.07c-1 1-1.62 2-2.08 3.19a13.21 13.21 0 00-.83 4.37C.02 12.5 0 13.1 0 18c0 4.89.02 5.5.1 7.42.1 1.92.4 3.23.84 4.37a8.82 8.82 0 002.08 3.19c1 1 2 1.62 3.19 2.08 1.14.44 2.45.74 4.37.83 1.92.09 2.53.11 7.42.11 4.89 0 5.5-.02 7.42-.1 1.92-.1 3.23-.4 4.37-.84a8.82 8.82 0 003.19-2.08c1-1 1.62-2 2.08-3.19.44-1.14.74-2.45.83-4.37.09-1.92.11-2.53.11-7.42 0-4.89-.02-5.5-.1-7.42-.1-1.92-.4-3.23-.84-4.37a8.82 8.82 0 00-2.08-3.19c-1-1-2-1.62-3.19-2.07A13.21 13.21 0 0025.42.1C23.5.02 22.9 0 18 0zm0 3.24c4.8 0 5.38.02 7.27.1 1.76.09 2.71.38 3.35.63.84.32 1.44.71 2.07 1.34a5.58 5.58 0 011.34 2.07c.25.64.54 1.6.62 3.35.09 1.9.1 2.46.1 7.27 0 4.8-.01 5.38-.1 7.27a9.96 9.96 0 01-.62 3.35 5.58 5.58 0 01-1.34 2.07 5.58 5.58 0 01-2.07 1.34c-.64.25-1.6.54-3.35.62-1.9.09-2.46.1-7.27.1-4.8 0-5.38-.01-7.27-.1a9.96 9.96 0 01-3.35-.62 5.58 5.58 0 01-2.07-1.34 5.58 5.58 0 01-1.34-2.07 9.96 9.96 0 01-.62-3.35c-.09-1.9-.1-2.46-.1-7.27 0-4.8.01-5.38.1-7.27.08-1.76.37-2.71.62-3.35.32-.84.71-1.44 1.34-2.07a5.58 5.58 0 012.07-1.34 9.96 9.96 0 013.35-.62c1.9-.09 2.46-.1 7.27-.1zm0 5.52a9.24 9.24 0 100 18.48 9.24 9.24 0 000-18.48zM18 24a6 6 0 110-12 6 6 0 010 12zM29.77 8.4a2.16 2.16 0 11-4.32 0 2.16 2.16 0 014.32 0z" fill="url(#paint1_radial)"></path>
				<defs>
					<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-78.89 28.52 12.32) scale(36.6879)">
						<stop stop-color="#FED576"></stop>
						<stop offset=".14" stop-color="#FED576"></stop>
						<stop offset=".52" stop-color="#EE6141"></stop>
						<stop offset="1" stop-color="#BF348F"></stop>
					</radialGradient>
					<radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-.8 2280.97 -1835.77) scale(46.2902 36.9531)">
						<stop offset=".69" stop-color="#AE3596" stop-opacity="0"></stop>
						<stop offset=".82" stop-color="#813BAB"></stop>
						<stop offset=".95" stop-color="#3E6ADD"></stop>
					</radialGradient>
				</defs>
			</svg>
          <br/>
        </div>
      </div>
   </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><b>Recycler</b></h2>
          <p class="card-text">Complete 1 Project Every Week for 8 Weeks</p>
			<div class="progress" style={{height: "30px"}}>
				<div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40"
				aria-valuemin="0" aria-valuemax="100" style={{width:"37%"}}>
				3/8
				</div>
			</div>
          <br/>
		  <br/>
          <br/>
        </div>
      </div>
		<br/>
		<br/>
       <div class="card">
        <div class="card-body">
          <h2 class="card-title"><b>Adventurer</b></h2>
          <p class="card-text">Take Part in a Quest</p>
			<div class="progress" style={{height: "30px"}}>
				<div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40"
				aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}}>
				0/1
				</div>
			</div>
          <br/>
		  <br/>
          <br/>
        </div>
      </div>
   </div>
  </div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}

function Pictures() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h1>Gallery</h1> <h6>See Projects submitted by other Crafters</h6></div>
  <br/>
  <br/>
  <div><h4>Upload your Own Project!</h4>
	<form action="">
		<label class="form-label" for="img">Select image:</label>
		<input type="file" class="form-control" id="img" name="img" accept="image/*"/>
		<input type="submit" style={{float:"right"}} class="btn btn-primary"/>
	</form>
  </div>
  <br/>
  <br/>
  <div class="row">
	<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/1.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/2.png" /></div>
		</div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/3.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/4.png" /></div>
	  </div>
	  <br/>
    </div>
	<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/5.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/6.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/7.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/8.png" /></div>
	  </div>
	  <br/>
    </div>
	<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/9.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/10.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/11.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/12.png" /></div>
	  </div>
	  <br/>
    </div>
	<div class="col-md-3" style={{position: "relative", overflow: "hidden"}}>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/13.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/14.png" /></div>
		</div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/15.png" /></div>
	  </div>
	  <br/>
      <div class="tile ingredient tiles-item" style={{display: "block", left: "0px", top: "0px", transform: "translate3d(0px, 0px, 0px)"}}>
		<div><img src="/gallery/16.png" /></div>
	  </div>
	  <br/>
    </div>
</div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}


function PlanOne() {
	return (
<div class="container">
<div style={{border: "4px", borderColor: "grey", borderStyle: "solid"}}>
<p><br/></p>
<p><span>Craftable Plastics Lesson Plan</span></p>
<p><span>Grade: 4 - 8 &nbsp;</span><span>Lesson: 50 Minutes&nbsp;</span></p>
<p><span>Learning Goal:&nbsp;</span><span>Identify and compare main causes of plastic Pollutions</span></p>
<p><span>Lesson #:</span><span>&nbsp; 1 &nbsp;&nbsp;</span><span>Title:</span><span>&nbsp;Intro to Craftable Plastics</span></p>
<div align="left">
		<table>
				<tbody>
						<tr>
								<td colspan="2">
										<p><span>Learning Standards:</span></p>
										<p><a href="http://www.corestandards.org/ELA-Literacy/RH/11-12/2/"><span>CCSS.ELA-LITERACY.RH.11-12.2</span></a></p>
										<p><span>Determine the central ideas or information of a primary or secondary source; provide an accurate summary that makes clear the relationships among the key details and ideas.</span></p>
								</td>
								<td>
								</td>
						</tr>
						<tr>
								<td colspan="2" rowspan="2">
										<p><span>Group Lesson Objective:</span></p>
										<p><span>Construct useful objects and tools using items that traditionally will simply pollute the environment, and then compare how reusing these items affects the evironement</span></p>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td><br/></td>
						</tr>
						<tr>
								<td rowspan="3">
										<p><span>Focus Learner</span></p>
								</td>
								<td>
										<p><span>Lesson Objective:&nbsp;</span></p>
										<p><span>Teach students of the dangers of unrecyclable plastics</span></p><br/>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td>
										<p><span>Communication Skill:&nbsp;</span></p>
										<p><span>The focus learner will communicate their learning by engaging in classroom discussion as well as completing a Venn diagram and craft</span></p>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td>
										<p><span>Planned Supports:&nbsp;</span></p>
										<ul>
												<li aria-level="1">
														<p><span>modified notes</span></p>
												</li>
												<li aria-level="1">
														<p><span>Prompting of discussion questions&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Graphic organizer (Venn diagram)</span></p>
												</li>
												<li aria-level="1">
														<p><span>TA support&nbsp;</span></p>
														<ul>
																<li aria-level="2">
																		<p><span>Assistance with spelling and writing (as needed)</span></p>
																</li>
														</ul>
												</li>
												<li aria-level="1">
														<p><span>Modified seating arrangements&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Breaks, as needed&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Positive praise/feedback</span></p>
												</li>
										</ul>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td colspan="2">
										<p><span>Assessment Tools and the Collection Procedures:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Student&rsquo;s will be assessed on the accuracy of their Venn diagram&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Students will also be assessed on the quality of class discussion</span></p>
												</li>
												<li aria-level="1">
														<p><span>GOOGLE form assigned as homework (how did reusing materials change the material and pollutants impact)</span></p>
												</li>
										</ul>
										<p><span>before the lesson review student grades and participation in order to properly place them and assess crafting skill levels c</span></p>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td colspan="2">
										<p><span>List of Resources and Materials:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Plastic Bottles</span></p>
												</li>
												<li aria-level="1">
														<p><span>Scissors</span></p>
												</li>
												<li aria-level="1">
														<p><span>Tape</span></p>
												</li>
												<li aria-level="1">
														<p><span>A device with web access</span></p>
												</li>
										</ul>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td rowspan="6">
										<p><span>Instructional Strategies/ Learning Tasks</span></p>
								</td>
								<td>
										<p><span>Opening:</span><span>&nbsp;How will you open the lesson? &nbsp;(e.g., activate prior knowledge, connect to prior learning, set purpose or build interest in this topic, introduce &lsquo;essential questions&rsquo; or vocabulary as appropriate).</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Have students take their seats&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Discuss, what causes pollution</span></p>
												</li>
												<li aria-level="1">
														<p><span>Is their anything being done about this?</span></p>
												</li>
										</ul>
										<p><span>Raise your hand if you would like a paper copy of the notes, if you are taking notes on your iPad please take your iPad out and download the PDF notes from Schoology on to notability</span></p>
								</td>
								<td>
								</td>
						</tr>
						<tr>
								<td>
										<p><span>Steps for Instruction:&nbsp;</span><span>Might include some or all: Description of the lesson activities, learning tasks, instructional strategies and specific planned supports including adaptations or modifications for the focus learner. How and when will you explain, model, and demonstrate the content? How will you provide guided practice?&nbsp;</span></p>
										<p><span>Lecture and guided notes will be given as a group</span></p>
										<ul>
												<li aria-level="1">
														<p><span>While students are downloading notes, connect ipad to airplay and open notability student will be taking guided notes&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>After students have received paper notes or downloaded PDF notes in notability ask students &ldquo;</span><span>does anyone know what the Cold War is?&rdquo;</span></p>
												</li>
										</ul>
										<p><span>Notes:</span></p>
										<p><span>Plastic pollution is something that impacts everyday life, and is quickly changing:</span></p><br/>
										<p><span>manufacturers rarely observe what plastics they are using or how that materials lifespan extends beyond the product&nbsp;</span></p>
										<p><span>&nbsp;this lack of foresight has lasting ramifications that can last decades</span></p>
										<p><span>Discuss:</span></p>
										<p><span>Teacher: Why do you think the manufacturers do this?&nbsp;</span></p>
										<p><span>Teacher: Why changing how and what things are made of benefit us today?&nbsp;</span></p>
										<p><span>Notes:</span></p>
										<p><span>Reusable Plastics:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Example 1</span></p>
												</li>
												<li aria-level="1">
														<p><span>Example 2</span></p>
												</li>
												<li aria-level="1">
														<p><span>Example 3</span></p>
												</li>
												<li aria-level="1">
														<p><span>Example 4 &nbsp;</span></p>
												</li>
										</ul><br/>
										<p><span> Impacts of Plastic Pollution</span></p><br/>
										<p><span>Every year unused fishing gear, is discarded in the ocean causing serious marine issues.:</span></p>
										<p><span>This gear is referred to as Ghost Gear, and it often cannot be removed or disappear from the ocean without human interference. For example:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Example 1</span></p>
												</li>
												<li aria-level="1">
														<p><span>Example 2</span></p>
												</li>
												<li aria-level="1">
														<p><span>Example 3</span></p>
												</li>
										</ul>
										<p><span>What options are being taken to combat this issue?.&nbsp;</span></p><br/>
										<p><span>*** Ghost Gear Recovery ***&nbsp;</span></p>
										<p><span>Discuss:</span></p>
										<p><span>Teacher: What do you think of the impacts of ghost gear on the ocean?</span></p><br/>
										<p><span>Notes:</span></p>
										<p><span>Recycling or Lack thereof:&nbsp;</span></p>
										<p><span>Unreusable materials</span><span>make up a surprising amount of the plastics that are used in production, for example&nbsp;</span></p><br/>
										<ol>
												<li aria-level="1">
														<p><span>Example 1&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Example 2</span></p>
														<ol>
																<li aria-level="2">
																		<p><span>Example 3;</span></p>
																</li>
														</ol>
												</li>
												<li aria-level="1">
														<p><span>Example 4&nbsp;</span></p>
												</li>
										</ol><br/>
										<p><span>The line between what can and cannot be reused is often unclear &nbsp;</span></p><br/>
										<p><span>Sometimes a material can be ok if it is reused and responsibly recycled </span></p><br/>
										<p><span>Sometimes no matter what we do it will create lasting waste</span></p><br/>
										<p><span>Often even materials that can be ok end up being apart of the issue</span></p>
										<p><span>Discuss:</span></p>
										<p><span>Teacher: Sustainable Materials vs. Unsustainable Materials: Where are they used?</span></p><br/>
										<p><span>Sustainable Materials: Materials that can be safely used that do not cause lasting harm, or can be reused without harm or impact. &nbsp;</span></p><br/>
										<p><span>Unsustainable : matarials and practices that cause lasting harm and pollution to the environment and everyday lives &nbsp;</span></p><br/>
										<p><span>Discuss:&nbsp;</span></p>
										<p><span>Teacher: I am handing out a Venn diagram, Venn diagrams allow you to visually compare two topics, it also helps you to identify similarities. Today I would like you to compare and contrast the areas where different materials are used and where you think they are or are not recyclable.&nbsp;</span></p>
										<p><span>Teacher: You have the rest of class to work on completing your Venn diagram. Venn diagrams allow you to visually compare two topics, it also allows you to identify similarities. I would like you fill out at least 3 reasons on each side and at least one similarity&nbsp;</span></p>
								</td>
								<td>
								</td>
						</tr>
						<tr>
								<td>
										<p><span>Closing</span><span>:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Last 20 minutes ** class will be used to work on Venn Diagrams comparing and existing topics&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Project Venn Diagram onto board and explain one difference between the two concepts.&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Have students then complete the Venn diagram on their own</span></p>
												</li>
										</ul>
										<p><span>Teacher: There is about 5 minutes left of class does anyone have any questions about the differences between capitalism and communism? There is homework! There is a link available on schoology or I have a printed copy of the form up front. Please come get one if you do not have access to an iPad or computer</span></p><br/>
								</td>
								<td>
								</td>
						</tr>
						<tr>
								<td>
										<p><span>Plans for teaching generalization, maintenance and/or self-directed use of knowledge *** skills:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Explain to students why the use of a Venn diagram will help them compare how two ideas are different.&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Connect main ideas to student, i.e. &ldquo;</span><span>would you rather be in a society where the world is healthy or one of convenience?&rdquo;</span></p>
												</li>
										</ul>
								</td>
								<td>
								</td>
						</tr>
						<tr>
								<td>
										<p><span>Student Academic Language:</span><span>&nbsp;List content-specific vocabulary you will use in your lesson.</span></p><br/>
										<p><span>recycling – ghost gear - manufacturer - capitalism - consumer&nbsp;</span></p>
								</td>
								<td>
								</td>
						</tr>
						<tr>
								<td>
										<p><span>Enrichment/Extension:</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Venn Diagram Sustainable vs Unsustainable&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfnIqR0hmxrtyGiq4kj0AAb8O4NrGkiuErjWb81eUwShP7P3A/viewform?usp=sf_link"><span>Google Form</span></a><span>&nbsp;&ldquo;Lorem Ipset?&rdquo;</span></p>
												</li>
										</ul>
								</td>
								<td><br/></td>
						</tr>
						<tr>
								<td>
										<p><span>Universal Design for Learning (UDL)</span></p>
								</td>
								<td>
										<p><span>Multiple Means of Representation:</span></p>
										<p><span>How is content being presented so that it meets the needs of all students?&nbsp;</span></p>
										<p><span>List as bullet points here, then integrate into above categories titled Opening, Steps for Instruction, Closing, Assessment Tools + Data Collection Procedures.</span></p>
										<ul>
												<li aria-level="1">
														<p><span>Utilization ** AirPlay</span></p>
												</li>
												<li aria-level="1">
														<p><span>Modified notes&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Guided notes (notes available as hardcopy or for download on Ipad)&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Venn Diagram</span></p>
												</li>
										</ul><br/>
										<p><span>Multiple Means of Engagement:</span></p>
										<p><span>How are multiple pathways provided for students to actually learn&nbsp;</span><span>the material presented? List the different ways students will be able to engage with the materials being presented. Incorporate student interest and preferred response modality. List as bullet points here, then integrate into above categories titled Opening, Steps for Instruction, Closing, Assessment Tools + Data Collection Procedures.</span></p><br/>
										<ul>
												<li aria-level="1">
														<p><span>Students will participate in class lecture&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>GOOGLE Forms</span></p>
												</li>
												<li aria-level="1">
														<p><span>Venn Diagram</span></p>
												</li>
										</ul>
										<p><span>Mutiple Means of Expression:</span></p>
										<p><span>How will your students demonstrate what they have learned? List the different ways students will show their learning. (e.g. tiered assignments, oral exams, building a model, making a video, using portfolio assessment, student work samples) List as bullet points here, then integrate into above categories titled Opening, Steps for Instruction, Closing, Assessment Tools + Data Collection Procedures.</span></p><br/>
										<ul>
												<li aria-level="1">
														<p><span>Student will complete Venn diagram with 3 comparisons on each side and at least one similarity&nbsp;</span></p>
												</li>
												<li aria-level="1">
														<p><span>Students will use guided notes to complete the GOOGLE forms questions for homework</span></p>
												</li>
										</ul><br/>
								</td>
								<td><br/></td>
						</tr>
				</tbody>
		</table>
</div>

<div align="left"><br /></div></div>
<br/><br/><hr/>
		</div>
	);
}

function Results() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h2>Results</h2>
	 <br/>
	  <h4><Link to="/checklist">&#60;&#60; Return to Ingredients Selection</Link></h4>
  </div>
  <br/>
  <br/>
  <div class="row">
	  <div class="card col-md-4 col-xl-12">
		<div class="card-header"> <Link to="/recipes/1"><h4>How To Make A Plastic Bird-Feeder (Sample Recipe #1)</h4></Link> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">Craft simple bird feeder great for use in the yard, using a plastic bottle and spoons, and a bit of twine you can help keep the birds near you fed.</li>
		</ul>
		<br/>
		<br/>
		<div class="card-header"> <Link to="/recipes/2"><h4>Plastic Playhouse (Sample Recipe #2)</h4></Link> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">Create fun and green homes for your toys, just grab a milk container, your normal crafting supplies and a bit of glue and paper and craft a home exactly how you want it.</li>
		</ul>
		<br/>
		<br/>
		<div class="card-header"> <Link to="/recipes/3"><h4>Plastic Bottle Pots (Sample Recipe #3)</h4></Link> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">Make your garden even more green by potting them in materials that would normally pollute the environment. Just grab some plastic bottles, scissors, and some optional spray paint for flair.</li>
		</ul>
		<br/>
		<br/>
	  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}

function RecipeOne() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h2>How To Make A Plastic Bird-Feeder (Sample Recipe #1)</h2>
	 <br/>
	  <h4><Link to="/results">&#60;&#60; Return to Results</Link></h4>
  </div>
  <br/>
  <br/>
  <div class="row">
	  <div class="card col-md-4 col-xl-8">
		<div class="card-header"> <h3>Ingredients</h3> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">1 Plastic Bottle</li>
		  <li class="list-group-item">2 Mixing Spoons</li>
		  <li class="list-group-item">Bird Seeds</li>
		  <li class="list-group-item">Twine</li>
		  <li class="list-group-item">Scissors</li>
		</ul>
		<br/>
		<br/>
		<div class="card-header"> <h3>Steps</h3> </div>
		<ol class="list-group list-group-numbered">
		  <li class="list-group-item">1) Near the bottom of the bottle, cut a little larger than a quarter size hole into the side of the bottle. Poke a spoon handle through it until it hits the other side of the bottle and cut a small hole there so the handle can go through.</li>
		  <li class="list-group-item">2) Repeat step 1 higher up on the bottle for the other spoon.</li>
		  <li class="list-group-item">3) Tie a piece of twine around the neck of the bottle as a hanger for the birdfeeder.</li>
		  <li class="list-group-item">4) Fill the bottle with the birdseed and hang your feeder outside.</li>
		  <li class="list-group-item">5) The seed will fall out onto the spoons as the birds eat.</li>
		  <li class="list-group-item">6) Fill up when needed!</li>
		</ol>
	  </div>
	  <div class="card col-md-4">
		<div class="card-header"> <h3>Finished Product</h3> </div>
		<img src="/projects/Homemade-Bird-Feeder-Plastic-Bottle-pin-600x875.jpg"/>
	  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}

function RecipeTwo() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h2>Plastic Playhouse (Sample Recipe #2)</h2>
	 <br/>
	  <h4><Link to="/results">&#60;&#60; Return to Results</Link></h4>
  </div>
  <br/>
  <br/>
  <div class="row">
	  <div class="card col-md-4 col-xl-8">
		<div class="card-header"> <h3>Ingredients</h3> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">Milk Gallon</li>
		  <li class="list-group-item">Scissors</li>
		  <li class="list-group-item">Stickers(optional)</li>
		  <li class="list-group-item">Construction Paper(optional)</li>
		  <li class="list-group-item">Glue</li>
		  <li class="list-group-item">Markers</li>
		  <li class="list-group-item">Paint(optional)</li>
		</ul>
		<br/>
		<br/>
		<div class="card-header"> <h3>Steps</h3> </div>
		<ol class="list-group list-group-numbered">
		  <li class="list-group-item">1) Use your marker to draw the entrance of your ‘playhouse’! Go wild!</li>
		  <li class="list-group-item">2) Now add windows(if you want)!</li>
		  <li class="list-group-item">3) Now the fun-part! Decorate your play-house! Paint it red to look like a fire-station! Or use construction paper to make windowsill! It’s up to you!</li>
		</ol>
	  </div>
	  <div class="card col-md-4">
		<div class="card-header"> <h3>Finished Product</h3> </div>
		<img src="/projects/482383_338954696227189_231056099_n.jpg"/>
	  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}

function RecipeThree() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h2>Plastic Bottle Pots (Sample Recipe #3)</h2>
	 <br/>
	  <h4><Link to="/results">&#60;&#60; Return to Results</Link></h4>
  </div>
  <br/>
  <br/>
  <div class="row">
	  <div class="card col-md-4 col-xl-8">
		<div class="card-header"> <h3>Ingredients</h3> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">Milk Gallon</li>
		  <li class="list-group-item">Scissors</li>
		  <li class="list-group-item">Stickers(optional)</li>
		  <li class="list-group-item">Construction Paper(optional)</li>
		  <li class="list-group-item">Glue</li>
		  <li class="list-group-item">Markers</li>
		  <li class="list-group-item">Paint(optional)</li>
		</ul>
		<br/>
		<br/>
		<div class="card-header"> <h3>Steps</h3> </div>
		<ol class="list-group list-group-numbered">
		  <li class="list-group-item">1) Use your marker to draw the entrance of your ‘playhouse’! Go wild!</li>
		  <li class="list-group-item">2) Now add windows(if you want)!</li>
		  <li class="list-group-item">3) Now the fun-part! Decorate your play-house! Paint it red to look like a fire-station! Or use construction paper to make windowsill! It’s up to you!</li>
		</ol>
	  </div>
	  <div class="card col-md-4">
		<div class="card-header"> <h3>Finished Product</h3> </div>
		<img src="/projects/PlasticBottlePots-480x270.jpg"/>
	  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}

function Quests() {
	return (
<div class="container">
  <br/>
  <br/>
  <div><h2>Quests</h2>
	 <br/>
	  <h4>Lesson Plans for kids to go on Epic learning Quests!</h4>
  </div>
  <br/>
  <br/>
  <div class="row">
	  <div class="card col-md-4 col-xl-12">
		<div class="card-header"> <Link to="/plans/1"><h4>Craftable Plastics Lesson Plan (Sample Sample #1)</h4></Link> </div>
		<ul class="list-group list-group-flush">
		  <li class="list-group-item">Quest Description</li>
		</ul>
		<br/>
		<br/>
	  </div>
  </div>
  <br/>
  <br/>
  <br/>
  <hr/>
  <div class="row"> </div>
</div>
	);
}



export default App;
