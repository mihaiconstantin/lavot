import Candidates from "./components/Candidates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEstimates } from "./hooks/useEstimates";

function App() {
    useEstimates({ to: "1", from: "3", value: 0.7 });
    return (
        <main className="container shadow">
            <Header />
            <Candidates />
            <Footer />
        </main>
    );
}

export default App;
