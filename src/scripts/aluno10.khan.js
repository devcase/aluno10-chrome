(function() {
	// core constructor
	var aluno10khan = function(arg) {
		if (!(this instanceof aluno10khan))
			return new aluno10khan(arg);

		this.myArg = arg;
		this.init();
	};

	// create `fn` alias to `prototype` property
	aluno10khan.fn = aluno10khan.prototype = {
		init : function() {
		}
	};

	// expose the library
	window.aluno10khan = aluno10khan;

	
	aluno10khan.fn.logout = function() {
		var cookiesToRemove = [ {
			"url" : "https://pt.khanacademy.org/",
			"name" : "KAID"
		}, {
			"url" : "https://pt.khanacademy.org/",
			"name" : "ka_session"
		} ];

		for (i = 0; i < cookiesToRemove.length; i++) {
			chrome.cookies.remove(cookiesToRemove[i]);
		}
	};
	
	aluno10khan.fn.retrieveLoginData = function(callback) {
		callback({"login": "thiagoaluno10", "password": "???"});
	};
		
	a10.registerModule(aluno10khan, "khan");

})();


