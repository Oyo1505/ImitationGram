import React, { Component } from 'react';


class Experience extends Component{
	render(){
		return(
			<section id='experiences'>	
					<p className="meta-title">mon parcours</p>								
					<h1 className="title-section">Expériences</h1>
					<div className="experience">
							 <h3>Technicien de support informatique</h3>
							 <p><span className='icon icon-placeholder'></span> Romainville - UTB - Juin 2019 / - </p>
							 <p>Technicien Helpdesk informatique Demande de service via un outil de ticketing (Jira) :
							 
							 </p>
						 </div>
						 <hr />
						<div className="experience">
							 <h3>Technicien de support téléphonie</h3>
							 <p><span className='icon icon-placeholder'></span> Paris - Nextiraone Experts - Avril 2018 / Juin 2019</p>
							 <p>Technicien Helpdesk de poste téléphonique Alcatel Demande de service via un outil de ticketing: création/suppression/modification de ligne. Mise en place de groupe d’entraide, création de poste agent et d’ACD. Gestion d’incidents de N1. 
							 	<br/>
								- Intégration web (5 mois) : Site Wordpress, responsive design, mise en place de widgets, intégration de maquette.
								</p>
						 </div>
						 <hr />
						 <div className="experience">
						 	<h3>Working Holiday en Nouvelle-Zélande</h3>
						 	<p><span className='icon icon-placeholder'></span> Auckland - Avril 2016 / Mars 2017 </p>
						 	<p> PVT de un an en Nouvelle-Zélande, principalement de l’intérim en tant que manœuvre, peintre en bâtiment, paysagiste et  du bénévolat chez l'habitant via le réseaux Helpx.</p>
						 </div>
						 <hr />
						 <div className="experience">
							  <h3>Stagiaire Technicien réseau informatique</h3>
							  <p><span className='icon icon-placeholder'></span> Paris - Musée des arts décoratifs - 2014 </p>
							  <p>Configuration de borne wi-fi, Installation et maintenance de PC,  configuration de rétroprojecteur. Fabrication de câble Ethernet, Mise en place de script réseau. </p>
						 </div>	

				</section>
			);
	}
}

export default Experience