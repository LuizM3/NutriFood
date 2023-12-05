import React, { Component } from "react";
import review from "../../requisicao/reviewReq";
import ReactApexChart from "react-apexcharts";

const objeto = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
}

review().then(Object => {
    for (const element of Object) {
        if (element.temperaturaDoAmbiente == 1) {
            objeto.a++;
        }
        if (element.temperaturaDoAmbiente == 2) {
            objeto.b++;
        }
        if (element.temperaturaDoAmbiente == 3) {
            objeto.c++;
        }
        if (element.temperaturaDoAmbiente == 4) {
            objeto.d++;
        }
        if (element.temperaturaDoAmbiente == 5) {
            objeto.e++;
        }
    }
});

class GraficoTemperaturaDoAmbiente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [objeto.a, objeto.b, objeto.c, objeto.d, objeto.e],
            options: {
                chart: {
                    type: 'polarArea',
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                labels: [1, 2, 3, 4, 5],
                responsive: [{
                    breakpoint: 100,
                    options: {
                        chart: {
                        },
                        legend: {
                            position: 'top'
                        }
                    }
                }]
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" />
            </div>
        )
    }
}
export default GraficoTemperaturaDoAmbiente;