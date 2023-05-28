import React from 'react'
import  "../style/chart.css"

const Chart = ({data}) => {
    let result = [
        { 1: { month: "Jan", percent: 0 } },
        { 2: { month: "Feb", percent: 0 } },
        { 3: { month: "Mar", percent: 0 } },
        { 4: { month: "Apr", percent: 0 } },
        { 5: { month: "May", percent: 0 } },
        { 6: { month: "Jun", percent: 0 } },
        { 7: { month: "Jul", percent: 0 } },
        { 8: { month: "Aug", percent: 0 } },
        { 9: { month: "Sep", percent: 0 } },
        { 10: { month: "Oct", percent: 0 } },
        { 11: { month: "Nov", percent: 0 } },
        { 12: { month: "Dec", percent: 0 } },
      ];
    
      for (let item of data) {
        let newMonth = Number(item.date.split("-")[1]);
        result[newMonth - 1][newMonth].percent += item.amount;
      }
    
      return (
        <div className="expense-chart">
          <div className="all-chart">
            {result.map((item, index) => {
              const style =
                item[index + 1].percent !== 0
                  ? {
                      height: (item[index + 1].percent * 100) / 100 + "%",
                      border: "1px solid purple",
                    }
                  : {};
    
              return (
                <div className="child-chart">
                  <div className="chart-position">
                    <div className="chart-clone" style={style}></div>
                    <div className="chart"></div>
                  </div>
                  <div>{item[index + 1].month}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default Chart;