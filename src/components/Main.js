import '../mobile-styling/main.css';
import myPic from '../assets/photo.png';
import angel from '../assets/socials/angel.png';
import github from '../assets/socials/github.png';
import linkedin from '../assets/socials/linkedin.png';
import medium from '../assets/socials/medium.png';
import twitter from '../assets/socials/twitter.png';

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
        <div className="info-container">
          <p className="info-intro">
            I can help you build a product , feature or website Look through
            some of my work and experience!
            If you like what you see and have a project you need coded, don&apos;t
            hestiate to contact me.
          </p>
          <ul className="social-media-header d-flex">
            <li><a href="https://twitter.com/Amino47612441"><img src={twitter} alt="twitter" /></a></li>
            <li><a href="https://www.linkedin.com/in/mohamedamine-hajltaief/"><img src={linkedin} alt="linkedin" /></a></li>
            <li><a href="https://medium.com/@aminobhl"><img src={medium} alt="medium" /></a></li>
            <li><a href="https://github.com/AmineHLub"><img src={github} alt="github" /></a></li>
            <li><a href="https://angel.co/u/mohamed-amine-hajltaief"><img src={angel} alt="angelist" /></a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
