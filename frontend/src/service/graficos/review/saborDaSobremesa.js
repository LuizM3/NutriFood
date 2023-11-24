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
        if (Object[i].saborDaSobremesa == 1) {
            objeto.a++;
        }
        if (Object[i].saborDaSobremesa == 2) {
            objeto.b++;
        }
        if (Object[i].saborDaSobremesa == 3) {
            objeto.c++;
        }
        if (Object[i].saborDaSobremesa == 4) {
            objeto.d++;
        }
        if (Object[i].saborDaSobremesa == 5) {
            objeto.e++;
        }
    }
});

class GraficoSaborDaSobremesa extends Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Series 1',
                data: [objeto.a, objeto.b, objeto.c, objeto.d, objeto.e],
            }],
            options: {
                chart: {
                    type: 'radar',
                },
                title: {
                    text: 'Basic Radar Chart'
                },
                xaxis: {
                    categories: [1, 2, 3, 4, 5]
                }
            },
        };

    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" />
            </div>
        );
    }
}
export default GraficoSaborDaSobremesa;