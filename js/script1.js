document.writeln('bonjour tout le monde...')
let nombre1=10
const pi=3.14
let nom='Camara'

console.log(nombre1)
console.log(pi)

document.writeln('<br/>'+ nombre1)
document.writeln('<br/>' + pi)
document.writeln('<br/>' + nom +'<br/>')

//Tableau
const capital =["Conakry", "Dakar","Paris"]
const valeur =[1,2,3,4,5]

document.writeln('<br/>' + capital[0])
document.writeln('<br/>' + capital[1])
document.writeln('<br/>' + capital[2] + '<br/>')

const personne = {
    nom : 'Kaba',
    prenom : 'Houlematou',
    age: 18
}
document.writeln('<br/>' + personne.nom)
document.writeln('<br/>' + personne.prenom)
document.writeln('<br/>' + personne.age + '<br/>') 

//les conditions
if (personne.nom =='Camara')
{document.writeln('<br/>' + "c'est Camara" )

}
else if(personne.prenom == 'Kalagban')
{document.writeln('<br/>' + "c'est Kalagban")}

else {document.writeln('<br/>' + "ce n'est ni Kalagban ni Camara")

}

//Les boucles
for(let i = 0; i<10; i++){
    document.writeln('<br/>' + i)
}
