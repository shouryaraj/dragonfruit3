import React , {Component} from "react";
import {Radar} from 'react-chartjs-2';

class RadarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: ["Confidence Rating", "Content Completeness", "Learning Confidence", "Content Positivity", "Discussion Confidence", "Workload Management"],
                datasets: [{
                    label: ["Unit Average"],
                    data: [4.5,2,4,3,2,5],
                    backgroundColor: 'rgba(197, 250, 243,0.2)',
                    borderColor: '#30e3ca',
                    borderWidth: 2,
                },
                {
                    label: ["Current Average"],
                    data: [3,4,5,4,1,5],
                    backgroundColor: 'rgba(47, 137, 252,0.2)',
                    borderColor: '#2f89fc',
                    borderWidth: 2,
                }],
            } ,
        }

    }

    render(){
        return(
            <div className = "radarChart" style= {{width: "650px", height: "350px"}}>
                <Radar
                    data={this.state.data}
                    options={{ 
                        responsive:true,
                        maintainAspectRatio: false,
                        legend:{
                            display: true,
                            position: 'right'
                            
                        },
                        scale: {
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 5,
                                stepSize: 1,
                                backdropColor: "#ffffff"
                            },
                            pointLabels: {
                                fontColor: "#ffffff",
                                fontFamily: 'Open Sans, sans-serif',
                                fontSize: 11
                            }
                        }
                        
                    }}
                />
            </div>

        );
    }
}

export default RadarChart;