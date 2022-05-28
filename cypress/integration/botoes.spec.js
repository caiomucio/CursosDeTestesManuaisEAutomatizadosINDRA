///<reference types="cypress"/>


describe('Teste de botões',() => {
  it('Validar botão ao clicar', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
    cy.get('[id="teste"]').click();
    cy.get("#div1>h5").should("have.text","Você Clicou no Botão!");
  });
  it('Validar botão ao clicar submmit', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
    cy.get('[class="btn waves-light"]').click();
    cy.get("#div4>h5").should("have.text","Você Clicou no Botão!");
  });
  it('Validar texto', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield');
    cy.get('[id="first_name"]').type('Caio')
    cy.get('[id="first_name"]').should('have.value','Caio')
    cy.get('[id="last_name"]').type('Mucio Furtado dos Santos Filho')
    cy.get('[id="last_name"]').should('have.value','Mucio Furtado dos Santos Filho')

  });
  it.only('criar usuário', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    cy.get('[id="user_name"]').type('Caio');
    cy.get('[id="user_lastname"]').type('Mucio Furtado dos Santos Filho');
    cy.get('[id="user_email"]').type('caiomucio@hotmail.com');
    cy.get('[id="user_address"]').type('av. joão cirilo 1700');
    cy.get('[id="user_university"]').type('Uniesp');
    cy.get('[id="user_profile"]').type('Estudante');
    cy.get('[id="user_gender"]').type('Masculino');
    cy.get('[id="user_age"]').type('23');
    cy.get('[value="Criar"]').click();
    cy.get('[id="notice"]').should('have.text','Usuário Criado com sucesso')

    

  });
});