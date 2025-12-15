import "./Header.css";
import ForumLogo from "./ForumLogo.jsx";
import {LoginSection} from "./LoginSection.jsx";
import Menu from "./Menu.jsx";

export default function Header(props) {
    return (
        <header className="header">
            <div className="header__inner">
                <ForumLogo />
                <Menu active={props.active} />
                <LoginSection />
            </div>
        </header>
    );
}