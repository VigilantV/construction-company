import classes from "../../../styles/main pages/home page/card.module.scss";
import ArrowIcon from "../../../images/home page/arrow.svg";

const Card = ({ imgSrc, title, content, isLastCard, onClick }) => {
  return (
    <div
      style={{ marginRight: isLastCard ? "3vw" : "0" }}
      className={classes.card_wrapper}
    >
      <img
        className={classes.image}
        src={imgSrc}
        alt={title}
        onClick={onClick}
      />
      <div className={classes.lower_of_card}>
        <div className={classes.title_line}>
          <h1 className={classes.title}>{title}</h1>
          <img
            className={classes.arrow_icon}
            src={ArrowIcon}
            alt="arrow"
            onClick={onClick}
          />
        </div>
        <p className={classes.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
