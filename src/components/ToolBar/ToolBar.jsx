import ButtonFilter from "../UI/Buttons/ButtonFIlter";
import ButtonIcon from "../UI/Buttons/ButtonIcon";
import classes from "./ToolBar.module.css";
import gridImg from "../../assets/grid-round.svg";
import viewListImg from "../../assets/view-list.svg";
import { MenuItem, Select } from "../UI/Select/Select";
const ToolBar = () => {
  return (
    <div className={classes.toolbar}>
      <div className={classes.container}>
        <menu className={classes.menu}>
          <ButtonFilter />
          <div className={classes.viewButtons}>
            <ButtonIcon>
              <img src={gridImg} alt="grid-rounded" />
            </ButtonIcon>
            <ButtonIcon>
              <img src={viewListImg} alt="view list" />
            </ButtonIcon>
          </div>
        </menu>
        <div className={classes.row}>
          <p className={classes.showResults}>Showing 1–16 of 32 results</p>
          <form className={classes.form}>
            <Select id="show" name="show" label="Show">
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={72}>72</MenuItem>
            </Select>
            <Select id="sort" name="sort" label="Sort By">
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="hight-low">Price hight to low</MenuItem>
              <MenuItem value="low-hight">Price low to hight</MenuItem>
            </Select>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ToolBar;
