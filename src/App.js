import './App.css';
import Header from './component/common/header';
import Hero_section from './pages/hero_section';
import Our_offering from './pages/our_offerings';
import Salon_desc from './pages/salon_desc';

function App() {
  return (
    <>
        <Header />
        <Hero_section />
        <Salon_desc />
        <Our_offering />
    </>
  );
}

export default App;
