import './graph.style.scss'

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack ,VictoryArea, VictoryLabel} from 'victory';

const myDataset = [
  [
      { x: "a", y: 1 },
      { x: "b", y: 2 },
      { x: "c", y: 3 },
      { x: "d", y: 2 },
      { x: "e", y: 1 }
  ],
  [
      { x: "a", y: 2 },
      { x: "b", y: 3 },
      { x: "c", y: 4 },
      { x: "d", y: 5 },
      { x: "e", y: 5 }
  ],
  [
      { x: "a", y: 1 },
      { x: "b", y: 2 },
      { x: "c", y: 3 },
      { x: "d", y: 4 },
      { x: "e", y: 4 }
  ]
]
function VictoryChartLinerFill({dataElements, xTitle, yTitle}) {
 const transformData = (dataset)=> {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
    }
    return (
         <VictoryChart height={200} width={400}
        //   theme={VictoryTheme.material}
        >
        <VictoryStack
        colorScale={["tomato", "blue", "green"]}
        >
        {/* <VictoryArea
            data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
        />
        <VictoryArea
            data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
        />
        <VictoryArea
            data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
        /> */}
             {transformData(myDataset).map((data, i) => {
                return <VictoryArea data={data} key={i}/>;
              })}
            </VictoryStack>
             <VictoryAxis dependentAxis
               tickFormat={(tick) => `${tick}%`}
             />
             <VictoryAxis
               tickFormat={["a", "b", "c", "d", "e"]}
             />
        </VictoryChart>
    )
}
export default VictoryChartLinerFill
