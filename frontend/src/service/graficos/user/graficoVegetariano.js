import React, { Component } from "react";
import user from "../../requisicao/userReq";
import review from "../../requisicao/reviewReq";
import ReactApexChart  from "react-apexcharts";

const vetApresentação = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
}

user().then(Object => {
    console.log(Object.vinculoAoIfes);
    console.log(Object.cafeDaManha);
    console.log(Object.almoco);
    console.log(Object.lancheDaTarde);
    console.log(Object.jantar);
    console.log(Object.vegetariano);

    let soma = 0;

    for(const element of Object){

    }
});

class GraficoVegetariano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Geral',
                data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                    3.9, 3.5, 3]
            },
            {
                name: 'Vegetariano',
                data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                -4.1, -4, -4.1, -3.4, -3.1, -2.8]
            }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 440,
                    stacked: true
                },
                colors: ['#008FFB', '#FF4560'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },

                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                        // text: 'Age',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + "%"
                        }
                    }
                },
                title: {
                    text: 'Mauritius population pyramid 2011'
                },
                xaxis: {
                    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
                        '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
                        '0-4'
                    ],
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val)) + "%"
                        }
                    }
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={440} />
            </div>
        );
    }
}
export default GraficoVegetariano;