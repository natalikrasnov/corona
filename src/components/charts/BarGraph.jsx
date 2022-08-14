import './graph.style.scss'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPortal, VictoryLabel } from 'victory';

function VictoryChartCustome({dataElements, xTitle, yTitle}) {

    return (
        <VictoryChart height={200} width={400}
        //   domainPadding={{ x: 20, y: 0 }}
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
            <VictoryAxis
                    label={yTitle}
                orientation="top"//"right"
                
                    // tickFormat={(x) => x>=1000 ? x/1000+"k": x}
                    style={{
                        axisLabel: { padding: 10, fill: "#FFFFFF", top: 0 , border: "none" },
                        tickLabels: { fill: "none", padding:20}

                }}
            />
            <VictoryStack
                colorScale={["green", "tomato", "blue", "purple"]}
                
            >
                {
                    yTitle.map((ytitle, index) =>
                        dataElements && dataElements.map((element, index) => (
                            <VictoryBar
                                //  horizontal
                                key={index}
                                data={element}
                                x={xTitle}
                                y={ytitle}    
                                alignment="start"
                                barRatio={1.0}
                                
                            />
                        ))
                    )}
            </VictoryStack>
            
      </VictoryChart>
    )
}
export default VictoryChartCustome