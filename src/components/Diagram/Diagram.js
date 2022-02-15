// Были установлены библиотеки: victory  и  lodash (нужна для кастомного стиля)

import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import ownVictoryTheme from './ownVictoryTheme.js';

// это пример массива данных о транзакциях, которые могут прийти с бекенда. Здесь он используется для примера и тестирования.
// в дальнейшем этот массив данных нужно будет, как полагается получить, от бекенда. 

import exampleTransactionArray from './exampleTransactionArray.json'; // это пример массива данных о транзакциях, которые могут прийти с бекенда

const Diagram = function ({arrayOfData}) {

  console.log ("arrayOfData in diagram ", arrayOfData)
  console.log ("Array.isArray(arrayOfData)  :", Array.isArray(arrayOfData)  )
  console.log ("arrayOfData.length   :", arrayOfData.length  )

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
  // const dataForDiagram =  changeInfo( exampleTransactionArray.data)
  const dataForDiagram =  changeInfo( arrayOfData )
 
  // Сортировка сумм от большей к меньшей
  // dataForDiagram.sort((a, b) => b.sum - a.sum);
  dataForDiagram.sort((a, b) => a.sum - b.sum);
 

  return (
    <div >
      {/* { dataForDiagram.length<1
      ? <b>You don't have any posts in this category yet</b>
      :   <VictoryChart
              // добавляем свою кастомную тему диаграммы
              // theme={ownVictoryTheme}
              domainPadding={10}
            >

            <VictoryAxis  // работает с данными по оси Х
              dependAxis={true}
              style={{ data: { fill: "#dff515" } }}
              tickFormat={dataForDiagram.map( elem=> elem.description)}  //Это подписи внизу диограммы к каждому столбцу
            />


              <VictoryBar
                data={dataForDiagram}
                barRatio={0.6}
                cornerRadius={{ top:  5 }}
                // data accessor for x values
                x="description"
                // data accessor for y values
                y="sum"
                labels={dataForDiagram.map( elem=> `${elem.sum} грн.`) }
                style={{ data: { fill: "#FF751D"  } }}

                  events={[{
                    target: "data",
                    eventHandlers: {
                      onClick: () => {
                        return [
                          {
                            target: "data",
                            mutation: (props) => {
                              const fill = props.style && props.style.fill;
                              return fill === "#F5F6FB" ? null : { style: { fill: "#F5F6FB", stroke: "#FF751D", strokeWidth: 1} };
                            }
                          }
                        ];
                      }
                    }
                  }]}

                animate={{
                    duration: 2000,
                    onLoad: { duration:1000 }
                }}

                  //для мобильной версии - горизонтальное отображение
                  // horizontal
                  // labelComponent={<VictoryLabel dy={-25} dx={0}/>}
              />
          </VictoryChart>
      } */}
Empty
      </div>
  );
};

export default Diagram;
