import { useRef } from "react";

import info from "../../data information/companyInformations";
import socialIcons from "../../data information/socialIcons";

import classes from "../../styles/common/footer.module.scss";
import logo from "../../images/main_logo.svg";

const Footer = () => {
  const emailValueRef = useRef("");
  const textAreaRef = useRef("");

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

  console.log("potato");

  return (
    <div id="contact_us" className={classes.footer}>
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
            emailValueRef.current.value = "";
            textAreaRef.current.value = "";
          }}
        >
          <input
            ref={emailValueRef}
            className={classes.input_elements}
            type="email"
            placeholder="Email"
          />
          <textarea
            ref={textAreaRef}
            className={classes.input_elements}
            placeholder="Message"
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
