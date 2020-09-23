import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["Week-1","Week-2","Week-3","Week-4","Week-5","Week-6","Week-7","Week-8"],
                datasets: [{
                    label: ["Student Attendance"],
                    data: [115,105,103,98,85,36,51,71],
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                }]
            }
        }
    }

    render() {
        return (
            <div className="LineChart" style={{ width: "100%", height: "100%" }}>
                <Line
                    data={this.state.data}
                    options={{
                        legend: {
                                    display: true,
                                    position: 'top',
                                    labels:{
                                        fontColor: "#ffffff",
                                        fontFamily: 'Open Sans, sans-serif'
                                    }   
                        },
                        scales: {
                            yAxes:[{
                                ticks: {
                                    display: true,
                                    backdropColor: "#ffffff",
                                    fontColor: "#ffffff",
                                    fontFamily: 'Open Sans, sans-serif'
                                },
                                pointLabels: {
                                    fontColor: "#ffffff",
                                    fontFamily: 'Open Sans, sans-serif',
                                    fontSize: 11
                                },
                                gridLines: {
                                    color: 'grey'
                                }
                            }],
                            xAxes:[{
                                ticks: {
                                    display: true,
                                    fontColor: "#ffffff",
                                    fontFamily: 'Open Sans, sans-serif'
                                },
                                pointLabels: {
                                    fontColor: "#ffffff",
                                    fontFamily: 'Open Sans, sans-serif',
                                    fontSize: 11
                                },
                                gridLines: {
                                    color: 'grey'
                                }
                            }]

                        }
                    }}
                />
            </div>

        );
    }
}

export default LineChart;

// {
//     responsive: true,
//     maintainAspectRatio: false,
//     gridLines: {
//         display: true,
//         color: "#ffffff"
//     },
//     scale: {
//         ticks: {
//             display: false,
//             suggestedMin: 0,
//             suggestedMax: 5,
//             stepSize: 1,
//             backdropColor: "#ffffff"
//         },
//         pointLabels: {
//             fontColor: "#ffffff",
//             fontFamily: 'Open Sans, sans-serif',
//             fontSize: 11
//         },
//         gridLines: {
//             color: 'grey'
//         }
//     }

// }