// Были установлены библиотеки: victory  и  lodash (нужна для кастомного стиля)

import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import ownVictoryTheme from './ownVictoryTheme.js';
import s from './Diagram.module.scss';

const Diagram = function ({ arrayOfData }) {
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
      const choseEl = result.find(el => el.description === array[i].description);
      choseEl.sum += array[i].sum;
    }
    return result;
  };

  // Вызов функции:

  // const dataForDiagram =  changeInfo( exampleTransactionArray.data)
  const dataForDiagram = changeInfo(arrayOfData);

  // Сортировка сумм от большей к меньшей
  // dataForDiagram.sort((a, b) => b.sum - a.sum);
  const isTablet = window.screen.width > 768;
  if (isTablet) {
    dataForDiagram.sort((a, b) => b.sum - a.sum);
  } else {
    dataForDiagram.sort((a, b) => a.sum - b.sum);
  }

  return (
    <div className={s.diagramConfig}>
      {dataForDiagram.length < 1 ? (
        <p className={s.textAlertForAbsentTransactions}></p>
      ) : (
        <VictoryChart
          // добавляем свою кастомную тему диаграммы
          // theme={ownVictoryTheme}
          domainPadding={10}
        >
          <VictoryAxis // работает с данными по оси Х
            dependAxis={true}
            style={{ data: { fill: '#dff515' } }}
            tickFormat={dataForDiagram.map(elem => elem.description)} //Это подписи внизу диограммы к каждому столбцу
          />

          <VictoryBar
            data={dataForDiagram}
            barRatio={0.6}
            cornerRadius={{ top: 5 }}
            x="description"
            y="sum"
            labels={dataForDiagram.map(elem => `${elem.sum} грн.`)}
            // style={{ data: { fill: '#FF751D' } }}
            style={{ data: { fill: ({ index }) => (index % 3 === 0 ? '#FF751D' : '#FFDAC0') } }}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: 'data',
                        mutation: props => {
                          const fill = props.style && props.style.fill;
                          return fill === '#F5F6FB'
                            ? null
                            : { style: { fill: '#F5F6FB', stroke: '#FF751D', strokeWidth: 1 } };
                        },
                      },
                    ];
                  },
                },
              },
            ]}
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
