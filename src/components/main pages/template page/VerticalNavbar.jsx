import { useNavigate } from "react-router-dom";

import classes from "../../../styles/main pages/template page/verticalNavbar.module.scss";

const VerticalNavbar = ({
  activeId,
  directoryName,
  dataDirectory,
  parentLink,
}) => {
  const navigate = useNavigate();

  return (
    <div className={classes.vertical_section}>
      <h1 className={classes.title}>{directoryName}</h1>
      <div className={classes.options}>
        {dataDirectory.map((option) => (
          <div
            key={option.id}
            className={
              activeId === option.id
                ? classes.active_option
                : classes.inactive_option
            }
            onClick={() => navigate(`${parentLink}/${option.link}`)}
          >
            <h2> {option.title} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalNavbar;
