import githubLogo from './images/GitHub-Mark-Light-32px.png';
import linkedinLogo from './images/linkedin-3-32.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="headerAndLinks">
          <h1>Adrien Bouyssou</h1>

          <ul className="links">
            <li><a href="https://www.linkedin.com/in/adrien-bouyssou-0b326b14b/"><img src={linkedinLogo} alt="Logo LinkedIn"/></a>
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
          recherche de nouveaux défis qui viendront enrichir mon expérience et affûter mes capacités de programmation et
          d'adaptation.<br/>
          Ayant toujours étudié le <strong>Java</strong>, à l'école et pendant mon apprentissage, il est aujourd'hui mon
          langage de prédilection pour construire des APIs HTTP.<br/>
          <strong>Python</strong> m'accompagne également dans la création de scripts ou dans mon perfectionnement de
          l'algorithmie, en particulier sur <a href="https://www.codewars.com/users/macdrien">CodeWars.com</a> où il m'a
          permis d'atteindre le 5ème kyu.
        </p>
      </header>

      <section id="expePro">
        <h2>Expériences professionnelles</h2>

        <article>
          <div className="mainArticlePart">
            <h3>Apprenti ingénieur en Informatique</h3>
            <h4>Eiffage Energie Systèmes Clemessy</h4>

            <p>
              <em>Eiffage Energie Systèmes</em> m'a accueilli à Mulhouse (68) en septembre 2018 en tant qu'entreprise
              d'apprentissage. C'est dans cette branche du groupe <em>Eiffage</em> que j'ai pu progresser jusqu'à mon
              niveau actuel en <strong>Java 8+</strong> et en <strong>Git</strong>.<br/>
              Au cours de ces trois années d'alternance qui touchent à leur terme, j'ai eu l'occasion de travailler sur
              divers projets, principalement en <strong>Java</strong> - mon langage de prédilection - mais également
              en <strong>C#</strong> avec du <strong>.NET3.5</strong> et en <strong>ReactJS</strong>.<br/>
              Fort de son expérience et de sa notoriété, <em>EES-Clemessy</em> m'a donné l'opportunité de travailler
              pour des clients de renoms comme le <em>Groupe PSA</em> et <em>Faurecia</em> par exemple.
            </p>
          </div>

          <aside>
            <h4>Informations</h4>

            <div className="subSections">
              <div className="asideSection firstAsideSection">
                <h5 className="asideTitle">Dates :</h5>
                <p className="asideContent">sept. 2018 - août 2021</p>
              </div>

              <div className="asideSection asideList">
                <h5 className="asideTitle asideListTitle">Technologies :</h5>
                <div className="asideContent asideListContent">
                  <ul>
                    <li>- Java 8+</li>
                    <li>- Spring</li>
                    <li>- .NET 3.5</li>
                    <li>- ReactJS</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </article>

        <article>
          <div className="mainArticlePart">
            <h3>Stage en Informatique</h3>
            <h4>Sinafis</h4>

            <p>
              C'est dans l'objectif de réaliser un stage de fin de DUT que j'ai intégré la startup castraise
              (81) <em>Sinafis</em> en avril 2018.
              Produisant des outils de mesure d'humectation et de température du sol et de l'air, cette société m'a
              donné l'occasion de travailler en <strong>PHP</strong>, <strong>HTML</strong> et <strong>CSS</strong> pour
              créer des écrans de gestion qui sont utilisés par ses clients afin qu'ils puissent consulter les mesures
              faites par leurs capteurs.<br/>
              C'est dans cette société que j'ai pu découvrir les notions communes du protocole HTTP au travers de la
              communication avec l'API HTTP de la société <em>Sigfox</em>.
            </p>
          </div>

          <aside>
            <h4>Informations</h4>

            <div className="subSections">
              <div className="asideSection firstAsideSection">
                <h5 className="asideTitle">Dates :</h5>
                <p className="asideContent">avril 2018 - mai 2018</p>
              </div>

              <div className="asideSection asideList">
                <h5 className="asideTitle asideListTitle">Technologies :</h5>
                <div className="asideContent asideListContent">
                  <ul>
                    <li>- HTML/CSS</li>
                    <li>- PHP</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </article>
      </section>

      <section id="expePerso">
        <h2>Expériences personnelles</h2>

        <article>
          <div className="mainArticlePart">
            <h3>Ace Printwear</h3>
            <h4>Torquay</h4>

            <p>
              Pour devenir ingénieur, il est nécessaire de passer au moins 3 mois dans un autre pays en semestre d'étude
              ou en stage en entreprise. De mon côté, j'ai eu l'occasion d'aller travailler chez <em>Ace Printwear</em>,
              une entreprise de personnalisation de vêtements à Torquay, au cœur de l'English Riviera. En plus d'être
              une expérience très intéressante du fait de ma découverte d'un nouveau métier, ces trois mois m'ont
              beaucoup apporté.<br/>
              En premier lieu, le contact avec la langue anglaise au cœur du pays ainsi que les nombreux touristes
              estivaux que j'ai pu recevoir dans la boutique m'ont permis de beaucoup progresser en anglais jusqu'à
              valider mon niveau B2 dans cette langue (niveau minimal demandé pour devenir ingénieur) via le test
              Linguaskills (anciennement BULATS).<br/>
              De plus, pendant cette mission de 3 mois, j'ai pu de voir de l'intérieur la culture anglaise et
              l'apprécier à sa juste valeur au travers de différentes visites comme celles de Bristol, Totnes ou encore
              de la Greenway House d'Agatha Christie.
            </p>
          </div>

          <aside>
            <h4>Informations</h4>

            <div className="subSections">
              <div className="asideSection firstAsideSection">
                <h5 className="asideTitle">Dates :</h5>
                <p className="asideContent">mai 2019 - août 2019</p>
              </div>
              <div className="asideSection">
                <h5 className="asideTitle">Région :</h5>
                <p className="asideContent">Devon,<br/> Sud-Ouest de l'Angleterre</p>
              </div>
            </div>
          </aside>
        </article>

        <article>
          <div className="mainArticlePart">
            <h3>App's Challenge</h3>
            <h4>Equipe gagnante</h4>

            <p>
              En octobre 2017, un professeur de l'<em>IUT de Rodez</em> nous a proposé un travail à faire en équipe. Cet
              énoncé provenait d'un concours local pour lequel nous avons pu participer. Il s'agissait d'un concours de
              conception d'application. C'est ainsi que nous avons imaginé un jeu mobile de gestion, à plusieurs
              échelles, d'infrastructure (maison, quartier, ville, ...) dont le but était de limiter l'impact de ces
              infrastructures sur l'environnement.<br/>
              Après quelques semaines, mon équipe apprit que nous étions, avec 2 autres équipes de notre promotion,
              parmi les finalistes du concours. Nous nous sommes donc rendu, un soir de novembre, au sein du salon <em>On
              Innov'</em> devant un jury composé de personnalités locales mais néanmoins importantes pour présenter
              notre projet. C'est ce soir-là que notre travail fut récompensé par la première place du concours.
            </p>
          </div>

          <aside>
            <h4>Informations</h4>


            <div className="subSections">
              <div className="asideSection firstAsideSection">
                <h5 className="asideTitle">Dates :</h5>
                <p className="asideContent">oct. 2017 - nov. 2017</p>
              </div>
              <div className="asideSection">
                <h5 className="asideTitle">Lieu :</h5>
                <p className="asideContent">Onêt-Le-Chateau (12176),<br/> Aveyron</p>
              </div>
            </div>
          </aside>
        </article>
      </section>

      <section id="etudes">
        <h2>Etudes</h2>

        <article>
          <div className="mainArticlePart">
            <h3>Apprenti ingénieur Informatique et Systèmes d'Informations</h3>
            <h4>Université de Technologie de Belfort-Montéliard</h4>

            <p>
              Suite à mon DUT, je voulais poursuivre mes études afin de devenir ingénieur en informatique. C'est
              pourquoi j'ai intégré l'UTBM en tant qu'alternant. Cette école, à l'opposé de ma région d'origine, m'a
              attiré par sa bonne réputation, tant au niveau national qu'au sein de mon ancien IUT. Suite à deux années
              d'apprentissage des fondamentaux, j'ai pu passer trois ans à développer mes compétences à la fois
              techniques et sociales. Cette école m'a donné de nombreuses opportunités. La plus marquante pour moi
              restera indéniablement mon séjour de 3 mois en Angleterre (cf. <a href="#expePerso">expériences
              personnelles</a>).<br/>
              Les projets pour lesquels j'ai pu travailler furent également particulièrement instructifs. Certains m'ont
              permis de tester mes compétences. D'autres, au contraire, furent l'occasion de découvrir de nouveaux
              domaines de programmation.
            </p>
          </div>

          <aside>
            <h4>Informations</h4>

            <div className="subSections">
              <div className="asideSection firstAsideSection">
                <h5 className="asideTitle">Dates :</h5>
                <p className="asideContent">sept. 2018 - juin 2021</p>
              </div>
              <div className="asideSection">
                <h5 className="asideTitle">Lieu :</h5>
                <p className="asideContent">Belfort (90000),<br/> Territoire de Belfort</p>
              </div>
            </div>
          </aside>
        </article>

        <article>
          <div className="mainArticlePart">
            <h3>DUT Informatique</h3>
            <h4>Institut Universitaire de Technologies de Rodez</h4>

            <p>
              C'est après la découverte, au lycée, du vaste monde de la programmation que j'ai su que je voulais en
              faire mon métier. J'ai donc naturellement poursuivi, après mon Bac, dans ce domaine. Le DUT était pour moi
              le choix idéal, à mi-chemin entre la théorie de la licence et la pratique du BTS. Ces deux ans ont été,
              parmi les plus intenses en apprentissage de ma carrière de développeur étant donné que c'est pendant mon
              DUT que j'ai construit les fondations de mes connaissances en informatique. J'ai également pu, au travers
              des matières autour de la communication, travailler mon expression orale et mon savoir-être dans le milieu
              professionnel. C'est aussi cette matière qui m'a donné l'occasion de participer à l'App's Challenge
              (cf. <a href="#expePerso">expériences personnelles</a>).
            </p>
          </div>

          <aside>
            <h4>Informations</h4>

            <div className="subSections">
              <div className="asideSection firstAsideSection">
                <h5 className="asideTitle">Dates :</h5>
                <p className="asideContent">sept. 2016 - juin 2018</p>
              </div>
              <div className="asideSection">
                <h5 className="asideTitle">Lieu :</h5>
                <p className="asideContent">Rodez,<br/> Aveyron (12000)</p>
              </div>
            </div>
          </aside>
        </article>
      </section>

      <footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p className="topPage"><a href="#">Haut de page</a></p>

        <div>
          <a href="https://www.linkedin.com/in/adrien-bouyssou-0b326b14b/"><img src={linkedinLogo} alt="Logo LinkedIn"/></a>
          <a href="https://github.com/macdrien"><img src={githubLogo} alt="Logo Github"/></a>
        </div>

        <p className="versionNumber">v2.0.0</p>
      </footer>
    </div>
  );
}

export default App;
