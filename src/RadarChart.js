import React, { Component } from "react";
import { Radar } from 'react-chartjs-2';

class RadarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["Confidence Rating", "Content Completeness", "Learning Confidence", "Content Positivity", "Discussion Confidence", "Workload Management"],
                datasets: [{
                    label: ["Past Weeks"],
                    data: [4.5, 2, 4, 3, 2, 5],
                    backgroundColor: 'rgba(197, 250, 243,0.2)',
                    borderColor: '#30e3ca',
                    borderWidth: 2,
                },
                {
                    label: ["Current Week"],
                    data: [3, 4, 5, 4, 1, 5],
                    backgroundColor: 'rgba(47, 137, 252,0.2)',
                    borderColor: '#2f89fc',
                    borderWidth: 2,
                }],
            },
        }

    }

    componentDidMount() {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("/getUnit", requestOptions)
            .then(response => response.json())
            .then((json) => {
                let currentWeekData = []
                let currentWeekAttendance = json.week[0].count
                currentWeekData.push(parseInt(json.week[0].questions.C1) / currentWeekAttendance)
                currentWeekData.push(parseInt(json.week[0].questions.B1) / currentWeekAttendance)
                currentWeekData.push(parseInt(json.week[0].questions.SR1) / currentWeekAttendance)
                currentWeekData.push(parseInt(json.week[0].questions.A1) / currentWeekAttendance)
                currentWeekData.push(parseInt(json.week[0].questions.A2) / currentWeekAttendance)
                currentWeekData.push(parseInt(json.week[0].questions.O1) / currentWeekAttendance)

                let tempState = this.state.data
                tempState.datasets[1].data = currentWeekData

                this.setState(tempState)
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="radarChart" style={{ width: "100%", height: "100%" }}>
                <Radar
                    data={this.state.data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        tooltips: {
                            enabled: false
                        },
                        gridLines: {
                            display: true,
                            color: "#ffffff"
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                fontColor: "#ffffff",
                                fontFamily: 'Open Sans, sans-serif',
                                fontSize: 10
                            }
                        },
                        scale: {
                            ticks: {
                                display: false,
                                beginAtZero: true,
                                max: 5,
                                min: 0,
                                stepSize: 1,
                                backdropColor: "#ffffff"
                            },
                            pointLabels: {
                                fontColor: "#ffffff",
                                fontFamily: 'Open Sans, sans-serif',
                                fontSize: 11
                            },
                            gridLines: {
                                color: 'grey'
                            }
                        }

                    }}
                />
            </div>

        );
    }
}

export default RadarChart;