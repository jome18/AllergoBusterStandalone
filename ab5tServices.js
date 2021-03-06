// by jome18

//----------------------------Initiate Index Page: Get Date and Data from GetWebData --------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cont1').style.display = 'none';
	document.getElementById('cont2').style.display = 'none';

	var d = new Date();
	var h1 = document.getElementsByTagName('H1')[0];
	h1.innerHTML = "Pollenflug - " + d.toLocaleString();
	my_api3();
});

//----------------------------Data Type for GetWebData--------------------------------------------

class pollen {
	constructor(name, measure) {
		this.name = name;
		this.measure = measure;
	}
	print() {
		console.log(this.name);
		console.log(this.measure);
	}
}


//----------------------------Translate Services--------------------------------------------


function translateMeLat(item) {
	item.innerHTML = translatePolle(item.innerHTML, "dl");
}

function translateMeDe(item) {
	item.innerHTML = translatePolle(item.innerHTML, "ld");
}

function translatePolle(name, direction) {
	var latName = ["Abies","Acer","Aesculus","Alnus","Ambrosia","Artemisia","Asteraceae","Betula","Carpinus","Castanea","Chenopodium","Corylus","Cruciferae","Cyperaceae","Erica","Fagus","Fraxinus","Fungus","Galium","Humulus","Impatiens","Juglans","Larix","Picea","Pinaceae","Pinus","Plantago","Platanus","Poaceae","Populus","Quercus","Quercus ilex","Rumex","Salix","Sambucus","Secale","Taxus","Tilia","Ulmus","Urtica","Varia"];
	var deName = ["Tanne","Ahorn","Rosskastanie","Erle","Ambrosia","Beifuß / Wermut","Korbblütler","Birke","Hainbuche","Kastanie","Gänsefüße","Hasel","Kreuzblütler","Sauergrasgewächse","Heidekräuter","Buche","Esche","Pilze","Labkräuter","Hopfen","Fleißige Lieschen","Walnuss","Lärche","Fichte","Kieferngewächse","Kiefer","Wegeriche","Platane","Süßgräser","Pappel","Eiche","Steineiche","Ampfer","Weide","Holunder","Roggen","Eibe","Linde","Ulme","Brennessel","Varia"];

	if (direction == "ld") {
		if (latName.indexOf(name) !== -1) {
			return deName[latName.indexOf(name)];
		}		
	} else if (direction == "dl") {
		if (deName.indexOf(name) !== -1) {
			return latName[deName.indexOf(name)];
		}		
	} else {return false}
	return false;
}
