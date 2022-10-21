import "./Navbar.module.scss";
import logo from "../../assets/images/reactjs-icon.svg";

export function Navbar() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <h1>ReactFacts</h1>
                <h2>React Course - Project 1</h2>
            </nav>
        </header>
    );
}