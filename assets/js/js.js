function Agents(){

}



function Resource(idAgent,idResource, resource){
	this.idAgent = idAgent;
	this.idResource = idResource;
	this.resource = resource;
}

myAgents.forEach(function(e){
	var mostrar = "";
	var clase = "";
	if(e.state=='idle'){
		clase += "idle";
		mostrar += '<div class="divDeny">' +
		            	'<img src="assets/images/deny-icon.png" class="deny">' +
		            	'<u>' + e.permission + '</u>' +
		            '</div>';
	}else{
		clase += "building";
		mostrar += '';
	}
	

	$(".div-col-1").append('<div class="resources ' + clase + '">' +
					            '<div class="divCircle">' +
					            	'<div class = "circle"></div>' +
					            '</div>' +
					            '<div class = "contenido">' +
					                '<div class = "contenido-lineas1">' +
					                    '<span>' + e.name + '.' + e.dominio + '</span>' +
					                    '<span class = "cont-resources">' + e.state + ' </span>' +
					                    '<span class = "cont-resources">' + e.ip + ' </span>' +
					                    '<span class = "cont-resources">' + e.url + ' </span>' +
					                '</div>' +
					                '<div class="contenido-lineas2" id="cont'+e.id+'">' +
					                    '<strong>+</strong><a href="#" class="specifyResource" id="' + e.id + '">Specify Resources</a>' +
					                    '<span class="cont-resources">Resources:</span>' +                    
					        	    '</div>' +
					            '</div>' +
					            mostrar +
					        '</div>');

});

var specifyResource = document.getElementsByClassName("specifyResource");
var idResource = 0;
var agents = [];

for(var i=0; i<specifyResource.length;i++){
	specifyResource[i].onclick = function(){
		
		var txtRecursos = prompt("(Separate multiple resources name with commas)");
		var arrRecursos = txtRecursos.split(",");
		for(j in arrRecursos){
			idResource++;
			var resourceAdd = new Resource(this.id,idResource, arrRecursos[j].trim());
			agents.push(resourceAdd);

			myAgents.map(function(e){
				//alert(e.id.toString());
				//alert(agents[j].idAgent);
				if(e.id.toString() == agents[j].idAgent){
					//alert(true);
					$("#cont"+e.id).append('<span class = "cont-resources2">' + arrRecursos[j].trim() + ' <span id="btneliminar">X</span></span>');
				}
			});
			
		}
		
	};
		

}



