//les fonctions
function dir_bonjour() {
    document.writeln("Bonjour les gars" + "<br/>")
}
dir_bonjour()

function somme(a, b) {
    document.writeln(a + b + "<br/>")
}
somme(10, 20)

function puissance(a, n) {
    return a ** n
}
document.writeln(puissance(5, 2) + "<br/>")
document.writeln("script 2")

const personne = {
    nom: 'Kaba',
    prenom: 'houley',
    age: 20
}

document.writeln('<br/>' + personne.age + '<br/>')
//les classes
class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom, this.prenom = prenom, this.age = age
    }
    affichernom() {
        return this.nom;
    }
    afficherprenom() {
        return this.prenom;
    }
    afficherage() {
        return this.age;
    }
}
//utiliser notre model classe
const p1 = new Personne ('kaba','Mariame',17)
const p2 = new Personne ('Diawara','Madina',20)
const p3 = new Personne('Camara','Kalagban',18)

document.writeln("nom: "+p1.affichernom()+" prenom: "+p1.afficherprenom()+" age: "+p1.afficherage()+"ans"+"<br/>")
document.writeln("nom: "+p2.affichernom()+" prenom: "+p2.afficherprenom()+" age: "+p2.afficherage()+"ans"+"<br/>" )
document.writeln("nom: "+p3.affichernom()+" prenom: "+p3.afficherprenom()+" age: "+p3.afficherage()+"ans"+"<br/>")

class universite {
    constructor (Nom,quartier,statut){
        this.Nom = Nom, this.quartier = quartier, this.statut = statut
    }
    afficherNom(){
        return this.Nom;
    }
    afficherquartier(){
        return this.quartier;
    }
    afficherstatut(){
        return this.statut;
    }
}
const u1 = new universite ('Kofi Annan','Nongo','privee')
const u2 = new universite ('Gamal','Camayenne','public')
const u3 = new universite ('Mercure','kaporo','privee')

document.writeln("Nom: "+u1.afficherNom()+" quartier: "+u1.afficherquartier()+" statut: "+u1.afficherstatut()+"<br/>")
document.writeln("Nom: "+u2.afficherNom()+" quartier: "+u2.afficherquartier()+" statut: "+u2.afficherstatut()+"<br/>")
document.writeln("Nom: "+u3.afficherNom()+" quartier: "+u3.afficherquartier()+" statut: "+u3.afficherstatut()+"<br/>")