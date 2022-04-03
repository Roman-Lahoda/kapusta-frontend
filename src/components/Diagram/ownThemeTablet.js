import { assign } from 'lodash';

// *
// * Colors
// *
const yellow200 = '#FFF59D';
const deepOrange600 = '#F4511E';
const lime300 = '#DCE775';
const lightGreen500 = '#8BC34A';
const teal700 = '#00796B';
const cyan900 = '#006064';
const colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];

//вертикальнве линии вдолль столбцов
const blueGrey50 = '#ffffff';

//светлосерый цвет по горизонтали ( ось Х)
const lightGray = '#fffff';

const blueGrey700 = '#52555F';

// Подписи внизу
const blackColor = '#52555F';

const grey900 = '#212121';

// *
// * Typography
// *
const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = 'normal';
const fontSize = 10;
// *
// * Layout
// *
//! will must check ⬇
const padding = 5;
// let baseProps = {};
// if (window.innerWidth >= 1280) {
//   baseProps = {
//     width: 600,
//     height: 350,
//     padding: { bottom: 30, top: 15 },
//   };
// }
// if (window.innerWidth < 1280 && window.innerWidth >= 768) {
// const padding = 5;
const baseProps = {
  width: 480,
  height: 350,
  padding: { bottom: 70, top: 15 },
};
// }
// if (window.innerWidth < 768) {
//   // const padding = 5;
//   baseProps = {
//     width: 480,
//     height: 650,
//     padding: { bottom: 20, top: 0, right: 10, left: 20 },
//   };
// }
//! will must check ⬆
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: 'transparent',
  strokeWidth: 0,
};

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = '10, 5';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

// export default OwnTheme {
const OwnThemeTablet = {
  area: assign(
    {
      style: {
        data: {
          fill: grey900,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: 'transparent',
          // stroke: blueGrey300,
          stroke: lightGray,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: 'transparent',
        }),
        grid: {
          fill: '#0000',
          stroke: blueGrey50,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: 'painted',
        },
        ticks: {
          fill: 'transparent',
          // size: ({ index }) => (index % 2 === 0 ? 10 : 0),
          size: ({ index }) => {
            if ((index - 1) % 3 === 0) {
              return 5;
            } else if ((1 + index) % 3 === 0) {
              return 15;
            } else if (index % 3 === 0) {
              return 25;
            }
          },
          // stroke: blueGrey300,
          stroke: '#b3b3b3',
          strokeWidth: 1,
          padding: -5,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: assign({}, baseLabelStyles, {
          //   fill: blueGrey700
          fill: blackColor,
        }),
      },
    },
    baseProps,
  ),
  polarDependentAxis: assign({
    style: {
      ticks: {
        // fill: "transparent",
        // size: 1,
        // stroke: "transparent"
      },
    },
  }),
  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  boxplot: assign(
    {
      style: {
        max: { padding, stroke: blueGrey700, strokeWidth: 1 },
        maxLabels: assign({}, baseLabelStyles, { padding: 3 }),
        median: { padding, stroke: blueGrey700, strokeWidth: 1 },
        medianLabels: assign({}, baseLabelStyles, { padding: 3 }),
        min: { padding, stroke: blueGrey700, strokeWidth: 1 },
        minLabels: assign({}, baseLabelStyles, { padding: 3 }),
        q1: { padding, fill: blueGrey700 },
        q1Labels: assign({}, baseLabelStyles, { padding: 3 }),
        q3: { padding, fill: blueGrey700 },
        q3Labels: assign({}, baseLabelStyles, { padding: 3 }),
      },
      boxWidth: 20,
    },
    baseProps,
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: blueGrey700,
        },
        labels: assign({}, baseLabelStyles, { padding: 5 }),
      },
      candleColors: {
        positive: '#ffffff',
        negative: blueGrey700,
      },
    },
    baseProps,
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  group: assign(
    {
      colorScale: colors,
    },
    baseProps,
  ),

  histogram: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          stroke: grey900,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: 'vertical',
    titleOrientation: 'top',
    style: {
      data: {
        type: 'circle',
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  line: assign(
    {
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  pie: assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: blueGrey50,
          strokeWidth: 1,
        },
        labels: assign({}, baseLabelStyles, { padding: 20 }),
      },
    },
    baseProps,
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: 'transparent',
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  stack: assign(
    {
      colorScale: colors,
    },
    baseProps,
  ),
  tooltip: {
    style: assign({}, baseLabelStyles, { padding: 0, pointerEvents: 'none' }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: '#f0f0f0',
      pointerEvents: 'none',
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10,
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0,
        },
        labels: assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: 'none',
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: '#f0f0f0',
          pointerEvents: 'none',
        },
      },
    },
    baseProps,
  ),
};

export default OwnThemeTablet;
