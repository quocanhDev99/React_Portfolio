import "./Intro.css";
import Mine from "../../img/profile3.jpg";
import Top from "../../img/up-arrow.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, my name is</h2>
          <h1 className="i-name">Quoc Anh</h1>
          <div className="i-tilte">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Song Writter</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            quisquam vitae tenetur tempora magni modi reprehenderit culpa soluta
            laudantium impedit rem natus doloribus necessitatibus voluptatem
            dolores at, minus nostrum vel.
          </p>
        </div>
        {/* <div className="upicon">
          <img src={Top} alt="up" className="i-icon_up" />
        </div> */}
      </div>
      <div className="i-right">
        <img src={Mine} alt="toi" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
