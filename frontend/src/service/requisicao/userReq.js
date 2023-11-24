export default async function user() {
    try {
        const response = await fetch(
          "http://localhost:9000/getDadosUser",
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