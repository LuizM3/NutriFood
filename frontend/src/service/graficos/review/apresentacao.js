import React, { Component } from "react";
import review from "../../requisicao/reviewReq";
import Chart from "react-apexcharts";

const vetApresentação = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
};

review().then((Object) => {
  for (let i = 0; i < Object.length; i++) {
    if (Object[i].apresentacao == 1) {
      vetApresentação.a++;
    }
    if (Object[i].apresentacao == 2) {
      vetApresentação.b++;
    }
    if (Object[i].apresentacao == 3) {
      vetApresentação.c++;
    }
    if (Object[i].apresentacao == 4) {
      vetApresentação.d++;
    }
    if (Object[i].apresentacao == 5) {
      vetApresentação.e++;
    }
  }
});

class GraficoApresentacao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5],
        },
      },
      series: [
        {
          name: "Avaliações",
          data: [
            vetApresentação.a,
            vetApresentação.b,
            vetApresentação.c,
            vetApresentação.d,
            vetApresentação.e,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GraficoApresentacao;
