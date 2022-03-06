import '../mobile-styling/main.css';
import Info from './Info';
import SlideShow from './SlideShow';
import Stack from './Stack';
import About from './About';

function Main() {
  return (
    <main className="main-mobile">
      <Info />
      <SlideShow />
      <Stack />
      <About />
    </main>
  );
}

export default Main;
