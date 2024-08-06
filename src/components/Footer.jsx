import footerLogo from "../images/footer-logo.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconInstagram from "../images/icon-instagram.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="bg-[hsl(168,40%,70%)] py-28 px-4 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-8">
            <img src={footerLogo} alt="This is the logo for the footer" className="" />
            <ul className="flex gap-8 items-center">
          <li>
            <a href="#" className="text-Dark-Desaturated-Cyan text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-Dark-Desaturated-Cyan text-lg">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-Dark-Desaturated-Cyan text-lg">
              Projects
            </a>
          </li>
        </ul>
        <ul className="flex gap-8 items-center">
            <li><img src={iconFacebook} alt="This is an icon of facebook" /></li>
            <li><img src={iconInstagram} alt="This is an icon of instagram" /></li>
            <li><img src={iconTwitter} alt="This is an icon of twitter" /></li>
            <li><img src={iconPinterest} alt="This is an icon of pinterest" /></li>
        </ul>
        </div>

    </footer>
  )
}

export default Footer