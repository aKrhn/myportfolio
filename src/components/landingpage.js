import React, { Component } from 'react' ;
import {Grid , Cell } from 'react-mdl' ;

class Landing extends Component {
	render() {
		return(
			<div style={{width:' %100 ' , margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://ya-webdesign.com/images/avatar-png-icon-6.png"
							alt="avatar"
							className="avatar-img"
						/>
			<div className="banner-text">
				<hr1>Young,Eager Web Devoloper</hr1>
								<hr/>
				<p> HTML/CSS || JavaScript || React || NodeJS </p>

			<div className="social-links">
				{/*Github*/}
				<a href="https://github.com/abdllhkarahan/portfolio"  rel="noopener noreferrer" target="_blank">
				<i class="fab fa-git-square"></i>
					{/*Instagram*/}
				</a>
				<a href="https://www.instagram.com/abdllh.karahan/?hl=tr"  rel="noopener noreferrer" target="_blank">
					<i class="fab fa-instagram"></i>
					{/*FreeCodeCamp*/}
				</a>
				<a href="https://www.freecodecamp.org" rel="noopener noreferrer" target="_blank">
					<i class="fab fa-free-code-camp"></i>
				</a>
			</div>
			</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;