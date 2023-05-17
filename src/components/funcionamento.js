import React from "react";
import Card from "react-bootstrap/Card";
import "../Sass/funcionamento.scss"

const Section2 = () => {
    return (
        <>
            <div id="background">
                <Card id="card"> 
                    <Card.Body>
                        <Card.Title><h2>Horário de funcionamento</h2></Card.Title>
                        <Card.Text>
                           Funcionamos
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Section2;