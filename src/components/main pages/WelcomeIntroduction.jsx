import classes from "../../styles/main pages/home page/welcome.module.scss";

const WelcomeIntroduction = ({ title, content }) => {
  return (
    <div
      style={{ flex: `${title === "why choose us" ? "2" : "1"}` }}
      className={classes.intro_border}
    >
      <div className={classes.intro}>
        <h1 className={classes.intro_title}>{title}</h1>
        <div className={classes.intro_content}>{content}</div>
      </div>
    </div>
  );
};

export default WelcomeIntroduction;
