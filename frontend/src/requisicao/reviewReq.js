import React from "react";

export default async function review() {
    const vetApresentação = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0
    };

    try {
        const response = await fetch(`http://localhost:9000/getReviews`);
        if (response.ok) {
            const data = await response.json();
            const result = data.reviews;

            for (let i = 0; i < result.length; i++) {
                if (result[i].apresentacao == 1) {
                    vetApresentação.a++;
                }
                if (result[i].apresentacao == 2) {
                    vetApresentação.b++;
                }
                if (result[i].apresentacao == 3) {
                    vetApresentação.c++;
                }
                if (result[i].apresentacao == 4) {
                    vetApresentação.d++;
                }
                if (result[i].apresentacao == 5) {
                    vetApresentação.e++;
                }
            }
            return vetApresentação;
        }
    } catch (error) {
        console.error("Erro ao requerir dados", error);
        return "erro";
    }
}
