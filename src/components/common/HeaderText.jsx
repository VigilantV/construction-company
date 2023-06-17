import { useState, useEffect } from "react";

import info from "../../data information/companyInformations";

import classes from "../../styles/common/header.module.scss";

const HeaderText = ({ children }) => {
  const [isPhoneNumberCopied, setIsPhoneNumberCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

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

  return (
    <div className={classes.header_text}>
      {children ? (
        <>{children}</>
      ) : (
        <>
          <h1 className={classes.first_title}>{info.firstTitle}</h1>
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
              <div style={{ opacity: isPhoneNumberCopied ? "1" : "0" }}>
                copied
              </div>
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
      )}
    </div>
  );
};

export default HeaderText;
