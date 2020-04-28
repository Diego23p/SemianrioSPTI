var categorias =(function(){
	var lista = [];
	var num = 0;
	var id = "";
	var logeado = false;
	var saldo = 0;
	
	function getCat(retorno) {
		$("#categoriaTable div").remove();
		var i = 0;
		retorno.map(function(cat){
			categoriasCliente.numArtPorCat(getArtXCat,cat.id,i);			
			var fila = "<div class=\"grid-1-5\"><h4><b>"+cat.nombre+"</b></h4><h4 id=\"categ"+i+"\">"+num+"</h4><img width='265' height='180' src=\"img/cat"+i+".jpg\"><a href=\"articulos.html?var1="+cat.nombre+"&var2="+cat.id+"&user="+document.getElementById("user").innerText+"\" class=\"button\">Ir</a></div>";
			$("#categoriaTable").append(fila);			
			i+=1;
		})
	}
		
	function logOut() {
		categoriasCliente.deleteUserCache(document.getElementById("user").innerText);
	}
	
	return {
		setUser: function (){
		}
	};
	
	
})();