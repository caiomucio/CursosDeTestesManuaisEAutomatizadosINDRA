///<reference types="cypress"/>


describe('Teste de botões',() => {

    beforeEach(() => {
      cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    })
    
    it('criar usuário com dados válidos', () => {
      
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
  
      cy.get('[id="notice"]').should('have.text','Usuário Criado com sucesso');
  
      cy.contains("p", "Nome").should("contain", "nao");
      // because did not have an id or other specif thing with some tag to the "Nome", it used the tag 'p' with the 'contains' to localize the element
  
    });
  
    it('Enviar usuário com formulário vazio', () => {
      cy.get('.tamanhodiv2 > h5').should('have.text', 'Novo Usuário!!');
      cy.get('[value="Criar"]').should('be.visible').click();
      cy.get('#error_explanation > h2').should('contain', 'errors proibiu que este usuário fosse salvo:')
    })
  });
  