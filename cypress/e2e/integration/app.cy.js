/*global cy*/

describe('Selector de archivos', function() {
    it('frontpage can be opened', function() {
        cy.visit('http://localhost:8080');
        cy.contains('Prueba')
        cy.contains('Slin')
    })
})