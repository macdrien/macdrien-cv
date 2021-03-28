import './App.css';
import data from './data.json';
import Section from "./components/Section";
import Header from "./subpages/Header";
import Footer from "./subpages/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            {data.map((element, index) => <Section {...element} key={index}/>)}
            <Footer/>
        </div>
    );
}

export default App;
