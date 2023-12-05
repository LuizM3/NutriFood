import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import user from "../../requisicao/userReq";
import review from "../../requisicao/reviewReq";

class GraficoSDT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Geral",
          data: [0, 0, 0],
        },
        {
          name: "SDT",
          data: [0, 0, 0],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
        },
        colors: ["#008FFB", "#ffe100"],
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
      const vinculoAoIfes = userObject.vinculoAoIfes;
      const idSDT = [];

      for (let i = 0; i < vinculoAoIfes.length; i++) {
        if (vinculoAoIfes[i] == "SDT") {
          idSDT.push(id[i]);
        }
      }

      review().then((reviewObject) => {
        let contGeral = 0;
        let somaGeral1 = 0;
        let somaGeral2 = 0;
        let somaGeral3 = 0;

        let contSDT = 0;
        let somaSDT1 = 0;
        let somaSDT2 = 0;
        let somaSDT3 = 0;

        for (const element of reviewObject) {
          somaGeral1 += Number(element.saborDaRefeicao);
          somaGeral2 += Number(element.variedade);
          somaGeral3 += Number(element.temperaturaDoAlimento);
          contGeral++;

          for (let i = 0; i < idSDT.length; i++) {
            if (element.idUsuario == idSDT[i]) {
              somaSDT1 += Number(element.saborDaRefeicao);
              somaSDT2 += Number(element.variedade);
              somaSDT3 += Number(element.temperaturaDoAlimento);
              contSDT++;
            }
          }
        }

        const mediaSDTSaborDaRefeicao = (somaSDT1 / contSDT) * -1;
        const mediaSDTVariedade = (somaSDT2 / contSDT) * -1;
        const mediaSDTTemperaturaDoAlimento = (somaSDT3 / contSDT) * -1;

        const mediaGeralSaborDaRefeicao = somaGeral1 / contGeral;
        const mediaGeralVariedade = somaGeral2 / contGeral;
        const mediaGeralTemperaturaDoAlimento = somaGeral3 / contGeral;

        this.setState({
          mediaGeralSaborDaRefeicao,
          mediaSDTSaborDaRefeicao,
          mediaGeralVariedade,
          mediaSDTVariedade,
          mediaGeralTemperaturaDoAlimento,
          mediaSDTTemperaturaDoAlimento,
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
              name: "SDT",
              data: [
                mediaSDTSaborDaRefeicao.toFixed(2),
                mediaSDTVariedade.toFixed(2),
                mediaSDTTemperaturaDoAlimento.toFixed(2),
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

export default GraficoSDT;
