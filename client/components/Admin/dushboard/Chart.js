import React from "react";
// import ReactEcharts from "echarts-for-react";
// import * as echarts from "echarts/lib/echarts";
// import "echarts/lib/chart/line";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/grid";
// import "echarts/lib/component/dataZoom";

export let date = [];
export let data = [Math.random() * 300];

// function getOption() {
//   let base = +new Date(2020, 12, 31);
//   let oneDay = 24 * 3600 * 1000;

//   for (let i = 1; i < 6000; i++) {
//     let now = new Date((base += oneDay));
//     date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
//     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
//   }

//   let options = {
//     color: ["#02a0df"],
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "cross",
//       },
//     },
//     grid: {
//       containLabel: true,
//     },
//     xAxis: {
//       axisLine: {
//         show: false,
//       },
//       axisTick: {
//         show: false,
//       },
//       axisLabel: {
//         show: true,
//       },
//       type: "category",
//       boundaryGap: false,
//       data: date,
//     },
//     yAxis: {
//       axisLine: {
//         show: false,
//       },
//       axisTick: {
//         show: false,
//       },
//       splitLine: {
//         show: true,
//       },
//       type: "value",
//       boundaryGap: [0, "100%"],
//       axisLabel: {
//         show: true,
//         formatter: "$ {value}",
//       },
//     },
//     dataZoom: [
//       {
//         type: "inside",
//         start: 0,
//         end: 10,
//       },
//       {
//         start: 0,
//         end: 10,
//         handleIcon:
//           "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
//         handleSize: "80%",
//         handleStyle: {
//           color: "#5DB5D7",
//           shadowBlur: 3,
//           shadowColor: "rgba(0, 0, 0, 0.6)",
//           shadowOffsetX: 2,
//           shadowOffsetY: 2,
//         },
//       },
//     ],
//     series: [
//       {
//         name: "Всего",
//         type: "line",
//         data: data,
//         symbol: "circle",
//         smooth: true,
//         sampling: "average",
//         symbolSize: 5,
//         itemStyle: {
//           color: "#fff",
//           borderColor: "#4F5F6F",
//           borderWidth: 2,
//         },
//         lineStyle: {
//           color: "#02a0df",
//         },
//         areaStyle: {
//           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             {
//               offset: 0,
//               color: "#1996c7",
//             },
//             {
//               offset: 0.25,
//               color: "#1996c7",
//             },
//             {
//               offset: 1,
//               color: "#fff",
//             },
//           ]),
//         },
//       },
//     ],
//   };
//   return options;
// }

export function Chart() {
  return (
    <React.Fragment>
      <div className='chart_head'>
        <span className='chart_header'>продажи за период</span>
      </div>
      {/* <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      /> */}
    </React.Fragment>
  );
}
