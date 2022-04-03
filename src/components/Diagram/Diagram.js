// Были установлены библиотеки: victory  и  lodash (нужна для кастомного стиля)

import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import ownVictoryTheme from './ownVictoryTheme.js';
import OwnThemeDesktop from './ownThemeDesktop.js';
import OwnThemeTablet from './ownThemeTablet.js';
import OwnThemeMobile from './ownThemeMobile.js';
import s from './Diagram.module.scss';
import EllipsisText from 'react-ellipsis-text';
import { useState, useEffect } from 'react';

const Diagram = function ({ arrayOfData, type }) {
  const [screenType, setScreenType] = useState(null);
  const [data, setData] = useState(arrayOfData);
  const isMobile = window.screen.width < 768;
  console.log('🚀 ~ file: Diagram.js ~ line 16 ~ Diagram ~ isMobile', screenType);
  // Эта функция вынимает из массива данных с транзакциями значения свойств sum, description, проверяет
  // уникальность полей с описанием (description). Если в базе встречаются транзакции с однаковым описанием (description)б
  // то не создаёт новых столбиков в диаграмме, а добавляет сумму в существующий
  // Объявление функции:
  const changeInfo = array => {
    let result = [];
    for (let i = 0; i < array?.length; i += 1) {
      if (!result.includes(array[i]?.description)) {
        result.push(array[i]?.description);
      }
    }
    result = result.map(el => {
      const desc = el.length > 11 ? el.slice(0, 9) + '...' : el;
      // console.log(desc);
      // return { description: el, sum: 0 };
      return { description: desc, sum: 0 };
    });
    for (let i = 0; i < array?.length; i += 1) {
      const desc =
        array[i]?.description.length > 11
          ? array[i]?.description.slice(0, 9) + '...'
          : array[i]?.description;
      const choseEl = result.find(el => el.description === desc);
      choseEl.sum += array[i]?.sum;
    }
    return result;
  };

  // Вызов функции:

  // const dataForDiagram =  changeInfo( exampleTransactionArray.data)
  let dataForDiagram = changeInfo(arrayOfData);

  // const choseData = () => {
  // checkScreenWidth();
  // };
  // choseData();
  // console.log('🚀 ~ file: Diagram.js ~ line 34 ~ Diagram ~ dataForDiagram', dataForDiagram);

  // Сортировка сумм от большей к меньшей
  // dataForDiagram.sort((a, b) => b.sum - a.sum);
  // console.log('🚀 ~ file: Diagram.js ~ line 39 ~ Diagram ~ window.innerWidth', window.innerWidth);
  if (screenType === 'mobile') {
    dataForDiagram.sort((a, b) => a.sum - b.sum);
  } else {
    dataForDiagram.sort((a, b) => b.sum - a.sum);
  }
  // let x;
  // const x1 = () => {
  //   // console.log('test');
  //   x = 10;
  // };
  // const x2 = () => {
  //   x = 20;
  // };
  function checkScreenWidth() {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      setScreenType('desktop');
    } else if (
      window.matchMedia('(min-width: 768px)').matches &&
      window.matchMedia('(max-width: 1279.99px)').matches
    ) {
      setScreenType('tablet');
    } else if (window.matchMedia('(max-width: 767.99px)').matches) {
      setScreenType('mobile');
    }
  }
  window.addEventListener('resize', checkScreenWidth);
  // console.log('🚀 ~ file: Diagram.js ~ line 53 ~ dataForDiagram', dataForDiagram);
  useEffect(() => {
    // console.log(isOnline);
    // console.log(screenType);
    // if (screenType === 'mobile') {
    //   (function () {
    //     dataForDiagram = dataForDiagram.map(elem => {
    //       elem.description = elem.description.slice(0, 4);
    //     });
    //   })();
    // }
    cutDescription();
  }, [screenType]);

  const cutDescription = () => {
    // if (screenType === 'mobile') {
    const dot = elem => {
      if (elem.description.length > 9) {
        return '...';
      } else {
        return '';
      }
    };
    const dataForDiagramX = dataForDiagram.map(elem => {
      return { description: `${elem.description.slice(0, 9)}${dot(elem)}`, sum: elem.sum };
    });
    return dataForDiagramX;
    // }
  };
  // a();
  // console.log(dataForDiagram);
  // console.log(cutDescription());

  useEffect(() => {
    checkScreenWidth();
    // cutDescription();
  }, []);
  // console.log(dataForDiagram);
  // console.log(x);
  // const baseProps = {
  //   width: 600,
  //   height: 350,
  //   padding: { bottom: 30, top: 15 },
  // };
  const checkTheme = () => {
    // console.log(dataForDiagram);
    if (screenType === 'desktop') {
      return OwnThemeDesktop;
    } else if (screenType === 'tablet') {
      return OwnThemeTablet;
    } else if (screenType === 'mobile') {
      return OwnThemeMobile;
    }
  };
  // document.getElementById();
  // console.log('qqqqq wwwww eeeee'.slice(0, 9));
  // console.log(arrayOfData[0]?.description);
  // console.log(dataForDiagram);
  // console.log(cutDescription());
  // console.log(screenType);
  return (
    <div className={s.diagramConfig}>
      {/* <span style={{ fontSize: '20px' }}>TEST</span>
      <EllipsisText text={'qqqqq wwwww eeeee rrrrr ttttt yyyyy'} length={25} />; */}
      {dataForDiagram.length < 1 ? (
        <p className={s.textAlertForAbsentTransactions}>
          Вы ещё не добавили ни одной записи о {type}
        </p>
      ) : (
        <VictoryChart
          // добавляем свою кастомную тему диаграммы
          // theme={ownVictoryTheme}
          theme={checkTheme()}
          domainPadding={10}
          // area={baseProps}
          // labelComponent={screenType === 'mobile' ? <VictoryLabel dy={-20} dx={-2} /> : null}
          // singleQuadrantDomainPadding={{ x: false }}
        >
          {/* <VictoryAxis // работает с данными по оси Х
            // dependAxis={true}
            // style={{ data: { fill: '#dff515' } }}
            tickFormat={dataForDiagram?.map(elem => {
              return elem?.description;
              // return `<span>qqq</span>`;
              // return <EllipsisText text={elem?.description} length={25} />;
            })} //Это подписи внизу диограммы к каждому столбцу
          /> */}
          <VictoryAxis
            // label="qqq"
            // offsetX={200}
            labelComponent={screenType === 'mobile' ? <VictoryLabel dy={20} dx={-2} /> : null}
            style={{
              axis: {
                // stroke: '#F5F6FB',
                stroke: screenType === 'mobile' ? '#888' : '#F5F6FB',
              },
              // ticks: {
              //   fill: 'transparent',
              //   size: ({ index }) => (index % 2 === 0 ? 10 : 0),
              // },
              // axisLabel: { fontSize: 5, padding: 5, lineHeight: 10 },
              // grid: { stroke: ({ tick }) => (tick > 0.5 ? 'red' : 'grey') },
              // ticks: { stroke: 'grey', size: 5 },
              // tickLabels: { fontSize: 10, padding: 0 },
            }}
            title={'qqqqq'}
            tickFormat={dataForDiagram?.map(elem => {
              return elem?.description;
            })}
          />

          <VictoryBar
            data={dataForDiagram}
            barRatio={0.5}
            cornerRadius={{ top: 5 }}
            x="description"
            y="sum"
            labels={dataForDiagram.map(elem => `${elem?.sum}`)}
            labelComponent={
              screenType === 'mobile' ? <VictoryLabel dy={-20} dx={-1} /> : <VictoryLabel />
            }
            // style={{ data: { fill: '#FF751D' } }}
            style={{ data: { fill: ({ index }) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0') } }}
            // events={[
            //   {
            //     target: 'data',
            //     eventHandlers: {
            //       onClick: () => {
            //         return [
            //           {
            //             target: 'data',
            //             mutation: props => {
            //               const fill = props.style && props.style.fill;
            //               return fill === '#F5F6FB'
            //                 ? null
            //                 : { style: { fill: '#F5F6FB', stroke: '#FF751D', strokeWidth: 1 } };
            //             },
            //           },
            //         ];
            //       },
            //     },
            //   },
            // ]}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            //для мобильной версии - горизонтальное отображение
            horizontal={window.innerWidth < 768}
            // labelComponent={<VictoryLabel dy={-25} dx={0}/>}
          />
        </VictoryChart>

        // <VictoryChart>
        //   <VictoryBar
        //     style={{ data: { fill: 'tomato', width: 25 } }}
        //     data={[
        //       { x: 'cat', y: 10 },
        //       { x: 'dog', y: 25 },
        //       { x: 'bird', y: 40 },
        //       { x: 'frog', y: 50 },
        //       { x: 'fish', y: 50 },
        //     ]}
        //     horizontal={window.innerWidth < 768}
        //   />
        //   <VictoryAxis />
        //   {['cat', 'dog', 'bird', 'dog', 'frog', 'fish'].map((d, i) => {
        //     return (
        //       <VictoryAxis
        //         dependentAxis
        //         key={i}
        //         label={d}
        //         style={{ tickLabels: { fill: 'none' } }}
        //         axisValue={d}
        //       />
        //     );
        //   })}
        // </VictoryChart>
      )}
    </div>
  );
};

export default Diagram;
