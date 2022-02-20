import '../mobile-styling/main.css';
import myPic from '../assets/photo.png';

function Main() {
  return (
    <main className="main-mobile">
      <section className="top-headers">
        <h1>Mohamed Amine Hajltaief</h1>
        <span>FULL STACK WEB DEVELOPPER</span>
      </section>

      <section className="self-info">
        <div className="img-container">
          <img src={myPic} alt="my-pfp" />
        </div>
        <div className="info-container" />
      </section>
    </main>
  );
}

export default Main;
