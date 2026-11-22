# Les moyennes : retrouver la somme derrière le résultat

Une moyenne augmente après l’arrivée d’un nouveau score. Deux groupes annoncent chacun leur moyenne. Une mesure a été mal recopiée. Ces situations demandent rarement de retrouver toutes les valeurs une à une.

Le geste qui débloque le chapitre est simple : **transformer la moyenne en somme, modifier la somme et l’effectif séparément, puis recalculer la moyenne**.

**Votre objectif :** reconnaître ce qu’une moyenne permet réellement de connaître, choisir le bon poids et éviter les raccourcis qui oublient un changement d’effectif. Une moyenne résume une liste ; elle ne remplace pas la liste.

## Avant de commencer — Trois prédictions

Répondez avec une confiance : « sûr », « hésitant » ou « deviné ». Ne cherchez pas encore la vitesse.

<!-- interaction D1 | QCM unique + confiance | compétence : somme-effectif -->
**D1.** Cinq nombres ont pour moyenne douze. Quelle est leur somme ?

A. \(12/5\) · B. \(17\) · C. \(60\) · D. Impossible à connaître.

<details><summary>Raisonnement</summary>

**C.** Moyenne = somme/effectif, donc somme = \(5\times12=60\). Les cinq valeurs ne sont pas connues individuellement, mais leur somme l’est.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : poids-groupes -->
**D2.** Deux personnes ont une moyenne de dix et huit autres une moyenne de vingt. La moyenne des dix personnes vaut :

A. \(15\) · B. \(18\) · C. \(30\) · D. \(16\).

<details><summary>Raisonnement</summary>

**B.** Les sommes sont vingt et cent soixante. Le total de cent quatre-vingts est réparti sur dix personnes, donc dix-huit. Le deuxième groupe pèse quatre fois plus lourd.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : ajout-vs-transformation -->
**D3.** Quatre valeurs ont une moyenne de six. On ajoute **une nouvelle valeur** égale à dix. La moyenne devient :

A. \(16\) · B. \(8\) · C. \(8{,}5\) · D. \(34/5\).

<details><summary>Raisonnement</summary>

**D.** La somme passe de vingt-quatre à trente-quatre, et l’effectif de quatre à cinq. Ajouter dix à chacune des quatre valeurs serait une autre opération.

</details>

D1 oriente vers S1–S2 ; D2 vers S3–S4 ; D3 vers S5–S8. Une réponse correcte sans justification mérite une variante.

## Séquence 1 — Une valeur commune fictive qui conserve le total

Pour une liste de n valeurs réelles, avec un entier \(n\ge1\) :

\[
\boxed{m=\frac{x_1+\cdots+x_n}{n}},\qquad \boxed{S=nm}.
\]

La moyenne est la valeur qu’aurait chaque élément si l’on redistribuait la somme également. Elle n’est pas nécessairement une valeur présente : la moyenne de trois et huit vaut \(11/2\), sans qu’aucun des deux nombres ne soit \(11/2\).

Il n’existe pas de moyenne arithmétique d’une liste vide par cette formule. Zéro, lorsqu’il est une observation de la liste, compte dans l’effectif comme toute autre valeur.

### Ce que la moyenne ne dit pas

Les listes \((10,10,10)\) et \((0,10,20)\) ont la même moyenne, mais pas la même dispersion. La moyenne ne donne ni le minimum, ni le maximum, ni la valeur la plus fréquente. Elle n’est pas non plus la médiane, qui dépend de l’ordre des observations triées.

Avec des poids positifs, une moyenne est entre le minimum et le maximum. Si au moins deux valeurs diffèrent, elle est strictement entre ces deux extrêmes. Ce contrôle peut éliminer une réponse impossible ; il ne détermine pas à lui seul la valeur exacte.

### Atelier I1 — Deux listes, un même total

<!-- interaction I1 | redistribution de jetons + saisie | compétence : sens-moyenne -->
Les scores sont quatre, sept et treize. Prédisez la moyenne, puis redistribuez le total entre trois cases égales. Trouvez une autre liste de trois nombres positifs de même moyenne.

<details><summary>Correction</summary>

La somme vaut vingt-quatre ; chaque case reçoit huit. Par exemple \((6,8,10)\) convient aussi. Accepter toute liste de trois nombres strictement positifs de somme vingt-quatre ; elle n’a pas à contenir huit.

</details>

## Séquence 2 — Retrouver une valeur manquante

La moyenne de six, dix, quatorze et x vaut douze. Quatre valeurs doivent totaliser \(4\times12=48\). Les trois connues totalisent trente, donc \(x=18\).

Cette méthode vaut pour plusieurs inconnues : sept valeurs de moyenne dix totalisent soixante-dix. Si les cinq premières totalisent quarante, les deux dernières totalisent trente. Sans autre information, on ne connaît pas chacune ; si elles sont égales, chacune vaut quinze.

**Déterminer une somme ne signifie pas déterminer ses termes.** Si seules les deux dernières valeurs sont demandées séparément, il faut une relation supplémentaire.

### Atelier I2 — Ce qui est connu, ce qui ne l’est pas

<!-- interaction I2 | deux réponses et décision de détermination | compétence : valeur-manquante -->
Six nombres ont pour moyenne treize ; les quatre premiers totalisent cinquante. Que vaut la somme des deux derniers ? Peut-on connaître chacun ? Et s’ils sont égaux ?

<details><summary>Correction</summary>

Somme totale soixante-dix-huit, donc somme restante vingt-huit. Chacun n’est pas déterminé sans hypothèse supplémentaire. S’ils sont égaux, chacun vaut quatorze.

</details>

## Séquence 3 — Des coefficients sont des effectifs de poids

Une note dix de coefficient un et une note quatorze de coefficient deux donnent :

\[
\boxed{m=\frac{1\times10+2\times14}{1+2}=\frac{38}{3}}.
\]

Le coefficient deux donne à quatorze le poids de deux observations. Le dénominateur est la **somme des coefficients**, pas le nombre de notes différentes.

Pour des poids \(w_i\ge0\), dont au moins un est strictement positif :

\[
m=\frac{\sum w_ix_i}{\sum w_i}.
\]

Une valeur de poids nul n’influence pas cette moyenne. Les coefficients scolaires usuels sont strictement positifs. Multiplier tous les poids par un même facteur positif ne change pas le résultat.

Conservez une fraction exacte jusqu’à la dernière étape. \(38/3\) vaut environ \(12{,}67\) au centième ; ce n’est pas exactement \(12{,}67\).

### Atelier I3 — Les poids changent le centre

<!-- interaction I3 | balance de poids puis réponse exacte | compétence : ponderation -->
Une note de neuf a un coefficient deux ; une note de quinze a un coefficient trois. Quelle est la moyenne ? Que devient-elle si les coefficients sont doublés ?

<details><summary>Correction</summary>

\((18+45)/5=63/5=12{,}6\). Doubler tous les poids multiplie numérateur et dénominateur par deux : la moyenne reste \(12{,}6\). Elle est plus proche de quinze, qui porte le poids le plus grand.

</details>

## Séquence 4 — Réunir des groupes et retrouver leur taille

Pour deux groupes disjoints d’effectifs positifs \(n_1,n_2\), de moyennes \(m_1,m_2\) :

\[
\boxed{m=\frac{n_1m_1+n_2m_2}{n_1+n_2}}.
\]

On additionne les sommes, pas les moyennes. Si les effectifs sont égaux, la formule se réduit à \((m_1+m_2)/2\). Cette simplification dépend de l’égalité des **effectifs**, pas du fait qu’il y ait seulement deux groupes.

Avec \(m_1<m<m_2\), la compensation des écarts donne :

\[
n_1(m-m_1)=n_2(m_2-m),\qquad
\frac{n_1}{n_2}=\frac{m_2-m}{m-m_1}.
\]

Exemple : moyennes dix et seize, globale quatorze. Les poids vérifient \(n_1/n_2=2/4=1/2\). Il faut deux fois plus d’observations dans le groupe à seize. Sans effectif absolu, on connaît ce ratio, pas les effectifs individuels.

### Atelier I4 — La moyenne des moyennes a-t-elle le droit d’être simple ?

<!-- interaction I4 | choix de méthode puis calcul et ratio | compétence : fusion-groupes -->
Un groupe de six personnes a pour moyenne douze, un autre de neuf personnes pour moyenne dix-sept. Donnez la moyenne globale. Puis, dans un autre problème, des groupes de moyennes douze et dix-huit donnent une moyenne globale seize : quel est le ratio de leurs effectifs ?

<details><summary>Correction</summary>

Premier cas : \((72+153)/15=15\). Deuxième cas : \(n_{12}/n_{18}=(18-16)/(16-12)=1/2\). Le groupe de moyenne dix-huit est deux fois plus grand.

</details>

## Séquence 5 — Ajouter ou retirer : modifier deux compteurs

| Transformation | Somme finale | Effectif final | Moyenne finale |
|---|---|---|---|
| Ajouter une valeur a | nm+a | n+1 | (nm+a)/(n+1) |
| Retirer une valeur a présente, n>1 | nm−a | n−1 | (nm−a)/(n−1) |
| Ajouter k valeurs toutes égales à a | nm+ka | n+k | (nm+ka)/(n+k) |

Ajouter une valeur supérieure à m augmente la moyenne ; égale à m, elle la conserve ; inférieure à m, elle la diminue. Pour le retrait, l’effet s’inverse. Retirer une petite valeur peut faire **monter** la moyenne.

La variation après un ajout s’écrit \((a-m)/(n+1)\). Ajouter vingt à une liste de cinq valeurs de moyenne douze donne une hausse de \((20-12)/6=4/3\), et non de huit.

Ajouter zéro conserve la somme mais change l’effectif : deux valeurs de moyenne douze, puis un zéro, donnent une moyenne de huit. Cela baisse une moyenne positive ; pour une moyenne négative, l’ajout de zéro la fait monter.

### Atelier I5 — Ajouter, retirer, conserver

<!-- interaction I5 | tableau somme/effectif sur trois états | compétence : ajout-retrait -->
Cinq scores ont une moyenne de quatorze. Trois expériences indépendantes : ajouter vingt ; retirer un score de dix ; ajouter quatorze. Donnez les trois nouvelles moyennes.

<details><summary>Correction</summary>

Somme initiale soixante-dix. Après ajout de vingt : \(90/6=15\). Après retrait de dix : \(60/4=15\). Après ajout de quatorze : \(84/6=14\). Les deux premières opérations produisent la même moyenne avec des sommes et des effectifs différents.

</details>

## Séquence 6 — Corriger ou remplacer : l’effectif reste fixe

Une mesure notée huit devait valoir dix-huit. La correction ajoute dix à la somme, mais n’ajoute aucune observation. Pour cinq mesures, la moyenne augmente de \(10/5=2\).

Remplacer a par b dans une liste de n éléments donne :

\[
\boxed{m'=m+\frac{b-a}{n}}.
\]

Inversement, si la moyenne de huit valeurs augmente de trois après un remplacement, la somme a augmenté de vingt-quatre. La nouvelle valeur dépasse l’ancienne de vingt-quatre.

Si l’on augmente un seul score de vingt-cinq dans une liste de cinq, la moyenne monte de cinq. Ajouter vingt-cinq à **chaque** score la fait monter de vingt-cinq. La portée du mot « chaque » est déterminante.

### Atelier I6 — Une erreur de saisie n’est pas une nouvelle note

<!-- interaction I6 | correction d’une cellule avec somme masquée | compétence : correction -->
La moyenne de huit mesures a été annoncée à quinze. Une valeur douze devait être vingt-huit. Quel est le total corrigé ? Quelle est la moyenne corrigée ?

<details><summary>Correction</summary>

Total initial cent vingt ; correction de seize : total cent trente-six. Effectif toujours huit, moyenne dix-sept. Diviser par neuf traiterait la correction comme un ajout.

</details>

## Séquence 7 — Transformer toutes les valeurs

Si l’on remplace chaque \(x_i\) par \(ax_i+b\), avec a et b réels, alors :

\[
\boxed{\text{nouvelle moyenne}=am+b.}
\]

La raison est la distributivité : la somme devient \(a\sum x_i+nb\), puis on divise par n. Il n’est pas nécessaire de connaître les valeurs individuellement.

Cette règle est valable pour les transformations **affines**, pas pour n’importe quelle fonction. La moyenne des carrés n’est généralement pas le carré de la moyenne : avec zéro et deux, on a moyenne un, carré de moyenne un, mais moyenne des carrés deux.

Pour deux listes de même longueur, la moyenne des sommes terme à terme est la somme des moyennes. Même chose pour les différences. La moyenne des produits, en revanche, n’est pas déterminée par les deux seules moyennes.

### Atelier I7 — Le passeport des transformations

<!-- interaction I7 | sélection d’informations suffisantes | compétence : transformation-affine -->
Une liste a pour moyenne neuf. Quelles moyennes peut-on déterminer à partir de cette seule information ?

A. Moyenne des \(2x-3\).  
B. Moyenne des \(x+4\).  
C. Moyenne des \(x^2\).  
D. Moyenne des \(-x\).

<details><summary>Correction</summary>

A vaut quinze ; B treize ; D moins neuf. C est indéterminée sans information supplémentaire sur la liste. Des listes de même moyenne peuvent avoir des moyennes de carrés différentes.

</details>

## Séquence 8 — Objectif de moyenne et plafond possible

Cinq contrôles de même coefficient ont une moyenne de douze. On veut au moins quinze en ajoutant des dix-huit :

\[
\frac{60+18k}{5+k}\ge15
\Rightarrow60+18k\ge75+15k
\Rightarrow k\ge5.
\]

Comme k est un nombre de contrôles, il faut un entier non négatif. Lorsque le seuil algébrique n’est pas entier, choisir le plus petit entier qui respecte l’inégalité, puis vérifier ce nombre et le précédent.

### Un objectif peut être impossible

Si les nouveaux scores sont tous au plus vingt et que la moyenne actuelle est strictement inférieure à vingt, la moyenne ne peut pas devenir exactement vingt après un nombre fini de nouveaux scores. Elle s’en approche si l’on ajoute des vingt.

Si le nombre de contrôles restants est fixé, le maximum est obtenu en prenant la note maximale à chacun. Pour quatre notes déjà à seize de moyenne et quatre notes restantes sur vingt, le maximum final est dix-huit. Il ne faut pas résoudre une équation qui demanderait ensuite une note impossible de vingt-quatre sur vingt.

### Atelier I8 — La bonne réponse doit être réalisable

<!-- interaction I8 | nombre minimal entier + contrôle de plafond | compétence : objectif-moyenne -->
Quatre notes ont pour moyenne onze. Les prochaines seront toutes dix-sept. Combien en faut-il au minimum pour atteindre au moins quatorze ? Si seulement deux notes restent à obtenir, toutes sur vingt, quel est le maximum final ?

<details><summary>Correction</summary>

\((44+17k)/(4+k)\ge14\) donne \(3k\ge12\), donc quatre nouvelles notes. Avec deux notes restantes sur vingt, le maximum est \((44+40)/6=14\). Ce sont deux scénarios distincts.

</details>

## Séquence 9 — Retrouver l’effectif ou un coefficient

Un groupe a pour moyenne quatorze. L’ajout d’un score vingt-quatre la fait passer à seize. Si n est l’effectif initial :

\[
14n+24=16(n+1)\Rightarrow n=4.
\]

Le score ajouté dépasse de huit la nouvelle moyenne ; le groupe initial était inférieur de deux à cette moyenne. Les écarts se compensent avec quatre anciens scores.

Pour retrouver un coefficient k, écrivez exactement la moyenne pondérée : une note dix de coefficient quatre et une note dix-huit de coefficient k donnent seize lorsque \(40+18k=16(4+k)\), soit k=12.

Vérifiez le domaine : un effectif est entier positif ; un coefficient demandé comme entier doit l’être aussi. Si les moyennes annoncées sont arrondies, une égalité exacte peut ne plus déterminer un effectif unique. Sauf indication, les données des exercices ci-dessous sont exactes.

### Atelier I9 — Combien étaient-ils avant l’arrivée ?

<!-- interaction I9 | équation à compléter et entier à vérifier | compétence : effectif-inconnu -->
Une liste a pour moyenne dix. Ajouter vingt-deux fait passer sa moyenne à douze. Quel était l’effectif initial ?

<details><summary>Correction</summary>

\(10n+22=12(n+1)\), donc \(2n=10\) et n=5. Somme initiale cinquante, finale soixante-douze, répartie sur six : douze.

</details>

## Séquence 10 — Groupes retirés et groupes qui se recoupent

### Moyenne des valeurs retirées

Dix valeurs ont pour moyenne trente ; après retrait de quatre valeurs, les six restantes ont pour moyenne vingt-six. Somme retirée : \(300-156=144\). La moyenne des quatre valeurs retirées est trente-six.

Soustraire les moyennes, trente moins vingt-six, ne donne pas la moyenne du groupe retiré. Il faut soustraire les **sommes**, puis diviser par l’effectif retiré.

### Deux groupes qui partagent des éléments

Sept nombres ont une moyenne de vingt. Les six premiers ont une moyenne de dix-neuf et les six derniers de vingt et un. Les cinq nombres intérieurs sont comptés deux fois lorsqu’on additionne les deux groupes :

\[
S_{\text{intérieur}}=6\times19+6\times21-7\times20=100.
\]

Leur moyenne est vingt. Un petit schéma des positions 1 à 7 permet de voir l’intersection. La moyenne pondérée ordinaire de groupes disjoints ne doit pas être appliquée comme si ces listes étaient indépendantes.

### Atelier I10 — Comptez les copies de chaque position

<!-- interaction I10 | sept cases, deux fenêtres superposées | compétence : recoupement -->
Cinq nombres ont pour moyenne douze. Les quatre premiers ont pour moyenne onze et les quatre derniers treize. Quelle est la somme des trois nombres intérieurs ? Leur moyenne ?

<details><summary>Correction</summary>

Les deux fenêtres totalisent \(44+52=96\). Retirer le total de la liste, soixante, laisse la somme intérieure trente-six. Sa moyenne vaut douze.

</details>

## Séquence 11 — Suites régulières et symétrie autour du centre

Pour une suite arithmétique de n termes, premier a et dernier b, la moyenne est \((a+b)/2\). Les termes symétriques ont tous la somme a+b. Cela ne dépend pas du fait que n soit pair ou impair.

Pour cinq entiers consécutifs de moyenne dix, le centre vaut dix et le plus petit huit. Pour quatre entiers consécutifs, la moyenne se situe entre les deux centraux et est un demi-entier. Une moyenne entière serait incompatible avec exactement quatre entiers consécutifs.

La moyenne de valeurs \(x,x+5,x+10,x+15\) vaut \(x+7{,}5\). Si elle vaut vingt, x vaut \(12{,}5\). Les valeurs n’ont pas à être entières si cela n’est pas demandé.

### Atelier I11 — Un centre qui n’est pas une observation

<!-- interaction I11 | placement de six points régulièrement espacés | compétence : suite-reguliere -->
Six entiers consécutifs ont pour moyenne \(12{,}5\). Quels sont le premier et le dernier ? Leur moyenne appartient-elle à la liste ?

<details><summary>Correction</summary>

Le premier est dix et le dernier quinze. Leur somme vingt-cinq donne une moyenne de \(12{,}5\), qui n’est pas l’un de ces entiers.

</details>

## Atelier avancé A — Les écarts à la moyenne s’équilibrent

\[
\sum_{i=1}^{n}(x_i-m)=0.
\]

Si l’on soustrait un autre repère c à chaque valeur, la somme des écarts devient \(n(m-c)\). Avec quatre valeurs de moyenne dix-huit, les écarts à quinze totalisent douze.

Cette représentation peut accélérer un calcul : les notes douze, dix-huit, dix-neuf et vingt et un ont, par rapport à vingt, les écarts moins huit, moins deux, moins un et plus un, soit moins dix. Leur moyenne vaut \(20-10/4=17{,}5\).

Elle explique aussi qu’en retirant deux valeurs de moyenne m, la moyenne restante reste m, à condition qu’au moins une valeur subsiste.

### Atelier I12 — Répartissez les excès et les déficits

<!-- interaction I12 | balance d’écarts avec repère modifiable | compétence : ecarts -->
Quatre valeurs ont pour moyenne quinze. Trois valeurs sont dix, quatorze et dix-huit. Quel écart à quinze doit avoir la quatrième ? Quelle est cette valeur ?

<details><summary>Correction</summary>

Les écarts connus sont moins cinq, moins un et plus trois, soit moins trois. Le dernier doit être plus trois pour obtenir zéro : valeur dix-huit.

</details>

## Atelier avancé B — Moyennes de paires et grandeurs qui sont des taux

Si les moyennes de (x,y), (y,z) et (x,z) valent neuf, douze et treize, les sommes sont dix-huit, vingt-quatre et vingt-six. Alors :

\[
2y=(x+y)+(y+z)-(x+z)=18+24-26=16,
\]

donc y=8. Additionner les trois sommes donne deux fois le total de x,y,z : chaque terme apparaît dans deux paires.

### Vitesse moyenne : le poids n’est pas toujours le même

La vitesse moyenne est distance totale / durée totale. Pour deux durées égales, la moyenne arithmétique des vitesses convient. Pour deux distances égales parcourues à v et w, strictement positives, la vitesse moyenne vaut :

\[
\frac{2}{1/v+1/w}=\frac{2vw}{v+w}.
\]

Aller à trente puis revenir sur la même distance à soixante donne quarante, pas quarante-cinq : on passe davantage de temps à la vitesse la plus faible. Ce complément prépare le chapitre des vitesses ; il ne transforme pas toutes les moyennes du cours en moyennes de taux.

### Atelier I13 — Quelle moyenne répond à quelle grandeur ?

<!-- interaction I13 | choix de poids puis deux calculs | compétence : moyenne-taux -->
Un trajet se fait une heure à trente km/h puis une heure à soixante. Un autre comprend trente kilomètres à trente km/h puis trente kilomètres à soixante. Donnez les deux vitesses moyennes.

<details><summary>Correction</summary>

Durées égales : quatre-vingt-dix kilomètres en deux heures, soit quarante-cinq km/h. Distances égales : soixante kilomètres en une heure et demie, soit quarante km/h. Le poids des vitesses est le temps passé à chacune.

</details>

## La boîte à outils — Un tableau somme/effectif avant tout

| Demande | Premier geste | Vérification |
|---|---|---|
| Valeur manquante | Somme cible nm moins sommes connues | Nombre d’éléments attendu |
| Fusion de groupes | Additionner leurs sommes et leurs effectifs | Disjoints ? poids égaux ? |
| Ajout/retrait | Modifier somme et effectif | Ne pas confondre avec remplacement |
| Correction/remplacement | Ajouter b−a à la somme | Effectif inchangé |
| Transformation de tous les termes | Pour ax+b, moyenne am+b | Transformation affine seulement |
| Objectif minimal | Inégalité en k entier | Note maximale et entier voisin |
| Groupes superposés | Compter les apparitions de chaque élément | Intersection comptée deux fois |
| Série régulièrement espacée | Moyenne des extrêmes | Nombre de pas et parité |

### Atelier I14 — Le tribunal des raccourcis

<!-- interaction I14 | contre-exemples libres | compétence : transfert -->
Réfutez : « la moyenne de deux moyennes est toujours la moyenne globale » et « connaître la moyenne suffit à connaître la moyenne des carrés ».

<details><summary>Correction possible</summary>

Un score dix et trois scores vingt ont une moyenne globale \(17{,}5\), différente de quinze. Les listes (1,1) et (0,2) ont une moyenne un, mais leurs moyennes de carrés valent un et deux. Accepter d’autres contre-exemples valides.

</details>

## Mission finale — Choisir, calculer, vérifier

Répondez aux vingt questions avant d’ouvrir la correction. Les huit premières consolident les fondations ; les huit suivantes combinent les outils ; les quatre dernières demandent un transfert ou un contrôle plus exigeant. Aucune limite de temps au premier passage. Indiquez votre confiance et la méthode choisie.

### F1

Six scores ont pour moyenne onze. Quelle est leur somme ?

A. \(\frac{11}{6}\)  
B. \(66\)  
C. \(55\)  
D. \(17\)  

### F2

Quelle est la moyenne de sept, onze et dix-huit ?

A. \(9\)  
B. \(36\)  
C. \(12\)  
D. \(18\)  

### F3

La moyenne de neuf, douze, quinze et x vaut treize. Que vaut x ?

A. \(16\)  
B. \(52\)  
C. \(13\)  
D. \(12\)  

### F4

Une note huit a un coefficient deux et une note quatorze un coefficient trois. Quelle est la moyenne exacte ?

A. \(\frac{58}{5}\)  
B. \(\frac{22}{5}\)  
C. \(11\)  
D. \(29\)  

### F5

Quatre personnes ont une moyenne de dix ; six autres une moyenne de quinze. Quelle est la moyenne globale ?

A. \(13\)  
B. \(25\)  
C. \(14\)  
D. \(\frac{25}{2}\)  

### F6

Cinq scores ont pour moyenne douze. On ajoute le score dix-huit. Quelle est la nouvelle moyenne ?

A. \(18\)  
B. \(15\)  
C. \(30\)  
D. \(13\)  

### F7

Six valeurs ont pour moyenne quatorze. On retire une valeur neuf. Quelle est la moyenne des cinq restantes ?

A. \(15\)  
B. \(14\)  
C. \(\frac{25}{2}\)  
D. \(5\)  

### F8

Huit valeurs ont pour moyenne treize. On remplace dix par vingt-six. Quelle est la moyenne finale ?

A. \(15\)  
B. \(16\)  
C. \(14\)  
D. \(29\)  

### F9

La moyenne des x vaut sept. On remplace chaque valeur par 3x−4. Quelle est la nouvelle moyenne ?

A. \(17\)  
B. \(3\)  
C. \(25\)  
D. \(9\)  

### F10

Huit mesures ont été annoncées à seize de moyenne. Une valeur notée quatorze devait valoir trente. Quelle est la moyenne corrigée ?

A. \(32\)  
B. \(18\)  
C. \(16\)  
D. \(14\)  

### F11

Dix a un coefficient deux, dix-huit un coefficient k. La moyenne est seize. Que vaut k ?

A. \(12\)  
B. \(2\)  
C. \(6\)  
D. \(4\)  

### F12

Un groupe de moyenne onze passe à treize après l’ajout d’un score vingt-cinq. Quel était son effectif initial ?

A. \(5\)  
B. \(6\)  
C. \(12\)  
D. \(7\)  

### F13

Douze valeurs ont pour moyenne vingt. On en retire quatre ; les huit restantes ont pour moyenne dix-huit. Quelle est la moyenne des quatre retirées ?

A. \(24\)  
B. \(18\)  
C. \(36\)  
D. \(2\)  

### F14

Quelle valeur ajouter à une liste de moyenne dix-sept pour conserver exactement cette moyenne ?

A. \(34\)  
B. \(0\)  
C. \(1\)  
D. \(17\)  

### F15

Cinq notes ont pour moyenne dix. Les suivantes valent toutes seize. Combien en faut-il au minimum pour atteindre au moins quatorze ?

A. \(11\)  
B. \(9\)  
C. \(10\)  
D. \(5\)  

### F16

Trois notes ont pour moyenne douze. Deux notes restent à obtenir, au plus vingt chacune. Quelle est la plus grande moyenne finale possible ?

A. \(\frac{56}{5}\)  
B. \(\frac{76}{5}\)  
C. \(20\)  
D. \(16\)  

### F17

Cinq nombres ont pour moyenne dix. Les quatre premiers ont pour moyenne neuf et les quatre derniers onze. Quelle est la moyenne des trois nombres intérieurs ?

A. \(10\)  
B. \(20\)  
C. \(\frac{80}{3}\)  
D. \(\frac{50}{3}\)  

### F18

Sept entiers consécutifs ont pour moyenne quinze. Quel est le plus petit ?

A. \(12\)  
B. \(9\)  
C. \(15\)  
D. \(11\)  

### F19

Les moyennes de (x,y), (y,z) et (x,z) valent huit, dix et douze. Que vaut y ?

A. \(4\)  
B. \(12\)  
C. \(10\)  
D. \(6\)  

### F20

Deux distances égales sont parcourues à quarante puis quatre-vingts km/h. Quelle est la vitesse moyenne exacte, en km/h ?

A. \(\frac{80}{3}\)  
B. \(\frac{160}{3}\)  
C. \(120\)  
D. \(60\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | B | La somme vaut effectif × moyenne : 6×11=66. | S1 |
| F2 | C | La somme vaut trente-six pour trois observations : douze. | S1 |
| F3 | A | La somme cible est cinquante-deux ; les trois valeurs connues totalisent trente-six. | S2 |
| F4 | A | Somme pondérée 16+42=58 ; somme des coefficients cinq. | S3 |
| F5 | A | Les sommes quarante et quatre-vingt-dix donnent cent trente sur dix personnes. | S4 |
| F6 | D | La somme passe à soixante-dix-huit et l’effectif à six. | S5 |
| F7 | A | Somme restante 84−9=75 ; diviser par cinq, non par six. | S5 |
| F8 | A | L’effectif reste huit ; la somme augmente de seize, donc la moyenne de deux. | S6 |
| F9 | A | La transformation est affine : 3×7−4=17. | S7 |
| F10 | B | La correction ajoute seize au total, soit deux à la moyenne. Il y a toujours huit mesures. | S6 |
| F11 | C | 20+18k=16(2+k), donc 2k=12. | S9 |
| F12 | B | 11n+25=13(n+1), donc 2n=12 et n=6. | S9 |
| F13 | A | Somme retirée 240−144=96 ; moyenne 96/4=24. | S10 |
| F14 | D | Une nouvelle valeur égale à la moyenne conserve la moyenne. | S5 |
| F15 | C | (50+16k)/(5+k)≥14 donne 2k≥20. Neuf ne suffit pas, dix suffit. | S8 |
| F16 | B | Les deux vingt maximisent le total : (36+40)/5=76/5. | S8 |
| F17 | A | Somme intérieure 4×9+4×11−5×10=30, pour trois termes. | S10 |
| F18 | A | Le terme central est quinze et trois termes le précèdent. | S11 |
| F19 | D | 2y=16+20−24=12, donc y=6. | Avancé B |
| F20 | B | Distance totale sur durée totale : 2/(1/40+1/80)=160/3. | Avancé B |

</details>

## Votre bilan — Reprendre la structure, pas mémoriser le résultat

Une erreur doit d’abord être localisée : traduction, choix de règle, calcul, domaine ou réponse à une autre grandeur. Reprenez le passage indiqué dans le corrigé, expliquez votre choix de méthode en une phrase, puis essayez une variante sans ouvrir les aides.

Une réponse juste après un indice est une réussite accompagnée ; elle ne confirme pas encore le transfert autonome. Les ateliers avancés ne doivent pas masquer une fragilité de fondation, ni bloquer le chapitre suivant lorsque les prérequis sont acquis. Ce bilan est propre à la leçon et ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Moyenne simple | m=S/n, n≥1 ; donc S=nm |
| Moyenne pondérée | Somme des poids×valeurs divisée par somme des poids, strictement positive |
| Fusion de groupes disjoints | Somme des nᵢmᵢ divisée par somme des nᵢ |
| Ajout de a | (nm+a)/(n+1) |
| Retrait de a | (nm−a)/(n−1), avec n>1 |
| Remplacement a→b | m+(b−a)/n ; effectif conservé |
| Transformation de chaque x en ax+b | Moyenne am+b |
| Écarts à m | Somme nulle |
| Écarts à un repère c | Somme n(m−c) |
| Suite arithmétique | Moyenne des deux extrêmes |
| Objectif de note | Somme cible moins somme acquise ; vérifier plafond et entier |
| Vitesse moyenne | Distance totale / durée totale |

**Prochaine étape : les puissances et les racines.** Emportez le même réflexe : identifier la structure et les contraintes avant de développer le calcul.
