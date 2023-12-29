import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const sendEmail = (e, formRef) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_jefyk0n",
      "template_hqi20ed",
      formRef.current,
      "M1d0aRz-HT-TNxpSC"
    )
    .then(
      () => {
        toast.success("Your Email has been received successfully.", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 12000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          className: "toastify_style",
        });
      },
      () => {
        toast.error("Unfortunately, your email was not sent.", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          className: "toastify_style",
        });
      }
    );
  e.target.reset();
};

export default sendEmail;
