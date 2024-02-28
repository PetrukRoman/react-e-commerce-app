import classes from "./HeadingSection.module.css";

const HeadingSection = ({ heading, subHeading }) => {
  return (
    <header className={classes.header}>
      <h2>{heading}</h2>
      {subHeading && <p>{subHeading}</p>}
    </header>
  );
};

export default HeadingSection;
