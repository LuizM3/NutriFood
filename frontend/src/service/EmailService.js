export const checkEmailUniqueness = async (email) => {
  try {
    const response = await fetch(
      `http://localhost:9000/check-email?email=${email}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data.isUnique); 
      return data.isUnique;
    } else {
      console.error(`Erro na requisição: ${response.status}`);
    }
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }

  return false;
};
