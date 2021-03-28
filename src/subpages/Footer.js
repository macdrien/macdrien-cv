import linkedinLogo from "../images/linkedin-3-32.png";
import githubLogo from "../images/GitHub-Mark-Light-32px.png";

export default function Footer() {
    return <footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p className="topPage"><a href="#">Haut de page</a></p>

        <div>
            <a href="https://www.linkedin.com/in/adrien-bouyssou-0b326b14b/"><img src={linkedinLogo} alt="Logo LinkedIn"/></a>
            <a href="https://github.com/macdrien"><img src={githubLogo} alt="Logo Github"/></a>
        </div>

        <p className="versionNumber">v2.0.0</p>
    </footer>;
}