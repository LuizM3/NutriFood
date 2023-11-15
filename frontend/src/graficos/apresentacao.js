import React, { Component } from "react";
import Chart from "react-apexcharts";
import review from "../requisicao/reviewReq";

class Grafico extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5]
          }
        },
        series: [
          {
            name: "Avaliações",
            data: []
          }
        ]
      };

      const result = review();
      result.then(Object => this.setState({
        series: [
          {
            name: "Avaliações",
            data: [
              Object.a,
              Object.b,
              Object.c,
              Object.d,
              Object.e,
            ],
          },
        ],
      })
      )
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

export default Grafico;