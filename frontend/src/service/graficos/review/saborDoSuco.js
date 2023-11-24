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
    for (let i = 0; i < Object.length; i++) {
        if (Object[i].saborDoSuco == 1) {
            objeto.a++;
        }
        if (Object[i].saborDoSuco == 2) {
            objeto.b++;
        }
        if (Object[i].saborDoSuco == 3) {
            objeto.c++;
        }
        if (Object[i].saborDoSuco == 4) {
            objeto.d++;
        }
        if (Object[i].saborDoSuco == 5) {
            objeto.e++;
        }
    }
});

class GraficoSaborDoSuco extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [objeto.a, objeto.b, objeto.c, objeto.d, objeto.e],
            options: {
                chart: {
                    type: 'donut',
                },
                labels: [1, 2, 3, 4, 5],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
            </div>

        )
    }
}
export default GraficoSaborDoSuco;