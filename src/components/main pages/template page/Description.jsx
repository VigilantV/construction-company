import classes from "../../../styles/main pages/template page/description.module.scss";

const Description = (props) => {
  return (
    <>
      <div className={classes.desk_description_section}>
        <h2 className={classes.desk_title}>{props.title}</h2>
        <div className={classes.desk_text}>{props.text}</div>
        {props.children}
      </div>
    </>
  );
};

export default Description;
