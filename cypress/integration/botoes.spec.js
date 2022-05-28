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
  it.only('criar usuário com dados válidos', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    cy.get('.tamanhodiv2 > h5').should('have.text', 'Novo Usuário!!');
    cy.get('[id="user_name"]').should('be.visible').type('nao').should('have.value', 'nao');
    cy.get('[id="user_lastname"]').should('be.visible').type('qualquer').should('have.value', 'qualquer');
    cy.get('[id="user_email"]').should('be.visible').type('qualquer@hotmail.com').should('have.value', 'qualquer@hotmail.com');
    cy.get('[id="user_address"]').should('be.visible').type('av nao sei').should('have.value', 'av nao sei');
    cy.get('[id="user_university"]').should('be.visible').type('Uniesp').should('have.value', 'Uniesp');
    cy.get('[id="user_profile"]').should('be.visible').type('Estudante').should('have.value', 'Estudante');
    cy.get('[id="user_gender"]').should('be.visible').type('Masculino').should('have.value', 'Masculino');
    cy.get('[id="user_age"]').should('be.visible').type('99').should('have.value', '99');
    cy.get('[value="Criar"]').should('be.visible').click();
    cy.get('[id="notice"]').should('have.text','Usuário Criado com sucesso')

    

  });
});