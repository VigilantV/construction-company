import { useState, useRef, useEffect } from "react";

import info from "../../data information/companyInformations";
import socialIcons from "../../data information/socialIcons";

import classes from "../../styles/common/footer.module.scss";
import logo from "../../images/main_logo.svg";

const Footer = () => {
  const [isPhoneNumberCopied, setIsPhoneNumberCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const emailValueRef = useRef("");
  const textAreaRef = useRef("");

  useEffect(() => {
    if (isPhoneNumberCopied)
      setTimeout(() => {
        setIsPhoneNumberCopied(false);
      }, 1500);

    if (isEmailCopied)
      setTimeout(() => {
        setIsEmailCopied(false);
      }, 1500);
  }, [isPhoneNumberCopied, isEmailCopied]);

  const copyToClipboard = (text, setIsCopied) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  const companyInfo = (
    <>
      <h2 className={classes.second_title}>{info.secondTitle}</h2>
      <p className={classes.address}>{info.address}</p>
      <p className={classes.address}>{info.PO_Box}</p>
      <div className={classes.links}>
        <div>
          <p
            onClick={() => {
              copyToClipboard(info.number, setIsPhoneNumberCopied);
            }}
          >
            {info.number}
          </p>
          <div style={{ opacity: isPhoneNumberCopied ? "1" : "0" }}>copied</div>
        </div>
        <div>
          <p
            onClick={() => {
              copyToClipboard(info.email, setIsEmailCopied);
            }}
          >
            {info.email}
          </p>
          <div
            style={{
              opacity: isEmailCopied ? "1" : "0",
            }}
          >
            copied
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div id="contact_us" className={classes.footer}>
      <div className={classes.info_wrapper}>
        <img src={logo} className={classes.logo} alt="logo" />
        <div>{companyInfo}</div>
        <div className={classes.link_icons}>
          {socialIcons.map((icon) => (
            <img
              key={icon.id}
              className={classes.icon}
              src={icon.src}
              alt={icon.alt}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
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
