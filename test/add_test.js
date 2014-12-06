var expect = require("chai").expect;

function add(a,b){
	if(a == "a") return "Los datos deben de ser numericos"

	return a + b
}

describe("probar funcion suma", function(){
	describe("probar suma de dos enteros positivos", function(){
		it("prueba que 2 + 2 es 4",function(){
			var result = add(2,2)
			expect(result).to.deep.equal(4)
		})

		it("prueba que cuando los valores no son numericos mande error",function(){
			var result = add("a",2)
			var expected = "Los datos deben de ser numericos"
			expect(result).to.deep.equal(expected)
		})
	})
})