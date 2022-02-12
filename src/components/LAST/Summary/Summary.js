import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import s from "./Summary.module.css";

const Summary = ({ array }) => {
  let summaryData = [];
  if(array){
    summaryData = [...array].sort((a, b) => a.month - b.month);
  }
  

  const noDataArray = [
    {
      month: 15,
      text: "No transactions this year",
    },
  ];

  return (
    <div className={s.wrapper}>
      <h4 className={s.caption}>Сводка</h4>
      <SimpleBar style={{ height: "240px" }}>
        <ul className={s.list}>
          {summaryData.length !== 0
            ? summaryData.map((item) => (
                <li key={item.month} className={s.listItem}>
                  <span>{item.monthName}</span>
                  <span>{item.sum}</span>
                </li>
              ))
            : noDataArray.map((item) => (
                <li key={item.month} className={s.listItem}>
                  <span>{item.text}</span>
                </li>
              ))}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default Summary;
