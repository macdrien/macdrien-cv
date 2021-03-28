import linkedinLogo from "../images/linkedin-3-32.png";
import githubLogo from "../images/GitHub-Mark-Light-32px.png";

import './Header.css';

export default function Header() {
    return <header>
        <div className="headerAndLinks">
            <h1>Adrien Bouyssou</h1>

            <ul className="links">
                <li><a href="https://www.linkedin.com/in/adrien-bouyssou-0b326b14b/"><img src={linkedinLogo}
                                                                                          alt="Logo LinkedIn"/></a>
                </li>
                <li>adrien.bouyssou@sidranie.fr</li>
                <li><a href="https://github.com/macdrien"><img src={githubLogo} alt="Logo GitHub"/></a></li>
            </ul>
        </div>
        <p className="description">
            D'aucuns parleraient de jeune cadre dynamique. Apprenti ingénieur en informatique chez <em>Eiffage Energie
            Systèmes Clemessy</em>, la programmation s'est imposée à moi comme ma plus grande passion il y a maintenant
            plus de 5 ans. Investi dans ce que j'entreprends, j'ai traversé la France afin de passer mon diplôme
            d'ingénieur. Ouvert à l'échange et désireux d'en apprendre toujours plus sur un sujet, je suis toujours à la
            recherche de nouveaux défis qui viendront enrichir mon expérience et affûter mes capacités de programmation
            et
            d'adaptation.<br/>
            Ayant toujours étudié le <strong>Java</strong>, à l'école et pendant mon apprentissage, il est aujourd'hui
            mon
            langage de prédilection pour construire des APIs HTTP.<br/>
            <strong>Python</strong> m'accompagne également dans la création de scripts ou dans mon perfectionnement de
            l'algorithmie, en particulier sur <a href="https://www.codewars.com/users/macdrien">CodeWars.com</a> où il
            m'a
            permis d'atteindre le 5ème kyu.
        </p>
    </header>;
}