$(function() {
	var loginform = $('form#login-form');
	a10().khan.retrieveLoginData(function(logindata) {
		if(logindata == null) alert("Não foram encontrados dados do aluno para o login na Khan Academy");
		$.ajax({
			url: "/login",
			method: "POST",
			data: {
				"identifier": logindata.login,
				"password": logindata.password,
				"fkey": loginform.find("[name='fkey']").val()
			},
			success: function(data) {
				
				if(data["continue"]) {
					//avisa que o login foi bem sucedido
					chrome.runtime.sendMessage({loginSuccessful: true, success: true, data: data});
				} else if(data.errors) {
					if(data.errors.badlogin) {
						alert("Usuário e senha do aluno estão incorretos");
					} else {
						alert("Erro no login");
					}
				}
			}
		})
	});
});

var resp;