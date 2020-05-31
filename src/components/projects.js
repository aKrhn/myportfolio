import React, { Component } from 'react' ;
import {Tabs, Tab, Grid,
				Cell, Card, CardTitle,
				Button, CardActions, CardMenu,
				IconButton, CardText} from 'react-mdl';
class Projects extends Component {
constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}
	toogleCatogories(){
		if( this.state.activeTab === 1 )
		{
			return(
				<Card shadow={5} style={{minWidht:'450', margin:'auto'}}>
					<CardTitle
						style={{color:'#fff', height: '170px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
						React Projects
					</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</CardText>
					<CardActions border>
						<Button colored>GitHub</Button>
						<Button colored>CodePen</Button>
						<Button colored>LiveDemo</Button>
					</CardActions>
					<CardMenu style={{color:'#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			)}

	if(this.state.activeTab === 1)
	{ return (<div><h1>HTML/CSS</h1></div>) }
	
	else if(this.state.activeTab === 2)
	{	return (<div><h1>JavaScript</h1></div>) }
	
	else if(this.state.activeTab === 3)
	{	return (<div><h1>NodeJS</h1></div>) }

	else if(this.state.activeTab === 4)
	{ return (<div><h1>NodeJS</h1></div>)} }

render() {
	return(
		<div className="category-tabs">
			<Tabs
				activeTab={this.state.activeTab}
				onChange={(tabId) => this.setState({ activeTab: tabId} )}
				ripple>
				<Tab>HTMl/CSS</Tab>
				<Tab>React</Tab>
				<Tab>JavaScript</Tab>
				<Tab>NodeJS</Tab>
			</Tabs>

			<section className="projects-grid">
				<Grid className="projects-grid">
					<Cell col={12}>
						<div className="content">
							{this.toogleCatogories()}
						</div>
					</Cell>
				</Grid>
			</section>
		</div>
		)
	}
}

export default Projects;