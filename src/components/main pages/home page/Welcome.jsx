import introductions from "../../../data information/introductions";
import WelcomeIntroduction from "./WelcomeIntroduction";

import classes from "../../../styles/main pages/home page/welcome.module.scss";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <h2 className={classes.title}>WELCOME TO OUR COMPANY</h2>
      <div className={classes.introductions}>
        {introductions.map((introduction) => (
          <WelcomeIntroduction
            key={introduction.id}
            title={introduction.title}
            content={introduction.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
