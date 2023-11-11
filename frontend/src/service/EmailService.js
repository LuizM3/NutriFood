export function emailVerify(email) {
  return new Promise(async (response, reject) => {
    const isEmailUnique = await checkEmailUniqueness(email);
    if (!isEmailUnique) {
      console.log("funcionou pretinho");
      return response;
      // retuxn;
    } else {
      console.log("aaa teste");
      return reject;
      // return;
    }
  });
}
export const checkEmailUniqueness = async (email) => {
  try {
    const response = await fetch(
      `http://localhost:9000/check-email?email=${email}`
    );

    if (response.ok) {
      const data = await response.json();
      return data.isUnique;
    }
  } catch (error) {
    console.error("Erro ao verificar email:", error);
  }
  return false;
};
