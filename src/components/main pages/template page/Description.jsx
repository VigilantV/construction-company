import classes from "../../../styles/main pages/template page/description.module.scss";

const Description = ({ title, text }) => {
  return (
    <>
      <div className={classes.description_section}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.text}>{text}</div>
      </div>
    </>
  );
};

export default Description;
