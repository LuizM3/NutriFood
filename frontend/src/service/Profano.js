const fs = require("fs");

const filePath = "./src/palavras.txt";

try {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const wordsArray = fileContent.split(/\s+/);

  console.log("Array de Palavras:", wordsArray);
} catch (error) {
  console.error("Erro ao ler o arquivo:", error);
}
