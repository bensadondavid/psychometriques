# Problèmes algébriques : traduire l’histoire avant de résoudre

Une équation parfaitement résolue peut répondre au mauvais problème. On a compté les frais fixes une fois par article, ajouté une année à un seul des deux âges ou interprété « il manque trois » comme « il reste trois ».

**Votre objectif :** construire un modèle fidèle à l’histoire, choisir le minimum d’inconnues utile et vérifier la réponse dans les phrases de départ. Le calcul vient après la traduction.

## Avant de commencer — Choisissez l’équation avant la valeur

Notez votre confiance et nommez ce que représente votre inconnue.

<!-- interaction D1 | QCM unique + confiance | compétence : frais-fixes -->
**D1.** Trois articles identiques et des frais fixes uniques de deux euros coûtent quatorze euros. Si p est le prix d’un article, quelle équation convient ?

A. \(3(p+2)=14\) · B. \(3p+2=14\) · C. \(p+2=14\) · D. \(3p=16\).

<details><summary>Raisonnement</summary>

**B.** Trois prix unitaires et une seule fois les frais fixes. Le nombre p représente un prix, pas la dépense totale.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : manque-reste -->
**D2.** Distribuer cinq jetons à chacun de n enfants laisserait manquer trois jetons. Si S est le stock disponible :

A. \(S=5n+3\) · B. \(S=n+3\) · C. \(S=5n-3\) · D. \(S=3n-5\).

<details><summary>Raisonnement</summary>

**C.** Le besoin est 5n, supérieur au stock de trois. Il faut donc S+3=5n. Le stock vaut 5n−3.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : ages-temps -->
**D3.** Deux personnes ont actuellement pour âges x et x+4. Dans trois ans, leur somme d’âges sera :

A. \(2x+7\) · B. \(2x+4\) · C. \(2x+6\) · D. \(2x+10\).

<details><summary>Raisonnement</summary>

**D.** Les deux personnes vieillissent : (x+3)+(x+7)=2x+10. Leur différence reste quatre, leur somme augmente de six.

</details>

D1 oriente vers S2–S3 ; D2 vers S7 ; D3 vers S5. Pour les autres familles, le même geste reste utile : donner un nom, une unité et un domaine à chaque quantité.

## Séquence 1 — La méthode en cinq gestes

1. **Nommer l’inconnue** avec son unité : « x est le nombre de billets adultes », pas seulement « soit x ».
2. **Écrire les autres quantités** avec x, en utilisant les relations du texte.
3. **Choisir la conservation ou l’égalité** qui relie les données : nombre total, valeur totale, même stock ou même date.
4. **Résoudre** avec les outils du chapitre précédent.
5. **Revenir à la question**, puis vérifier les contraintes : entier, positif, chiffre, nombre de jours ou prix demandé.

L’inconnue peut être une quantité intermédiaire si cela simplifie le modèle. Si x est le prix d’un petit sac et qu’on demande le grand, il faut encore répondre 2x après avoir trouvé x.

### Le dictionnaire des formulations

| Phrase | Traduction possible | Ce qu’il faut préciser |
|---|---|---|
| A a cinq de plus que B | A=B+5 | Quelle grandeur est la plus grande ? |
| A vaut trois fois B | A=3B | Pas B+3 |
| Un nombre augmenté de deux fois lui-même puis de trois | x+2x+3 | Le nombre initial est toujours présent |
| La somme de deux quantités vaut T | A+B=T | Même unité |
| Il reste r après distribution | Stock=distribué+r | Le reste fait partie du stock initial |
| Il manque r pour distribuer | Stock=besoin−r | Le besoin dépasse le stock |
| Le total après livraison vaut F | Initial−ventes+livraison=F | Ordre et signe de chaque mouvement |

Une tournure ambiguë doit être clarifiée dans le modèle ; l’algèbre ne décide pas le sens d’une phrase mal définie.

### Atelier I1 — La bonne lettre au bon endroit

<!-- interaction I1 | choix d’inconnue et phrases a completer | compétence : traduction -->
Un grand sac coûte deux fois un petit. Trois petits et deux grands coûtent trente-cinq euros. Choisissez x comme prix du petit, écrivez le total, puis répondez au prix du grand.

<details><summary>Correction</summary>

Grand=2x. Total=3x+2(2x)=7x=35, donc petit cinq euros et grand dix euros. Répondre cinq résout l’inconnue mais pas la question.

</details>

## Séquence 2 — Prix, monnaie rendue et remises fixes

Trois cahiers payés avec trente euros et dix-huit euros rendus coûtent ensemble douze euros. Donc \(3p=30-18\), et p=4. L’argent remis au vendeur n’est pas le prix dépensé.

Avec un bon de réduction fixe de cinq euros sur cinq cahiers payés quinze euros, on écrit \(5p-5=15\), donc p=4. Pour retrouver le prix avant réduction, on ajoute le bon au montant payé.

Avec une caution remboursable unique de vingt euros et quatre locations nécessitant cinquante-deux euros de versement, \(4p+20=52\), donc p=8. Le versement initial n’est pas forcément le coût final après restitution de la caution. Si la caution est donnée par vélo, le modèle serait \(4(p+20)\), et non 4p+20.

### Atelier I2 — Versement ou coût définitif ?

<!-- interaction I2 | tableau versement/location/caution | compétence : prix-caution -->
Trois locations et une caution unique remboursable de dix-huit euros nécessitent quarante-deux euros à l’avance. Quel est le prix par location ? Quel sera le coût final des trois locations si la caution est entièrement restituée ?

<details><summary>Correction</summary>

3p+18=42, donc p=8. Coût final vingt-quatre euros, versement initial quarante-deux. La restitution est une hypothèse explicitement donnée ; elle ne supprime pas la nécessité du versement initial.

</details>

## Séquence 3 — Frais fixes et comparaison de tarifs

Une offre A coûte quinze euros fixes puis deux euros par visite ; B, sept euros par visite. Pour n visites :

\[
A(n)=15+2n,\qquad B(n)=7n.
\]

L’égalité donne n=3. A est strictement moins chère lorsque 15+2n<7n, soit n>3. Pour un nombre entier de visites, la première valeur est quatre, pas trois.

La présence de frais fixes empêche la proportionnalité entre dépense et nombre d’utilisations. Deux factures permettent parfois de retrouver le prix unitaire sans connaître d’abord les frais : la différence des factures élimine la partie fixe, si le même tarif et les mêmes conditions s’appliquent.

### Une séance gratuite modifie le nombre payé

À quatre euros par séance avec la première gratuite, six séances coûtent \(4(6-1)=20\) euros. Pour n≥1, le nombre de séances payées est n−1. Si n=0 est possible, il doit être traité séparément : une facture négative n’aurait pas de sens.

### Atelier I3 — Égalité ou avantage strict ?

<!-- interaction I3 | droites de cout et seuil entier | compétence : seuil-tarif -->
A facture douze euros fixes puis trois euros par visite ; B, cinq euros par visite. Pour combien de visites les prix sont-ils égaux ? À partir de combien de visites entières A est-elle strictement moins chère ?

<details><summary>Correction</summary>

12+3n=5n donne six. L’avantage strict exige n>6, donc au moins sept visites. Le mot « strictement » exclut la valeur d’égalité.

</details>

## Séquence 4 — Deux catégories : nombre total et valeur totale

Sept objets coûtent chacun cinq ou huit euros, pour une dépense totale de quarante-quatre euros. Si x est le nombre d’objets à huit euros, les autres sont 7−x :

\[
8x+5(7-x)=44\Rightarrow3x=9\Rightarrow x=3.
\]

Le domaine est x entier, 0≤x≤7. Ne posez pas deux inconnues si le total permet d’exprimer directement la deuxième.

### La méthode de l’excédent

Si tous les objets coûtaient cinq euros, le total serait trente-cinq. Chaque passage d’un objet de cinq à huit augmente la dépense de trois. L’excédent neuf correspond donc à trois objets chers.

Pour N objets valant chacun a ou b, avec b>a :

\[
\boxed{\text{nombre à }b=\frac{V-aN}{b-a}}.
\]

Vérifiez que V est entre aN et bN et que le résultat est un entier. La formule n’est pas un moyen de fabriquer une demi-personne ou une fraction de billet non autorisée.

### Billets, animaux, boîtes, jours et points

Le même modèle apparaît avec des billets à deux tarifs, des poules et des lapins, des boîtes de deux capacités ou des jours payés à deux montants. On peut aussi avoir une contribution négative : pour douze questions toutes répondues, trois points par bonne réponse et moins un par mauvaise, un score de vingt vérifie \(3b-(12-b)=20\), donc b=8.

Si des questions peuvent être laissées sans réponse à zéro point, la relation « mauvaises=12−bonnes » n’est plus valable sans autre donnée.

### Atelier I4 — Même structure derrière deux histoires

<!-- interaction I4 | scenario puis modele commun | compétence : deux-categories -->
Une ferme a dix animaux, tous poules ou lapins, et vingt-huit pattes. Un autre problème porte sur dix objets à deux ou quatre euros, coûtant vingt-huit euros. Combien de lapins, puis d’objets chers ?

<details><summary>Correction</summary>

Dans les deux cas, le scénario tout-petit donne vingt, l’excédent est huit et chaque remplacement ajoute deux. Réponse quatre. Les unités et les noms changent, la structure de l’équation non.

</details>

## Séquence 5 — Âges : une même date pour tout le monde

Si la plus jeune a x ans et l’aînée x+3, dans deux ans leurs âges sont x+2 et x+5. Leur somme devient 2x+7, tandis que leur différence reste trois.

Pour deux personnes, la somme des âges augmente de deux par année ; pour trois personnes, de trois, si l’on conserve les mêmes personnes. Un ratio d’âges, en revanche, n’est pas conservé.

Un parent de trente-six ans et un enfant de neuf ans atteindront le ratio trois à un lorsque :

\[
36+t=3(9+t)\Rightarrow t=\frac92.
\]

La réponse quatre ans et demi est valide si l’on demande un temps réel. Si l’on exige un nombre entier d’années exactes, aucune année entière ne réalise ce rapport.

### Passé et futur doivent être cohérents

« Il y a quatre ans, l’aîné avait deux fois l’âge du plus jeune » se traduit A−4=2(J−4), pas A−4=2J. Vérifiez que les âges aux dates mentionnées ne sont pas négatifs. Un résultat t<0 à une question « dans combien d’années » indique une relation passée, pas une réponse future.

### Atelier I5 — La frise commune

<!-- interaction I5 | frise avec deux personnes et trois dates | compétence : ages -->
Une personne a aujourd’hui vingt-huit ans, une autre dix. Dans combien d’années la première aura-t-elle deux fois l’âge de la seconde ? Vérifiez les deux âges à cette date.

<details><summary>Correction</summary>

28+t=2(10+t), donc t=8. Les âges seront trente-six et dix-huit. La différence de dix-huit ans est bien conservée.

</details>

## Séquence 6 — Entiers consécutifs et suites régulières

Trois entiers consécutifs peuvent s’écrire x−1,x,x+1. Leur somme est 3x, ce qui donne directement le terme central. Pour trois entiers consécutifs pairs ou impairs, l’écart est deux : x−2,x,x+2.

L’écriture x,x+1,x+2 convient aussi, mais x y représente le plus petit, pas le milieu. Choisissez puis gardez la même définition jusqu’à la réponse.

Une suite arithmétique de n termes, premier a et pas d, a pour dernier \(a+(n-1)d\). Il y a n−1 intervalles entre n termes. Sa somme est \(n(\text{premier}+\text{dernier})/2\), par regroupement des extrêmes.

Pour six termes commençant à trois et augmentant de deux, le dernier vaut treize et la somme quarante-huit. Le chapitre des suites approfondira ces modèles ; ici, ils servent à traduire le texte.

### Atelier I6 — Quelle lettre est le milieu ?

<!-- interaction I6 | choix de parametrage et traduction finale | compétence : consecutifs -->
Trois entiers impairs consécutifs ont une somme de cinquante et un. Trouvez le plus petit. Puis donnez le dernier terme et la somme d’une suite de cinq termes commençant à quatre avec un pas de trois.

<details><summary>Correction</summary>

Milieu dix-sept ; nombres quinze, dix-sept, dix-neuf ; plus petit quinze. Suite : quatre, sept, dix, treize, seize ; dernier seize, somme cinquante.

</details>

## Séquence 7 — Une distribution alternative décrit le même stock deux fois

Donner cinq jetons à chaque enfant laisserait manquer trois ; donner trois à chacun laisserait sept. Avec n enfants et un stock S :

\[
S=5n-3=3n+7\Rightarrow2n=10\Rightarrow n=5.
\]

Le stock vaut vingt-deux. Vérifications : cinq chacun demanderait vingt-cinq, il manque trois ; trois chacun distribue quinze, il reste sept.

Le signe est plus facile à reconstruire qu’à mémoriser : « stock plus manque égale besoin » ; « stock égale distribué plus reste ».

### Atelier I7 — Reconstituez le stock dans les deux scénarios

<!-- interaction I7 | deux lignes de stock et meme inconnue | compétence : distribution-alternative -->
En donnant six cartes à chaque joueur, il en manque quatre. En donnant quatre cartes à chacun, il en reste dix. Combien y a-t-il de joueurs et de cartes ?

<details><summary>Correction</summary>

6n−4=4n+10, donc n=7 et S=38. Le stock ne change pas entre les deux scénarios ; les scénarios ne sont pas deux distributions successives.

</details>

## Séquence 8 — Stocks, échanges et transferts : faire le bilan des mouvements

Une boutique vend sept articles puis en reçoit huit et en possède vingt : \(S-7+8=20\), donc S=19. Refaire l’histoire dans l’ordre vérifie le calcul.

Un échange de deux cartes contre trois ajoute une carte nette. Cinq échanges ajoutent cinq, sous réserve que l’on possède assez de cartes pour effectuer chaque échange. Compter seulement les cartes reçues ignorerait celles qui partent.

### Transfert entre deux réserves

Transférer x de A vers B donne A−x et B+x. Le total est conservé. Pour égaliser vingt-quatre et huit litres, le transfert vaut huit ; l’état final est seize et seize.

Pour que la première réserve contienne **deux fois** la seconde, l’équation est \(24-x=2(8+x)\), donc x=8/3. Le nombre seize dans le raisonnement d’égalisation ne doit pas être recyclé dans une question de ratio différent.

Avec des objets indivisibles, un transfert fractionnaire n’est pas autorisé ; avec des litres, il peut l’être. Vérifiez toujours 0≤x≤A pour le sens de transfert annoncé.

### Atelier I8 — Même total, cible différente

<!-- interaction I8 | compteurs lies et deux objectifs | compétence : transfert-bilan -->
Deux cuves contiennent trente-six et douze litres. Dans deux expériences indépendantes, combien transfère-t-on de la première à la seconde pour obtenir : l’égalité ; puis un volume de la première double du second ?

<details><summary>Correction</summary>

Égalité : douze litres, état vingt-quatre/vingt-quatre. Ratio deux à un : 36−x=2(12+x), donc x=4, état trente-deux/seize. Le total quarante-huit est conservé dans les deux expériences.

</details>

## Séquence 9 — Deux évolutions se rencontrent : travailler sur l’écart

Lina possède vingt-quatre euros et dépense trois euros par jour ; Sami possède six euros et économise trois euros par jour. Les sommes sont 24−3t et 6+3t. L’écart initial dix-huit diminue de six par jour, donc ils se rencontrent après trois jours.

S’ils économisaient tous deux au même rythme, leur écart resterait constant : pas de rencontre si les sommes initiales diffèrent. Si leurs trajectoires rapprochent les deux montants, soustraire leurs variations signées donne la vitesse de fermeture de l’écart.

Vérifiez que le modèle reste applicable jusqu’à la date trouvée : on ne peut pas supposer une dépense quotidienne indéfinie après épuisement du budget sans autoriser une dette. Une question en « jours complets » peut également exclure une solution fractionnaire.

### Atelier I9 — Le rattrapage en argent

<!-- interaction I9 | deux lignes de montants et ecart | compétence : rencontre-lineaire -->
A possède quarante euros et dépense deux par jour. B possède dix euros et économise trois par jour. Quand ont-ils la même somme ? Quelle est-elle ?

<details><summary>Correction</summary>

Écart trente, réduit de cinq par jour : six jours. Les deux possèdent vingt-huit euros. Le budget de A n’est pas épuisé à cette date.

</details>

## Séquence 10 — Nombres à deux chiffres : une somme pondérée par la position

Pour un nombre à deux chiffres, d est le chiffre des dizaines, u celui des unités :

\[
N=10d+u,\qquad1\le d\le9,\quad0\le u\le9.
\]

Le nombre obtenu par inversion vaut 10u+d. Si l’énoncé exige que ce nombre soit aussi à deux chiffres, alors u≥1. L’écart signé est :

\[
(10d+u)-(10u+d)=9(d-u).
\]

L’écart en valeur absolue est 9|d−u|. Une somme de chiffres est d+u, pas 10d+u.

Exemple : somme de chiffres cinq, et le nombre dépasse son inversé de vingt-sept. On a d+u=5 et d−u=3, donc d=4,u=1 et N=41.

### Division euclidienne par la somme des chiffres

Si N divisé par d+u donne quotient q et reste r : \(10d+u=q(d+u)+r\), avec \(0\le r<d+u\). Les bornes des chiffres et du reste sont de vraies contraintes ; une équation seule peut produire un candidat invalide.

### Atelier I10 — Deux chiffres, pas deux nombres libres

<!-- interaction I10 | deux champs bornes et equation | compétence : chiffres -->
Un nombre à deux chiffres a une somme de chiffres neuf et dépasse son inversé de vingt-sept. Quel est ce nombre ?

<details><summary>Correction</summary>

d+u=9 et 9(d−u)=27, donc d−u=3. On obtient d=6,u=3, et N=63. Vérification : 63−36=27, somme neuf. Les deux chiffres sont admissibles.

</details>

## Séquence 11 — Géométrie, répartition et relations complémentaires

Pour un rectangle de largeur x et de longueur x+3, le périmètre est \(2[x+(x+3)]\). Si le périmètre vaut trente-huit, alors x=8. Le demi-périmètre vaut longueur plus largeur ; le périmètre ne vaut pas seulement leur somme.

Pour deux parts de total T et d’écart D, avec la première plus grande :

\[
\text{petite}=\frac{T-D}{2},\qquad
\text{grande}=\frac{T+D}{2}.
\]

Ces formules viennent de A+B=T,A−B=D. Il faut T≥D pour des quantités non négatives, et une compatibilité de parité si les parts doivent être entières.

Dans une salle, quatre rangées de huit sièges et x rangées de douze donnent \(32+12x\) sièges. Ne confondez pas le nombre de rangées et leur capacité.

### Atelier I11 — L’unité vérifie le modèle

<!-- interaction I11 | schema de rectangle et equation | compétence : geometrie-traduction -->
La longueur d’un rectangle dépasse sa largeur de cinq centimètres ; son périmètre vaut cinquante-quatre centimètres. Trouvez les dimensions.

<details><summary>Correction</summary>

Largeur x, longueur x+5. 2(2x+5)=54 donne 4x=44, donc largeur onze et longueur seize centimètres. Leur somme vingt-sept est le demi-périmètre, pas le périmètre.

</details>

## Atelier avancé A — Trois catégories avec une relation supplémentaire

Une caisse contient seize jetons valant deux, cinq ou dix euros. Il y a trois jetons de cinq euros de plus que de deux euros ; le total vaut quatre-vingts euros.

Si t est le nombre de jetons de deux euros, ceux de cinq sont t+3 et ceux de dix \(16-t-(t+3)=13-2t\). La valeur donne :

\[
2t+5(t+3)+10(13-2t)=80.
\]

On obtient t=5, puis huit jetons de cinq et trois de dix. Vérification : seize jetons et dix plus quarante plus trente égale quatre-vingts.

Deux totaux seuls ne suffisent généralement pas à déterminer trois catégories : c’est la troisième relation qui ferme le problème. Ne supposez pas leur égalité ou une proportion absente de l’énoncé.

### Atelier I12 — Réduisez le nombre d’inconnues

<!-- interaction I12 | tableau quantite/valeur a une inconnue | compétence : trois-categories -->
Dix objets valent un, trois ou cinq euros. Il y a deux objets à trois euros de plus que d’objets à un euro. Le total vaut trente euros. Combien d’objets de chaque type ?

<details><summary>Correction</summary>

Quantités t,t+2,8−2t. Valeur t+3(t+2)+5(8−2t)=30 donne 46−6t=30, donc t=8/3 : non entier. **Il n’existe aucune répartition d’objets indivisibles** satisfaisant ces données. L’activité évalue la faisabilité, pas seulement la résolution algébrique. Avec un total de vingt-huit euros, on aurait t=3, puis cinq et deux objets.

</details>

## Atelier avancé B — Chercher l’excédent ou le paquet plutôt que chaque quantité

### Remplacement de pièces

Onze pièces de deux ou cinq euros valent trente et un euros. Si toutes étaient de deux euros, le total serait vingt-deux. L’excédent neuf disparaît si l’on remplace chaque pièce de cinq par une de deux. On peut répondre « perte de neuf euros » sans déterminer d’abord le nombre de pièces de chaque type.

### Offre par lots complets

Un article est offert pour quatre payés. Un lot complet contient **cinq articles reçus**, dont quatre payés. Vingt articles reçus représentent quatre lots et seize articles payés. À trois euros l’article payé, la dépense est quarante-huit euros.

Si la personne n’achète pas seulement des lots complets, la règle de l’offre doit préciser le traitement des articles restants. Ne pas extrapoler une fraction de lot à des articles indivisibles.

### Atelier I13 — La donnée demandée avant les inconnues

<!-- interaction I13 | choix entre resolution complete et invariant | compétence : raccourci-structure -->
Une caisse contient neuf pièces de deux ou cinq euros, pour vingt-sept euros. Quelle valeur perd-elle si toutes les pièces de cinq sont remplacées une pour une par des pièces de deux ? Un magasin offre ensuite deux articles pour chaque lot de six payés : pour vingt-quatre articles reçus en lots complets, combien sont payés ?

<details><summary>Correction</summary>

Caisse tout-deux : dix-huit euros ; l’excédent est neuf, donc perte neuf euros. Offre : huit articles reçus par lot, trois lots, dix-huit articles payés. Les deux raccourcis portent sur une structure conservée, pas sur une devinette.

</details>

## La boîte à outils — Une histoire, une conservation

| Famille | Modèle utile | Contrôle dans le texte |
|---|---|---|
| Prix avec frais fixes | np+f=T | Frais uniques ou par objet ? |
| Monnaie et bon fixe | Dépense=versé−monnaie ; avant bon=payé+bon | Montant effectivement payé |
| Deux catégories | b x+a(N−x)=V | Entier entre zéro et N |
| Âges | Même t ajouté ou retiré à tous | Date et non-négativité |
| Distribution alternative | Même stock écrit deux fois | Manque / reste |
| Transfert | A−x et B+x | Total et sens du mouvement |
| Rencontre de soldes | Deux trajectoires à la même date | Temps admissible et budget disponible |
| Deux chiffres | 10d+u, domaines des chiffres | Différence signée / absolue |
| Suites régulières | n−1 pas entre n termes | Premier, milieu ou dernier demandé ? |
| Offre complète | Payés+offerts par paquet | Nombre entier de paquets |

### Atelier I14 — Le test du modèle avant le calcul

<!-- interaction I14 | audit de traductions et correction libre | compétence : transfert -->
Corrigez : « trois locations et une caution unique c : 3(p+c) » ; « deux âges augmentent de cinq ans : leur somme augmente de cinq » ; « six cartes par personne, manque quatre : stock=6n+4 ».

<details><summary>Correction</summary>

3p+c ; la somme augmente de dix ; stock=6n−4. Une phrase complète de vérification vaut mieux qu’un changement de signe sans explication.

</details>

## Mission finale — Choisir, calculer, vérifier

Répondez aux vingt questions avant d’ouvrir la correction. Les huit premières consolident les fondations ; les huit suivantes combinent les outils ; les quatre dernières demandent un transfert ou un contrôle plus exigeant. Aucune limite de temps au premier passage. Indiquez votre confiance et la méthode choisie.

### F1

Quatre articles identiques et trois euros de frais fixes uniques coûtent trente et un euros. Quel est le prix d’un article ?

A. \(\frac{31}{4}\)  
B. \(6\)  
C. \(7\)  
D. \(10\)  

### F2

Cinq cahiers sont payés avec cinquante euros ; le vendeur rend quinze euros. Quel est le prix d’un cahier ?

A. \(10\)  
B. \(13\)  
C. \(7\)  
D. \(3\)  

### F3

Quatre locations et une caution unique de seize euros nécessitent cinquante-deux euros. Quel est le prix d’une location hors caution ?

A. \(17\)  
B. \(36\)  
C. \(9\)  
D. \(13\)  

### F4

A facture dix-huit euros fixes puis deux euros par visite ; B, cinq euros par visite. Pour combien de visites les coûts sont-ils égaux ?

A. \(3\)  
B. \(6\)  
C. \(9\)  
D. \(7\)  

### F5

Pour ces mêmes tarifs, à partir de combien de visites entières A est-elle strictement moins chère que B ?

A. \(5\)  
B. \(6\)  
C. \(7\)  
D. \(9\)  

### F6

Douze objets coûtent chacun trois ou sept euros ; le total vaut cinquante-deux euros. Combien coûtent sept euros ?

A. \(7\)  
B. \(3\)  
C. \(4\)  
D. \(8\)  

### F7

Treize animaux sont des poules ou des lapins ; on compte trente-huit pattes. Combien y a-t-il de lapins ?

A. \(5\)  
B. \(6\)  
C. \(7\)  
D. \(12\)  

### F8

Quinze questions toutes répondues rapportent quatre points si la réponse est bonne et moins un sinon. Le score est trente. Combien de réponses sont bonnes ?

A. \(9\)  
B. \(10\)  
C. \(8\)  
D. \(6\)  

### F9

Deux personnes ont six ans d’écart. Dans quatre ans, la somme de leurs âges sera cinquante. Quel est l’âge actuel de la plus jeune ?

A. \(25\)  
B. \(22\)  
C. \(18\)  
D. \(20\)  

### F10

Un parent a quarante-deux ans, son enfant douze. Dans combien d’années le parent aura-t-il trois fois l’âge de l’enfant ?

A. \(2\)  
B. \(6\)  
C. \(3\)  
D. \(9\)  

### F11

Trois entiers pairs consécutifs totalisent soixante-douze. Quel est le plus petit ?

A. \(22\)  
B. \(20\)  
C. \(23\)  
D. \(24\)  

### F12

Sept cartes par joueur laisseraient manquer deux cartes ; quatre par joueur laisseraient treize cartes. Combien y a-t-il de joueurs ?

A. \(7\)  
B. \(5\)  
C. \(3\)  
D. \(15\)  

### F13

Un stock perd neuf articles puis en reçoit quatorze ; il en contient alors trente-deux. Combien y en avait-il au départ ?

A. \(23\)  
B. \(27\)  
C. \(37\)  
D. \(55\)  

### F14

Deux cuves contiennent quarante et huit litres. On transfère de la première vers la seconde jusqu’à ce que la première contienne deux fois la seconde. Combien transfère-t-on ?

A. \(12\)  
B. \(16\)  
C. \(8\)  
D. \(24\)  

### F15

A possède cinquante euros et dépense trois par jour. B possède dix euros et économise deux par jour. Après combien de jours ont-ils la même somme ?

A. \(10\)  
B. \(5\)  
C. \(8\)  
D. \(20\)  

### F16

Un nombre à deux chiffres a une somme de chiffres onze et dépasse son inversé de vingt-sept. Quel est ce nombre ?

A. \(83\)  
B. \(74\)  
C. \(47\)  
D. \(65\)  

### F17

Un nombre à deux chiffres se termine par deux. Sa division par la somme de ses chiffres donne quotient six et reste deux. Quel est ce nombre ?

A. \(32\)  
B. \(42\)  
C. \(23\)  
D. \(62\)  

### F18

La longueur d’un rectangle dépasse sa largeur de quatre centimètres. Son périmètre vaut quarante-huit centimètres. Quelle est sa largeur ?

A. \(14\)  
B. \(20\)  
C. \(10\)  
D. \(12\)  

### F19

Un magasin offre deux articles pour cinq payés. Un client reçoit vingt-huit articles en lots complets. Chaque article payé coûte quatre euros. Combien paie-t-il ?

A. \(56\)  
B. \(80\)  
C. \(112\)  
D. \(20\)  

### F20

Douze objets valent un, trois ou cinq euros. Il y en a deux à trois euros de plus que d’objets à un euro. Leur valeur totale est trente-huit euros. Combien valent cinq euros ?

A. \(5\)  
B. \(3\)  
C. \(6\)  
D. \(4\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | C | 4p+3=31, donc p=7. | S2 |
| F2 | C | La dépense est 50−15=35, à répartir sur cinq cahiers. | S2 |
| F3 | C | 4p+16=52 donne p=9. | S2 |
| F4 | B | 18+2n=5n, donc n=6. | S3 |
| F5 | C | L’avantage strict exige n>6 ; le premier entier est sept. | S3 |
| F6 | C | Tout-trois donnerait trente-six ; l’excédent seize correspond à quatre hausses de quatre. | S4 |
| F7 | B | Tout-poules donne vingt-six pattes ; douze pattes supplémentaires représentent six lapins. | S4 |
| F8 | A | 4b−(15−b)=30, donc 5b=45. | S4 |
| F9 | C | x+(x+6)+8=50, donc 2x=36. | S5 |
| F10 | C | 42+t=3(12+t), donc 6=2t. | S5 |
| F11 | A | Le milieu est vingt-quatre ; les voisins sont vingt-deux et vingt-six. | S6 |
| F12 | B | 7n−2=4n+13, donc 3n=15. Le stock vaut trente-trois. | S7 |
| F13 | B | S−9+14=32, donc S=27. | S8 |
| F14 | C | 40−x=2(8+x), donc 3x=24. État final trente-deux et seize. | S8 |
| F15 | C | L’écart quarante se réduit de cinq par jour ; le montant commun est vingt-six euros. | S9 |
| F16 | B | d+u=11 et d−u=3 donnent d=7,u=4. | S10 |
| F17 | A | 10d+2=6(d+2)+2 donne d=3. Vérification : 32=6×5+2 avec 2<5. | S10 |
| F18 | C | 2[x+(x+4)]=48 donne 4x=40. | S11 |
| F19 | B | Sept articles reçus par lot : quatre lots, vingt payés, soit quatre-vingts euros. | Avancé B |
| F20 | D | Quantités t,t+2,10−2t ; t+3(t+2)+5(10−2t)=38 donne t=3, donc quatre objets chers. | Avancé A |

</details>

## Votre bilan — Reprendre la structure, pas mémoriser le résultat

Une erreur doit d’abord être localisée : traduction, choix de règle, calcul, domaine ou réponse à une autre grandeur. Reprenez le passage indiqué dans le corrigé, expliquez votre choix de méthode en une phrase, puis essayez une variante sans ouvrir les aides.

Une réponse juste après un indice est une réussite accompagnée ; elle ne confirme pas encore le transfert autonome. Les ateliers avancés ne doivent pas masquer une fragilité de fondation, ni bloquer le chapitre suivant lorsque les prérequis sont acquis. Ce bilan est propre à la leçon et ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Traduction | Nommer inconnue, unité et domaine avant l’équation |
| Frais uniques | np+f ; frais par article : n(p+f) |
| Monnaie rendue | Dépense=montant remis−monnaie |
| Deux catégories a/b | Quantités x et N−x ; excédent (V−aN)/(b−a) |
| Âges | Même date pour tous ; différence conservée |
| Consécutifs | x−1,x,x+1 ; pairs ou impairs : pas deux |
| Manque / reste | Stock=besoin−manque ; stock=distribué+reste |
| Stock | Initial+entrées−sorties=final |
| Transfert | A−x et B+x ; total conservé |
| Deux chiffres | N=10d+u ; inversion 10u+d ; différence 9(d−u) |
| Tarifs | Égalité pour le seuil, inégalité pour l’avantage strict |
| Vérification | Entier, bornes, signe, unité et réponse à la bonne question |

**Prochaine étape : les vitesses, distances et durées.** Emportez le même réflexe : identifier la structure et les contraintes avant de développer le calcul.
