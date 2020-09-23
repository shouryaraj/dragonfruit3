import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["Week-1","Week-2","Week-3","Week-4","Week-5","Week-6","Week-7"],
                datasets: [{
                    label: ["Student Attendance"],
                    data: [115,105,103,98,85,36,51],
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                }]
            }
        }
    }

    componentDidMount(){

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://dragonfruit-server/getUnit", requestOptions)
            .then(response => response.json())
            .then((json) =>{
                let currentWeek = "Week-" + json.week[0].number
                let currentWeekAttendance = json.week[0].count
                
                let tempState = this.state.data
                tempState.labels.push(currentWeek)
                tempState.datasets[0].data.push(currentWeekAttendance)

                this.setState(tempState)
            })
            .catch(error => console.log('error', error));
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