export default async function review() {
    try {
        const response = await fetch(`http://localhost:9000/getReviews/`);
        if (response.ok) {
            const data = await response.json();
            const result = data.reviews;
            return result;
        }
    } catch (error) {
        console.error("Erro ao requerir dados", error);
        return "erro";
    }
}
