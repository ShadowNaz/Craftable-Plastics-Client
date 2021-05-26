

function Header() {
  return (
		<div id="header">
			<div class="wrapper">
				<div class="logo-header">
					<a id="header-skip-navigation" href="#content">Skip to Main Content</a>
					<a class="logo alt" data-track-event="Pages Show|Upper Nav Click|Panda Logo" href="https://www.worldwildlife.org/">WWF</a>
					<button class="control control-expand" data-track-event="Pages Show|Upper Nav Click|Toggle Dropdown Menu">
						<span class="screen-reader">Toggle Nav</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
							<path d="M18.07 7.94H5.93a.97.97 0 01-.68-.28.99.99 0 01-.25-.69c0-.28.08-.5.25-.7.2-.18.43-.27.68-.27h12.14c.25 0 .46.1.63.28.2.18.3.41.3.7 0 .27-.1.5-.3.68a.83.83 0 01-.63.28zm0 4.53H5.93a.97.97 0 01-.68-.28A1.1 1.1 0 015 11.5c0-.28.08-.5.25-.7a.9.9 0 01.68-.32h12.14c.25 0 .46.11.63.33.2.18.3.41.3.69 0 .25-.1.48-.3.7a.83.83 0 01-.63.27zm0 4.53H5.93a.97.97 0 01-.68-.28 1.16 1.16 0 01-.25-.74c0-.27.08-.5.25-.69.2-.18.43-.28.68-.28h12.14c.25 0 .46.1.63.28.2.18.3.42.3.7 0 .27-.1.52-.3.73a.83.83 0 01-.63.28z"></path>
						</svg>
					</button>
				</div>
				<div class="nav-content">
					<div class="dropdown">
						<div class="nav-items">
							<ul class="nav primary-nav">
								<li class="nav-item primary-nav-item">
									<button
										class="control control-accordion"
										aria-controls="primary-nav-panel-4"
										aria-expanded="false"
										data-track-event="Pages Show|Upper Nav Click|Toggle Our Work Dropdown Links"
										>
										<div class="nav-item-title-group">
											<div class="nav-item-title">
												<span class="screen-reader">Toggle</span>
												<span>Our Work</span>
												<span class="screen-reader">Dropdown Links</span>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
												<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
												<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
											</svg>
										</div>
									</button>
									<div class="nav-item-accordion-panel" id="primary-nav-panel-4" role="region" aria-label="Our Work" hidden>
										<div class="nav-item-accordion-inner nav-item-dropdown">
											<a class="nav-view-all" data-track-event="Pages Show|Upper Nav Click|Our Work - View all conservation work" href="https://www.worldwildlife.org/initiatives">
												View all conservation work
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M8.39 5.45c-.26.27-.39.61-.39 1.04 0 .4.13.74.39 1.04l4.28 4.49-4.28 4.5c-.26.29-.39.65-.39 1.07 0 .4.13.73.39 1s.58.41.96.41c.4 0 .73-.14.99-.4l5.27-5.54c.26-.3.39-.65.39-1.04 0-.42-.13-.77-.39-1.04l-5.27-5.53c-.26-.3-.6-.45-1-.45-.37 0-.7.15-.95.45z"></path>
												</svg>
											</a>
											<div class="nav-group-wrapper">
												<div class="nav-group primary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Climate" href="https://www.worldwildlife.org:443/initiatives/climate">Climate</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Food" href="https://www.worldwildlife.org:443/initiatives/food">Food</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Forests" href="https://www.worldwildlife.org:443/initiatives/forests">Forests</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Freshwater" href="https://www.worldwildlife.org/initiatives/fresh-water">Freshwater</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Oceans" href="https://www.worldwildlife.org:443/initiatives/oceans">Oceans</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Wildlife" href="https://www.worldwildlife.org:443/initiatives/wildlife-conservation">Wildlife</a></li>
													</ul>
												</div>
												<div class="nav-group secondary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Business" href="https://www.worldwildlife.org/initiatives/transforming-business">Business</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Policy" href="https://www.worldwildlife.org:443/initiatives/influencing-policy">Policy</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Partnerships" href="https://www.worldwildlife.org:443/pages/partnerships">Partnerships</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Our Work - Science" href="https://www.worldwildlife.org:443/initiatives/science">Science</a></li>
													</ul>
												</div>
											</div>
											<a class="view-all" data-track-event="Pages Show|Upper Nav Click|Our Work - View all conservation work" href="https://www.worldwildlife.org/initiatives">
												View all conservation work
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M15.67 11.24L9.8 5.34A.98.98 0 009.03 5c-.3 0-.54.11-.74.33-.2.2-.29.45-.29.75s.1.55.3.78l5.12 5.16-5.13 5.16c-.2.2-.29.46-.29.78A1.01 1.01 0 009.03 19c.32 0 .58-.1.78-.3l5.86-5.9c.22-.22.33-.48.33-.78 0-.3-.11-.56-.33-.78z"></path>
												</svg>
											</a>
										</div>
									</div>
								</li>
								<li class="nav-item primary-nav-item">
									<button
										class="control control-accordion"
										aria-controls="primary-nav-panel-113"
										aria-expanded="false"
										data-track-event="Pages Show|Upper Nav Click|Toggle People Dropdown Links"
										>
										<div class="nav-item-title-group">
											<div class="nav-item-title">
												<span class="screen-reader">Toggle</span>
												<span>People</span>
												<span class="screen-reader">Dropdown Links</span>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
												<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
												<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
											</svg>
										</div>
									</button>
									<div class="nav-item-accordion-panel" id="primary-nav-panel-113" role="region" aria-label="People" hidden>
										<div class="nav-item-accordion-inner nav-item-dropdown">
											<a class="nav-view-all" data-track-event="Pages Show|Upper Nav Click|People - View our inclusive approach to conservation" href="https://www.worldwildlife.org/people">
												View our inclusive approach to conservation
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M8.39 5.45c-.26.27-.39.61-.39 1.04 0 .4.13.74.39 1.04l4.28 4.49-4.28 4.5c-.26.29-.39.65-.39 1.07 0 .4.13.73.39 1s.58.41.96.41c.4 0 .73-.14.99-.4l5.27-5.54c.26-.3.39-.65.39-1.04 0-.42-.13-.77-.39-1.04l-5.27-5.53c-.26-.3-.6-.45-1-.45-.37 0-.7.15-.95.45z"></path>
												</svg>
											</a>
											<div class="nav-group-wrapper">
												<div class="nav-group primary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Humanitarian Partnerships" href="https://www.worldwildlife.org/partnership-categories/humanitarian-partnerships">Humanitarian Partnerships</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Local &amp; Indigenous Communities " href="https://www.worldwildlife.org/initiatives/community-development-and-indigenous-rights">Local &amp; Indigenous Communities </a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Racial Justice" href="https://www.worldwildlife.org/pages/wwf-speaks-out-on-racial-injustice">Racial Justice</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Safeguards" href="https://www.worldwildlife.org/pages/wwf-s-environmental-and-social-safeguards-framework">Safeguards</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Social Policies" href="https://www.worldwildlife.org/pages/wwf-s-commitment-to-local-and-indigenous-communities">Social Policies</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Women &amp; Girls" href="https://www.worldwildlife.org/initiatives/empower-women-and-girls">Women &amp; Girls</a></li>
													</ul>
												</div>
												<div class="nav-group secondary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Our Experts" href="https://www.worldwildlife.org/experts/directory">Our Experts</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Our Leaders" href="https://www.worldwildlife.org/about/leadership">Our Leaders</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|People - Work at WWF" href="https://www.worldwildlife.org/about/careers">Work at WWF</a></li>
													</ul>
												</div>
											</div>
											<a class="view-all" data-track-event="Pages Show|Upper Nav Click|People - View our inclusive approach to conservation" href="https://www.worldwildlife.org/people">
												View our inclusive approach to conservation
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M15.67 11.24L9.8 5.34A.98.98 0 009.03 5c-.3 0-.54.11-.74.33-.2.2-.29.45-.29.75s.1.55.3.78l5.12 5.16-5.13 5.16c-.2.2-.29.46-.29.78A1.01 1.01 0 009.03 19c.32 0 .58-.1.78-.3l5.86-5.9c.22-.22.33-.48.33-.78 0-.3-.11-.56-.33-.78z"></path>
												</svg>
											</a>
										</div>
									</div>
								</li>
								<li class="nav-item primary-nav-item">
									<button
										class="control control-accordion"
										aria-controls="primary-nav-panel-2"
										aria-expanded="false"
										data-track-event="Pages Show|Upper Nav Click|Toggle Places Dropdown Links"
										>
										<div class="nav-item-title-group">
											<div class="nav-item-title">
												<span class="screen-reader">Toggle</span>
												<span>Places</span>
												<span class="screen-reader">Dropdown Links</span>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
												<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
												<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
											</svg>
										</div>
									</button>
									<div class="nav-item-accordion-panel" id="primary-nav-panel-2" role="region" aria-label="Places" hidden>
										<div class="nav-item-accordion-inner nav-item-dropdown">
											<a class="nav-view-all" data-track-event="Pages Show|Upper Nav Click|Places - View all WWF priority places" href="https://www.worldwildlife.org:443/places">
												View all WWF priority places
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M8.39 5.45c-.26.27-.39.61-.39 1.04 0 .4.13.74.39 1.04l4.28 4.49-4.28 4.5c-.26.29-.39.65-.39 1.07 0 .4.13.73.39 1s.58.41.96.41c.4 0 .73-.14.99-.4l5.27-5.54c.26-.3.39-.65.39-1.04 0-.42-.13-.77-.39-1.04l-5.27-5.53c-.26-.3-.6-.45-1-.45-.37 0-.7.15-.95.45z"></path>
												</svg>
											</a>
											<div class="nav-group-wrapper">
												<div class="nav-group primary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Amazon" href="https://www.worldwildlife.org:443/places/amazon">Amazon</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Arctic" href="https://www.worldwildlife.org:443/places/arctic">Arctic</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Borneo and Sumatra" href="https://www.worldwildlife.org:443/places/borneo-and-sumatra">Borneo and Sumatra</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Congo Basin" href="https://www.worldwildlife.org:443/places/congo-basin">Congo Basin</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Coral Triangle" href="https://www.worldwildlife.org:443/places/coral-triangle">Coral Triangle</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Eastern Himalayas" href="https://www.worldwildlife.org:443/places/eastern-himalayas">Eastern Himalayas</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - The Galapagos " href="https://www.worldwildlife.org:443/places/the-galapagos">The Galapagos </a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Northern Great Plains" href="https://www.worldwildlife.org:443/places/northern-great-plains">Northern Great Plains</a></li>
													</ul>
												</div>
												<div class="nav-group secondary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Travel with WWF" href="https://www.worldwildlife.org:443/travel">Travel with WWF</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Habitats" href="https://www.worldwildlife.org:443/habitats">Habitats</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Places - Our Work Conserving Places" href="https://www.worldwildlife.org:443/initiatives/conserving-places">Our Work Conserving Places</a></li>
													</ul>
												</div>
											</div>
											<a class="view-all" data-track-event="Pages Show|Upper Nav Click|Places - View all WWF priority places" href="https://www.worldwildlife.org:443/places">
												View all WWF priority places
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M15.67 11.24L9.8 5.34A.98.98 0 009.03 5c-.3 0-.54.11-.74.33-.2.2-.29.45-.29.75s.1.55.3.78l5.12 5.16-5.13 5.16c-.2.2-.29.46-.29.78A1.01 1.01 0 009.03 19c.32 0 .58-.1.78-.3l5.86-5.9c.22-.22.33-.48.33-.78 0-.3-.11-.56-.33-.78z"></path>
												</svg>
											</a>
										</div>
									</div>
								</li>
								<li class="nav-item primary-nav-item">
									<button
										class="control control-accordion"
										aria-controls="primary-nav-panel-1"
										aria-expanded="false"
										data-track-event="Pages Show|Upper Nav Click|Toggle Wildlife Dropdown Links"
										>
										<div class="nav-item-title-group">
											<div class="nav-item-title">
												<span class="screen-reader">Toggle</span>
												<span>Wildlife</span>
												<span class="screen-reader">Dropdown Links</span>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
												<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
												<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
											</svg>
										</div>
									</button>
									<div class="nav-item-accordion-panel" id="primary-nav-panel-1" role="region" aria-label="Wildlife" hidden>
										<div class="nav-item-accordion-inner nav-item-dropdown">
											<a class="nav-view-all" data-track-event="Pages Show|Upper Nav Click|Wildlife - View species" href="https://www.worldwildlife.org/species">
												View species
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M8.39 5.45c-.26.27-.39.61-.39 1.04 0 .4.13.74.39 1.04l4.28 4.49-4.28 4.5c-.26.29-.39.65-.39 1.07 0 .4.13.73.39 1s.58.41.96.41c.4 0 .73-.14.99-.4l5.27-5.54c.26-.3.39-.65.39-1.04 0-.42-.13-.77-.39-1.04l-5.27-5.53c-.26-.3-.6-.45-1-.45-.37 0-.7.15-.95.45z"></path>
												</svg>
											</a>
											<div class="nav-group-wrapper">
												<div class="nav-group primary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Giant Pandas" href="https://www.worldwildlife.org:443/species/giant-panda">Giant Pandas</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Tigers" href="https://www.worldwildlife.org:443/species/tiger">Tigers</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Elephants" href="https://www.worldwildlife.org:443/species/elephant">Elephants</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Gorillas" href="https://www.worldwildlife.org:443/species/gorilla">Gorillas</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Sea Turtles" href="https://www.worldwildlife.org:443/species/sea-turtle">Sea Turtles</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Polar Bears" href="https://www.worldwildlife.org:443/species/polar-bear">Polar Bears</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Rhinos" href="https://www.worldwildlife.org:443/species/rhino">Rhinos</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Whales" href="https://www.worldwildlife.org:443/species/whale">Whales</a></li>
													</ul>
												</div>
												<div class="nav-group secondary">
													<ul>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Animal Trivia Games" href="https://www.worldwildlife.org:443/pages/animal-trivia-games">Animal Trivia Games</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Symbolically Adopt an Animal" href="https://gifts.worldwildlife.org/gift-center/Default.aspx?sc=AWY1904OQ19068A02866RX">Symbolically Adopt an Animal</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Endangered Species" href="https://www.worldwildlife.org:443/species/directory?sort=extinction_status&amp;direction=desc">Endangered Species</a></li>
														<li><a class="nav-link" data-track-event="Pages Show|Upper Nav Click|Wildlife - Educational Resources" href="https://www.worldwildlife.org/teaching-resources">Educational Resources</a></li>
													</ul>
												</div>
											</div>
											<a class="view-all" data-track-event="Pages Show|Upper Nav Click|Wildlife - View species" href="https://www.worldwildlife.org/species">
												View species
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
													<path d="M15.67 11.24L9.8 5.34A.98.98 0 009.03 5c-.3 0-.54.11-.74.33-.2.2-.29.45-.29.75s.1.55.3.78l5.12 5.16-5.13 5.16c-.2.2-.29.46-.29.78A1.01 1.01 0 009.03 19c.32 0 .58-.1.78-.3l5.86-5.9c.22-.22.33-.48.33-.78 0-.3-.11-.56-.33-.78z"></path>
												</svg>
											</a>
										</div>
									</div>
								</li>
							</ul>
							<div class="utility-search-ctas">
								<ul class="nav utility-nav">
									<li class="nav-item">
										<button
											class="control control-accordion"
											aria-controls="utility-nav-panel-49"
											aria-expanded="false"
											data-track-event="Pages Show|Upper Nav Click|Toggle About Dropdown Links"
											>
											<div class="nav-item-title-group">
												<div class="nav-item-title">
													<span class="screen-reader">Toggle</span>
													<span>About</span>
													<span class="screen-reader">Dropdown Links</span>
												</div>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
													<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
													<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
												</svg>
											</div>
										</button>
										<div class="nav-item-accordion-panel" id="utility-nav-panel-49" role="region" aria-label="About" hidden>
											<div class="nav-item-accordion-inner nav-item-dropdown">
												<div class="nav-group utility">
													<ul>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Who We Are" href="https://www.worldwildlife.org/about/">
															<span>Who We Are</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - History" href="https://www.worldwildlife.org:443/about/history">
															<span>History</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Leadership" href="https://www.worldwildlife.org:443/about/leadership">
															<span>Leadership</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Experts" href="https://www.worldwildlife.org/experts/directory">
															<span>Experts</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Our Values" href="https://www.worldwildlife.org/pages/our-values">
															<span>Our Values</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Independent Review" href="https://www.worldwildlife.org/pages/embedding-human-rights-in-conservation">
															<span>Independent Review</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - News &amp; Press" href="https://www.worldwildlife.org:443/about/news_press">
															<span>News &amp; Press</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Financials" href="https://www.worldwildlife.org:443/about/financials">
															<span>Financials</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Careers" href="https://www.worldwildlife.org:443/about/careers">
															<span>Careers</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|About - Contact" href="https://www.worldwildlife.org:443/about/contact">
															<span>Contact</span>
															</a>															
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li class="nav-item">
										<button
											class="control control-accordion"
											aria-controls="utility-nav-panel-50"
											aria-expanded="false"
											data-track-event="Pages Show|Upper Nav Click|Toggle How to help Dropdown Links"
											>
											<div class="nav-item-title-group">
												<div class="nav-item-title">
													<span class="screen-reader">Toggle</span>
													<span>How to help</span>
													<span class="screen-reader">Dropdown Links</span>
												</div>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
													<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
													<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
												</svg>
											</div>
										</button>
										<div class="nav-item-accordion-panel" id="utility-nav-panel-50" role="region" aria-label="How to help" hidden>
											<div class="nav-item-accordion-inner nav-item-dropdown">
												<div class="nav-group utility">
													<ul>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Get Involved" href="https://worldwildlife.org/how-to-help">
															<span>Get Involved</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Take Action" href="https://support.worldwildlife.org/site/SPageServer?pagename=can_home">
															<span>Take Action</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Get Email" href="https://support.worldwildlife.org/site/SPageServer/?pagename=enews_signup">
															<span>Get Email</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Fundraise" href=" https://support.worldwildlife.org/site/SPageServer/?pagename=panda_nation_fundraising">
															<span>Fundraise</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Send Ecards" href="https://support.worldwildlife.org/site/SPageServer/?pagename=WWF_Free_Ecards">
															<span>Send Ecards</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Travel with WWF" href="https://www.worldwildlife.org:443/travel">
															<span>Travel with WWF</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - Gift &amp; Estate Planning" href="https://wwf.planmylegacy.org/">
															<span>Gift &amp; Estate Planning</span>
															</a>															
														</li>
														<li>
															<a class="nav-link" data-track-event="Pages Show|Upper Nav Click|How to help - See Other Ways to Support WWF" href="https://www.worldwildlife.org:443/pages/ways-to-support-wwf">
															<span>See Other Ways to Support WWF</span>
															</a>															
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
								<div class="search">
									<button
										class="search-btn"
										aria-controls="nav-search"
										aria-expanded="false"
										>
										<span class="screen-reader">Search</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
											<path d="M17.82 16.18l-2.42-2.41c.54-.87.8-1.78.8-2.72 0-1.4-.5-2.59-1.5-3.56A4.87 4.87 0 0011.12 6c-1.42 0-2.64.5-3.64 1.49A4.82 4.82 0 006 11.05a5.03 5.03 0 005.12 5.03c.93 0 1.79-.24 2.57-.72l2.5 2.46c.23.24.5.24.77 0l.86-.87c.12-.1.18-.23.18-.39a.48.48 0 00-.18-.38zm-9.14-2.72a3.26 3.26 0 01-1.02-2.4c0-.95.34-1.75 1.02-2.42.67-.67 1.48-1 2.44-1 .95 0 1.75.33 2.41 1a3.26 3.26 0 011.02 2.41c0 .94-.34 1.74-1.02 2.41a3.3 3.3 0 01-2.41.98 3.4 3.4 0 01-2.44-.98z"></path>
										</svg>
									</button>
									<div class="search-dropdown" id="nav-search" role="region" aria-label="Search" hidden>
										<form
											class="nav-item-accordion-inner nav-item-dropdown"
											action="https://www.worldwildlife.org/search"
											id="cse-search-box-2"
											data-track-event="Pages Show|Upper Nav Click|Search Submitted"
											>
											<div class="form-inline">
												<input type="hidden" name="cx" value="003443374396369277624:v3nraqhmeyk" />
												<input type="hidden" name="ie" value="UTF-8" />
												<label for="mobile-q">Search</label>
												<input type="text" name="x" id="mobile-q" placeholder="Type to search..." />
												<button name="sa" type="submit">
													<span class="screen-reader">Submit Search</span>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon ">
														<path d="M17.82 16.18l-2.42-2.41c.54-.87.8-1.78.8-2.72 0-1.4-.5-2.59-1.5-3.56A4.87 4.87 0 0011.12 6c-1.42 0-2.64.5-3.64 1.49A4.82 4.82 0 006 11.05a5.03 5.03 0 005.12 5.03c.93 0 1.79-.24 2.57-.72l2.5 2.46c.23.24.5.24.77 0l.86-.87c.12-.1.18-.23.18-.39a.48.48 0 00-.18-.38zm-9.14-2.72a3.26 3.26 0 01-1.02-2.4c0-.95.34-1.75 1.02-2.42.67-.67 1.48-1 2.44-1 .95 0 1.75.33 2.41 1a3.26 3.26 0 011.02 2.41c0 .94-.34 1.74-1.02 2.41a3.3 3.3 0 01-2.41.98 3.4 3.4 0 01-2.44-.98z"></path>
													</svg>
												</button>
											</div>
										</form>
									</div>
								</div>
								<ul class="nav nav-actions -split">
									<li class="nav-item">
										<div class="action action-primary">
											<a class="action-link" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&amp;s_src=AWE2104OQ18299A01180RX">
											Donate
											</a>
											<button
												class="control control-accordion"
												aria-controls="action-nav-2-panel-70"
												aria-expanded="false"
												data-track-event="Pages Show|Upper Nav Click|Toggle Donate Dropdown Links"
												>
												<span class="screen-reader">Toggle Donate button </span>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
													<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
													<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
												</svg>
											</button>
											<div class="nav-item-accordion-panel" id="action-nav-2-panel-70" role="region" aria-label="Donate" hidden>
												<div class="nav-item-accordion-inner nav-item-dropdown">
													<ul>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Donate - Make a One-time Donation" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_onetime&amp;s_src=AWE2012OQ18336A01562RX">
															<span>Make a One-time Donation</span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Donate - Make a Monthly Donation" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&amp;s_src=AWE2012OQ18336A01563RX">
															<span>Make a Monthly Donation</span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Donate - Donate in Someone&#39;s Name" href="https://support.worldwildlife.org/site/Donation2?df_id=13830&amp;13830.donation=form1&amp;s_src=AWE2106OQ18336A05098RX">
															<span>Donate in Someone&#39;s Name</span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Donate - Renew Your Membership" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_renewal&amp;s_src=AWR2012OQ18336A01571RX">
															<span>Renew Your Membership</span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Donate - Join as a Partner in Conservation" href="https://worldwildlife.org/pages/partners-in-conservation">
															<span>Join as a Partner in Conservation</span>
															</a>															
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li class="nav-item">
										<div class="action action-secondary">
											<a class="action-link" href="https://gifts.worldwildlife.org/gift-center/Default.aspx?sc=AWY2106OQ18317A01179RX">
											Adopt
											</a>
											<button
												class="control control-accordion"
												aria-controls="action-nav-2-panel-71"
												aria-expanded="false"
												data-track-event="Pages Show|Upper Nav Click|Toggle Adopt Dropdown Links"
												>
												<span class="screen-reader">Toggle Adopt button </span>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -open">
													<path d="M12 2c-.5 0-.9.4-.9.9v8.17H2.93a.93.93 0 000 1.86h8.17v8.17a.9.9 0 101.8 0v-8.17h8.17a.93.93 0 000-1.86H12.9V2.9c0-.5-.4-.9-.9-.9z"></path>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="svg-icon -close">
													<path d="M2.93 11.07h18.14a.93.93 0 110 1.86H2.93a.93.93 0 010-1.86z"></path>
												</svg>
											</button>
											<div class="nav-item-accordion-panel" id="action-nav-2-panel-71" role="region" aria-label="Adopt" hidden>
												<div class="nav-item-accordion-inner nav-item-dropdown">
													<ul>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Adopt - Adoptions" href="https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions.aspx?sc=AWY2012OQ18335A02071RX">
															<span>Adoptions</span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Adopt - T-Shirts " href="https://gifts.worldwildlife.org/gift-center/gifts/Apparel.aspx?sc=AWY2012OQ18335A03843RX">
															<span>T-Shirts </span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Adopt - Socks" href="https://gifts.worldwildlife.org/gift-center/gifts/Apparel/Sack-of-Socks.aspx?sc=AWY2012OQ18335A03842RX">
															<span>Socks</span>
															</a>															
														</li>
														<li>
															<a data-track-event="Pages Show|Upper Nav Click|Adopt - More Gifts" href="https://gifts.worldwildlife.org/gift-center/gifts/Gifts-and-Accessories.aspx?sc=AWY2012OQ18335A02073RX">
															<span>More Gifts</span>
															</a>															
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Header;