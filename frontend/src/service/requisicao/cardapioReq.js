export default async function cardapio() {
    try {
        const response = await fetch(
          "http://localhost:9000/getMenu",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.log("Erro na requisição");
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
}

//     if (response.ok) {
//       const data = await response.json();

//       setMenuCafeDaManha(data.response[0]);
//       setMenuAlmoco(data.response[1]);
//       setMenuLancheDaTarde(data.response[2]);
//       setMenuJantar(data.response[3]);

//       const dias = [];
//       for (const elements of menuAlmoco) {
//         dias.push(elements.id);
//       }

//       console.log(dias);
//       setDatas(dias);
//       console.log(datas);
//     } else {
//       console.log("Erro na requisição");
//     }
//   } catch (error) {
//     console.error("Erro ao enviar requisição:", error);
//   }