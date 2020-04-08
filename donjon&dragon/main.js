function Jeu(){//permet de définir une fonction à lancer pour le boutton
	var bop=0 //les variable bop et bop2 sert pour les boucle de replay
	var bop2=0
	function Monster(nom,pv,dps,scream){//cette fonction permet la création des monstre
				this.nom=nom;
				this.pv=pv;
				this.dps=dps;
				this.scream=scream,
				this.attack=function(){//attaque du monstre
					Perso.pv=Perso.pv-this.dps
				}
				this.defend=function(){//défense du monstre
					this.pv=this.pv-Perso.dps*0.5
				}
	}
	function a(){//les fonctions a,b et c sont les devinettes finales
			i=1
			while(i<=3){
				var ega=prompt("From what my story mostly came from?");
				if(ega==" mithology nordic"){
					alert("la porte s'ouvre!!")
					i=i+4
				}
				else{
					alert("Faux")
					i+=1
				}
			}
	}
	function b(){
		i=1
		while(i<=3){
			var egb=prompt("Qu'est ce qu'il faut que tu protège avant tout?");
			if(egb=="moi"){
				alert("En effet,Si tu peux même pas te protéger qui arriveras-tu à protéger!\nla porte s'ouvre!! ")
				i=i+4	
			}
			else{
				alert("Faux")
				i+=1
			}
		}
	}
	function c(){
		i=1
		while(i<=3){
			var egc=prompt("toujours présent mais jamais présent devant toi qui suis je?");
			if(egc=="ombre"){
				alert("la porte s'ouvre!!")
				i=i+4	
			}
			else{
				alert("Faux")
				i+=1
			}
		}	
	}


	while (bop2<1){//voici les deux boucle pour rejouer
		while (bop<1){
			var Perso ={//C'est l'objet pour créer un personnage
				nom:"nom",
				pv:200,
				dps:25,
			}
			var boucle1=0;//variable boucle1 pour la partie du choix des portes
			Perso.nom=prompt("Bienvenue,quel est votre nom ?")//cette ligne permet le choix du nom du personnage
			//la variable quest1 permet de faire le choix du chemin(la porte)
			var quest1=prompt("Réveille-toi, "+Perso.nom+", va et part à l'aventure.Protège ta patrie et ta famille de la menace venant de l'abre de vie,Yggdrasil.part et plante ta lame dans le coeur de d'Yggdrasil\n"+Perso.nom+", Tu arrives proche de ton but mais il y a trois chemin devant vous. laquelle choisissez-vous ?(tapez le chiffre)\n1-la rivière\n2-la plaine\n3-la forêt");
			while(boucle1<1){//la boucle1 et chaque possibilité de choix en utilisant des if pour créer des conditions
				if (quest1==1){
					alert("vous passez par la rivière ")
					boucle1+=1
				}
				else if (quest1==2){
					alert("vous passez par la plaine ")
					boucle1+=1
				}
				else if(quest1==3){
					alert("vous passez par la forêt")
					boucle1+=1
				}
				else if(quest1=="aucun des trois"){// petite envie de rajouter une porte cachée
					alert("vous avez découvert un trésor caché")
					Perso.pv=Perso.pv+50
					Perso.dps=Perso.dps+50
					boucle1+=1
				}
				else{//dans le cas où le choix a été mal fait il permet de refaire choisir un chemin
					alert("toute erreur dans tes choix auront des conséquences")
					Perso.pv=Perso.pv-5
					quest1=prompt("Quel chemin choisissez-vous?")
				}
			}
			//voici les variables pour chaque monstre 
			var Serpent= new Monster("Ouroboros",100,40,"SSSSHHAA!!!");
			var Chien= new Monster("Cerberus",150,30,"GRAAOOOUUUHH!!!");
			var Loup= new Monster("Fenrir",200,50,"AAWWOOOOHHH!!!");
			var Mon=Math.floor(Math.random()*3)+1//j'ai créé cette variable pour le choix aléatoire du monstre et puis j'ai rajouter if pour faire la condition dans chaque cas
			if (Mon==1) {
				var combat=prompt(Serpent.scream+","+Serpent.nom+" apparait, Que faites-vous\n1-attaque\nse défendre");//combat permet le choix du personnage
				while(Perso.pv>0 && Serpent.pv>0){//je créer une boucle pour dire que tant que le personnage et  le Monstre est toujours en vie la boucle continue
					var combat2=Math.floor(Math.random()*2)+1;//permet le choix aléatoire de l'attaque du monstre puis j'ai mis tout les possibilités du combat entre le personnage et le monstre
					console.log(combat2)
					if(combat==1 && combat2==1){//le cas où les deux attaques
						Serpent.pv=Serpent.pv-Perso.dps
						Serpent.attack()
						alert(Serpent.nom+" n'a plus que "+Serpent.pv+" de point de vie\nIl vous reste "+Perso.pv+" de point de vie")
					}
					else if(combat==2 && combat2==1){//le cas où le perso se défend et le monstre attaque
						Perso.pv=Perso.pv-Serpent.dps*0.5
						alert("Il vous reste "+Perso.pv+" de point de vie")//alert permet d'afficher les point de vie perdu 
					}
					else if(combat==1 && combat2==2){//le cas où le perso attaque et le monstre se défend
						Serpent.defend()
						alert(Serpent.nom+" se défend il n'a plus que "+Serpent.pv+" de point de vie")
					}
					else if(combat==2 && combat2==2){//le cas pù les deux se défend
						alert("rien ne se passe...")
					}
					else{//le cas où il y a une erreur dans la réponse
						alert("toute erreur dans tes choix auront des conséquences")
						Perso.pv=Perso.pv-5
					}
					if (Serpent.pv==0) {
						break
					}
					var combat=prompt("Que faites-vous?")//elle remplace la question du premiere essaie
				} 
			}	
			if (Mon==2) {//même chose que le monstre 1
				var combat=prompt(Chien.scream+", vous rencontrer en chemin "+Chien.nom+", Que faites-vous?\n1-attaque\n2-se défendre");
				while(Perso.pv>0 && Chien.pv>0){	
					var combat2=Math.floor(Math.random()*2)+1;
					if(combat==1||combat2==1){
						Chien.pv=Chien.pv-Perso.dps
						Chien.attack()
						alert(Chien.nom+" n'a plus que "+Chien.pv+" de point de vie\nIl vous reste "+Perso.pv+" de point de vie")
					}
					else if(combat==2 && combat2==1){
						Perso.pv=Perso.pv-Chien.dps*0.5
						alert("Il vous reste "+Perso.pv+" de point de vie")
					}
					else if(combat==1 && combat2==2){
						Chien.defend()
						alert(Chien.nom+" se défend  il n'a plus que "+Chien.pv+" de point de vie")
					}
					else if(combat==2 && combat2==2){
						alert("rien ne se passe...")
					}
					else{
						alert("toute erreur dans tes choix auront des conséquences")
						Perso.pv=Perso.pv-5
					}
					if (Chien.pv==0) {
						break
					}
					var combat=prompt("Que faites-vous?")
				}
			}
			if (Mon==3) {// même chose que le monstre 1
				var combat=prompt(Loup.scream+", vous rencontrer en chemin "+Loup.nom+", Que faites-vous?\n1-attaque\n2-se défendre");
				while(Perso.pv>0 && Loup.pv>0){
					var combat2=Math.floor(Math.random()*2)+1;
					if(combat==1 && combat2==1){
						Loup.pv=Loup.pv-Perso.dps
						Loup.attack()
						alert(Loup.nom+" n'a plus que "+Loup.pv+" de point de vie\nIl vous reste "+Perso.pv+" de point de vie")
						console.log("Il vous reste "+Perso.pv+" de point de vie")
					}
					else if(combat==2 && combat2==1){
						Perso.pv=Perso.pv-Loup.dps*0.5
						alert("Il vous reste "+Perso.pv+" de point de vie")
					}
					else if(combat==1 && combat2==2){
						Loup.defend()
						alert(Loup.nom+" se défend  il n'a plus que "+Loup.pv+" de point de vie")
					}
					else if(combat==2 && combat2==2){
						alert("rien ne se passe...")
					}
					else{
						alert("toute erreur dans tes choix auront des conséquences")
						Perso.pv=Perso.pv-5
					}
					if (Loup==0) {
						break
					}
					var combat=prompt("Que faites-vous?")
				}
			}
			//dans le cas où le personnage gagne le combat en fonction du monstre apparue
			if(Serpent.pv<=0){
				alert("vous avez vaincu "+Serpent.nom)
				bop=bop+2//permet de terminer la boucle bop et de commencer la prochaine partie(voir ligne 216)
			}
			else if(Chien.pv<=0){
				alert("vous avez vaincu "+Chien.nom)
				bop=bop+2
			}
			else if(Loup.pv<=0){
				alert("vous avez vaincu "+Loup.nom)
				bop=bop+2

			}
			else if(Perso.pv<=0){//dans le cas où le personnage meurt on lance la question pour rejouer
				var replay=prompt("Vous avez perdu votre vie dans le combat. Voulez-vous rejouer?\n1-oui\n2-non");
				if ( replay==1) {
					bop=0
					alert("Faites que votre destin soit dans vos main dans cette nouvelle vie")
				}
				else if (replay==2){
					bop+=1//cela va permettre d'arrêter la boucle bop
					alert("Game Over")
				}
				else{//oui je force le joueur à rejouer mais il avait qu'a répondre non!!!et en plus il faut montrer qu'il faut jamais abandonner!!!
					alert("Je n'ai pas entendu mais je comprend votre determination pour sauver le monde!!")
					bop=0
				}
			}
		}
		if(bop==1){
			break//cela permet de terminer
		}
		if(bop==2){//dans le cas où il gagne
			//partie où il y a la devinette finale
			alert("Vous êtes presque arrivé. mais une porte se dresse devant vous et montre une message:")
			var egnime=Math.floor(Math.random()*3)+1;//je créer le choix aléatoire de la devinette et puis je créer chaque possibilité
			if (egnime==1){
				a()//voir plus haut pour les devinette
			}
			if(egnime==2){
				b()
			}
			if (egnime==3){
				c()
			}
			if(i==5){//dans le cas où le joueur gagne on affiche le phrase "tu as gagné" et on lui demande si il veut rejouer
				var replay2=prompt("Félicitation!!!Vous avez sauvé le monde.Voulez-vous rejouer?\n1-oui\n2-non");
				if ( replay2==1) {
					bop2=0
				}
				else if (replay2==2){
					bop2+=1
				}
				else{ 
					alert("repose toi et prépare-toi pour d'autres batailles ")
					bop2+=1
				}
			}
			else {//dans le cas où il réussi pas on demande au joueur si il veut rejouer
				var replay2=prompt("Vous avez échouez,les portes sont fermés à jamais.Voulez-vous rejouer?\n1-oui\n2-non");
				if ( replay2==1){
					bop2=0
				}
				else if (replay2==2){
					bop2+=1
				}
				else{
					alert("Je n'ai pas entendu mais je comprend votre determination à vouloir sauver le monde!!")
					bop2=0
				}
			}
		}
	}
}