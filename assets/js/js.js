function Agents(){

}



function Resource(idAgent,idResource, resource){
	this.idAgent = idAgent;
	this.idResource = idResource;
	this.resource = resource;
}


var specifyResource = document.getElementsByClassName("specifyResource");


for(var i=0; i<specifyResource.length;i++){
	specifyResource[i].onclick = function(){
		//var idR = document.getElementsByClassName("idR");
		var txtRecursos = prompt("(Separate multiple resources name with commas)");
		//alert(e);
		alert(this.id);
	};
		

}



