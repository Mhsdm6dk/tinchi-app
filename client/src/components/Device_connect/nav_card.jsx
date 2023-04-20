import DateShow from "./DateShow";
import DateTime from "./TimeShow";
import "./nav_card.css";
import classes from "./nav_card.module.css";
export function NavCard({ styles, date = false }) {
  return (
    <div className={classes.nav_card} style={styles}>
      <div className={classes.in_nav}>{date ? <DateShow /> : <DateTime />}</div>
    </div>
  );
}
