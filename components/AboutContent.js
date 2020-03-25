import React from 'react';
import { useSpring, animated } from 'react-spring';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 3) / 20, 1.1]
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function AboutContent() {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 4, tension: 350, friction: 40 } }));


    return (
        <div>
					<div className="bio">
						
						
						<p id="texte-presentation">
							
							Autodidacte et passionné par le développement web depuis quelques années, j'ai déja créé quelques projets personnels en React.
							Motivé par le besoin de me surpasser, je n'ai pas peur de relever de nouveaux défis et j'aimerais confirmer ces acquis dans un poste 
							qui saura répondre à mes attentes.
							 <br />

							 <br />
							 Avide de nouvelles aventures et expériences. Je suis parti un an, seul, en Nouvelle-Zélande effectuer un <a href="https://pvtistes.net/">PVT</a>  
							 en 2016/2017 afin d'améliorer mon Anglais et de découvrir ce magnifique pays. 
							 <br />
							 <br />

							 À côté de ça,  je suis un grand passionné par les jeux vidéo
							 (petite préférence pour les jeux  indies), l'astronomie et collectionneur de vinyles.
							 <br />
							 <br />
							Actuellement en recherche d'emploi dans l'intégration / développement web.
							  <br />
						 </p>
					</div>
					<div className="clear"></div>		
				</div>
    );

}

export default AboutContent