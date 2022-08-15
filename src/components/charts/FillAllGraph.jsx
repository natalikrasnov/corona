import './graph.style.scss'
import { VictoryBar, VictoryChart,VictoryTooltip, VictoryAxis, VictoryTheme, VictoryStack, VictoryVoronoiContainer } from 'victory';

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
   const colors = ["rgb(159, 226, 159)", "tomato", "rgb(93, 236, 255)", "purple" ]

function FillAllGraph() {

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
    <>
        <VictoryChart height={300} width={300}
          domainPadding={{ x: 20, y: 0 }}
      theme={VictoryTheme.material}
      containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{ fill: "#374f60", color: 'white' }}
              />}
          />}
        >
            <VictoryStack
              colorScale={["rgb(159, 226, 159)", "tomato", "rgb(93, 236, 255)"
              
              
              ]}
            >
              {transformData(myDataset).map((data, i) => {
                  return <VictoryBar
                      data={data}
                      key={i}
                      horizontal
                      alignment="end"
                  />;
              })}
            </VictoryStack>
            <VictoryAxis dependentAxis
              tickFormat={(tick) => `${tick}%`}
            />
            <VictoryAxis
              tickFormat={["a", "b", "c", "d", "e"]}
            />
        </VictoryChart>
   </> );
}

export default FillAllGraph