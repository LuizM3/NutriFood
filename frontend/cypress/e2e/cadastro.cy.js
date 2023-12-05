import { geradorNome } from 'gerador-nome';
const randomNome = geradorNome();
const pass = require('password');
const randomPass = pass(1);
const randomEmail = removerAcentos(randomNome);

function removerAcentos(nome) {
  return nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}


describe('signin page', () => {
  it('Teste de links, páginas e ações', () => {
    cy.visit("http://localhost:3000");

    cy.getByData("links").find("a").contains('Nutrifood').click();
    cy.getByData("links").find("a").contains('Avaliações').click();
    cy.getByData("links").find("a").contains('Cardápio').click();
    cy.getByData("links").find("a").contains('Sugestões').click();
    cy.getByData("links").find("a").contains('Sobre').click();
    cy.getByData("links").find("a").contains('Entrar').click();
    cy.getByData("links").find("a").contains('Cadastre-se').click();

    cy.wait(1000);
    cy.getByData("cadastrar").click();

    cy.wait(1000)
    cy.getByData("form-nome").type(randomNome);
    cy.getByData("form-email").type(randomEmail + "@gmail.com");
    cy.getByData("form-pass").type(randomPass);
    cy.getByData("form-passc").type(randomPass + 1);
    cy.getByData("cadastrar").click();

    cy.reload();

    //Coloca a senha que não está no padrão;
    cy.wait(1000);
    cy.getByData("form-nome").type(randomNome);
    cy.getByData("form-email").type(randomEmail + "@gmail.com");
    cy.getByData("form-pass").type(randomPass);
    cy.getByData("form-passc").type(randomPass);
    cy.getByData("cadastrar").click();
    cy.reload();

    //Cria uma conta;
    cy.wait(1000);
    cy.getByData("form-nome").type(randomNome);
    cy.getByData("form-email").type(randomEmail + "@gmail.com");
    cy.getByData("form-pass").type("TesteCy123@");
    cy.getByData("form-passc").type("TesteCy123@");
    cy.getByData("cadastrar").click();
    cy.get('.form-check-input').click();
    cy.getByData("cadastrar").click();

    //Form de entrada;
    cy.wait(1000);
    cy.get('#inline-radio-4').click();
    cy.get('#inline-checkbox-4').click();
    cy.get('#inline-checkbox-5').click();
    cy.get('#inline-checkbox-6').click();
    cy.get('#inline-checkbox-7').click();
    cy.get("#inline-radio-9").click();
    cy.getByData("links").find("button").contains('Enviar').click();
    
    //Realiza o cadastro errado;
    cy.wait(2000);
    cy.getByData("form-email").type(randomEmail + "@gmail.com");
    cy.getByData("form-pass").type(randomPass);

    //Realiza o cadastro;
    cy.reload();
    cy.wait(1000);
    cy.getByData("form-email").type(randomEmail + "@gmail.com");
    cy.getByData("form-pass").type("TesteCy123@");
    cy.get("#button-login-signup").click();
    cy.wait(2000);

    //Ajustes e Logout
    cy.get('#dropdown-autoclose-true').click();
    cy.get('.dropdown-menu > :nth-child(1)').click();
    

    //Sugestões
    cy.getByData("links").find("a").contains('Sugestões').click();
    cy.get('.bt-sub').click();
    cy.reload();
    cy.get('.form-control').type("Excelente espaço");
    cy.get('.bt-sub').click();
    cy.wait(1000);

    //Avaliação;
    cy.getByData("links").find("a").contains('Avaliações').click();
    cy.get('[for="star5_group1"]').click();
    cy.get('[for="star4_group2"]').click();
    cy.get('[for="star3_group3"]').click();
    cy.get('[for="star5_group4"]').click();
    cy.get('[for="star5_group5"]').click();
    cy.get('[for="star5_group6"]').click();
    cy.get('[for="star5_group7"]').click();
    cy.get('[for="star5_group8"]').click();
    cy.get('[for="star5_group9"]').click();
    cy.get('[for="star5_group10"]').click();
    cy.get('.btn-reviews').click();
    
  })

})