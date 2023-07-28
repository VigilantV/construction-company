import { useNavigate } from "react-router-dom";

import Card from "./Card";

import classes from "../../../styles/main pages/home page/horizontalScrollBar_Mobile.module.scss";

const HorizontalScrollBar_Mobile = ({ title, list, baseURL }) => {
  const navigate = useNavigate();

  const renderScrollBar = () => {
    return list.map((item) => (
      <Card
        key={item.id}
        imgSrc={item.image}
        title={item.title}
        content={item.shortContent}
        isLastCard={item.id + 1 !== list.length}
        onClick={() => navigate(`${baseURL}/${item.link}`)}
      />
    ));
  };

  return (
    <>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.scrollbar_section}>{renderScrollBar()}</div>
    </>
  );
};

export default HorizontalScrollBar_Mobile;
