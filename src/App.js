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
			<img src="1070197-1200w.png" alt=""/>
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
				<div class="card"> <img class="card-img-top" src="checklist-image.png" alt="Card image cap"/>
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
				<div class="card"> <img class="card-img-top" src="achievements-image.png" alt="Card image cap"/>
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
				<div class="card"> <img class="card-img-top" src="quest-image.png" alt="Card image cap"/>
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
				<div><img src="tiles/buttons-tile.png" /></div>
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
			<div><img src="tiles/cardboard-tile.png" /></div>
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
			<div><img src="tiles/paper-tile.png" /></div>
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
			<div><img src="tiles/crayon-tile.png" /></div>
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
			<div><img src="tiles/paint-tile.png" /></div>
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
			<div><img src="tiles/bag-tile.png" /></div>
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
			<div><img src="tiles/bottle-tile.png" /></div>
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
			<div><img src="tiles/can-tile.png" /></div>
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
			<div><img src="tiles/cup-tile.png" /></div>
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
			<div><img src="tiles/fork-tile.png" /></div>
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
			<div><img src="tiles/jug-tile.png" /></div>
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
			<div><img src="tiles/knife-tile.png" /></div>
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
			<div><img src="tiles/spoon-tile.png" /></div>
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
			<div><img src="tiles/scissors-tile.png" /></div>
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
			<div><img src="tiles/spraypaint-tile.png" /></div>
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
			<div><img src="tiles/stickers-tile.png" /></div>
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
			<div><img src="tiles/string-tile.png" /></div>
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
			<div><img src="tiles/twine-tile.png" /></div>
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
					<img src="icons/CARDBOARD.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>Cardboard</div>
			</div>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="icons/paintbrush.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>Paint</div>
			</div>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="icons/milkgallon.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>Plastic Bottle</div>
			</div>
			<br/>
			<div> 
				<div style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}}>
					<img src="icons/balloftwine.png" style={{width:"25px", height: "25px", float:"left", verticalAlign:"middle"}} alt=""/>
				</div> 
				<div style={{merginLeft: "40px"}}>Twine</div>
			</div>
			<br/>
			<br/>
			<div style={{position:"relative", bottom: "20px", left:"0px", width:"100%"}}>
				<center><input type="button" name="button" id="button" value="Find Recipes"/><br/></center>
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
		<div>
			<h2>Achievements</h2>
		</div>
	);
}

function Quests() {
	return (
<div class="container" style={{border: "4px", borderColor: "grey", borderStyle: "solid"}}>
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

<div align="left"><br /></div>

		</div>
	);
}

export default App;
