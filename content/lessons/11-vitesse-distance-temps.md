# Vitesse, distance et temps : suivre les positions et les horloges

Deux cyclistes se rapprochent. Un véhicule s’arrête puis doit respecter une heure d’arrivée. Un train a déjà fait entrer son avant dans un tunnel, mais son arrière n’en est pas encore sorti. Dans ces problèmes, la formule ne suffit pas : il faut préciser **quelle distance**, **quelle durée** et **quel événement** on mesure.

**Votre objectif :** construire une chronologie et une représentation du trajet avant de calculer. Les vitesses sont supposées constantes sur chaque phase annoncée ; les changements de rythme créent de nouvelles phases.

## Avant de commencer — Trois repères

Répondez avec votre confiance : sûr, hésitant ou deviné. Justifiez par une unité ou un petit schéma.

<!-- interaction D1 | QCM unique + confiance | compétence : unites-temps -->
**D1.** À soixante-douze kilomètres par heure, quelle distance parcourt-on en vingt minutes ?

A. \(14{,}4\) km · B. \(24\) km · C. \(36\) km · D. \(1440\) km.

<details><summary>Raisonnement</summary>

**B.** Vingt minutes valent un tiers d’heure, donc la distance vaut \(72/3=24\) kilomètres. Vingt minutes ne valent pas 0,20 heure.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : moyenne-distances -->
**D2.** Un aller est parcouru à trente km/h, le retour sur la même distance à soixante km/h. La vitesse moyenne globale vaut :

A. \(45\) km/h · B. \(90\) km/h · C. \(40\) km/h · D. \(30\) km/h.

<details><summary>Raisonnement</summary>

**C.** Sur trente kilomètres dans chaque sens, les durées sont une heure et une demi-heure. Soixante kilomètres en une heure et demie donnent quarante km/h.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : horloge-rattrapage -->
**D3.** A part à quarante km/h. B part du même point une heure plus tard à soixante km/h. Combien d’heures **après le départ de B** a lieu le rattrapage ?

A. Une. · B. Trois. · C. Quatre. · D. Deux.

<details><summary>Raisonnement</summary>

**D.** A possède quarante kilomètres d’avance. B ferme l’écart à vingt km/h, donc en deux heures. Depuis le départ de A, il se serait écoulé trois heures.

</details>

D1 appelle S1–S2 ; D2 S3 ; D3 S5–S6. Le résultat doit porter la même référence temporelle que la question.

## Séquence 1 — Trois grandeurs, une relation et des unités compatibles

Sur une phase à vitesse constante v≥0 pendant une durée t≥0 :

\[
\boxed{d=vt},\qquad v=\frac dt\ (t>0),\qquad t=\frac dv\ (v>0).
\]

La distance d est non négative. Une position orientée peut augmenter ou diminuer ; on précisera son sens lorsqu’on étudiera deux mobiles. Les déplacements négatifs ne sont pas des distances parcourues négatives.

| Vitesse | Durée compatible | Distance obtenue |
|---|---|---|
| km/h | heures | kilomètres |
| m/s | secondes | mètres |
| m/min | minutes | mètres |

La division de kilomètres par des heures donne une vitesse ; la division de kilomètres par une vitesse donne une durée. Les unités fournissent un contrôle de l’opération.

### Convertir les durées et les distances

\(1\) h = \(60\) min = \(3600\) s ; \(1\) km = \(1000\) m. Une heure trente vaut \(3/2\) heure, pas 1,30 heure. \(0{,}2\) heure représente douze minutes.

\[
1\ \mathrm{m/s}=\frac{3600}{1000}\ \mathrm{km/h}=3{,}6\ \mathrm{km/h}.
\]

Pour passer de km/h à m/s, diviser par 3,6. Pour passer de m/s à km/h, multiplier par 3,6.

### Atelier I1 — Choisissez le temps dans la bonne unité

<!-- interaction I1 | tableau conversions et distance | compétence : conversions -->
Un mobile avance à dix mètres par seconde pendant une minute trente. Donnez la durée en secondes, la distance en mètres et la vitesse en km/h.

<details><summary>Correction</summary>

Quatre-vingt-dix secondes ; neuf cents mètres ; trente-six km/h. La conversion de la vitesse n’était pas nécessaire au calcul de distance, mais elle permet un autre contrôle.

</details>

## Séquence 2 — Allure, durée et heure d’arrivée

Une allure exprimée en minutes par kilomètre est l’inverse d’une vitesse, avec conversion du temps :

\[
\boxed{v=\frac{60}{a}}\text{ en km/h si l’allure }a>0\text{ est en min/km}.
\]

Une allure de cinq minutes par kilomètre correspond à douze km/h. Une allure plus petite correspond à une vitesse plus grande. Pour quatre kilomètres à douze minutes par kilomètre, la durée vaut quarante-huit minutes.

Pour une heure d’arrivée, additionnez les durées dans une unité commune, puis convertissez en heure et minutes. Un départ à 8 h 40 suivi de cinquante minutes de trajet et quinze minutes d’arrêt conduit à 9 h 45. L’heure affichée n’est pas une durée décimale.

À distance fixée, durée et vitesse sont inversement proportionnelles. Doubler la vitesse divise le temps par deux ; une hausse de vingt pour cent de vitesse multiplie la durée par \(1/1{,}2=5/6\), et non par 0,8.

### Atelier I2 — Minutes par kilomètre n’est pas kilomètres par minute

<!-- interaction I2 | deux champs allure/vitesse et arrivee | compétence : allure -->
À une allure constante de six minutes par kilomètre, combien de temps faut-il pour cinq kilomètres ? Quelle est la vitesse ? En partant à 9 h 50, à quelle heure arrive-t-on sans arrêt ?

<details><summary>Correction</summary>

Trente minutes ; dix km/h ; 10 h 20. L’allure multiplie la distance pour donner une durée.

</details>

## Séquence 3 — Vitesse moyenne : distance totale divisée par durée totale

\[
\boxed{v_m=\frac{d_1+d_2+\cdots}{t_1+t_2+\cdots}}.
\]

La moyenne simple des vitesses n’est justifiée que pour des **durées égales**. Les poids corrects des vitesses sont les durées, car chaque distance vaut vᵢtᵢ.

Pour deux distances égales, aux vitesses positives v et w :

\[
\boxed{v_m=\frac{2}{1/v+1/w}=\frac{2vw}{v+w}}.
\]

La distance commune se simplifie ; la durée passée à la vitesse la plus faible est plus longue. Pour des fractions de trajet différentes, revenez à chaque durée \(d_i/v_i\) : la formule pour distances égales ne s’applique plus telle quelle.

Sur un aller-retour, la distance parcourue est la somme des deux trajets, pas zéro. Le déplacement entre début et fin peut être nul ; la vitesse moyenne de parcours dont parlent ces exercices repose sur la distance, pas sur ce déplacement orienté.

### Atelier I3 — Même durée, même distance ?

<!-- interaction I3 | deux tableaux de phases a distinguer | compétence : moyenne-vitesse -->
Comparez : A roule une heure à quarante puis une heure à quatre-vingts km/h. B parcourt quarante kilomètres à quarante puis quarante kilomètres à quatre-vingts. Donnez les deux vitesses moyennes exactes.

<details><summary>Correction</summary>

A : cent vingt kilomètres en deux heures, soit soixante km/h. B : quatre-vingts kilomètres en une heure et demie, soit \(160/3\) km/h. Les vitesses sont identiques dans les deux scénarios, leurs poids diffèrent.

</details>

## Séquence 4 — Arrêts, temps restant et retard à compenser

Si la question porte sur le trajet entier, un arrêt ajoute du temps sans ajouter de distance. Quatre-vingt-dix kilomètres en deux heures de conduite puis une demi-heure d’arrêt donnent une moyenne de trente-six km/h sur toute la durée, mais quarante-cinq pendant la seule conduite.

Un trajet de trois cents kilomètres est prévu en cinq heures. Après une heure à soixante km/h puis trente minutes d’arrêt, il reste deux cent quarante kilomètres et trois heures et demie :

\[
v_{\text{nécessaire}}=\frac{240}{7/2}=\frac{480}{7}\ \mathrm{km/h}.
\]

Ne retranchez pas seulement le retard à la durée **restante de conduite prévue** sans reconstituer les phases. La méthode sûre est : heure limite moins temps déjà écoulé ; distance totale moins distance déjà parcourue.

Si le temps restant est nul ou négatif alors qu’une distance positive reste à parcourir, aucune vitesse finie positive ne satisfait le modèle. Une vitesse calculée dans un exercice ne dit rien de la faisabilité d’un trajet réel.

### Atelier I4 — Deux compteurs qui ne diminuent pas de la même manière

<!-- interaction I4 | chronologie et distance restante | compétence : retard -->
Un trajet de cent quatre-vingts kilomètres doit durer trois heures. Les soixante premiers kilomètres prennent une heure, suivie d’une pause de trente minutes. Quelle vitesse constante permet de finir à l’heure ?

<details><summary>Correction</summary>

Il reste cent vingt kilomètres et une heure et demie : quatre-vingts km/h. La pause consomme du temps, pas de distance. La durée totale sera bien une heure + une demi-heure + une heure et demie.

</details>

## Séquence 5 — Se rapprocher ou s’éloigner : suivre l’écart

Deux mobiles se dirigent l’un vers l’autre à v₁ et v₂, avec une séparation D. L’écart diminue à la vitesse v₁+v₂. Si les deux vitesses sont non négatives et leur somme positive :

\[
t=\frac{D}{v_1+v_2}.
\]

S’ils partent du même endroit dans des sens opposés, leur séparation augmente selon la même somme. Le mot « opposés » ne signifie donc pas systématiquement « rencontre » : il faut savoir s’ils se rapprochent ou s’éloignent.

Dans le même sens, un poursuivant plus rapide ferme l’écart à vrapide−vlent. Si sa vitesse est égale, il ne réduit pas une avance positive ; s’il est moins rapide, il ne rattrape pas dans ce modèle.

### Distance parcourue avant la rencontre

Deux cyclistes séparés de vingt-cinq kilomètres roulent vers l’autre à douze et dix-huit km/h. Le premier parcourt la fraction \(12/(12+18)=2/5\) de la séparation, soit dix kilomètres. Les distances sont proportionnelles aux vitesses car la durée est commune.

### Atelier I5 — Faites diminuer la distance entre les deux points

<!-- interaction I5 | frise de positions et vitesse de rapprochement | compétence : vitesse-relative -->
A et B sont séparés de cent cinquante kilomètres et se rapprochent à quarante et soixante km/h. Quand se rencontrent-ils ? Quelle distance A parcourt-il ?

<details><summary>Correction</summary>

Vitesse de fermeture cent km/h ; temps une heure et demie. A parcourt soixante kilomètres et B quatre-vingt-dix. La somme reconstitue cent cinquante.

</details>

## Séquence 6 — Départ différé : fixer le zéro de l’horloge

Si le premier mobile roule à v₁ pendant un délai τ avant le départ du second, son avance vaut v₁τ. Pour un second plus rapide, le temps de rattrapage mesuré depuis **son propre départ** vaut :

\[
t=\frac{v_1\tau}{v_2-v_1}.
\]

Depuis le départ du premier, il faut ajouter τ. On peut aussi écrire les positions depuis une horloge commune : x₁=v₁t et x₂=v₂(t−τ), mais cette deuxième formule ne décrit le mobile en mouvement que pour t≥τ.

Choisissez une horloge, annoncez-la et gardez-la. Une réponse de trois heures au lieu de deux peut être un calcul correct sur la mauvaise horloge.

### Atelier I6 — Quelle durée la question mesure-t-elle ?

<!-- interaction I6 | deux horloges synchronisees | compétence : depart-differe -->
Un cycliste part à quinze km/h. Un second part du même point vingt minutes plus tard à vingt km/h. Donnez le temps de poursuite du second, puis le temps écoulé depuis le départ du premier.

<details><summary>Correction</summary>

Avance cinq kilomètres ; vitesse relative cinq km/h : poursuite une heure. Depuis le premier départ : une heure vingt minutes. Le point de rencontre est à vingt kilomètres du départ.

</details>

## Séquence 7 — Circuits : combler un tour, pas toute la distance parcourue

Sur une piste circulaire de longueur L>0, deux coureurs partis ensemble dans le même sens se retrouvent quand le plus rapide a gagné un tour sur l’autre :

\[
t_{\mathrm{rencontre}}=\frac{L}{|v_1-v_2|},\qquad v_1\ne v_2.
\]

Si les vitesses sont égales et le départ commun, les coureurs restent ensemble ; s’ils sont initialement décalés sur la piste à vitesse identique, l’écart se conserve. La formule de rattrapage avec division par la différence ne s’applique pas dans ces cas.

En sens opposés, la première rencontre après le départ est à \(L/(v_1+v_2)\), si la somme est positive. On exclut la rencontre initiale à t=0 lorsque l’énoncé dit « après le départ ».

Se rencontrer ne signifie pas forcément revenir ensemble au point de départ. Pour revenir chacun à ce point, les temps doivent être des multiples de leurs durées de tour ; on cherche alors un premier multiple commun adapté, lorsque ces durées se ramènent à une unité commune rationnelle.

### Atelier I7 — Rencontre ou retour au départ ?

<!-- interaction I7 | piste et deux evenements a distinguer | compétence : circuit -->
Sur une piste de cent quatre-vingts mètres, deux coureurs partent ensemble à sept et cinq m/s dans le même sens. Quand le rapide prend-il un tour d’avance ? Et sur la même piste, s’ils partent en sens opposés ?

<details><summary>Correction</summary>

Même sens : \(180/(7-5)=90\) secondes. Sens opposés : \(180/(7+5)=15\) secondes. Ces réponses concernent une rencontre sur la piste, pas une présence simultanée à la ligne de départ.

</details>

## Séquence 8 — Trains et tunnels : définir les instants de début et de fin

Un train n’est pas un point. Pour passer entièrement devant un poteau, il doit avancer de sa propre longueur. Pour traverser un tunnel entre l’entrée de son avant et la sortie de son arrière, il doit avancer de **longueur du train + longueur du tunnel**.

Deux trains dont les avants se rejoignent se dégagent complètement après un déplacement relatif égal à la somme de leurs longueurs. En sens opposés, diviser par la somme des vitesses ; pour un dépassement dans le même sens, par leur différence positive.

| Événement mesuré | Distance pertinente |
|---|---|
| Avant passe l’entrée → avant atteint la sortie du tunnel | Longueur du tunnel |
| Avant entre → arrière sort | Tunnel + train |
| Train entier passe un poteau | Longueur du train |
| Deux trains se dégagent totalement | Somme des deux longueurs, en mouvement relatif |

### Atelier I8 — Suivez l’arrière, pas seulement l’avant

<!-- interaction I8 | train anime et marqueurs d’instants | compétence : train-longueur -->
Un train de cent vingt mètres roule à vingt m/s. Combien de secondes pour passer un poteau ? Pour traverser entièrement un tunnel de deux cents mètres, selon les instants du tableau ?

<details><summary>Correction</summary>

Poteau : six secondes. De l’entrée de l’avant à la sortie de l’arrière : \(320/20=16\) secondes. Le seul trajet de l’avant dans le tunnel durerait dix secondes ; il ne termine pas encore la traversée complète.

</details>

## Séquence 9 — Rivière : distinguer vitesse dans l’eau et par rapport à la rive

Si b>0 est la vitesse du bateau en eau calme et c≥0 celle du courant : vitesse vers l’aval b+c ; vitesse vers l’amont b−c, lorsque b>c. Les durées se calculent avec les vitesses **par rapport à la rive**, car les distances sont repérées sur la rive.

Si les vitesses observées vers l’aval et l’amont sont a et r, avec a≥r>0 :

\[
b=\frac{a+r}{2},\qquad c=\frac{a-r}{2}.
\]

Lorsque b=c, le bateau ne progresse pas vers l’amont par rapport à la rive ; lorsque b<c, il est entraîné vers l’aval. Une durée négative obtenue en divisant par b−c ne décrit pas un trajet amont réussi.

### Atelier I9 — Deux vitesses observées, deux composantes

<!-- interaction I9 | tableau aval/amont et inconnues | compétence : courant -->
Un bateau parcourt vingt-quatre kilomètres en deux heures vers l’aval et en trois heures vers l’amont. Donnez les deux vitesses observées, puis la vitesse en eau calme et celle du courant.

<details><summary>Correction</summary>

Douze et huit km/h ; eau calme dix ; courant deux. Les hypothèses sont un bateau de même rendement et un courant constant sur les deux trajets.

</details>

## Séquence 10 — Deux modes de déplacement : une durée totale à partager

Pour neuf kilomètres à parcourir en deux heures, en marchant à quatre puis en courant à huit km/h, posez t la durée de course en heures. La marche dure 2−t :

\[
4(2-t)+8t=9\Rightarrow t=\frac14\text{ h}=15\text{ min}.
\]

Le domaine exige 0≤t≤2. Si la vitesse moyenne requise n’est pas comprise entre quatre et huit, aucun partage de ces deux modes ne convient. On suppose qu’ils s’enchaînent sans pause ; sinon, elle prend aussi une partie du temps total.

### Atelier I10 — La durée rapide n’est pas la distance rapide

<!-- interaction I10 | partage du temps et bilan des distances | compétence : deux-vitesses -->
Un trajet de dix kilomètres dure deux heures. Une partie est parcourue à quatre km/h et le reste à six. Combien de minutes sont passées à chaque vitesse ? Quelles sont les distances correspondantes ?

<details><summary>Correction</summary>

4(2−t)+6t=10 donne t=1 heure à six km/h ; une heure à quatre. Distances six et quatre kilomètres. Des durées égales n’impliquent pas des distances égales.

</details>

## Atelier avancé A — Temps gagné et vitesse requise : soustraire les durées

Sur une distance D>0, le temps gagné en passant de v à w, avec 0<v<w, vaut :

\[
\Delta t=\frac Dv-\frac Dw.
\]

L’unité est celle des durées. Sur soixante kilomètres, passer de douze à vingt-quatre km/h fait gagner deux heures et demie, soit cent cinquante minutes, pas douze minutes parce que la vitesse augmente de douze.

Lorsque le gain de temps est connu, on peut construire une équation, mais les unités du gain doivent être converties avant de les soustraire aux durées. Sur une distance inconnue D, parcourir à trente au lieu de vingt km/h avec une demi-heure gagnée donne \(D/20-D/30=1/2\), donc D=30 km.

### Atelier I11 — Une différence de durées, pas une différence de vitesses

<!-- interaction I11 | deux trajets de meme distance et gain | compétence : temps-gagne -->
Pour un trajet de quarante-huit kilomètres, comparez douze et seize km/h. Quel temps gagne-t-on ? Retrouverait-on la même durée gagnée sur le double de distance ?

<details><summary>Correction</summary>

Quatre heures contre trois : une heure gagnée. Sur quatre-vingt-seize kilomètres, huit contre six : deux heures gagnées. Le gain est proportionnel à D lorsque les deux vitesses sont fixées.

</details>

## Atelier avancé B — Construire un tableau plutôt qu’une formule de mémoire

Pour chaque phase, notez distance, vitesse, durée. Deux colonnes connues permettent la troisième. N’ajoutez une ligne « total » qu’après avoir mis les unités en accord.

| Phase | Distance | Vitesse | Durée |
|---|---|---|---|
| Première partie | d₁ | v₁ | d₁/v₁ |
| Pause | zéro | zéro | durée donnée |
| Deuxième partie | D−d₁ | v₂ | (D−d₁)/v₂ |

La moyenne globale doit être entre zéro et la plus grande vitesse utilisée ; avec un arrêt, elle peut être inférieure à toutes les vitesses de conduite. Sans arrêt, elle est entre les vitesses des phases de durée positive.

### Atelier I12 — Retrouvez une pause cachée

<!-- interaction I12 | tableau avec duree d’arret inconnue | compétence : arret-deduit -->
Un véhicule parcourt cent vingt kilomètres en roulant à soixante km/h. Sa moyenne sur tout le voyage est quarante km/h. Quelle est la durée totale, puis la durée de l’arrêt ?

<details><summary>Correction</summary>

Durée totale trois heures ; conduite deux heures ; arrêt une heure. La pause est la différence des durées, pas la différence des vitesses.

</details>

## La boîte à outils — Nommez les références

| Demande | Modèle | Question de contrôle |
|---|---|---|
| Une phase uniforme | d=vt | Unités compatibles ? |
| Moyenne | Somme distances / somme durées | Arrêts compris ? |
| Rencontre frontale | Fermeture de l’écart par somme des vitesses | Se rapprochent-ils vraiment ? |
| Rattrapage | Avance / différence positive des vitesses | Quelle horloge ? |
| Circuit | Un tour relatif | Rencontre ou retour à la ligne ? |
| Train entier | Distance adaptée aux extrémités | Avant ou arrière au début et à la fin ? |
| Rivière | Vitesse rive = bateau ± courant | Progression amont possible ? |
| Retard | Distance restante / temps restant | Temps restant strictement positif ? |

### Atelier I13 — Choisissez le schéma avant les nombres

<!-- interaction I13 | association situations/methodes | compétence : selection-methode -->
Associez : deux trains en sens opposés se dégagent ; un poursuivant part en retard ; un trajet avec pause ; un bateau remonte la rivière. Nommez la distance et la vitesse pertinentes, sans calcul.

<details><summary>Correction</summary>

Somme des longueurs / somme des vitesses ; avance acquise / différence des vitesses depuis le deuxième départ ; distance totale / temps conduite plus pause ; distance sur rive / vitesse bateau moins courant, si positive.

</details>

### Atelier I14 — Réfutez la formule trop rapide

<!-- interaction I14 | contre-exemples libres | compétence : transfert -->
Réfutez « la moyenne de deux vitesses est toujours leur demi-somme » et « le temps de traversée d’un tunnel ne dépend pas de la longueur du train ».

<details><summary>Corrections possibles</summary>

Distances égales à trente et soixante donnent quarante, pas quarante-cinq. À tunnel et vitesse identiques, un train plus long met davantage de temps entre l’entrée de son avant et la sortie de son arrière. Dans chaque réponse, conserver les mêmes définitions des événements comparés.

</details>

## Mission finale — Choisir, compter et vérifier

Répondez avant d’ouvrir le corrigé. F1–F8 consolident les fondations ; F9–F16 combinent les outils ; F17–F20 demandent du transfert. Indiquez votre confiance et une méthode. Il n’y a pas de temps imposé au premier passage.

### F1

Combien de mètres par seconde représentent soixante-douze kilomètres par heure ?

A. \(2\)  
B. \(20\)  
C. \(\frac{1296}{5}\)  
D. \(\frac{36}{5}\)  

### F2

Un véhicule roule à cinquante-quatre km/h pendant vingt minutes. Quelle distance parcourt-il, en kilomètres ?

A. \(18\)  
B. \(\frac{54}{5}\)  
C. \(1080\)  
D. \(27\)  

### F3

Une allure de cinq minutes par kilomètre correspond à quelle vitesse, en km/h ?

A. \(\frac{1}{5}\)  
B. \(300\)  
C. \(5\)  
D. \(12\)  

### F4

Combien d’heures faut-il pour parcourir cent quatre-vingts kilomètres à quatre-vingt-dix km/h ?

A. \(90\)  
B. \(\frac{1}{2}\)  
C. \(270\)  
D. \(2\)  

### F5

Un car roule cinquante minutes puis s’arrête quinze minutes. Combien de minutes se sont écoulées depuis son départ à la fin de la pause ?

A. \(65\)  
B. \(75\)  
C. \(35\)  
D. \(50\)  

### F6

Un trajet comprend une heure à quarante km/h puis deux heures à soixante-dix. Quelle est la vitesse moyenne globale, en km/h ?

A. \(90\)  
B. \(60\)  
C. \(55\)  
D. \(110\)  

### F7

Deux distances égales sont parcourues à quarante puis quatre-vingts km/h. Quelle est la vitesse moyenne exacte, en km/h ?

A. \(60\)  
B. \(\frac{160}{3}\)  
C. \(\frac{80}{3}\)  
D. \(40\)  

### F8

Cent vingt kilomètres sont parcourus à soixante km/h, puis une pause de trente minutes a lieu. Quelle est la moyenne sur toute cette durée, en km/h ?

A. \(60\)  
B. \(40\)  
C. \(48\)  
D. \(45\)  

### F9

Deux véhicules séparés de deux cent dix kilomètres se dirigent l’un vers l’autre à quarante et soixante-cinq km/h. Après combien d’heures se rencontrent-ils ?

A. \(3\)  
B. \(\frac{42}{5}\)  
C. \(\frac{21}{4}\)  
D. \(2\)  

### F10

Un mobile a dix-huit kilomètres d’avance à vingt-quatre km/h. Un poursuivant roule dans le même sens à trente-six km/h. Combien d’heures pour le rattraper ?

A. \(\frac{3}{10}\)  
B. \(\frac{3}{2}\)  
C. \(\frac{1}{2}\)  
D. \(2\)  

### F11

A part à dix-huit km/h ; B part vingt minutes plus tard du même point à vingt-quatre km/h. Combien de minutes après son propre départ B rattrape-t-il A ?

A. \(20\)  
B. \(60\)  
C. \(40\)  
D. \(80\)  

### F12

Sur une piste circulaire de trois cents mètres, deux coureurs partis ensemble dans le même sens vont à sept et cinq m/s. Combien de secondes pour un tour d’avance du rapide ?

A. \(300\)  
B. \(150\)  
C. \(60\)  
D. \(25\)  

### F13

Deux mobiles partent du même point en sens opposés sur une piste de deux cent quarante mètres, à trois et cinq m/s. Après combien de secondes se retrouvent-ils pour la première fois après le départ ?

A. \(30\)  
B. \(80\)  
C. \(48\)  
D. \(120\)  

### F14

Un train de cent cinquante mètres roule à trente m/s. Combien de secondes pour passer entièrement devant un poteau ?

A. \(30\)  
B. \(5\)  
C. \(150\)  
D. \(\frac{1}{5}\)  

### F15

Un train de cent cinquante mètres traverse un tunnel de deux cent cinquante mètres à vingt m/s. Combien de secondes entre l’entrée de l’avant et la sortie de l’arrière ?

A. \(20\)  
B. \(\frac{25}{2}\)  
C. \(5\)  
D. \(\frac{15}{2}\)  

### F16

Deux trains longs de cent vingt et cent quatre-vingts mètres roulent en sens opposés à vingt et trente m/s. Combien de secondes dure leur croisement complet à partir de la rencontre des avants ?

A. \(10\)  
B. \(6\)  
C. \(15\)  
D. \(30\)  

### F17

Un bateau va à douze km/h en eau calme, avec un courant de trois km/h. Combien d’heures pour parcourir quarante-cinq kilomètres vers l’amont ?

A. \(5\)  
B. \(\frac{15}{4}\)  
C. \(3\)  
D. \(9\)  

### F18

Un bateau parcourt dix-huit kilomètres en une heure et demie vers l’aval et en trois heures vers l’amont. Quelle est la vitesse du courant, en km/h ?

A. \(6\)  
B. \(9\)  
C. \(3\)  
D. \(12\)  

### F19

Un trajet de deux cent quarante kilomètres doit durer quatre heures. Après soixante kilomètres en une heure et une pause de trente minutes, quelle vitesse faut-il maintenir pour finir à l’heure, en km/h ?

A. \(90\)  
B. \(120\)  
C. \(72\)  
D. \(60\)  

### F20

Une personne parcourt quatorze kilomètres en deux heures, en marchant à quatre km/h puis courant à dix. Combien de minutes court-elle ?

A. \(30\)  
B. \(60\)  
C. \(90\)  
D. \(120\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | B | Diviser 72 par 3,6 donne vingt mètres par seconde. | S1 |
| F2 | A | Vingt minutes valent un tiers d’heure : 54/3=18. | S1 |
| F3 | D | Une heure contient douze intervalles de cinq minutes : douze kilomètres par heure. | S2 |
| F4 | D | Durée=distance/vitesse=180/90. | S1 |
| F5 | A | La pause fait partie du temps écoulé : 50+15. | S2 |
| F6 | B | Distance totale 40+140=180, durée totale trois heures. | S3 |
| F7 | B | La formule des distances égales donne 2×40×80/(40+80)=160/3. | S3 |
| F8 | C | Conduite deux heures, total cinq demis d’heure : 120/(5/2)=48. | S4 |
| F9 | D | La vitesse de fermeture vaut 105 km/h ; 210/105=2. | S5 |
| F10 | B | L’avance diminue de douze kilomètres par heure : 18/12=3/2. | S5 |
| F11 | B | Avance six kilomètres ; fermeture six km/h : une heure, soit soixante minutes. | S6 |
| F12 | B | Un tour relatif de trois cents mètres, à deux m/s de différence. | S7 |
| F13 | A | Leurs distances cumulées forment un tour : 240/(3+5)=30. | S7 |
| F14 | B | L’avant doit avancer de la longueur du train : 150/30. | S8 |
| F15 | A | Distance pertinente 150+250=400 mètres ; 400/20=20 secondes. | S8 |
| F16 | B | Somme des longueurs trois cents ; vitesse relative cinquante m/s. | S8 |
| F17 | A | Vitesse sur rive neuf km/h ; temps 45/9=5. | S9 |
| F18 | C | Vitesses observées douze et six ; courant (12−6)/2=3. | S9 |
| F19 | C | Reste cent quatre-vingts kilomètres pour cinq demis d’heure : 180/(5/2)=72. | S4 |
| F20 | B | 4(2−t)+10t=14 donne t=1 heure, soit soixante minutes. | S10 |

</details>

## Votre bilan — Revenir à la bonne structure

Une erreur peut porter sur le modèle, le calcul, une unité, un rang, un événement ou la demande finale. Reprenez le passage indiqué, formulez la règle et ses conditions en une phrase, puis essayez une variante sans aide. Une réponse correcte après lecture du corrigé reste une réussite accompagnée jusqu’à confirmation sur un autre énoncé. Ce bilan ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Phase à vitesse constante | d=vt ; v=d/t si t>0 ; t=d/v si v>0 |
| Conversions | Une heure soixante minutes ; 1 m/s=3,6 km/h |
| Allure a en min/km | v=60/a en km/h, a>0 |
| Moyenne de parcours | Distance totale / durée totale, arrêts selon l’énoncé |
| Durées égales | Moyenne arithmétique des vitesses |
| Deux distances égales | 2vw/(v+w), v et w strictement positives |
| Rencontre frontale | Séparation / somme des vitesses de rapprochement |
| Rattrapage | Avance / différence positive des vitesses |
| Circuit | Longueur d’un tour / vitesse relative appropriée |
| Train entier | Longueur du train ; ajouter tunnel ou second train selon l’événement |
| Rivière | Vitesse rive= bateau ± courant ; amont seulement si bateau>courant |
| Retard | Distance restante / temps restant strictement positif |

**Prochaine étape : le travail et les débits.** Conservez le même réflexe : définir les objets, les unités et les conditions avant de choisir une formule.
