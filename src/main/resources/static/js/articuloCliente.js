articuloCliente = (function() {
	return {
		saveOferta: function (Oferta,callback,valorOfrecido) {
            $.ajax({
                url: "/oferta",
                type: "POST",
                data: JSON.stringify(Oferta),
                contentType: "application/json",
                success: function (result) {
					callback(result,valorOfrecido)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Error al realizar la puja" + textStatus + " " + errorThrown);
                }   
            });
		},

        changeState: function (result,valorOfrecido,id) {

            $.ajax({
                url: "/publicacion/setOferta/"+valorOfrecido+"/"+result+"/"+id,
                type: "PUT",
                data: JSON.stringify(result),
                contentType: "application/json",
                success: function () {
					alert("recargue la página o posterior con sockets");
                }
            })
        },
		getArticulo: function(callback,articuloId) {
			$.ajax({
				url: "publicacion/getById/"+articuloId,
				success: function (result) {
					callback(result);
				},
				async: true
			});
		},
		addToFavorite: function(usuario,publicacion) {
			$.ajax({
				url: "/preferencia/"+usuario+"/"+publicacion,
				type: "POST",
				data: JSON.stringify(usuario),
				contentType: "application/json",
				success: function () {
					alert("Añadido a favoritos con éxito");
				},
				async: true
			});
		}
	};

})();