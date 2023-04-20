import { Link } from "react-router-dom";
import "./sub_card.css";
import classes from "./sub_card.module.css";
export function SubCard({ styles, img, title, link }) {
  return (
    <div className={classes.sub_cardBox}>
      <Link style={{ textDecoration: "none" }} to={link}>
        <button className={classes.sub_card} style={styles}>
          <div className={classes.in_sub}>
            <div>
              <img src={img} className={classes.img} alt="new" />
            </div>
            <div className="">
              <h6 className={classes.in_sub_head}>{title}</h6>
              <p
                id="in_sub_text"
                style={{ color: "rgba(98, 180, 127, 1)" }}
              ></p>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}
