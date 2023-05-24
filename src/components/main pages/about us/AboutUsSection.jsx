import aboutUsArticles from "../../../data information/aboutUsArticles";
import classes from "../../../styles/main pages/about us/aboutUsSection.module.scss";
const AboutUsSection = () => {
  return (
    <div style={{ paddingBottom: "3vw" }}>
      <h2 className={classes.title}>ABOUT US</h2>
      {aboutUsArticles.map((article) => (
        <div key={article.title} className={classes.article}>
          <div className={classes.left_side}>{article.title}</div>
          <div className={classes.right_side}>{article.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsSection;
