function getname(){
				let name = document.getElementById('name').value;
				console.log(name);
				document.getElementById("message").innerHTML = "Réveille-toi, "+name+", va et part à l'aventure et surveille ton entourage tout le temps. Protège ta patrie et ta famille de la menace venant de l'abre de vie,Yggdrasil.part et plante ta lame dans le coeur d'Yggdrasil";
				document.getElementById("message2").innerHTML = "3 chemin et 1 choix. Part et suit ton instinct";
				document.getElementById("message3").innerHTML = "Ouf, on est enfin arrivé dans les territoires volcaniques, il fait comme même drôlement chaud dans cette zone! Allez "+name+", Il ne faut pas trainer ici. Attend tu entend ce bruit? Qu'est-ce-que c'était? ";
				document.getElementById("message4").innerHTML = "Ouf, on est enfin arrivé dans les territoires glaciale, il fait comme même drôlement froid dans cette zone! Allez "+name+", Il ne faut pas trainer ici. Attend tu entend ce bruit? Qu'est-ce-que c'était? ";
				document.getElementById("message5").innerHTML = "Ouf, on est enfin arrivé dans la forêt , Allez "+name+", Il ne faut pas trainer ici. Attend tu entend ce bruit? Qu'est-ce-que c'était? ";
				document.getElementById("message32").innerHTML = name+", fait attention un monstre est apparue pour te battre tu as:";
				document.getElementById("message42").innerHTML = name+", fait attention un monstre est apparue pour te battre tu as:";
				document.getElementById("message52").innerHTML = name+", fait attention un monstre est apparue pour te battre tu as:";
				document.getElementById("message41").innerHTML ="Nous avons enfin tué le monstre, néanmoins ceci n'est pas la fin de notre voyage, il nous reste encore du chemin avant d'arriver au coeur d'Yggdrasil ";
			}
function openNav() {
			  document.getElementById("path").style.height = "100%";
			  			}
function openNav2() {
			  document.getElementById("path2").style.height = "100%";
			}
function openNav3() {
			  document.getElementById("path3").style.height = "100%";
			}
function openNav4() {
			  document.getElementById("path4").style.height = "100%";
			}
function closeNav() {
  		document.getElementById("path").style.height = "0%";
}
function closeNav2() {
  document.getElementById("path2").style.height = "0%";
}
function closeNav3() {
  document.getElementById("path3").style.height = "0%";
}
function closeNav4() {
	 let code =document.getElementById('code').value;
	 if(code=="meth"){
	 	 document.getElementById("path4").style.height = "0%";
	 }
}
function combat() {
	document.getElementById("phealth").value += 200;
	document.getElementById("phealth2").value += 200;
	document.getElementById("phealth3").value += 200;
	function Monster(nom,pv,dps){//cette fonction permet la création des monstre
				this.nom=nom;
				this.pv=pv;
				this.dps=dps;
				this.attack=function(){//attaque du monstre
					Perso.pv=Perso.pv-this.dps
				}
				this.defend=function(){//défense du monstre
					this.pv=this.pv-Perso.dps*0.5
				}
	}
	var Serpent= new Monster("Ouroboros",100,40,"SSSSHHAA!!!");
	var Dragon= new Monster("nidhogg",150,30,"GRAAOOOUUUHH!!!");
	var Loup= new Monster("Fenrir",200,50,"AAWWOOOOHHH!!!");
	var Mon=Math.floor(Math.random()*3)+1;
	console.log(Mon)
	if (Mon==1) {
		document.getElementById("monsterimg").src = "IMG/fenrir.png";
		document.getElementById("mhealth").value = Loup.pv;
		document.getElementById("mhealth").max = Loup.pv;
		document.getElementById("monsterimg2").src = "IMG/fenrir.png";
		document.getElementById("mhealth2").value = Loup.pv;
		document.getElementById("mhealth2").max = Loup.pv;
		document.getElementById("monsterimg3").src = "IMG/fenrir.png";
		document.getElementById("mhealth3").value = Loup.pv;
		document.getElementById("mhealth3").max = Loup.pv;
	}
	else if (Mon==2) {
		document.getElementById("monsterimg").src = "IMG/nidhogg.png";
		document.getElementById("mhealth").value = Dragon.pv;
		document.getElementById("mhealth").max = Dragon.pv;
		document.getElementById("monsterimg2").src = "IMG/nidhogg.png";
		document.getElementById("mhealth2").value = Dragon.pv;
		document.getElementById("mhealth2").max = Dragon.pv;
		document.getElementById("monsterimg3").src = "IMG/nidhogg.png";
		document.getElementById("mhealth3").value = Dragon.pv;
		document.getElementById("mhealth3").max = Dragon.pv;
	}
	else if (Mon==3) {
		document.getElementById("monsterimg").src = "IMG/Jormungand.png";
		document.getElementById("mhealth").value = Serpent.pv;
		document.getElementById("mhealth").max = Serpent.pv;
		document.getElementById("monsterimg2").src = "IMG/Jormungand.png";
		document.getElementById("mhealth2").value = Serpent.pv;
		document.getElementById("mhealth2").max = Serpent.pv;
		document.getElementById("monsterimg3").src = "IMG/Jormungand.png";
		document.getElementById("mhealth3").value = Serpent.pv;
		document.getElementById("mhealth3").max = Serpent.pv;
	}
}
function attack(){
	let monhealth=document.getElementById("mhealth").max;
	let health = document.getElementById("mhealth");
	let combat2=Math.floor(Math.random()*2)+1;
	console.log(combat2);
	if(combat2==1){
		if(monhealth==100){
			health.value -= 25;
			document.getElementById("phealth").value -= 40;
		}
		else if(monhealth==150){
				health.value -= 25;
				document.getElementById("phealth").value -= 30;
		}
		else if(monhealth==200){
			health.value -= 25;
			document.getElementById("phealth").value -= 50;
		}	
	}
	else if(combat2==2){
		health.value -= 10;
	}
}
function attack2(){
	let monhealth2=document.getElementById("mhealth2").max;
	let health2 = document.getElementById("mhealth2");
	let combat2=Math.floor(Math.random()*2)+1;
	console.log(combat2);
	if(combat2==1){
		if(monhealth2==100){
			health2.value -= 25;
			document.getElementById("phealth2").value -= 40;
		}
		else if(monhealth2==150){
				health2.value -= 25;
				document.getElementById("phealth2").value -= 30;
		}
		else if(monhealth2==200){
			health2.value -= 25;
			document.getElementById("phealth2").value -= 50;
		}	
	}
	else if(combat2==2){
		health2.value -= 10;
	}
}
function attack3(){
	let monhealth3=document.getElementById("mhealth3").max;
	let health3 = document.getElementById("mhealth3");
	let combat2=Math.floor(Math.random()*2)+1;
	console.log(combat2);
	if(combat2==1){
		if(monhealth3==100){
			health3.value -= 25;
			document.getElementById("phealth3").value -= 40;
		}
		else if(monhealth3==150){
				health3.value -= 25;
				document.getElementById("phealth3").value -= 30;
		}
		else if(monhealth3==200){
			health3.value -= 25;
			document.getElementById("phealth3").value -= 50;
		}	
	}
	else if(combat2==2){
		health3.value -= 10;
	}
}
function defend(){
	let monhealth=document.getElementById("mhealth").value;
	let health = document.getElementById("mhealth");
	let combat2=Math.floor(Math.random()*2)+1;
	console.log(combat2);
	if(combat2==1){
		if(monhealth=100){
			document.getElementById("phealth").value -= 20;
		}
		else if(monhealth=150){
			document.getElementById("phealth").value -= 15;
		}
		else if(monhealth=200){
			document.getElementById("phealth").value -= 25;
		}		
	}	
	else if(combat2==2){
		health.value -=0;
	}
}
function defend2(){
	let monhealth2=document.getElementById("mhealth2").value;
	let health2 = document.getElementById("mhealth2");
	let combat2=Math.floor(Math.random()*2)+1;
	console.log(combat2);
	if(combat2==1){
		if(monhealth2=100){
			document.getElementById("phealth2").value -= 20;
		}
		else if(monhealth2=150){
			document.getElementById("phealth2").value -= 15;
		}
		else if(monhealth2=200){
			document.getElementById("phealth2").value -= 25;
		}		
	}	
	else if(combat2==2){
		health2.value -=0;
	}
}
function defend3(){
	let monhealth3=document.getElementById("mhealth3").value;
	let health3 = document.getElementById("mhealth3");
	let combat2=Math.floor(Math.random()*2)+1;
	console.log(combat2);
	if(combat2==1){
		if(monhealth3=100){
			document.getElementById("phealth3").value -= 20;
		}
		else if(monhealth=150){
			document.getElementById("phealth3").value -= 15;
		}
		else if(monhealth=200){
			document.getElementById("phealth3").value -= 25;
		}		
	}	
	else if(combat2==2){
		health3.value -=0;
	}
}
function atomize(){
	let health = document.getElementById("mhealth");
	health.value -= 1000;
}
function atomize2(){
	let health2 = document.getElementById("mhealth2");
	health2.value -= 1000;
}
function atomize3(){
	let health3 = document.getElementById("mhealth3");
	health3.value -= 1000;
}
function badend(){
	document.body.style.backgroundImage = "url('IMG/hell.jpg')";
}
function goodend(){
	document.body.style.backgroundImage = "url('IMG/go.jpg')";
}
