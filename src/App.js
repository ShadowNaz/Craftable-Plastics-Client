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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/lesson">Lesson Plan</Link>
          </li>
        </ul>

		<ul class="row card-group gutter-bottom-4">
			<li class="card span4" >
				<div class="figure"><a href="../../pages/find-your-inner-animal?utm_campaign=wild-classroom&amp;utm_medium=web&amp;utm_source=partner-site&amp;utm_content=teaching-resources" target="_blank" rel="noopener noreferrer"><img src="https://c402277.ssl.cf1.rackcdn.com/photos/5813/images/priority_species_hori/Find-Your-Inner-Animal-Logo_12.09.2013_FYIA-Landing-Page.jpg?1386601497" alt="Find your inner animal" data-image="43zd43l9bhp7" /></a></div>
				<div class="content"><a href="../../pages/find-your-inner-animal?utm_campaign=wild-classroom&amp;utm_medium=web&amp;utm_source=partner-site&amp;utm_content=teaching-resources" target="_blank" rel="noopener noreferrer"><strong>Ingredient Search</strong></a><br /><strong>Search fopr recipes using a selection of ingredients.</strong></div>
			</li>
			<li class="card span4" >
				<div class="figure"><a href="../../pages/animal-trivia-games?utm_campaign=wild-classroom&amp;utm_medium=web&amp;utm_source=partner-site&amp;utm_content=teaching-resources" target="_blank" rel="noopener noreferrer"><img src="https://c402277.ssl.cf1.rackcdn.com/photos/4141/images/priority_species_hori/rhino-iq-logo.png?1368449322" alt="Rhino IQ" data-image="1un9jp43asmx" /></a></div>
				<div class="content"><a href="../../pages/animal-trivia-games?utm_campaign=wild-classroom&amp;utm_medium=web&amp;utm_source=partner-site&amp;utm_content=teaching-resources" target="_blank" rel="noopener noreferrer"><strong>Achievements</strong></a><br /><strong>Check your Achievement progess.</strong></div>
			</li>
			<li class="card span4" >
				<div class="figure"><a href="https://www.worldwildlife.org/teaching-resources/toolkits/our-planet-educator-guides" target="_blank" rel="noopener noreferrer"><img src="https://c402277.ssl.cf1.rackcdn.com/photos/17056/images/priority_species_hori/WC_Our_Planet_Toolkit_Image.jpg?1554310178" alt="Our Planet Educator Guide Cover Image - Earth Illustration" data-image="coitelq3z0ke" /></a></div>
				<div class="content"><a href="https://www.worldwildlife.org/teaching-resources/toolkits/our-planet-educator-guides" target="_blank" rel="noopener noreferrer"><strong>Quests</strong></a><br /><strong>Check for available Quests.</strong></div>
			</li>
		</ul>

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lesson">
            <Lesson />
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
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Lesson() {
  return (
    <div>
<p><br /></p>
<p dir="ltr"><span>Craftable Plastics ****** Plan</span></p>
<p dir="ltr"><span>Grade: ****** &nbsp;</span><span>****** of Lesson: 50 Minutes&nbsp;</span></p>
<p dir="ltr"><span>Learning Goal:&nbsp;</span><span>Identify *** ***** main ****** of ******* Pollutions</span></p>
<p dir="ltr"><span>Lesson #:</span><span>&nbsp; 1 &nbsp;&nbsp;</span><span>Title:</span><span>&nbsp;Intro to Craftable Plastics</span></p>
<div align="left" dir="ltr">
    <table>
        <tbody>
            <tr>
                <td colspan="2">
                    <p dir="ltr"><span>Learning Standards:</span></p>
                    <p dir="ltr"><a href="http://www.corestandards.org/ELA-Literacy/RH/11-12/2/"><span>CCSS.ELA-LITERACY.RH.11-12.2</span></a></p>
                    <p dir="ltr"><span>Determine the central ideas or information of a primary or secondary source; provide an accurate summary that makes clear the relationships among the key details and ideas.</span></p>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td colspan="2" rowspan="2">
                    <p dir="ltr"><span>Group Lesson Objective:</span></p>
                    <p dir="ltr"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat vitae arcu ut cursus. Duis neque neque, cursus at ante consequat, ultrices ullamco</span></p>
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td><br /></td>
            </tr>
            <tr>
                <td rowspan="3">
                    <p dir="ltr"><span>Focus Learner</span></p>
                </td>
                <td>
                    <p dir="ltr"><span>Lesson Objective:&nbsp;</span></p>
                    <p dir="ltr"><span>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat vitae arcu ut cursus. Duis neque neq</span></p><br />
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Communication Skill:&nbsp;</span></p>
                    <p dir="ltr"><span>Lorum ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat vitae arcu ut cursus. Duis nequ</span></p>
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Planned Supports:&nbsp;</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>modified notes</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Prompting of discussion questions&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Graphic organizer (Venn diagram)</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>TA support&nbsp;</span></p>
                            <ul>
                                <li aria-level="2" dir="ltr">
                                    <p dir="ltr"><span>Assistance with spelling and writing (as needed)</span></p>
                                </li>
                            </ul>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Modified seating arrangements&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Breaks, as needed&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Positive praise/feedback</span></p>
                        </li>
                    </ul>
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td colspan="2">
                    <p dir="ltr"><span>Assessment Tools and the Collection Procedures:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Student&rsquo;s will be assessed on the accuracy of their Venn diagram&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Students will also be assessed on the quality of class discussion</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>GOOGLE form assigned as homework ( Is the U.S. currently a capitalist country or communist country?)</span></p>
                        </li>
                    </ul>
                    <p dir="ltr"><span>nteger posuere ultricies quam, eget mollis nunc euismod et. c</span></p>
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td colspan="2">
                    <p dir="ltr"><span>List of Resources and Materials:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Plastic Bottles</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Scissors</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Tape</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>A device with web access</span></p>
                        </li>
                    </ul>
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td rowspan="6">
                    <p dir="ltr"><span>Instructional Strategies/ Learning Tasks</span></p>
                </td>
                <td>
                    <p dir="ltr"><span>Opening:</span><span>&nbsp;How will you open the lesson? &nbsp;(e.g., activate prior knowledge, connect to prior learning, set purpose or build interest in this topic, introduce &lsquo;essential questions&rsquo; or vocabulary as appropriate).</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Have students take their seats&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Discuss, what causes pollution</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Is their anything being done about this?</span></p>
                        </li>
                    </ul>
                    <p dir="ltr"><span>Raise your hand if you would like a paper copy of the notes, if you are taking notes on your iPad please take your iPad out and download the PDF notes from Schoology on to notability</span></p>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Steps for Instruction:&nbsp;</span><span>Might include some or all: Description of the lesson activities, learning tasks, instructional strategies and specific planned supports including adaptations or modifications for the focus learner. How and when will you explain, model, and demonstrate the content? How will you provide guided practice?&nbsp;</span></p>
                    <p dir="ltr"><span>Lecture and guided notes will be given as a group</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>While students are downloading notes, connect ipad to airplay and open notability student will be taking guided notes&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>After students have received paper notes or downloaded PDF notes in notability ask students &ldquo;</span><span>does anyone know what the Cold War is?&rdquo;</span></p>
                        </li>
                    </ul>
                    <p dir="ltr"><span>Notes:</span></p>
                    <p dir="ltr"><span>The Cold War was a war of ideas and words, The U.S. believed that:</span></p><br />
                    <p dir="ltr"><span>Democracy is the glue that holds the USA together&nbsp;</span></p>
                    <p dir="ltr"><span>&nbsp;And we wanted to win the hearts and minds of the world&apos;s people</span></p>
                    <p dir="ltr"><span>Discuss:</span></p>
                    <p dir="ltr"><span>Teacher: Why do you think the U.S. thought this?&nbsp;</span></p>
                    <p dir="ltr"><span>Teacher: Why would winning hearts and minds be something that the U.S. wants?&nbsp;</span></p>
                    <p dir="ltr"><span>Notes:</span></p>
                    <p dir="ltr"><span>The United States was a capitalist democracy. Its citizens believed in:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>free elections</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>economic and religious freedom</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Private property</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Respect for individual differences&nbsp;</span></p>
                        </li>
                    </ul><br />
                    <p dir="ltr"><span> The Have and have nots</span></p><br />
                    <p dir="ltr"><span>The Soviet Union was a dictatorship. Under Joseph Stalin, the Communist Party made all key:</span></p>
                    <p dir="ltr"><span>economic, political, and military decisions. The Soviet people could not:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>worship as they pleased</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>own private property</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>express their views freely</span></p>
                        </li>
                    </ul>
                    <p dir="ltr"><span>Those who opposed or questioned Stalin risked imprisonment or death.&nbsp;</span></p><br />
                    <p dir="ltr"><span>*** Everyone is Equal ***&nbsp;</span></p>
                    <p dir="ltr"><span>Discuss:</span></p>
                    <p dir="ltr"><span>Teacher: Would you rather be in a society where equal is &ldquo;equal&rdquo; or a &ldquo;have and have nots&rdquo;?</span></p><br />
                    <p dir="ltr"><span>Notes:</span></p>
                    <p dir="ltr"><span>1945:&nbsp;</span></p>
                    <p dir="ltr"><span>The War is now over</span><span>Roosevelt has passed away and relations with the Soviet Union - one of the most important wartime allies - were beginning to break down&nbsp;</span></p><br />
                    <ol>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Europe is divided (iron curtain)&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>The U.S has an atomic bomb</span></p>
                            <ol>
                                <li aria-level="2" dir="ltr">
                                    <p dir="ltr"><span>USSR does not&nbsp;</span></p>
                                </li>
                            </ol>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Europe is destroyed from bombing during WWII&nbsp;</span></p>
                        </li>
                    </ol><br />
                    <p dir="ltr"><span>Cold War is the War of Words and ideas&nbsp;</span></p><br />
                    <p dir="ltr"><span>The US and USSR had different views of the world</span></p><br />
                    <p dir="ltr"><span>USA: Open markets to sell goods</span></p><br />
                    <p dir="ltr"><span>USSR: wanted security and to be safe</span></p>
                    <p dir="ltr"><span>Discuss:</span></p>
                    <p dir="ltr"><span>Teacher: Communism vs. Capitalism: How are they Different?</span></p><br />
                    <p dir="ltr"><span>Communism: a command economy where the government owns everything and rejects private property and person profit&hellip; supposedly everyone will be equal and will earn equal pay for similar jobs&nbsp;</span></p><br />
                    <p dir="ltr"><span>Capitalism: a political system in which factories, companies, land, etc. and are owned privately in order to create profits for the owners&hellip; the economy is based on competition and there be a gap between those who own and those who do not &nbsp;</span></p><br />
                    <p dir="ltr"><span>Discuss:&nbsp;</span></p>
                    <p dir="ltr"><span>Teacher: I am handing out a Venn diagram, Venn diagrams allow you to visually compare two topics, it also helps you to identify similarities. Today I would like you to compare and contrast capitalism and communism.&nbsp;</span></p>
                    <p dir="ltr"><span>Teacher: You have the rest of class to work on completing your Venn diagram. Venn diagrams allow you to visually compare two topics, it also allows you to identify similarities. I would like you fill out at least 3 reasons on each side and at least one similarity&nbsp;</span></p>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Closing</span><span>:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Last 20 minutes ** class will be used to work on Venn Diagrams comparing and *********** capitalism and communism&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Project Venn Diagram onto board and explain one difference between *** ********* and capitalism.&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Have students then complete the Venn diagram on their own</span></p>
                        </li>
                    </ul>
                    <p dir="ltr"><span>Teacher: There is about 5 minutes left of class does anyone have any questions about the differences between capitalism and communism? There is homework! There is a link available on schoology or I have a printed copy of the form up front. Please come get one if you do not have access to an iPad or computer</span></p><br />
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Plans for teaching generalization, maintenance and/or self-directed use of knowledge *** skills:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Explain to students why the use of a Venn diagram will help them compare how two ideas are different.&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Connect main ideas to student, i.e. &ldquo;</span><span>would you rather be in a society where everyone is &ldquo;equal&rdquo; or a &ldquo;have and have nots?&rdquo;</span></p>
                        </li>
                    </ul>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Student Academic Language:</span><span>&nbsp;List content-specific vocabulary you will use in your lesson.</span></p><br />
                    <p dir="ltr"><span>cold war - hot war - democracy - capitalism - open market&nbsp;</span></p>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Enrichment/Extension:</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Venn Diagram communism vs capitalism&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfnIqR0hmxrtyGiq4kj0AAb8O4NrGkiuErjWb81eUwShP7P3A/viewform?usp=sf_link"><span>Google Form</span></a><span>&nbsp;&ldquo;Is the U.S. currently a capitalist or communist country?&rdquo;</span></p>
                        </li>
                    </ul>
                </td>
                <td><br /></td>
            </tr>
            <tr>
                <td>
                    <p dir="ltr"><span>Universal Design for Learning (UDL)</span></p>
                </td>
                <td>
                    <p dir="ltr"><span>Multiple Means of Representation:</span></p>
                    <p dir="ltr"><span>How is content being presented so that it meets the needs of all students?&nbsp;</span></p>
                    <p dir="ltr"><span>List as bullet points here, then integrate into above categories titled Opening, Steps for Instruction, Closing, Assessment Tools + Data Collection Procedures.</span></p>
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Utilization ** AirPlay</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Modified notes&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Guided notes (notes available as hardcopy or for download on Ipad)&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Venn Diagram</span></p>
                        </li>
                    </ul><br />
                    <p dir="ltr"><span>Multiple Means of Engagement:</span></p>
                    <p dir="ltr"><span>How are multiple pathways provided for students to actually learn&nbsp;</span><span>the material presented? List the different ways students will be able to engage with the materials being presented. Incorporate student interest and preferred response modality. List as bullet points here, then integrate into above categories titled Opening, Steps for Instruction, Closing, Assessment Tools + Data Collection Procedures.</span></p><br />
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Students will participate in class lecture&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>GOOGLE Forms</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Venn Diagram</span></p>
                        </li>
                    </ul>
                    <p dir="ltr"><span>Mutiple Means of Expression:</span></p>
                    <p dir="ltr"><span>How will your students demonstrate what they have learned? List the different ways students will show their learning. (e.g. tiered assignments, oral exams, building a model, making a video, using portfolio assessment, student work samples) List as bullet points here, then integrate into above categories titled Opening, Steps for Instruction, Closing, Assessment Tools + Data Collection Procedures.</span></p><br />
                    <ul>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Student will complete Venn diagram with 3 comparisons on each side and at least one similarity&nbsp;</span></p>
                        </li>
                        <li aria-level="1" dir="ltr">
                            <p dir="ltr"><span>Students will use guided notes to complete the GOOGLE forms questions for homework</span></p>
                        </li>
                    </ul><br />
                </td>
                <td><br /></td>
            </tr>
        </tbody>
    </table>
</div>
<div align="left" dir="ltr"><br /></div>

    </div>
  );
}

export default App;
