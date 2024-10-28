describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-tau.vercel.app/'); // abir site
    cy.contains('a', 'Cadastrar').click(); // clicar no cadastrar na tela
    cy.get('#name').type('Ana de Jesus'); // digitar no campo
    cy.get('#email').type('ana@email.com'); // digitar no campo
    cy.get('#pass-create').type('Senha123'); // digitar no campo
    cy.get('#pass-confirm').type('Senha123'); // digitar no campo
    cy.contains('button', 'Cadastrar').click(); // clicar no botao cadastrar
  })
})