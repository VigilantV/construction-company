import classes from "../../../styles/main pages/home page/customers.module.scss";
import Danish from "../../../images/home page/customers/danish.svg";
import Embassy from "../../../images/home page/customers/embassy.svg";
import Fine from "../../../images/home page/customers/fine.svg";
import Mammut from "../../../images/home page/customers/mammut.svg";
import Nuqul from "../../../images/home page/customers/nuqul.svg";
import Unilever from "../../../images/home page/customers/unilever.svg";

const Customers = () => {
  const logos = [Danish, Embassy, Fine, Mammut, Nuqul, Unilever];

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>OUR CUSTOMERS</h2>
      <div className={classes.customers}>
        {logos.map((logo, index) => (
          <img
            key={index}
            className={classes.logo}
            src={logo}
            alt={"logo " + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
