
const expect = require('chai').expect
const add = require('..').add
const substract = require('..').substract

describe('#paquete', function(){
    
    it('Suma dos numeros 5 y 4 el resultado debe ser 9', function(){
        const resultado = add(5, 4)
        expect(resultado).to.be.equal(9)
    })

    it('Suma dos numeros 3 y 2 el resultado debe ser 5', function(){
        const resultado = add(3, 2)
        expect(resultado).to.be.equal(5)
    })

    it('Resta dos numeros 3 y 2 el resultado debe ser 1', function(){
        const resultado = substract(3, 2)
        expect(resultado).to.be.equal(1)        
    })

    it('Resta dos numeros 3 y 4 el resultado debe ser -1', function(){
        const resultado = substract(3, 4)
        expect(resultado).to.be.equal(-1)
    })

})