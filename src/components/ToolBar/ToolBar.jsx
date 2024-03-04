import ButtonFilter from "../UI/Buttons/ButtonFIlter";
import ButtonIcon from "../UI/Buttons/ButtonIcon";
import classes from "./ToolBar.module.css";
import gridImg from "../../assets/grid-round.svg";
import viewListImg from "../../assets/view-list.svg";
import { MenuItem, Select } from "../UI/Select/Select";
const ToolBar = ({ viewSetting, count, handleSetViewSetting }) => {
  const startIndexItem = viewSetting.itemsPerPage * viewSetting.currentPage;
  const endIndexItem = startIndexItem + viewSetting.itemsPerPage > count ? count : startIndexItem + viewSetting.itemsPerPage;

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
          <p className={classes.showResults}>Showing {`${startIndexItem + 1} - ${endIndexItem} of ${count}`} results</p>
          <form className={classes.form}>
            <Select
              id="show"
              name="show"
              label="Show"
              value={viewSetting.itemsPerPage}
              onChange={(event) => handleSetViewSetting(+event.target.value, "itemsPerPage")}
            >
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={72}>72</MenuItem>
            </Select>
            <Select
              id="sort"
              name="sort"
              label="Sort By"
              value={viewSetting.sortBy}
              onChange={(event) => handleSetViewSetting(event.target.value, "sortBy")}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="DESC">Price hight to low</MenuItem>
              <MenuItem value="ASC">Price low to hight</MenuItem>
            </Select>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ToolBar;
