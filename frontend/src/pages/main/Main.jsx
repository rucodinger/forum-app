import Header from '../../components/Header/Header.jsx';
import Title from '../../components/Main/Title.jsx';

export default function Main() {
    return (
        <>
            <Header active="main" />

            <main className="main">
                <Title />
            </main>
        </>
    );
}