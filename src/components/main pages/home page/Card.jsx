import classes from "../../../styles/main pages/home page/projects.module.scss";
import ArrowIcon from "../../../images/home page/arrow.svg";

const Card = ({ imgSrc, title, content, onClick }) => {
  return (
    <div className={classes.card_wrapper} onClick={onClick}>
      <img className={classes.image} src={imgSrc} alt={title} />
      <div className={classes.lower_of_card}>
        <h1 className={classes.title}>{title}</h1>
        <img className={classes.arrow_icon} src={ArrowIcon} alt="" />
        <p className={classes.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
