// Были установлены библиотеки: victory  и  lodash (нужна для кастомного стиля)

import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import ownVictoryTheme from './ownVictoryTheme.js';

// это пример массива данных о транзакциях, которые могут прийти с бекенда. Здесь он используется для примера и тестирования.
// в дальнейшем этот массив данных нужно будет, как полагается получить, от бекенда

import exampleTransactionArray from './exampleTransactionArray.json'; // это пример массива данных о транзакциях, которые могут прийти с бекенда

const Diagram = function () {


  // Эта функция вынимает из массива данных с транзакциями значения свойств sum, description, проверяет
  // уникальность полей с описанием (description). Если в базе встречаются транзакции с однаковым описанием (description)б
// то не создаёт новых столбиков в диаграмме, а добавляет сумму в существующий
// Объявление функции:
  const changeInfo = array => {
    let result = [];
    for (let i = 0; i < array.length; i += 1) {
      if (!result.includes(array[i].description)) {
        result.push(array[i].description);
      }
    }
    result = result.map(el => {
      return { description: el, sum: 0 };
    });
    for (let i = 0; i < array.length; i += 1) {
      const choseEl = result.find(el => el.description === array[i].description);
      choseEl.sum += array[i].sum;
    }
    return result;
  };

  // Вызов функции:
  const dataForDiagram =  changeInfo(  exampleTransactionArray.data)

  // Сортировка сумм от большей к меньшей
  dataForDiagram.sort((a, b) => b.sum - a.sum);


  return (
    <div>
      <VictoryChart
        // добавляем свою кастомную тему диаграммы
        theme={ownVictoryTheme}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={10}
      >
        <VictoryAxis // работает с данными по оси Х
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={dataForDiagram.map(elem => elem.description)} //Это подписи внизу диограммы к каждому столбцу
        />

        {/* <VictoryAxis // работает с данными по оси У. 
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`$${x / 1000}k`)}
                /> */}

        <VictoryBar
          data={dataForDiagram}
          // data accessor for x values
          x="description"
          // data accessor for y values
          y="sum"
          labels={dataForDiagram.map(elem => elem.sum)}
        />
      </VictoryChart>
    </div>
  );
};

export default Diagram;
