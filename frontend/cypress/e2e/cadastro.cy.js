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

    //Novo Email
    cy.get('.formulario-card > :nth-child(1)').type(randomEmail + "123Novo@gmail.com");
    cy.get('.justify-content-end > div > .bt-sub').click();
    cy.get('[data-test="form-pass"]').type("TesteCy123@");
    cy.get('#button-login-signup').click();
    cy.wait(1000);
    cy.getByData("links").find("a").contains('Entrar').click();
    cy.getByData("form-email").type(randomEmail + "123Novo@gmail.com");
    cy.getByData("form-pass").type("TesteCy123@");
    cy.get("#button-login-signup").click();
    cy.wait(2000);

    //Mudanças nos valores switch
    cy.get('#dropdown-autoclose-true').click();
    cy.get('.dropdown-menu > :nth-child(1)').click();
    cy.get(':nth-child(2) > #custom-switch').click();
    cy.get(':nth-child(4) > #custom-switch').click();
    cy.get(':nth-child(5) > #custom-switch').click();
    cy.get('#vinculo-radio-2').click();
    cy.get('.div-pattern > [type="button"]').click();
    cy.reload();
    //Nova Senha
    cy.get(':nth-child(2) > a > .bg-transparent').click();
    cy.get(':nth-child(2) > [data-test="form-pass"]').type("TesteCy123@");
    cy.get(':nth-child(4) > [data-test="form-pass"]').type("TesteCypress123@");
    cy.get(':nth-child(5) > [data-test="form-pass"]').type("TesteCypress123@");
    cy.get('#button-login-signup').click();
    cy.wait(1000);
    cy.getByData("links").find("a").contains('Entrar').click();
    cy.getByData("form-email").type(randomEmail + "123Novo@gmail.com");
    cy.getByData("form-pass").type("TesteCypress123@");
    cy.get("#button-login-signup").click();
    cy.wait(2000);

    //Sugestões
    cy.visit("http://localhost:3000");
    cy.getByData("links").find("a").contains('Sugestões').click();
    cy.get('.bt-sub').click();
    cy.reload();
    cy.get('.form-control').type("Excelente espaço");
    cy.get('.bt-sub').click();
    cy.wait(1000);

    //Alterando e excluindo sugestão
    cy.get('#dropdown-autoclose-true').click();
    cy.get('.dropdown-menu > :nth-child(1)').click();
    cy.get(':nth-child(3) > a > .bg-transparent > .align-items-center').click();
    cy.get('.btn-pencil').click();
    cy.get('.form-control').type("Gostei do ambiente!");
    cy.get('.d-flex > .h-100').click();
    cy.get('.btn-trash').click(); //Clica duas vezes por erro
    cy.get('.btn-trash').click();
    cy.get('.bt-sub').click();
    cy.wait(1000);
    cy.get('.text-decoration-none').click();

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
    cy.visit("http://localhost:3000");
  })

})