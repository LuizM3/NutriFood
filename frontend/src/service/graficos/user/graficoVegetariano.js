import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import user from "../../requisicao/userReq";
import review from "../../requisicao/reviewReq";

class GraficoVegetariano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Geral",
          data: [0, 0, 0],
        },
        {
          name: "Vegetariano",
          data: [0, 0, 0],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
        },
        colors: ["#008FFB", "#52f772"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          min: -5,
          max: 5,
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val;
            },
          },
          y: {
            formatter: function (val) {
              return Math.abs(val);
            },
          },
        },
        title: {
          text: "",
        },
        xaxis: {
          categories: [
            "Sabor Da Refeicao",
            "Variedade",
            "Temperatura Do Alimento",
          ],
          title: {
            text: "Nota",
          },
        },
      },
    };
  }

  componentDidMount() {
    // Buscar dados de usuário e avaliação
    user().then((userObject) => {
      const id = userObject.id;
      const vegetariano = userObject.vegetariano;
      const idVeg = [];

      for (let i = 0; i < vegetariano.length; i++) {
        if (vegetariano[i] == 1) {
          idVeg.push(id[i]);
        }
      }

      review().then((reviewObject) => {
        let contGeral = 0;
        let somaGeral1 = 0;
        let somaGeral2 = 0;
        let somaGeral3 = 0;

        let contVeg = 0;
        let somaVeg1 = 0;
        let somaVeg2 = 0;
        let somaVeg3 = 0;

        for (const element of reviewObject) {
          somaGeral1 += Number(element.saborDaRefeicao);
          somaGeral2 += Number(element.variedade);
          somaGeral3 += Number(element.temperaturaDoAlimento);

          for (let i = 0; i < idVeg.length; i++) {
            if (element.idUsuario == idVeg[i]) {
              somaVeg1 += Number(element.saborDaRefeicao);
              somaVeg2 += Number(element.variedade);
              somaVeg3 += Number(element.temperaturaDoAlimento);
              contVeg++;
            }
          }

          contGeral++;
        }

        const mediaVegSaborDaRefeicao = (somaVeg1 / contVeg) * -1;
        const mediaVegVariedade = (somaVeg2 / contVeg) * -1;
        const mediaVegTemperaturaDoAlimento = (somaVeg3 / contVeg) * -1;

        const mediaGeralSaborDaRefeicao = somaGeral1 / contGeral;
        const mediaGeralVariedade = somaGeral2 / contGeral;
        const mediaGeralTemperaturaDoAlimento = somaGeral3 / contGeral;

        this.setState({
          mediaGeralSaborDaRefeicao,
          mediaVegSaborDaRefeicao,
          mediaGeralVariedade,
          mediaVegVariedade,
          mediaGeralTemperaturaDoAlimento,
          mediaVegTemperaturaDoAlimento,
          series: [
            {
              name: "Geral",
              data: [
                mediaGeralSaborDaRefeicao.toFixed(2),
                mediaGeralVariedade.toFixed(2),
                mediaGeralTemperaturaDoAlimento.toFixed(2),
              ],
            },
            {
              name: "Vegetariano",
              data: [
                mediaVegSaborDaRefeicao.toFixed(2),
                mediaVegVariedade.toFixed(2),
                mediaVegTemperaturaDoAlimento.toFixed(2),
              ],
            },
          ],
        });
      });
    });
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={440}
        />
      </div>
    );
  }
}

export default GraficoVegetariano;
