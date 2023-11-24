// import React, { Component, useEffect, useState } from "react";
// import Chart from "react-apexcharts";


// class View extends Component {
//   constructor(props) {
//       super(props);
      
//       this.state = {
//         options: {
//           chart: {
//             id: "basic-bar"
//           },
//           xaxis: {
//             categories: [1, 2, 3, 4, 5]
//           }
//         },
//         series: [
//           {
//             name: "Avaliações",
//             data: []
//           }
//         ]
//       };
      
//       const funcao = async () => {
//         try {
//             await result();
//           } catch (error) {
//             console.error("Erro ao obter dados:", error);
//           }
//       }
    
//     const result = async () =>{
        
//         const vetApresentação = {
//             a: 0,
//             b: 0,
//             c: 0,
//             d: 0,
//             e: 0
//         };

//         try {
//             const response = await fetch(`http://localhost:9000/getReviews`);
//             if (response.ok) {
//                 const data = await response.json();
//                 const result = data.reviews;

//                 for (let i = 0; i < result.length; i++) {
//                     if (result[i].apresentacao == 1) {
//                         vetApresentação.a++;
//                     }
//                     if (result[i].apresentacao == 2) {
//                         vetApresentação.b++;
//                     }
//                     if (result[i].apresentacao == 3) {
//                         vetApresentação.c++;
//                     }
//                     if (result[i].apresentacao == 4) {
//                         vetApresentação.d++;
//                     }
//                     if (result[i].apresentacao == 5) {
//                         vetApresentação.e++;
//                     }
//                 }

//                 this.setState({
//                     series: [
//                       {
//                         name: "Avaliações",
//                         data: [
//                           vetApresentação.a,
//                           vetApresentação.b,
//                           vetApresentação.c,
//                           vetApresentação.d,
//                           vetApresentação.e,
//                         ],
//                       },
//                     ],
//                   });
//             }
//         } catch (error) {
//             console.error("Erro ao requerir dados", error);
//         }
//     }

//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default View;