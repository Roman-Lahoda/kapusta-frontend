// Были установлены библиотеки: victory  и  lodash (нужна для кастомного стиля)

import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import ownVictoryTheme from './ownVictoryTheme.js';
import s from './Diagram.module.scss';
import EllipsisText from 'react-ellipsis-text';
import { useState, useEffect } from 'react';

const Diagram = function ({ arrayOfData, type }) {
  const [isOnline, setIsOnline] = useState(null);
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
      return { description: el, sum: 0 };
    });
    for (let i = 0; i < array?.length; i += 1) {
      const choseEl = result.find(el => el.description === array[i]?.description);
      choseEl.sum += array[i]?.sum;
    }
    return result;
  };

  // Вызов функции:

  // const dataForDiagram =  changeInfo( exampleTransactionArray.data)
  const dataForDiagram = changeInfo(arrayOfData);
  // console.log('🚀 ~ file: Diagram.js ~ line 34 ~ Diagram ~ dataForDiagram', dataForDiagram);

  // Сортировка сумм от большей к меньшей
  // dataForDiagram.sort((a, b) => b.sum - a.sum);
  const isTablet = window.screen.width > 768;
  // console.log('🚀 ~ file: Diagram.js ~ line 39 ~ Diagram ~ window.innerWidth', window.innerWidth);
  if (isTablet) {
    dataForDiagram.sort((a, b) => b.sum - a.sum);
  } else {
    dataForDiagram.sort((a, b) => a.sum - b.sum);
  }
  let x;
  const x1 = () => {
    // console.log('test');
    x = 10;
  };
  const x2 = () => {
    x = 20;
  };
  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      // console.log('Screen width is at least 500px');
      // dataForDiagram.sort((a, b) => b.sum - a.sum);
      // x = 10;
      // x1();
      // console.log(x);
      setIsOnline(false);
    } else {
      // console.log('Screen less than 500px');
      // dataForDiagram.sort((a, b) => a.sum - b.sum);
      // x = 20;
      // x2();
      setIsOnline(true);
    }
    // console.log(x);
  });
  // console.log('🚀 ~ file: Diagram.js ~ line 53 ~ dataForDiagram', dataForDiagram);
  useEffect(() => {
    // console.log(isOnline);
  }, [isOnline]);
  // console.log(x);
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
          theme={ownVictoryTheme}
          domainPadding={10}
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
            // label="Label"
            style={{
              axis: {
                stroke: '#756f6a',
              },
              // ticks: {
              //   fill: 'transparent',
              //   size: ({ index }) => (index % 2 === 0 ? 10 : 0),
              // },
              axisLabel: { fontSize: 10, padding: 30 },
              // grid: { stroke: ({ tick }) => (tick > 0.5 ? 'red' : 'grey') },
              // ticks: { stroke: 'grey', size: 5 },
              tickLabels: { fontSize: 10, padding: 5 },
            }}
            tickFormat={dataForDiagram?.map(elem => {
              return elem?.description;
              // return `qqq`;
              // return `<EllipsisText text={elem?.description} length={25} />`;
              // return `${(<span>www</span>)}`;
            })}
          />

          <VictoryBar
            data={dataForDiagram}
            barRatio={0.5}
            cornerRadius={{ top: 5 }}
            x="description"
            y="sum"
            labels={dataForDiagram.map(elem => `${elem?.sum} грн`)}
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
      )}
    </div>
  );
};

export default Diagram;
