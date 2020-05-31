import React, { Component } from 'react' ;
import {Grid , Cell , ListItemContent , ListItem , List } from 'react-mdl';
class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>M.Abdullah KARAHAN</h2>
						<img
							src="https://png.pngtree.com/element_our/png_detail/20180904/avatar-male-icon-design-vector-png_76403.jpg"
							alt="avatar"
							style={{ height: '225px'}}
						/>
						<p
							style={{width : '95%',
											margin : 'auto',
											paddingTop : '0em'}}
						>
						Merhaba ben Abdullah.HTML,CSS ve JavaScript biliyorum.React öğreniyorum ve front-end web developer olarak kendimi geliştirmek istiyorum.Takım çalışmasına yatkınım ve oldukça gençliğin de getirdiği bir enerji ve öğrenme arzusu ile doluyum.C2 düzey ingilizce biliyorum.Sosyal bilimler lisesi mezunu olduğumdan zaten hazırlık eğitimi almıştım yani İngilizce benim temelden yıllar evvel öğrendiğim bir dil.Şu an okuduğum üniversitede de %100 İngilizce eğitim görüyorum.Kariyer gelişimimi önyüz geliştiricisi olarak devam ettirmek istiyorum.
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
									<hr/>
							<List>
								<ListItem>
									<ListItemContent
										style={{fontSize:'25px', fontfamily: 'Oxygen'}}>
			    				<i className="fa fa-phone-square" aria-hidden="true" />
					    			M.Abdullah Karahan
					    			0548216942
					    		</ListItemContent>
			    			</ListItem>
			  				<ListItem>
			    				<ListItemContent
			    					style={{fontSize:'25px' , fontfamily: 'Oxygen'}}>
			    				<i class="fa fa-address-card" aria-hidden="true" />
			    					Yusuf Karahan
			    					Mesrut street.Çankaya
			    				</ListItemContent>
			  				</ListItem>
			  				<ListItem>
			  					<ListItemContent
			  						style={{fontSize:'25px' , fontfamily: 'Oxygen'}}>
			    				<i className="fa fa-envelope" aria-hidden="true"/>
			    					Selçuk Özyurt
			    					selasd@asdmşsad.com
			    				</ListItemContent>
							  </ListItem>
							  <ListItem>
								  <ListItemContent
								  	style={{fontSize:'25px' , fontfamily: 'Oxygen'}}>
								    <i className="fa fa-fax" aria-hidden="true"/>
								    	Yaren Yılmaz
								    	0548216942
								  </ListItemContent>
							  </ListItem>
							</List>
					</Cell>
				</Grid>
			</div>
	)
}
};

export default Contact;