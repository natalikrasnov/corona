import './graph.style.scss'
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTooltip,VictoryScatter, VictoryVoronoiContainer, VictoryTheme, VictoryStack, VictoryPortal, VictoryLabel } from 'victory';

//לשנות לבייס קומפונת שמקבל איזה סוג גרף ומעביר אליו נתונים שצריך. הצבעים והדיב הראשון של המפה הוא בבייס
function VictoryChartCustome({dataElements, xTitle, yTitle, filterDate}) {
    const colors = ["rgb(159, 226, 159)", "tomato", "rgb(93, 236, 255)", "purple" ]
    
    return ( 
        <>
            <div className='graph-map'>
                {yTitle.map((title, index) => <div key={index } className='graph-map-item'>
                    <div style={ {backgroundColor: colors[index]}}className="graph-map-item-color" ></div>
                    <label>{title}</label>
                </div>
                )}
            </div>
            <VictoryChart height={300} width={300}
            containerComponent={
                <VictoryVoronoiContainer
                    voronoiDimension="x"
                    labels={({ datum }) => {
                                return `${yTitle[datum._stack-1]}: ${datum[yTitle[datum._stack-1]]}`

                            }}
                    labelComponent={
                    <VictoryTooltip
                        cornerRadius={0}
                        flyoutStyle={{ fill: "#374f60", color: 'white' }}
                    />}
                />
            }
        > 
           
            <VictoryAxis
                 maxDomain={{ x: 5 }}
                label={xTitle.split("_").join(" ")}

                tickFormat={(x, index) => index% 5 ? (x.split("-")[2] + "." + x.split("-")[1]): ""}
                style={{
                        axisLabel: { padding: 30, fill: "#FFFFFF" },
                        tickLabels: { fill: "#FFFFFF"}
                }}
                />
            <VictoryAxis
                    // label={yTitle}
                    dependentAxis
                tickFormat={(x) => x >= 1000 ? x / 1000 + "k" : x}
             //   theme={ictoryTheme.}
                style={{
                    ticks: {stroke: "grey", size: 5},
                        axisLabel: { padding: 40 ,fill: "#FFFFFF"},
                        tickLabels: { fill: "#FFFFFF", padding:30}
                }}
            />
            
            <VictoryStack
                colorScale={colors}
                
            >
                {
                    yTitle.map((ytitle, i) =>
                        dataElements && dataElements.map((element, index) =>
                        (
                            <VictoryBar
                                //  horizontal
                                key={index}
                                data={element}
                                x={xTitle}
                                y={ytitle}    
                                alignment="start"
                                barRatio={1.0}
                                style={{
                                      labels: { fill: colors[i] }
                                }}
                                
                            />
                            
                        ))
                        )}
                    
            </VictoryStack>
            
      </VictoryChart>
   </> )
}
export default VictoryChartCustome