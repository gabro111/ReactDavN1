import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import SponsorBanner from './Components/SponsorBanner';
import Banner2 from './Components/Banner2';
import Banner4 from './Components/Banner4';
import Banner3 from './Components/Banner3';
import PlanChooser from './Components/PlanChooser';
import FromOurBlog from './Components/FromOurBlog';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <SponsorBanner/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <PlanChooser/>
      <FromOurBlog/>
      <Footer/>
      
    </div>
  );
}

export default App;
