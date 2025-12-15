import "./Title.css";
import Button from "./Button.jsx"

export default function Title() {
    return (
        <section className="title__container">
            <h1>Liberty social media</h1>
            <h3>Here you can publish posts on absolutely free topics - your opinion should not depend on anyone else's.</h3>

            <Button type="primary" noPadding={true}>Get started</Button>
        </section>
    );
}