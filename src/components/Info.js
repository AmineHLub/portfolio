import myPic from '../assets/photo.png';
import angel from '../assets/socials/angel.png';
import github from '../assets/socials/github.png';
import linkedin from '../assets/socials/linkedin.png';
import medium from '../assets/socials/medium.png';
import twitter from '../assets/socials/twitter.png';

function Info() {
  return (
    <>
      <section id="home" className="top-headers">
        <h1>Mohamed Amine Hajltaief</h1>
        <span>FULL STACK WEB DEVELOPPER</span>
      </section>

      <section className="self-info">
        <div className="img-container">
          <img src={myPic} alt="my-pfp" />
        </div>
        <div className="info-container">
          <p className="info-intro">
            Hey, You can call me Moe. I&apos;m from Tunisia and I&apos;m a
            full stack web developper. I&apos;m also a tech enthusiast with
            good knowledge about low level computer functionalities.
          </p>
          <ul className="social-media-header d-flex">
            <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Amino47612441"><img src={twitter} alt="twitter" /></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mohamedamine-hajltaief/"><img src={linkedin} alt="linkedin" /></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://medium.com/@aminobhl"><img src={medium} alt="medium" /></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/AmineHLub"><img src={github} alt="github" /></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://angel.co/u/mohamed-amine-hajltaief"><img src={angel} alt="angelist" /></a></li>
          </ul>
        </div>
      </section>
      <div id="projects" className="seperator" />
    </>
  );
}

export default Info;
