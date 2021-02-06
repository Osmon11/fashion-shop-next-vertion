import React from "react";
import Link from "@material-ui/core/Link";
// import ReactEcharts from "echarts-for-react";
// import * as echarts from "echarts/lib/echarts";
// import "echarts/lib/chart/line";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/dataZoom";
// import { data, date } from "./Chart";

function preventDefault(event) {
  event.preventDefault();
}

// function getOption() {
//   return {
//     tooltip: {
//       trigger: "axis",
//       position: function (pt) {
//         return [pt[0], "10%"];
//       },
//     },
//     xAxis: {
//       type: "category",
//       boundaryGap: false,
//       data: date,
//       axisLabel: {
//         show: true,
//       },
//       axisLine: {
//         show: false,
//       },
//       axisTick: {
//         show: false,
//       },
//     },
//     yAxis: {
//       type: "value",
//       boundaryGap: [0, "100%"],
//       axisLabel: {
//         show: true,
//         formatter: "$ {value}",
//       },
//       axisLine: {
//         show: false,
//       },
//       axisTick: {
//         show: false,
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
//         name: "ЧИСТАЯ",
//         data: data,
//         type: "line",
//         showSymbol: true,
//         smooth: true,
//         sampling: "average",
//         symbolSize: 5,
//         itemStyle: {
//           color: "#fff",
//           borderColor: "#DFE6EB",
//           borderWidth: 2,
//         },
//         lineStyle: {
//           color: "#DFE6EB",
//         },
//         areaStyle: {
//           color: "#DFE6EB",
//         },
//       },
//       {
//         name: "ВСЕГО",
//         data: data,
//         type: "line",
//         showSymbol: true,
//         smooth: true,
//         sampling: "average",
//         symbolSize: 5,
//         itemStyle: {
//           color: "#fff",
//           borderColor: "rgb(255, 70, 131)",
//           borderWidth: 2,
//         },
//         areaStyle: {
//           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//             {
//               offset: 0,
//               color: "rgb(255, 158, 68)",
//             },
//             {
//               offset: 1,
//               color: "rgb(255, 70, 131)",
//             },
//           ]),
//         },
//         lineStyle: {
//           color: "rgb(255, 70, 131)",
//         },
//       },
//     ],
//   };
// }

export function ChartDeposits() {
  return (
    <>
      <div className='chart_header chart_head'>прибыль</div>
      <div className='rechart_header'>
        <span className='header_sumA'>
          $506700 <br />
          <div className='sum_descriptionA'>всего</div>
        </span>
        <span className='header_sumB'>
          $45000 <br />
          <div className='sum_descriptionB'>чистая</div>
        </span>
      </div>
      {/* <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      /> */}
      <div className='seeMore'>
        <Link color='primary' href='#' onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}
