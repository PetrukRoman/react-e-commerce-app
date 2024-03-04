import { useMatches } from "react-router-dom";
import classes from "./BreadCrumbs.module.css";
import bannerImg from "../../../assets/breadcrumb.jpg";
const BreadCrumbs = ({ tiny }) => {
  const matches = useMatches();
  let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data));

  if (tiny) {
    return (
      <div className={classes["breadcrumb"]}>
        <nav aria-label="Дополнительная" className={classes.navigation}>
          <ol>
            {crumbs.map((link, index) => {
              return (
                <li key={index} className={classes.link}>
                  {link}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    );
  }

  let title = crumbs[crumbs.length - 1].props?.title ?? crumbs[crumbs.length - 1].props.children;

  return (
    <div className={classes["breadcrumb-banner"]}>
      <img src={bannerImg} alt="big-banner" />
      <nav aria-label="Дополнительная" className={classes.navigation}>
        <h2>{title}</h2>
        <ol className={classes["justify-center"]}>
          {crumbs.map((link, index) => {
            return (
              <li key={index} className={classes.link}>
                {link}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
