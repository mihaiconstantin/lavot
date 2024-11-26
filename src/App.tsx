import Candidates from "./components/Candidates";
import Output from "./components/Output";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <main className="container shadow">
            <Header />
            <Candidates />
            <Output />
            <Footer />
        </main>
    );
}

export default App;
