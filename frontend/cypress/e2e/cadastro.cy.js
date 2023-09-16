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
    cy.visit("http://localhost:3000")

    cy.getByData("links").find("a").contains('Nutrifood').click()
    cy.getByData("links").find("a").contains('Avaliações').click()
    cy.getByData("links").find("a").contains('Contato').click()
    cy.getByData("links").find("a").contains('Sobre').click()
    cy.getByData("links").find("a").contains('Entrar').click()
    cy.getByData("links").find("a").contains('Cadastre-se agora').click()

    cy.getByData("cadastrar").click()
    cy.getByData("links").find("button").contains('Fechar').click()

    cy.getByData("form-nome").type(randomNome)
    cy.getByData("form-email").type(randomEmail + "@gmail.com")
    cy.getByData("form-pass").type(randomPass)
    cy.getByData("form-passc").type(randomPass + 1)
    cy.getByData("cadastrar").click()

    cy.getByData("links").find("button").contains('Fechar').click()
    cy.reload();

    cy.getByData("form-nome").type(randomNome)
    cy.getByData("form-email").type(randomEmail + "@gmail.com")
    cy.getByData("form-pass").type(randomPass)
    cy.getByData("form-passc").type(randomPass)
    cy.getByData("cadastrar").click()

    cy.get("#inline-radio-1").click()
    cy.get("#inline-checkbox-4").click()

    cy.get("#inline-radio-9").click()
    cy.getByData("links").find("button").contains('Enviar').click()
    cy.wait(2000)
    cy.getByData("form-email").type(randomEmail + "@gmail.com")
    cy.getByData("form-pass").type(randomPass)

    cy.get("#button-login-signup").click()
    cy.wait(2000)
    cy.getByData("links").find("button").contains('Fechar').click()
    cy.getByData("links").find("a").contains('Cadastre-se agora').click()

    cy.getByData("form-nome").type(randomNome)
    cy.getByData("form-email").type(randomEmail + "@gmail.com")
    cy.getByData("form-pass").type(randomPass)
    cy.getByData("form-passc").type(randomPass)
    cy.getByData("cadastrar").click()
    cy.wait(2000)

    cy.getByData("links").find("button").contains('Fechar').click()

  })

})