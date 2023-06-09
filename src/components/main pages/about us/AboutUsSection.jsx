import aboutUsArticles from "../../../data information/aboutUsArticles";

import classes from "../../../styles/main pages/about us/aboutUsSection.module.scss";

const AboutUsSection = () => {
  return (
    <div style={{ paddingBottom: "3vw" }}>
      <h2 className={classes.title}>ABOUT US</h2>
      {aboutUsArticles.map((article) => (
        <div key={article.title} className={classes.article}>
          <div className={classes.article_title}>{article.title}</div>
          <div className={classes.article_text}>{article.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsSection;
