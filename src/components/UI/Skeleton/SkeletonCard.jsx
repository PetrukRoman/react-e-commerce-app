import classes from "./SkeletonCard.module.css";
const SkeletonCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.image} />
      <div className={classes.content}>
        <div className={classes.heading} />

        <div className={classes.text} />
        <div className={classes.text2} />

        <div className={classes.textBig} />
      </div>
    </div>
  );
};

export default SkeletonCard;
