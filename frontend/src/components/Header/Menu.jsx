export default function Menu(props) {
    const active = props.active;

    return (
        <nav className="header__nav">
            <a className={active == "main" && "active"} href="#">Main</a>
            <a className={active == "authors" && "active"} href="#">Authors</a>
            <a href="#">Community</a>
            <a href="#">About Us</a>
        </nav>
    );
}