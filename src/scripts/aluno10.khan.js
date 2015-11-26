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
		//PLACEHOLDER
		callback({"login": "thiagoaluno10", "password": "Aluno102015"});
	};
	
	aluno10khan.fn.login = function() {
		chrome.cookies.remove({ //apaga o cookie que guarda dados do login
			"url" : "https://pt.khanacademy.org/",
			"name" : "ka_session"
		}, function() {
			//Cookie apagado - cria uma aba na página de login
			chrome.tabs.create({
				"url": "https://pt.khanacademy.org/login",
				"active": false
			}, function(tab) {
				//aba na página de login criada - aguardar o login
				//khan/login.js envia mensagem com loginSuccessful = true
				chrome.runtime.onMessage.addListener(
					  function(request, sender, sendResponse) {
						  if(sender.tab.id == tab.id) {
							  if(request.loginSuccessful) {
								  chrome.tabs.remove(tab.id);
							  }
						  }
					  });
			});
		});
	};
	
	a10.registerModule(aluno10khan, "khan");

})();


