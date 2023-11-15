import React, { Component } from "react";
import review from "../requisicao/reviewReq";
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
        if (Object[i].temperaturaDoAlimento == 1) {
            objeto.a++;
        }
        if (Object[i].temperaturaDoAlimento == 2) {
            objeto.b++;
        }
        if (Object[i].temperaturaDoAlimento == 3) {
            objeto.c++;
        }
        if (Object[i].temperaturaDoAlimento == 4) {
            objeto.d++;
        }
        if (Object[i].temperaturaDoAlimento == 5) {
            objeto.e++;
        }
    }
});

class GraficoTemperaturaDoAlimento extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [objeto.a, objeto.b, objeto.c, objeto.d, objeto.e]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: [1, 2, 3, 4, 5],
                }
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default GraficoTemperaturaDoAlimento;