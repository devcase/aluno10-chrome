(function() {
	
	//core constructor
	var aluno10 = function(arg) {
		if(!(this instanceof aluno10)) return new aluno10(arg);
		
		this.myArg = arg;
		this.init();
	};
	a10 = aluno10; //alias
	
	// create `fn` alias to `prototype` property
	aluno10.fn = aluno10.prototype = {
		modules: [],
		init: function() {
			for(i = 0; i < aluno10._modules.length; i++) {
				var modinstance= aluno10._modules[i]();
				this.modules.push(modinstance);
				this[aluno10._modulesnames[i]] = modinstance; 
			}
		}
	};
	
	aluno10._modules = [];
	aluno10._modulesnames = [];
	
	aluno10.registerModule = function(module, name) {
		aluno10._modules.push(module);
		aluno10._modulesnames.push(name);
	};
	
	//logout
	aluno10.fn.logout = function() {
		for(i = 0; i < this.modules.length; i++) {
			this.modules[i].logout();
		}
	};
	
	// expose the library
	window.aluno10 = aluno10;
	window.a10 = aluno10;
	
})();
