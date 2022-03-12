import './App.css';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 884px)',
  });
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Main />
    </>
  );
}

export default App;
