var expect = require("chai").expect;
var Blog = require("../controllers/blog");


describe("Pruebas del controlador Blog", function(){
	describe("Pruebas de Insercion de post", function(){

		it("Verificar que todos los campos existan al insertar",function(){
			var expected = ['title', 'author', 'body', 'hidden', 'meta']

			var data = Blog.insert({ 
				title:  "oka",
  			author: "n4o",
  			body:   "ola k ase",
  			hidden: false,
  			meta: { votes: 0, favs: 0 }
  		})

			var have_all_keys = true;
			for (var i in expected){
				if(!expected[i] in data){ have_all_keys = false; break; }
			}
			expect(have_all_keys).to.deep.equal(true)
		})

		it("Verificar que el mismo autor sea el que se inserto",function(){
			var data = Blog.insert({ 
				title:  "oka",
  			author: "n4o",
  			body:   "ola k ase",
  			hidden: false,
  			meta: { votes: 0, favs: 0 }
  		})

			result = data.author // obtener author de objeto insertado
			expect(result).to.deep.equal("n4o")
		})
	})

})