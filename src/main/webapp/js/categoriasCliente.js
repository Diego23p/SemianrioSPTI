categoriasCliente = (function() {
	return {
		getCategorias: function(callback) {
			$.ajax({
				url: "categoria",
				success: function (result) {
					callback(result);
				},
				async: true
			});
		}
		deleteUserCache: function(usuario){
            $.ajax({
                url: "usuario/deleteUserCache/"+usuario ,
                type: "DELETE",
                data: JSON.stringify(usuario),
                contentType: "application/json",
                success: function() {
                },
                 error: function(XMLHttpRequest, textStatus, errorThrown) { 
					categorias.notify('notifyNoOk',".myAlert-top2","Usted no ha iniciado ninguna sesión");
                }
            });
        }
	};
})();