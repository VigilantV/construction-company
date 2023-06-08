import HSE_Articles from "../../../data information/HSE_Articles";

import classes from "../../../styles/main pages/HSE/HSE_Section.module.scss";
import certificate1 from "../../../images/HSE/0.svg";
import certificate2 from "../../../images/HSE/1.svg";

const HSE_Section = () => {
  return (
    <div>
      <h2 className={classes.title}>HSE</h2>
      {HSE_Articles.map((article) => (
        <div key={article.title} className={classes.article}>
          <div className={classes.left_side}>{article.title}</div>
          <div className={classes.right_side}>{article.content}</div>
        </div>
      ))}

      <div className={classes.img_wrapper}>
        <img
          className={classes.img}
          src={certificate1}
          alt="cetificate 1"
        />
        <img
          className={classes.img}
          src={certificate2}
          alt="cetificate 2"
        />
      </div>
    </div>
  );
};

export default HSE_Section;
