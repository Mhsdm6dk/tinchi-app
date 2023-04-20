import "./head_card.css";
import classes from "./head_card.module.css";
import timeIcon from "./3287905.png";
export function HeadCard({ data, imgs, order, logos }) {
  let title = data[order].title;
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div className={classes.head_cardBox}>
      <div className={classes.head_card}>
        <div className={classes.head_cardTitle}>Lịch trong tuần</div>
        <div className={classes.head_cardSubBox}>
          {[1, 2, 3].map(() => (
            <div className={classes.head_cardSub}>
              <div className={classes.head_cardSub_day}>Thứ 3 - 18/04/2023</div>
              {[1, 2, 3, 4].map(() => (
                <div className={classes.head_cardSub_detail}>
                  <div className={classes.icon}>
                    <img src={timeIcon} className={classes.timeIcon} />
                  </div>
                  <div className={classes.classDetail}>
                    <div className={classes.classDetail_time}>
                      Thời gian: 16:00 - 18:00
                    </div>
                    <div className={classes.classDetail_name}>
                      Kho dữ liệu và khai phá dữ liệu
                    </div>
                    <div className={classes.classDetail_place}>
                      Địa điểm: 405-A2
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
