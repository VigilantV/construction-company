import { useState } from "react";

import info from "../../data information/companyInformations";
import socialIcons from "../../data information/socialIcons";

import classes from "../../styles/common/footer.module.scss";
import logo from "../../images/main_logo.svg";

const Footer = () => {
  const [emailValue, setEmailValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const companyInfo = (
    <>
      <h2 className={classes.second_title}>{info.secondTitle}</h2>
      <p className={classes.address}>{info.address}</p>
      <p className={classes.address}>{info.PO_Box}</p>
      <div className={classes.links}>
        <p>{info.number}</p>
        <br />
        <p>{info.email}</p>
      </div>
    </>
  );

  return (
    <div className={classes.footer}>
      <div>
        <img src={logo} className={classes.logo} alt="logo" />
        <div>{companyInfo}</div>
        <div className={classes.link_icons}>
          {socialIcons.map((icon) => (
            <a key={icon.id} href={icon.link}>
              <img className={classes.icon} src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h1 className={classes.input_title}>Get In Touch</h1>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            setEmailValue("");
            setTextAreaValue("");
          }}
        >
          <input
            className={classes.input_elements}
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
          <textarea
            className={classes.input_elements}
            placeholder="Message"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          <button className={classes.btn} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
