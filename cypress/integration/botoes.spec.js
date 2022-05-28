///<reference types="cypress"/>


describe('Teste de botões',() => {

  beforeEach(() => {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new');
  })
  
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
})