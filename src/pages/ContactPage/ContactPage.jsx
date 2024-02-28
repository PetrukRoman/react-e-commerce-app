import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Features from "../../components/Features/Features";
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Buttons/Button";

import classes from "./Contact.module.css";

const ContactPage = () => {
  return (
    <>
      <BreadCrumbs />
      <section className={classes.section}>
        <div className={classes.container}>
          <h1>Get In Touch With Us</h1>
          <p className={classes.subheading}>
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes["contact-group"]}>
                <MdPlace />
                <div>
                  <h2>Address</h2>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className={classes["contact-group"]}>
                <FaPhone />
                <div>
                  <h2>Phone</h2>
                  <div>
                    <a href="tel:+(84) 546-6789">Mobile: +(84) 546-6789</a>
                  </div>
                  <div>
                    <a href="tel:+(84) 556-6789">Hotline: +(84) 456-6789</a>
                  </div>
                </div>
              </div>
              <div className={classes["contact-group"]}>
                <MdOutlineAccessTimeFilled />
                <div>
                  <h2>Working Time</h2>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                </div>
              </div>
            </div>
            <div className={classes.col}>
              <form className={classes.form}>
                <Input label="Your name" type="text" id="name" name="name" placeholder="Abc" required />
                <Input label="Email address" type="email" id="email" name="email" placeholder="example@example.com" required />
                <Input label="Subject" type="text" id="subject" name="subject" placeholder="This is optional" />
                <Input label="Message" textarea rows={5} placeholder="Hi! i’d like to ask about" required />
                <div className={classes.cta}>
                  <Button variant="fill">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </>
  );
};
export default ContactPage;
