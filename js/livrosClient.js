/**
 * 
 */

(function($) {
	'use strict';
	console.log("livrosClient.js");
	
	var endpoint = 'http://localhost:8080';
	
	function preencheTabela(livros) {
		var $pontoDeInsercaoDeLinhas = $('#books-rows-body');
		
		$pontoDeInsercaoDeLinhas.find('tr').remove();
		
		for (var i = 0; i < livros.length; i++) {
			var livro = livros[i];
			var html = '<tr>' +
					'<td>'+livro.codigo+'</td>'+
					'<td>'+livro.nome+'</td>'+
					'<td>'+livro.editora+'</td>'+
					'<td>'+livro.publicacao+'</td>'+
					'<td>'+livro.resumo+'</td>'+
				'</tr>';
			
			$pontoDeInsercaoDeLinhas.append($(html));
		}		
	}
		
	function carregaTodosLivros() {
		$.ajax({
			url : endpoint + '/livros',
			method : 'GET',
			headers : {
				"Authorization" : "Basic cmVzdGJvb2tzOnBhc3M=",
				"Content-Type" : "application/json"
			},
			success : function(data) {
				preencheTabela(data);
			}
		});
	}

	$('#books-list-all').on('click', carregaTodosLivros);
	
})(jQuery);