## Jeu en Jquery d'après le tuto d'Openclassrooms

    Réalisation d'un jeu en jQuery. Vous allez apprendre à :

    - Afficher un décor en mouvement pour donner l'illusion d'un déplacement ;

    - Déplacer des objets sur l'écran en utilisant les touches fléchées du clavier ;

    - Gérer plusieurs couches graphiques ;

    - Détecter des collisions ;

    - Ajouter des sons.
    
###  Principe du jeu
   
* La route défile du bas vers le haut. Le joueur pilote la voiture jaune et 
    doit éviter les voitures rouges qui apparaissent aléatoirement sur l'écran.
    La voiture jaune se dirige avec les touches Droite et Gauche du clavier. 
    La zone de jeu n'est autre qu'une balise <div> dans laquelle 
    on place les différents éléments graphiques :
  
      Deux portions de route #fond1 et #fond2, toutes deux de classe .fond ;
  
      La voiture jaune #vj ;
  
      La voiture rouge #vr.
      
### Mise en place
* Des informations textuelles sont affichées au-dessus 
    de l'aire de jeu à l'aide d'une balise <span>.
* Ces éléments sont mis en forme à l'aide de quelques instructions CSS.
 L'aire de jeu #jeu est dimensionnée à 400 × 400 pixels. 
 Elle est entourée d'une bordure noire continue épaisse de 2 pixels. 
 Étant donné que deux images vont être affichées l'une en dessous de l'autre, 
 sa propriété overflow est initialisée à hidden pour dissimuler les barres de défilement.
 Le positionnement à l'intérieur de l'aire de jeu se fait de façon relative.    
      
* Les images qui représentent la route sont positionnées de façon relative et leur z-index est initialisé à 10.
 Quant aux images des voitures, elles sont positionnées de façon absolue et leur z-index est initialisé 
 avec d'autres valeurs. Vous comprendrez pourquoi en lisant la suite.
  
* Dans les chapitres précédents, nous avons déjà croisé la propriété CSS z-index.
 Je vais quand même rappeler que cette propriété permet d'empiler plusieurs éléments les uns sur les autres.
 L'élément qui est le plus en avant-plan est celui qui a un z-index le plus élevé. 

* Dans le code sur lequel nous sommes en train de travailler, la route a un z-index égal à 10, la voiture rouge 
 un z-index égal à 80 et la voiture jaune un z-index égal à 100.
 La voiture jaune sera donc en avant-plan, la route en arrière-plan et la voiture rouge
  sera affichée au-dessus de la route, mais en dessous de la voiture jaune si vous ne savez pas l'éviter.
 
##### Il ne reste plus  qu'à écrire quelques lignes de jQuery pour mettre tout cela en mouvement !

## Créer un décor en mouvement
                
                D'accord, la méthode animate() va me permettre de déplacer la route vers le haut, 
                mais comment faire en sorte que l'affichage boucle sur lui-même 
                afin que la route se déroule vers le haut sans jamais s'arrêter ?

* En insérant l'appel à la méthode animate() dans une fonction et en réexécutant cette fonction 
 via la fonction de rappel de la méthode animate(),
 on obtient une boucle sans fin.
* En redonnant la position initiale aux images de classe .fond dans la fonction de rappel de la méthode animate(),
 un nouveau déplacement vers le haut peut être initié.