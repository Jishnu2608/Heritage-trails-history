import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentHistory from "./components/Content/content-history";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentHistory/>
      <Footer/>
    </div>
  );
}

export default App;
