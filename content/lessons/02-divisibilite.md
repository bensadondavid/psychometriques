# La divisibilité : décomposer, répartir, prévoir

Des objets à répartir sans reste. Deux signaux qui doivent se retrouver au même instant. Un immense nombre dont seul le dernier chiffre vous intéresse. Ces questions semblent différentes ; elles reposent souvent sur la même idée : **repérer les facteurs et les restes plutôt que calculer toute la valeur**.

Dans ce chapitre, vous apprendrez à reconnaître ce que l'énoncé demande réellement : un diviseur, un multiple, un nombre de possibilités ou un reste. Vous disposerez ensuite d'une méthode pour chaque situation et de moyens de vérifier votre réponse.

**Votre objectif :** passer de « je sais faire une division » à « je sais quelle structure de divisibilité utiliser ».

Les séquences se suivent progressivement. Les ateliers avancés combinent plusieurs outils ; vous pourrez les reprendre après avoir consolidé les fondations. Aucun grand calcul n'est nécessaire pour commencer.

## Avant de commencer — Trois questions pour trouver votre point de départ

Pour chaque réponse, indiquez votre confiance : « Je suis sûr », « J'hésite » ou « J'ai deviné ».

<!-- interaction D1 | QCM unique | compétence : cumul-divisibilites -->
**D1.** Un entier est divisible par \(4\) et par \(6\). Par quel nombre est-il nécessairement divisible ?

A. \(10\)  
B. \(12\)  
C. \(24\)  
D. \(36\)

<details><summary>Voir le raisonnement</summary>

**B.** \(4=2^2\) et \(6=2\times3\). Il faut au moins deux facteurs \(2\) et un facteur \(3\), donc un multiple de \(12\). Le facteur \(2\) commun ne doit pas être compté deux fois. \(12\) lui-même contredit les trois autres réponses.

</details>

<!-- interaction D2 | QCM unique | compétence : quotient-capacite -->
**D2.** Une boîte contient au maximum six objets. Combien de boîtes faut-il au minimum pour ranger vingt objets ?

A. \(2\)  
B. \(3\)  
C. \(4\)  
D. \(6\)

<details><summary>Voir le raisonnement</summary>

**C.** Trois boîtes ne contiennent que dix-huit objets. Il faut une quatrième boîte pour les deux derniers. La question demande la capacité nécessaire pour tout ranger, pas seulement le nombre de boîtes pleines.

</details>

<!-- interaction D3 | QCM unique | compétence : reste-produit -->
**D3.** \(a\) et \(b\) laissent respectivement les restes \(3\) et \(5\) lorsqu'on les divise par \(7\). Quel est le reste de \(ab\) ?

A. \(1\)  
B. \(8\)  
C. \(15\)  
D. Impossible à déterminer.

<details><summary>Voir le raisonnement</summary>

**A.** Il suffit de multiplier les restes : \(3\times5=15\). Puis on réduit : \(15=2\times7+1\). Le reste final vaut \(1\), car il doit être compris entre \(0\) et \(6\).

</details>

Une réponse juste sans explication reste à consolider. Si D1 vous surprend, insistez sur les facteurs premiers et le PPCM ; si D2 vous bloque, commencez par les lots et la capacité ; pour D3, reprenez les restes avant les puissances.

## Séquence 1 — Diviseur et multiple : une même relation, deux lectures

Pour un entier \(n\) et un entier \(d\ne0\), dire que **\(d\) divise \(n\)** signifie qu'il existe un entier \(k\) tel que :

\[
n=dk.
\]

On note \(d\mid n\). Le quotient \(n/d\) est alors entier.

Si \(24=6\times4\), on peut dire : « \(6\) est un diviseur de \(24\) », « \(24\) est divisible par \(6\) » ou « \(24\) est un multiple de \(6\) ». Le sens de la relation ne change pas.

| Formulation | Traduction | Exemple |
|---|---|---|
| \(d\) est un diviseur de \(n\) | \(n=dk\), \(k\) entier | \(6\mid24\) |
| \(m\) est un multiple de \(d\) | \(m=dk\), \(k\) entier | \(24\) est multiple de \(6\) |
| \(d\) ne divise pas \(n\) | \(n/d\) n'est pas entier | \(5\nmid24\) |

### Les cas particuliers à connaître

- \(1\) divise tout entier.
- Tout entier non nul divise zéro : \(0=d\times0\). Zéro est donc un multiple de tout entier non nul.
- Dans ce cours, le diviseur d'une division est toujours non nul ; « diviser par zéro » n'est pas une opération définie.
- Les diviseurs positifs de \(n>0\) vont de \(1\) à \(n\). Les multiples strictement positifs de \(d>0\) commencent à \(d\) et sont en nombre infini.
- Pour les diviseurs entiers non nuls, pensez aussi aux négatifs : \(12\) a six diviseurs positifs et douze diviseurs entiers signés.
- \(1\) a un seul diviseur positif : lui-même. Les formules de comptage des diviseurs de ce chapitre portent sur des entiers **strictement positifs**, pas sur zéro.

Un diviseur propre positif de \(n>1\) est ici un diviseur strictement inférieur à \(n\). Le plus grand s'obtient en divisant \(n\) par son plus petit facteur premier : pour \(28\), \(28/2=14\).

### Des propriétés qui permettent de raisonner

Si \(d\mid a\) et \(d\mid b\), alors \(d\) divise \(a+b\), \(a-b\) et toute combinaison \(ua+vb\) à coefficients entiers.

Si \(d\mid a\), il divise aussi \(ka\) pour tout entier \(k\). Si \(a\mid b\) et \(b\mid c\), alors \(a\mid c\), avec les diviseurs non nuls.

**Attention à l'implication inverse :** si \(6\mid ab\), on ne sait pas si \(6\mid a\) ou \(6\mid b\). Avec \(a=2,b=3\), aucun facteur n'est divisible par \(6\), mais leur produit l'est. Pour un facteur **premier** \(p\), en revanche, \(p\mid ab\) impose \(p\mid a\) ou \(p\mid b\).

### Atelier I1 — Racontez la même égalité dans les deux sens

<!-- interaction I1 | classement de phrases | compétence : vocabulaire -->
À partir de \(42=6\times7\), sélectionnez toutes les phrases vraies :

A. \(6\) est un diviseur de \(42\).  
B. \(42\) est un diviseur de \(6\).  
C. \(42\) est un multiple de \(7\).  
D. \(7\) est divisible par \(42\).

<details><summary>Correction</summary>

**A et C.** Les phrases B et D inversent la relation. Pour vérifier, écrivez le quotient : \(42/6=7\), tandis que \(6/42\) n'est pas entier.

</details>

## Séquence 2 — Lots, capacité et multiple voisin

### Une division décrit une répartition

Pour un entier \(N\ge0\) et une taille de lot \(d>0\) entière :

\[
\boxed{N=dq+r,\qquad 0\le r<d.}
\]

\(q\) est le nombre de lots complets ; \(r\) le nombre d'objets restants. On appelle cette écriture une division euclidienne.

Avec vingt-quatre cartes par paquets de sept : \(24=7\times3+3\). On forme trois paquets complets ; il reste trois cartes.

### Deux questions proches, deux arrondis différents

| Question | Réponse |
|---|---|
| Combien de lots complets de taille \(d\) ? | \(q\) |
| Combien reste-t-il d'objets ? | \(r\) |
| Combien de contenants de capacité \(d\) pour tout ranger ? | \(q\) si \(r=0\), sinon \(q+1\) |
| Combien d'objets manque-t-il pour compléter le dernier lot ? | \(0\) si \(r=0\), sinon \(d-r\) |

**Si le reste est nul, n'ajoutez pas automatiquement un contenant.** Pour dix-huit objets et une capacité de six, trois boîtes suffisent exactement.

Si le stock subit une modification avant la répartition, commencez par elle : quarante-neuf objets, dont quatre retirés, donnent \((49-4)/9=5\) paquets de neuf. Le retrait ne porte pas sur le nombre de paquets.

### Trouver le multiple précédent ou suivant

Pour \(N=dq+r\) :

- Plus grand multiple de \(d\) inférieur ou égal à \(N\) : \(N-r\).
- Pour atteindre un multiple supérieur ou égal : ajouter \(d-r\) si \(r>0\), zéro sinon.
- Pour atteindre un multiple **strictement supérieur** : ajouter \(d-r\) si \(r>0\), mais \(d\) si \(r=0\).
- Pour obtenir un multiple **strictement inférieur** : soustraire \(r\) si \(r>0\), mais \(d\) si \(r=0\).

Le plus petit entier strictement positif à ajouter à \(538\) pour obtenir un multiple de \(9\) vaut \(2\), car \(538=9\times59+7\). Mais pour \(540\), déjà multiple, il faudrait ajouter \(9\).

### Atelier I2 — Un stock, trois réponses

<!-- interaction I2 | répartition de jetons + trois champs | compétence : quotient-capacite -->
Vous avez vingt objets et des boîtes de six places. Prédisez : nombre de boîtes pleines, objets restants, nombre minimal de boîtes pour tout ranger. Placez ensuite les objets pour vérifier.

<details><summary>Correction</summary>

**\(3,2,4\)**, car \(20=6\times3+2\). Le quotient répond à la première question ; le reste à la deuxième ; le quotient augmenté d'une unité à la troisième.

Refaites avec dix-huit objets : **\(3,0,3\)**. La dernière boîte supplémentaire a disparu.

</details>

## Séquence 3 — Tester la divisibilité et retrouver des chiffres

### Les critères à garder sous la main

Les règles portent sur l'écriture décimale de l'entier ; pour un entier négatif, testez sa valeur absolue.

| Divisible par… | Test suffisant et nécessaire | Exemple |
|---|---|---|
| \(2\) | Chiffre des unités pair | \(146\) |
| \(3\) | Somme des chiffres multiple de \(3\) | \(741\) : somme \(12\) |
| \(4\) | Nombre formé par les deux derniers chiffres multiple de \(4\) | \(316\) : \(16\) |
| \(5\) | Dernier chiffre \(0\) ou \(5\) | \(735\) |
| \(6\) | Divisible par \(2\) et par \(3\) | \(234\) |
| \(8\) | Nombre formé par les trois derniers chiffres multiple de \(8\) | \(1024\) : \(024=24\) |
| \(9\) | Somme des chiffres multiple de \(9\) | \(729\) : somme \(18\) |
| \(10\) | Dernier chiffre \(0\) | \(540\) |
| \(11\) | Somme alternée des chiffres multiple de \(11\), zéro compris | \(2728\) : \(2-7+2-8=-11\) |
| \(12\) | Divisible par \(3\) et par \(4\) | \(372\) |
| \(15\) | Divisible par \(3\) et par \(5\) | \(825\) |
| \(25\) | Se termine par \(00,25,50,75\) | \(1275\) |
| \(100\) | Deux derniers chiffres nuls | \(2300\) |

Pour un nombre ayant moins de deux ou trois chiffres, le test de \(4\) ou \(8\) revient à tester le nombre entier. Pour \(11\), on peut commencer l'alternance par l'un ou l'autre côté : changer le signe de la somme ne change pas sa divisibilité.

### Comprendre pourquoi certaines règles fonctionnent

\(100\) est divisible par \(4\) : les centaines entières ne changent pas le reste, seuls les deux derniers chiffres comptent. Même idée avec \(1000\) et \(8\).

Par \(3\) ou \(9\), les puissances \(10,100,1000,\ldots\) laissent un reste de \(1\). Le reste du nombre est donc celui de la somme de ses chiffres.

Un test de divisibilité ne donne pas forcément le quotient. Et « divisible par \(3\) » n'implique pas « divisible par \(9\) » : \(12\) est un contre-exemple.

### Quand plusieurs critères doivent être satisfaits

Pour \(36\), utilisez \(4\) **et** \(9\). Pour \(45\), utilisez \(5\) **et** \(9\).

Attention : \(2\) et \(6\) ne suffisent pas à imposer la divisibilité par \(12\). \(6\) satisfait les deux premiers critères sans être divisible par \(12\). Le bon outil pour combiner des diviseurs est le PPCM, étudié plus loin.

### Un chiffre inconnu est une variable bornée

\(\overline{57x}\) désigne le nombre à trois chiffres dont le dernier chiffre est \(x\), pas le produit \(57\times x\). On a \(x\in\{0,1,\ldots,9\}\).

Pour que \(\overline{57x}\) soit divisible par \(9\), \(12+x\) doit être multiple de \(9\). Il est compris entre \(12\) et \(21\), donc vaut \(18\) : \(x=6\).

Pour \(\overline{4x2}\) divisible par \(3\), \(6+x\) est multiple de \(3\) : \(x=0,3,6,9\). Si le chiffre doit être non nul, retirez zéro. Si l'on demande le plus petit chiffre, ne choisissez pas arbitrairement une autre solution.

Pour le plus petit \(\overline{3a4b}\) divisible par \(36\), combinez \(4\) et \(9\) : \(b\in\{0,4,8\}\), et \(7+a+b\) est multiple de \(9\). Le chiffre \(a\) doit être minimisé avant \(b\), car il est à un rang plus important. \(a=0\) et \(a=1\) ne conviennent avec aucun \(b\) autorisé ; \(a=2,b=0\) donne \(3240\).

### Atelier I3 — Déverrouillez les deux contraintes

<!-- interaction I3 | deux sélecteurs de chiffres | compétence : chiffres-inconnus -->
Retrouvez tous les nombres \(\overline{2a5b}\) divisibles par \(45\). Choisissez d'abord les valeurs possibles de \(b\), puis celles de \(a\).

<details><summary>Indice</summary>

\(45=5\times9\). Le dernier chiffre impose un premier filtre ; la somme des chiffres fournit le second.

</details>

<details><summary>Correction</summary>

\(b=0\) ou \(5\). Avec \(b=0\), \(7+a\) doit valoir \(9\), donc \(a=2\) : \(2250\). Avec \(b=5\), \(12+a\) doit valoir \(18\), donc \(a=6\) : \(2655\). **Deux nombres conviennent.** Vérifiez chaque nombre contre les deux critères.

</details>

## Séquence 4 — Décomposer : voir les briques premières

Un nombre premier est un entier supérieur à \(1\) ayant exactement deux diviseurs positifs. Tout entier strictement positif supérieur à \(1\) se décompose en produit de nombres premiers, de manière unique à l'ordre des facteurs près.

\[
360=36\times10=(2^2\times3^2)(2\times5)=2^3\times3^2\times5.
\]

L'exposant indique le nombre de copies du facteur : \(2^3=2\times2\times2\). On additionne les exposants quand on multiplie des puissances de même base : \(2^2\times2^3=2^5\).

Pour décomposer, divisez successivement par de petits premiers \(2,3,5,7,\ldots\), en répétant un diviseur tant qu'il fonctionne. Ne laissez pas un facteur composé à la fin : \(72=8\times9\) est correct, mais ce n'est pas encore la décomposition en facteurs premiers.

### Trois comptages à ne pas confondre

Pour \(72=2^3\times3^2\) :

| Demande | Réponse | Pourquoi |
|---|---:|---|
| Nombre de facteurs premiers **distincts** | \(2\) | \(2\) et \(3\) |
| Nombre de facteurs premiers avec répétition | \(5\) | Trois copies de \(2\), deux de \(3\) |
| Produit des facteurs premiers distincts | \(6\) | \(2\times3\) |

Les facteurs premiers ne sont pas tous les diviseurs : \(6\) divise \(72\), mais n'est pas premier.

Le plus petit entier dont les facteurs premiers distincts sont exactement \(2,3,5\) est \(30\). Chaque facteur doit apparaître au moins une fois ; l'exposant minimal est \(1\). Le nombre \(1\) n'a aucun facteur premier.

### Lire une divisibilité dans les exposants

Pour deux entiers strictement positifs, \(A\mid B\) si chaque exposant premier de \(A\) est inférieur ou égal à l'exposant correspondant de \(B\).

\(72=2^3\times3^2\) est divisible par \(12=2^2\times3\), mais pas par \(16=2^4\) : il manque un facteur \(2\). Un premier absent de la décomposition a un exposant égal à zéro.

Pour que \(12\mid4n\), il manque seulement un facteur \(3\) : \(n\) doit être multiple de \(3\). Le plus petit \(n>0\) est \(3\). Ne concluez pas que \(n\) doit lui-même être multiple de \(12\).

### Atelier I4 — Construisez puis comparez les inventaires

<!-- interaction I4 | inventaire de facteurs premiers | compétence : factorisation -->
Décomposez \(72\), puis indiquez les exposants de \(2\) et \(3\). Classez ensuite \(12,16,18,27\) dans « divise \(72\) » ou « ne divise pas \(72\) ».

<details><summary>Correction</summary>

\(72=2^3\times3^2\). \(12\) et \(18\) divisent \(72\). \(16\) demande quatre facteurs \(2\), mais il n'y en a que trois ; \(27\) demande trois facteurs \(3\), mais il n'y en a que deux.

</details>

## Séquence 5 — Compter les diviseurs sans tous les écrire

### Un diviseur est un choix d'exposants

Un diviseur positif de \(72=2^3\times3^2\) s'écrit \(2^a3^b\), avec :

\[
a\in\{0,1,2,3\},\qquad b\in\{0,1,2\}.
\]

Quatre choix pour \(a\), trois pour \(b\), donc \(4\times3=12\) diviseurs. L'exposant zéro signifie qu'on ne prend pas le facteur ; \(2^0\times3^0=1\) compte bien comme un diviseur.

Pour \(N=p_1^{e_1}\cdots p_k^{e_k}\), avec les \(p_i\) premiers distincts :

\[
\boxed{\text{Nombre de diviseurs positifs}=\prod_{i=1}^k(e_i+1).}
\]

Il faut une **décomposition première** : appliquer la formule à \(36=4\times9\) donnerait un résultat faux.

Pour \(360=2^3\times3^2\times5\), le total vaut \(4\times3\times2=24\).

### Des restrictions sur les diviseurs

| Demande pour \(N=2^a3^b5^c\), avec \(a\ge1\) | Choix autorisés | Nombre |
|---|---|---|
| Tous les diviseurs positifs | Tous les exposants, zéro compris | \((a+1)(b+1)(c+1)\) |
| Diviseurs impairs | Exposant de \(2\) égal à zéro | \((b+1)(c+1)\) |
| Diviseurs pairs | Exposant de \(2\) de \(1\) à \(a\) | \(a(b+1)(c+1)\) |
| Diviseurs carrés | Tous les exposants pairs | \((\lfloor a/2\rfloor+1)(\lfloor b/2\rfloor+1)(\lfloor c/2\rfloor+1)\) |

\(\lfloor t\rfloor\) désigne le plus grand entier inférieur ou égal à \(t\). Si \(N\) est impair, aucun de ses diviseurs n'est pair.

Pour \(72\), il y a trois diviseurs impairs \(1,3,9\), neuf diviseurs pairs, et quatre diviseurs carrés \(1,4,9,36\). **\(1\) est un carré parfait** : \(1=1^2\).

Le plus grand diviseur impair de \(N\) s'obtient en retirant tous ses facteurs \(2\). Pour \(72=2^3\times9\), il vaut \(9\).

### Des nombres définis par leur nombre de diviseurs

| Exactement… diviseurs positifs | Formes possibles, avec premiers distincts \(p,q,r\) |
|---|---|
| \(2\) | \(p\) |
| \(3\) | \(p^2\) |
| \(4\) | \(p^3\) ou \(pq\) |
| \(5\) | \(p^4\) |
| \(6\) | \(p^5\) ou \(p^2q\) |
| \(8\) | \(p^7\), \(p^3q\) ou \(pqr\) |

On factorise le nombre de diviseurs pour retrouver les valeurs possibles des \(e_i+1\). Pour chercher le plus petit entier ayant six diviseurs, comparez \(2^5=32\) et \(2^2\times3=12\) : le minimum vaut \(12\). Dans une forme donnée, affecter le plus grand exposant au plus petit premier minimise le nombre.

Le nombre de diviseurs positifs est impair exactement lorsque tous les exposants sont pairs, donc lorsque \(N\) est un carré parfait. On peut aussi l'expliquer par les paires \(d,N/d\), dont seule \(\sqrt N\) peut être son propre partenaire.

Si \(N=2^k3^2\) possède dix-huit diviseurs : \((k+1)\times3=18\), donc \(k=5\).

### Somme des diviseurs : même idée, autre opération

Pour les petits nombres, listez les paires : les diviseurs de \(12\) sont \(1,2,3,4,6,12\), de somme \(28\).

La formule générale vient du développement :

\[
\sum_{d\mid N,\ d>0}d=(1+p_1+\cdots+p_1^{e_1})\cdots(1+p_k+\cdots+p_k^{e_k}).
\]

Ne confondez pas **nombre**, **somme** et **produit** des diviseurs : ils répondent à trois questions différentes.

### Atelier I5 — Ouvrez le tiroir des exposants

<!-- interaction I5 | grille d'exposants avec filtres | compétence : diviseurs -->
Pour \(72=2^3\times3^2\), prédisez le nombre de diviseurs positifs. Explorez ensuite la grille \((a,b)\mapsto2^a3^b\), puis activez successivement « impair », « pair », « carré parfait ».

<details><summary>Correction</summary>

Total : \(12\). Impairs : \(3\). Pairs : \(9\). Carrés : \(4\). Le filtre « carré » conserve les exposants \(a=0,2\) et \(b=0,2\), y compris le diviseur \(1\).

</details>

## Séquence 6 — PGCD : ce que plusieurs nombres peuvent partager

Le **plus grand commun diviseur**, ou PGCD, de deux entiers strictement positifs est leur plus grand diviseur positif commun.

\[
84=2^2\times3\times7,\qquad126=2\times3^2\times7.
\]

Un diviseur commun ne peut prendre que les facteurs disponibles dans **les deux** nombres. On garde donc les plus petits exposants :

\[
\operatorname{PGCD}(84,126)=2\times3\times7=42.
\]

Un premier absent de l'un des nombres n'entre pas dans leur PGCD. Deux entiers sont **premiers entre eux** lorsque leur PGCD vaut \(1\). Ils n'ont pas besoin d'être premiers : \(8\) et \(9\) sont premiers entre eux.

### Le schéma des sachets identiques

Vous avez trente-six perles rouges et cinquante-quatre bleues. Vous voulez le plus grand nombre de sachets identiques, sans reste, en utilisant toutes les perles.

Le nombre de sachets doit diviser \(36\) et \(54\). Son maximum est donc \(\operatorname{PGCD}(36,54)=18\). Chaque sachet contient \(36/18=2\) rouges et \(54/18=3\) bleues.

**Attention à la grandeur demandée :** dix-huit sachets, mais cinq perles par sachet. On maximise ici le nombre de sachets, pas leur contenu.

Pour découper des longueurs \(84\) et \(126\) en morceaux de même longueur entière, aussi longs que possible et sans chute, le PGCD \(42\) est la longueur du morceau, pas le nombre total de morceaux. Celui-ci vaut \(84/42+126/42=5\).

### Utiliser les différences : l'algorithme d'Euclide

Tout diviseur commun de \(a,b\) divise \(a-b\), et la réciproque vaut entre les paires \((a,b)\) et \((a-b,b)\). On peut retirer des multiples sans changer le PGCD :

\[
\operatorname{PGCD}(a,b)=\operatorname{PGCD}(b,r),\quad a=bq+r.
\]

Exemple : \(126=84+42\), puis \(84=2\times42\). Le dernier reste non nul est \(42\).

Deux entiers consécutifs sont premiers entre eux : un diviseur commun divise leur différence \(1\). Plus généralement, \(\operatorname{PGCD}(n,n+k)=\operatorname{PGCD}(n,k)\). On obtient ainsi \(\operatorname{PGCD}(97,101)=\operatorname{PGCD}(97,4)=1\), sans factoriser \(101\).

Les diviseurs communs de \(a,b\) sont exactement les diviseurs de leur PGCD. Pour compter ceux de \(36\) et \(60\), trouvez \(12\), puis ses six diviseurs positifs.

### Atelier I6 — Construisez les sachets, puis nommez la réponse

<!-- interaction I6 | répartitions identiques + trois champs | compétence : pgcd-situation -->
Avec trente-six perles rouges et cinquante-quatre bleues, cherchez le plus grand nombre de sachets identiques sans reste. Donnez aussi le nombre de rouges et de bleues dans un sachet.

<details><summary>Correction</summary>

**\(18\) sachets ; \(2\) rouges et \(3\) bleues par sachet.** Neuf sachets seraient possibles, mais ce n'est pas le maximum. Cinquante-quatre sachets sont impossibles : on ne peut pas répartir trente-six perles rouges identiquement entre eux.

</details>

## Séquence 7 — PPCM : le premier rendez-vous commun

Le **plus petit commun multiple**, ou PPCM, de deux entiers strictement positifs est leur plus petit multiple commun strictement positif. On précise « strictement positif », car zéro est lui aussi un multiple commun.

Pour être multiple de deux nombres, il faut couvrir tous leurs facteurs premiers. On garde les plus grands exposants :

\[
18=2\times3^2,\qquad24=2^3\times3,
\]

\[
\operatorname{PPCM}(18,24)=2^3\times3^2=72.
\]

| Besoin | Facteurs à retenir | Outil |
|---|---|---|
| Diviser chacun des nombres | Seulement les facteurs communs, exposants minimaux | PGCD |
| Être divisible par chacun des nombres | Tous les facteurs nécessaires, exposants maximaux | PPCM |

### Pourquoi multiplier les deux nombres peut échouer

Le produit \(4\times6=24\) est bien un multiple commun, mais ce n'est pas le plus petit : \(12\) suffit. Les facteurs communs ont été comptés en double.

Pour deux entiers strictement positifs :

\[
\boxed{\operatorname{PGCD}(a,b)\operatorname{PPCM}(a,b)=ab.}
\]

Si les deux nombres sont premiers entre eux, leur PPCM est leur produit. Si l'un divise l'autre, le PGCD est le plus petit, le PPCM le plus grand. L'identité ci-dessus ne s'étend pas telle quelle à trois nombres.

Pour trois nombres, prenez le maximum de chaque exposant sur les trois décompositions, ou procédez par étapes. Le PPCM de \(6,8,15\) vaut \(2^3\times3\times5=120\).

Un facteur commun se met aussi en évidence : pour \(c>0\) entier, \(\operatorname{PPCM}(ca,cb,cd)=c\operatorname{PPCM}(a,b,d)\). Ainsi le PPCM de \(20,30,45\) vaut \(5\operatorname{PPCM}(4,6,9)=180\).

### Le schéma des événements périodiques

Deux voyants s'allument ensemble à l'instant zéro, puis toutes les six et huit secondes. Ils se retrouvent aux multiples communs de \(6\) et \(8\). Premier rendez-vous après le départ : \(24\) secondes.

Le PPCM donne cet intervalle commun parce que les deux événements partent ensemble. S'ils sont décalés, il faut aussi tenir compte de leur décalage ; le PPCM seul ne donne pas automatiquement la première rencontre.

Dans les \(72\) premières secondes, les rencontres ont lieu à \(0,24,48,72\). Cela fait quatre rencontres si zéro est compté, trois strictement après le départ. La durée du cycle et le nombre de rencontres sont deux réponses différentes.

### Atelier I7 — Faites coïncider les deux lignes de temps

<!-- interaction I7 | deux frises périodiques | compétence : ppcm-periodicite -->
Deux voyants s'allument ensemble à zéro, puis toutes les six et huit secondes. Prédisez leur premier nouvel allumage commun. Affichez ensuite les événements jusqu'à soixante-douze secondes et comptez les rencontres après zéro, borne finale comprise.

<details><summary>Correction</summary>

Premier rendez-vous : **\(24\)** secondes. Puis \(48\) et \(72\), soit **trois rencontres après zéro**. Le produit \(48\) serait un rendez-vous, mais pas le premier.

</details>

## Séquence 8 — Compter les multiples : « et », « ou », « mais pas »

### Une liste de multiples est une liste à pas constant

Les multiples strictement positifs de \(d>0\) inférieurs ou égaux à \(N\ge0\) sont \(d,2d,\ldots,\lfloor N/d\rfloor d\). Leur nombre est :

\[
\boxed{\left\lfloor\frac Nd\right\rfloor.}
\]

Pour les multiples de \(7\) jusqu'à \(100\), le dernier est \(98=14\times7\) : quatorze valeurs. Si la borne est strictement inférieure à \(98\), retirez \(98\) : treize valeurs.

Dans un intervalle entier \([L,U]\), avec \(L\le U\), le nombre de multiples de \(d>0\) est :

\[
\left\lfloor\frac Ud\right\rfloor-\left\lfloor\frac{L-1}{d}\right\rfloor.
\]

Une autre méthode consiste à trouver le premier multiple autorisé \(A\), puis le dernier \(B\). S'il y en a, le total vaut \((B-A)/d+1\). Sinon, il vaut zéro. N'utilisez pas un arrondi vers zéro à la place du plancher pour une borne négative.

### « Et » : prendre le PPCM

Divisibles par \(4\) **et** par \(6\) : ce sont les multiples de \(12\), pas seulement les nombres de l'une des deux listes. De \(1\) à \(40\), ils sont \(12,24,36\), soit trois valeurs.

### « Ou », éventuellement les deux : corriger les doubles comptes

Divisibles par \(4\) **ou** par \(6\), entre \(1\) et \(40\) :

\[
\left\lfloor\frac{40}4\right\rfloor+\left\lfloor\frac{40}6\right\rfloor-\left\lfloor\frac{40}{12}\right\rfloor=10+6-3=13.
\]

On a d'abord compté deux fois l'intersection ; on en retire une copie. C'est le principe d'inclusion-exclusion.

### « Mais pas » et « exactement un »

| Condition | Calcul avec \(A\)=multiples de \(4\), \(B\)=multiples de \(6\) |
|---|---|
| Les deux | \(|A\cap B|\) |
| Au moins l'un | \(|A|+|B|-|A\cap B|\) |
| \(4\), mais pas \(6\) | \(|A|-|A\cap B|\) |
| Exactement l'un des deux | \(|A|+|B|-2|A\cap B|\) |
| Aucun des deux | Total de l'intervalle \(-|A\cup B|\) |

Pour trois conditions, on additionne les trois effectifs, soustrait les trois intersections deux à deux, puis ajoute l'intersection des trois. Chaque intersection de divisibilités se calcule avec un PPCM.

### Compter puis additionner

La somme des multiples strictement positifs de \(d\) jusqu'à \(md\) vaut :

\[
d(1+2+\cdots+m)=d\frac{m(m+1)}2.
\]

Pour les multiples de \(4\) strictement inférieurs à \(20\), \(m=4\) : somme \(4\times10=40\). Le nombre de termes vaut \(4\), pas \(40\).

Trois multiples consécutifs de \(7\) s'écrivent \(m-7,m,m+7\), avec \(m\) multiple de \(7\). Si la somme vaut \(105\), \(m=35\), et le plus petit vaut \(28\). L'écart n'est pas \(1\).

### Atelier I8 — Changez un mot, changez l'ensemble

<!-- interaction I8 | grille d'entiers et filtres logiques | compétence : inclusion-exclusion -->
Sur les entiers de \(1\) à \(40\), prédisez puis affichez les résultats pour : « divisible par \(4\) et \(6\) », « par \(4\) ou \(6\) », « par \(4\) mais pas \(6\) », « exactement l'un des deux ».

<details><summary>Correction</summary>

Respectivement **\(3,13,7,10\)**. Les trois multiples de \(12\) sont dans les deux ensembles. Pour « exactement un », il faut retirer les deux copies de cette intersection dans \(10+6\).

</details>

## Séquence 9 — Les restes : garder seulement l'information utile

### Un reste a des bornes

Pour la division d'un entier \(N\) par un entier \(d>0\) :

\[
N=dq+r,\qquad q\in\mathbb Z,\qquad 0\le r<d.
\]

Le reste est toujours inférieur au diviseur. « Reste \(8\) dans une division par \(7\) » n'est donc pas une réponse finale : il faut réduire encore.

Cette convention s'applique aussi aux entiers négatifs : \(-3=5\times(-1)+2\). Le reste de \(-3\) par \(5\) vaut \(2\), pas \(-3\).

### Additionner, soustraire, multiplier les restes

Si \(a\) laisse \(r\) et \(b\) laisse \(s\) dans la division par \(d\), leurs restes suffisent pour traiter :

| Expression | Calcul provisoire, puis réduction dans \(0,\ldots,d-1\) |
|---|---|
| \(a+b\) | \(r+s\) |
| \(a-b\) | \(r-s\) |
| \(ab\) | \(rs\) |
| \(a^k\), \(k\ge1\) entier | \(r^k\) |

Pourquoi ? Si \(a=dq+r\) et \(b=dt+s\), tous les termes contenant \(d\) sont des multiples de \(d\). Pour le produit, il reste seulement \(rs\).

La notation \(a\equiv r\pmod d\) résume « \(a\) et \(r\) ont le même reste modulo \(d\) ». C'est une équivalence de restes, pas nécessairement une égalité de nombres.

**Exemples :**

- \(a\equiv3,b\equiv5\pmod7\) : \(ab\equiv15\equiv1\pmod7\).
- \(a\equiv2,b\equiv5\pmod7\) : \(a-b\equiv-3\equiv4\pmod7\).
- \(N\equiv5\pmod{12}\) : \(3N+1\equiv16\equiv4\pmod{12}\).
- Si \(8\mid N\), alors \(N+17\equiv1\pmod8\).

### Le quotient peut changer quand on ajoute des objets

Si \(N=4\times7+2\), ajouter \(3\) donne \(N+3=4\times7+5=4\times8+1\). Le quotient augmente d'une unité ; le nouveau reste vaut \(1\).

Plus généralement, remplacez \(r+t\) par sa division euclidienne : les multiples complets de \(d\) passent dans le quotient. Ne modifiez pas uniquement le reste en oubliant ce transfert.

### Deux avertissements utiles

**Le reste modulo \(3\) n'est pas forcément celui modulo \(9\).** \(1\) et \(4\) laissent tous deux \(1\) modulo \(3\), mais pas modulo \(9\). Les informations sur des modules différents ne s'échangent pas librement.

**On ne divise pas les restes comme des nombres ordinaires.** Par exemple \(2\times1\equiv2\times4\pmod6\), mais \(1\not\equiv4\pmod6\). La simplification par \(2\) a supprimé une information. Dans une équation de divisibilité, utilisez plutôt les facteurs premiers ou le PGCD ; pour une somme comme \(1+\cdots+n=n(n+1)/2\), simplifiez dans les entiers avant de prendre le reste si \(2\) n'est pas inversible pour le module considéré.

### Atelier I9 — Faites passer le paquet complet dans le quotient

<!-- interaction I9 | division euclidienne manipulable | compétence : reste-quotient -->
Un entier \(N\) a pour quotient \(7\) et pour reste \(2\) dans la division par \(4\). Ajoutez \(3\). Prédisez le nouveau quotient et le nouveau reste, puis regroupez les unités par quatre.

<details><summary>Correction</summary>

**Quotient \(8\), reste \(1\).** Les cinq unités provisoires forment un groupe de quatre et une unité restante. Le nombre initial vaut \(30\), le nouveau \(33\), ce qui vérifie \(33=4\times8+1\).

</details>

## Séquence 10 — Cycles, puissances et conditions de reste

### Un dernier chiffre est un reste modulo dix

Pour le chiffre des unités de \(45\times47\), seuls \(5\) et \(7\) comptent : \(5\times7=35\), donc le dernier chiffre est \(5\). Cela ne signifie pas que le produit lui-même vaut \(35\).

Pour les puissances, cherchez une répétition :

| Puissance de \(7\) | \(7^1\) | \(7^2\) | \(7^3\) | \(7^4\) | \(7^5\) |
|---|---:|---:|---:|---:|---:|
| Chiffre des unités | \(7\) | \(9\) | \(3\) | \(1\) | \(7\) |

La période est \(4\). Pour \(7^{100}\), \(100\) est multiple de \(4\) : on prend la **quatrième** position du cycle, soit \(1\), pas une imaginaire position zéro.

Pour une puissance d'exposant strictement positif : les bases finissant par \(0,1,5,6\) ont un chiffre final constant ; celles finissant par \(4,9\) ont une période de deux ; celles finissant par \(2,3,7,8\) une période de quatre.

### Les cycles ne sont pas tous de longueur quatre

Modulo \(7\), les restes de \(2^1,2^2,2^3,2^4\) sont \(2,4,1,2\). La période est trois. Puisque \(100=3\times33+1\), \(2^{100}\) laisse le reste \(2\).

Si la base et le module partagent des facteurs, une phase initiale peut précéder la répétition : modulo \(8\), \(2^1,2^2,2^3,2^4,\ldots\) donnent \(2,4,0,0,\ldots\). N'appliquez pas mécaniquement un cycle à partir du premier exposant ; vérifiez sa structure.

### Deux restes à satisfaire simultanément

Cherchez le plus petit \(n>0\) tel que \(n\equiv2\pmod5\) et \(n\equiv1\pmod3\). Énumérez une seule liste : \(2,7,12,17,\ldots\). Le premier candidat passant le second filtre est \(7\).

Les solutions suivantes sont espacées de \(\operatorname{PPCM}(5,3)=15\). Pour une borne supplémentaire, partez de cette progression plutôt que de recommencer à \(1\).

Pour \(n\equiv1\pmod4\) et \(n\equiv5\pmod6\), les solutions sont \(5,17,29,\ldots\), espacées de \(12\). La première strictement supérieure à \(20\) est \(29\).

Certaines conditions sont incompatibles : \(n\equiv0\pmod4\) impose \(n\) pair, alors que \(n\equiv1\pmod6\) impose \(n\) impair. Plus généralement, deux conditions modulo \(a,b\) peuvent coexister si et seulement si la différence des restes est divisible par \(\operatorname{PGCD}(a,b)\). Lorsqu'une solution existe, les solutions sont espacées du PPCM.

Cette idée traite aussi les événements décalés : un signal aux instants \(1+4k\) et un autre aux instants \(5+6j\) se rencontrent à \(5,17,29,\ldots\), pour les instants autorisés. Il faut respecter leurs premiers instants, pas seulement les congruences.

### Compter une classe de restes

Les entiers de reste \(r\) modulo \(d\) ont la forme \(r+kd\). Pour en compter dans un intervalle, cherchez le premier et le dernier autorisés, puis utilisez le pas \(d\).

De \(1\) à \(50\), reste \(2\) modulo \(6\) : \(2,8,\ldots,50\), soit \((50-2)/6+1=9\) valeurs.

Pour plusieurs restes possibles, raisonnez par blocs : parmi \(0,1,\ldots,24\), les restes modulo \(5\) se répètent cinq fois. Deux restes, \(1\) et \(3\), sont impairs : dix entiers conviennent. Ce n'est pas la même chose que compter les **nombres impairs**. Un dernier bloc incomplet doit être traité séparément.

### Atelier I10 — Prédisez la case du cycle

<!-- interaction I10 | roue des restes à longueur variable | compétence : cycles -->
Construisez les premiers restes de \(2^k\) modulo \(7\). Choisissez la période, puis le reste de \(2^{100}\). Recommencez avec le chiffre des unités de \(7^{100}\).

<details><summary>Correction</summary>

Premier cycle : \(2,4,1\), période \(3\), réponse **\(2\)**. Second cycle : \(7,9,3,1\), période \(4\), réponse **\(1\)**. Même exposant, mais deux cycles et deux calculs de position différents.

</details>

## Atelier avancé A — Compléter un carré ou un cube parfait

### Les exposants indiquent ce qu'il manque

Un entier strictement positif est un carré parfait si et seulement si tous ses exposants premiers sont pairs. Pour un cube parfait, ils sont tous multiples de trois.

\[
72=2^3\times3^2.
\]

Pour rendre \(72m\) carré avec le plus petit entier \(m>0\), il faut ajouter un facteur \(2\) : \(72\times2=2^4\times3^2=12^2\). Ajouter un nouveau facteur premier ou deux copies inutiles augmenterait \(m\).

Pour \(180m\) cube : \(180=2^2\times3^2\times5\). Il manque une copie de \(2\), une de \(3\), deux de \(5\) :

\[
m=2\times3\times5^2=150,
\qquad180\times150=30^3.
\]

### Multiplier, diviser, extraire : trois demandes différentes

| Demande pour \(72=2^3\times3^2\) | Réponse |
|---|---|
| Plus petit multiplicateur donnant un carré | \(2\) |
| Plus petit diviseur positif \(d\) tel que \(72/d\) soit un carré entier | \(2\) |
| Plus grand carré parfait divisant \(72\) | \(2^2\times3^2=36\) |

Pour extraire le plus grand diviseur carré, on **abaisse** chaque exposant au plus grand entier pair qui ne le dépasse pas. Pour rendre un produit carré, on **complète** les exposants impairs. Pour \(720=2^4\times3^2\times5\), le plus grand diviseur carré est \(144\), tandis que le multiplicateur minimal donnant un carré est \(5\).

Même principe pour une puissance \(k\)-ième : les exposants doivent être multiples de \(k\). Pour minimiser le multiplicateur, complétez chacun jusqu'au prochain multiple, sans dépasser inutilement.

### Atelier I11 — Complétez l'inventaire juste assez

<!-- interaction I11 | compteurs d'exposants et cible carré/cube | compétence : puissances-parfaites -->
Affichez \(180=2^2\times3^2\times5\). Combien de copies de chaque premier faut-il ajouter pour obtenir un cube, en minimisant le multiplicateur ?

Passez ensuite en cible « carré » : la réponse est-elle la même ?

<details><summary>Correction</summary>

Cube : ajouter \(1,1,2\) copies de \(2,3,5\), donc multiplicateur **\(150\)**. Carré : ajouter seulement un facteur \(5\), donc multiplicateur **\(5\)**. Ce n'est pas l'exposant final que l'on multiplie ; ce sont les facteurs manquants.

</details>

## Atelier avancé B — Les zéros finaux et les factorielles

Un zéro final signifie un facteur \(10=2\times5\). Deux zéros exigent deux paires \(2\times5\), et ainsi de suite.

Dans un produit entier strictement positif, le nombre de zéros finaux est le minimum entre le nombre total de facteurs \(2\) et celui de facteurs \(5\).

\[
40\times125=(2^3\times5)\times5^3=2^3\times5^4.
\]

Il y a trois paires, donc **trois zéros finaux**. Compter seulement les nombres se terminant par zéro serait une erreur.

### La factorielle concentre les facteurs

\(n!\) désigne \(1\times2\times\cdots\times n\), avec \(n\) entier strictement positif, et \(0!=1\).

Dans \(n!\), les facteurs \(2\) sont au moins aussi nombreux que les facteurs \(5\). Il suffit donc de compter les facteurs \(5\) :

\[
\boxed{Z(n!)=\left\lfloor\frac n5\right\rfloor+\left\lfloor\frac n{25}\right\rfloor+\left\lfloor\frac n{125}\right\rfloor+\cdots.}
\]

On s'arrête quand les termes deviennent nuls. Chaque multiple de \(5\) apporte au moins un facteur \(5\). Les multiples de \(25\) en apportent un deuxième ; ceux de \(125\), un troisième.

Pour \(25!\), le total vaut \(5+1=6\), pas \(5\). Le facteur \(25=5^2\) doit compter deux fois. Pour \(70!\), on obtient \(14+2=16\).

Pour compter un premier \(p\) quelconque dans \(n!\), remplacez \(5\) par \(p\). Ce comptage donne un exposant premier ; il ne donne un nombre de zéros qu'après avoir aussi considéré le facteur complémentaire de \(10\).

### Atelier I12 — Comptez les facteurs cachés, pas les derniers chiffres

<!-- interaction I12 | liste des multiples avec couches de facteurs | compétence : factorielle-zeros -->
Prédisez le nombre de zéros finaux de \(25!\). Faites apparaître les multiples de cinq, puis activez une deuxième couche pour les multiples de vingt-cinq.

<details><summary>Correction</summary>

Les nombres \(5,10,15,20,25\) apportent chacun un premier facteur \(5\). \(25\) en apporte un second. Total : **six zéros**. On ne compte ni les zéros à l'intérieur de l'écriture, ni le nombre de chiffres du résultat.

</details>

## Atelier avancé C — Reconstruire deux nombres avec leur PGCD et leur PPCM

Deux entiers strictement positifs \(a<b\) ont pour PGCD \(g\) et pour PPCM \(L\). Écrivez :

\[
a=gu,\qquad b=gv,\qquad \operatorname{PGCD}(u,v)=1.
\]

Les facteurs \(u,v\) sont premiers entre eux : sinon, \(g\) ne serait pas le plus grand diviseur commun.

L'identité \(ab=gL\) donne :

\[
uv=\frac Lg.
\]

Il faut donc \(g\mid L\). Mais il ne suffit pas de trouver n'importe quelle factorisation de \(L/g\) : les deux facteurs doivent être premiers entre eux et respecter l'ordre.

**Exemple :** \(g=6,L=72\), donc \(uv=12\).

| \((u,v)\), avec \(u<v\) | Premiers entre eux ? | \((a,b)\) |
|---|---|---|
| \((1,12)\) | Oui | \((6,72)\) |
| \((2,6)\) | Non | Refusé : \((12,36)\) aurait pour PGCD \(12\) |
| \((3,4)\) | Oui | \((18,24)\) |

La plus petite somme vaut \(18+24=42\). Le couple équilibré \((2,6)\) ne doit pas être accepté simplement parce que son produit est correct.

Pour ne pas oublier de possibilités, une puissance première entière de \(L/g\) doit être affectée à un seul des deux facteurs ; la partager ferait apparaître un diviseur commun.

### Atelier I13 — Éliminez le faux couple

<!-- interaction I13 | tableau de candidats et contraintes | compétence : pgcd-ppcm-combines -->
PGCD \(6\), PPCM \(72\). Parmi \((6,72),(12,36),(18,24)\), sélectionnez tous les couples valides, puis celui dont la somme est minimale.

<details><summary>Correction</summary>

Les couples valides sont **\((6,72)\) et \((18,24)\)**. La somme minimale vaut **\(42\)** pour \((18,24)\). Les trois produits valent \(432\), mais cette égalité seule ne garantit pas le bon PGCD et le bon PPCM.

</details>

## Atelier avancé D — Transformer des expressions en contraintes de divisibilité

### Un quotient devant être entier

Pour \(k>0\) entier :

\[
\frac{30k+30}{k}=30+\frac{30}{k}.
\]

Le quotient est entier si et seulement si \(k\) est un diviseur positif de \(30=2\times3\times5\). Il y a \(2\times2\times2=8\) valeurs.

Avec \(k\ne0\) entier sans condition de signe, il y en aurait seize, car chaque diviseur positif a son opposé. Si la réécriture laisse un reste nul, le quotient peut être entier pour tous les entiers de son domaine ; ne lui appliquez pas mécaniquement un comptage fini de diviseurs de zéro.

### La condition « \(d\) divise \(an\) »

Pour \(a,d>0\) entiers :

\[
d\mid an\iff \frac{d}{\operatorname{PGCD}(a,d)}\mid n.
\]

Les facteurs déjà apportés par \(a\) n'ont pas à être fournis une deuxième fois par \(n\). Exemple : \(18\mid12n\) impose \(3\mid n\), puisque \(18/\operatorname{PGCD}(12,18)=3\).

### Les entiers consécutifs fournissent des facteurs garantis

Parmi \(n,n+1\), l'un est pair. Donc \(cn(n+1)\) est divisible par \(2c\), pour tout entier \(c>0\) et tout entier \(n\).

Pour montrer qu'un diviseur plus grand n'est pas garanti, essayez \(n=1\) : l'expression vaut exactement \(2c\). Ce seul cas interdit toute prétention à un plus grand diviseur positif universel.

Parmi trois entiers consécutifs, l'un est divisible par \(3\) et au moins un est pair. Leur produit est donc divisible par \(6\). Un produit de quatre entiers consécutifs est divisible par \(24\) : les deux nombres pairs apportent au moins trois facteurs \(2\), et l'un des quatre nombres apporte un facteur \(3\).

Un facteur zéro ne gêne pas ces affirmations : zéro est divisible par les diviseurs non nuls concernés.

### Une somme peut révéler un multiple

\[
1+2+\cdots+2m=\frac{2m(2m+1)}2=m(2m+1).
\]

La somme est donc divisible par \(m\). Ici, on a simplifié le facteur \(2\) **dans les entiers** avant de prendre un reste. On n'a pas divisé une congruence sans précaution.

### Énumérer avec des bornes plutôt qu'au hasard

Pour trouver les entiers strictement positifs inférieurs à \(100\) ayant exactement trois facteurs premiers distincts, commencez par les produits de trois premiers distincts, puis vérifiez leurs multiples sans introduire de quatrième premier.

Les produits possibles sous \(100\) sont \(30,42,66,70,78\). Les exposants supplémentaires donnent aussi \(60,84,90\). Total : **huit nombres**, \(30,42,60,66,70,78,84,90\). Sans le premier \(2\), le plus petit produit est \(3\times5\times7=105\), déjà trop grand ; avec \(2\), les produits \(2pq<100\) bornent les essais restants.

Pour exactement quatre diviseurs positifs sous \(30\), utilisez les formes \(p^3\) et \(pq\), et non une liste de nombres au hasard : \(6,8,10,14,15,21,22,26,27\).

### Atelier I14 — Réduisez la fraction avant de compter

<!-- interaction I14 | étapes à compléter et compteur | compétence : quotient-entier -->
Combien d'entiers strictement positifs \(k\) rendent \((30k+30)/k\) entier ? Complétez : « \(30+\ldots\) », puis « \(k\) doit être un … de … ».

<details><summary>Correction</summary>

\(30+30/k\). \(k\) doit être un **diviseur positif de \(30\)**. Les huit valeurs sont \(1,2,3,5,6,10,15,30\). Ce ne sont pas les multiples de trente ; par exemple \(k=60\) donnerait \(30{,}5\).

</details>

## La boîte à outils — Choisir le bon geste

| Signal dans l'énoncé | Première traduction | Méthode |
|---|---|---|
| Lots complets / places restantes | \(N=dq+r\) | Quotient / reste |
| Tout ranger avec capacité maximale | Couvrir tous les objets | Quotient + 1 seulement si reste non nul |
| Multiple voisin | Distance au multiple | Reste et condition stricte |
| Chiffre inconnu | Chiffre entre 0 et 9 | Derniers chiffres, somme des chiffres, contraintes croisées |
| Nombre de diviseurs | Choix d'exposants | Produit des exposants augmentés d'une unité |
| Diviseurs pairs, impairs, carrés | Exposants restreints | Filtrer avant de compter |
| Plus grand partage sans reste | Le résultat divise chaque quantité | PGCD |
| Premier événement commun | Le résultat est multiple de chaque période | PPCM, si départ commun |
| Divisible par deux nombres | Plusieurs inventaires à couvrir | PPCM, pas produit automatique |
| « Ou » / « mais pas » | Ensembles de multiples | Inclusion-exclusion |
| Dernier chiffre d'une puissance | Reste modulo dix | Cycle propre à la base |
| Plusieurs restes imposés | Une progression à filtrer | Liste d'un reste, compatibilité, pas du PPCM |
| Produit carré ou cube | Exposants à compléter | Parité / multiples de trois |
| Zéros finaux | Paires de facteurs 2 et 5 | Minimum des deux exposants |
| PGCD et PPCM connus | \(a=gu,b=gv\), \(u,v\) premiers entre eux | Factoriser \(L/g\), filtrer les couples |
| Fraction devant être entière | Entier + fraction résiduelle | Diviseurs, puis domaine |

### Atelier I15 — Le tribunal des contre-exemples

<!-- interaction I15 | trois contre-exemples à saisir | compétence : logique-divisibilite -->
Réfutez chaque affirmation par un cas autorisé :

1. « Si un entier est divisible par \(4\) et \(6\), il est divisible par \(24\). »
2. « Deux entiers premiers entre eux sont forcément deux nombres premiers. »
3. « Tout carré parfait strictement positif possède exactement trois diviseurs positifs. »

<details><summary>Exemples de réponses</summary>

1. \(12\), divisible par \(4,6\), mais pas par \(24\).
2. \(8,9\), tous deux composés et de PGCD \(1\).
3. \(16\), carré ayant cinq diviseurs positifs. La règle exacte est « exactement trois diviseurs si et seulement si carré d'un **nombre premier** ». « Trois diviseurs implique carré » est vrai, mais la réciproque sans précision est fausse.

</details>

### Atelier I16 — Choisissez l'outil avant de voir les nombres

<!-- interaction I16 | association de situations et méthodes | compétence : selection-methode -->
Associez chaque demande à l'outil de départ : quotient, capacité arrondie au-dessus, PGCD, PPCM, inclusion-exclusion, cycle de restes.

- Nombre maximal de paquets de taille fixée tous complets.
- Nombre minimal de véhicules pour transporter tout le groupe.
- Nombre maximal de sachets identiques sans reste, utilisant deux stocks.
- Premier nouvel instant commun de deux événements partis ensemble.
- Nombre d'entiers multiples de quatre ou six.
- Chiffre des unités d'une très grande puissance de sept.

<details><summary>Correction</summary>

Dans l'ordre : **quotient, capacité arrondie au-dessus, PGCD, PPCM, inclusion-exclusion, cycle de restes**. Les mots « maximal » et « minimal » ne suffisent pas à eux seuls : demandez toujours quelle grandeur divise quelle quantité, ou quelle quantité doit être multiple des autres.

</details>

### Avant de valider une réponse

Relisez la grandeur demandée : nombre de lots, taille du lot, nombre d'objets, durée ou nombre d'événements ? Vérifiez ensuite les mots « strictement », « distincts », « positifs », « communs » et « exactement ».

Pour une affirmation « nécessairement vraie », un exemple ne suffit pas à la prouver. Un exemple contraire suffit à l'invalider. Si un calcul devient long, cherchez d'abord une décomposition, une différence ou un reste ; et si une piste ne progresse plus, revenez à la structure ou passez provisoirement à une autre question.

## Mission finale — Décomposer, choisir, vérifier

Premier passage sans aide. Pour chaque question, choisissez une réponse et indiquez votre confiance. À partir de F9, nommez d'abord votre méthode. Les questions F17 à F20 forment le défi avancé.

### F1 — Le bon critère

Quel nombre est divisible par neuf ?

A. \(572\)  
B. \(738\)  
C. \(421\)  
D. \(624\)

### F2 — La boîte supplémentaire est-elle nécessaire ?

Chaque boîte contient au maximum six objets. Combien de boîtes faut-il au minimum pour ranger vingt-quatre objets ?

A. \(3\)  
B. \(4\)  
C. \(5\)  
D. \(6\)

### F3 — Déjà multiple

Quel est le plus petit entier strictement positif à ajouter à \(540\) pour obtenir un multiple de neuf ?

A. \(0\)  
B. \(1\)  
C. \(9\)  
D. \(18\)

### F4 — Nombre de diviseurs

Combien de diviseurs positifs possède \(60\) ?

A. \(6\)  
B. \(8\)  
C. \(12\)  
D. \(60\)

### F5 — Tout partager

Quel est le PGCD de \(84\) et \(126\) ?

A. \(42\)  
B. \(21\)  
C. \(252\)  
D. \(6\)

### F6 — Tout couvrir

Quel est le plus petit multiple commun strictement positif de \(8\) et \(12\) ?

A. \(4\)  
B. \(20\)  
C. \(24\)  
D. \(96\)

### F7 — Réduire une dernière fois

\(n\) laisse un reste de cinq dans la division par six. Quel reste laisse \(n+8\) dans la division par six ?

A. \(1\)  
B. \(2\)  
C. \(7\)  
D. \(13\)

### F8 — Distincts ou répétés ?

Combien de facteurs premiers distincts possède \(72\) ?

A. \(2\)  
B. \(3\)  
C. \(5\)  
D. \(12\)

### F9 — Toutes les valeurs du chiffre

Quels chiffres \(x\) rendent \(\overline{7x2}\) divisible par neuf ?

A. Seulement \(0\).  
B. Seulement \(9\).  
C. \(0\) et \(9\).  
D. \(3,6,9\).

### F10 — Ne pas compter deux fois

Combien d'entiers de \(1\) à \(60\), inclus, sont divisibles par quatre ou six, éventuellement par les deux ?

A. \(15\)  
B. \(20\)  
C. \(25\)  
D. \(30\)

### F11 — Retirer les facteurs pairs

Combien de diviseurs positifs impairs possède \(72\) ?

A. \(3\)  
B. \(4\)  
C. \(9\)  
D. \(12\)

### F12 — Une classe de restes dans un intervalle

Combien d'entiers de \(20\) à \(80\), inclus, laissent un reste de deux dans la division par six ?

A. \(9\)  
B. \(10\)  
C. \(11\)  
D. \(12\)

### F13 — Une puissance sans son développement

Quel est le chiffre des unités de \(3^{100}\) ?

A. \(1\)  
B. \(3\)  
C. \(7\)  
D. \(9\)

### F14 — Compléter un cube

Quel est le plus petit entier strictement positif \(m\) tel que \(180m\) soit un cube parfait ?

A. \(5\)  
B. \(30\)  
C. \(150\)  
D. \(180\)

### F15 — Croiser deux conditions

Quel est le plus petit entier strictement supérieur à vingt laissant un reste de un modulo quatre et un reste de cinq modulo six ?

A. \(21\)  
B. \(25\)  
C. \(29\)  
D. \(41\)

### F16 — Un diviseur universel

Quel est le plus grand entier strictement positif qui divise \(6n(n+1)\) pour **tout** entier \(n\) ?

A. \(6\)  
B. \(12\)  
C. \(18\)  
D. \(24\)

### F17 — Les facteurs cachés de la factorielle

Combien de zéros terminent l'écriture décimale de \(50!\) ?

A. \(10\)  
B. \(11\)  
C. \(12\)  
D. \(15\)

### F18 — Produit correct, contraintes correctes ?

Deux entiers strictement positifs \(a<b\) ont pour PGCD six et pour PPCM soixante-douze. Quelle est la plus petite somme \(a+b\) ?

A. \(36\)  
B. \(42\)  
C. \(48\)  
D. \(78\)

### F19 — Un quotient entier

Combien d'entiers strictement positifs \(k\) rendent \((24k+24)/k\) entier ?

A. \(4\)  
B. \(6\)  
C. \(8\)  
D. \(12\)

### F20 — Retrouver un exposant

Le nombre \(N=2^k3^2\), avec \(k\) entier positif ou nul, possède exactement vingt-quatre diviseurs positifs. Que vaut \(k\) ?

A. \(6\)  
B. \(7\)  
C. \(8\)  
D. \(12\)

<details><summary>Corrigé de la mission finale — à ouvrir après votre tentative</summary>

| Question | Réponse | Raisonnement |
|---|---|---|
| F1 | B | \(7+3+8=18\), multiple de neuf. |
| F2 | B | \(24=6\times4\). Reste nul : quatre boîtes suffisent. |
| F3 | C | \(540\) est déjà multiple de neuf ; le plus petit ajout strictement positif est neuf. |
| F4 | C | \(60=2^2\times3\times5\), donc \(3\times2\times2=12\) diviseurs positifs. |
| F5 | A | Minimum des exposants de \(2,3,7\) : \(2\times3\times7=42\). |
| F6 | C | Maximum des exposants : \(2^3\times3=24\). |
| F7 | A | \(5+8=13\), puis \(13=2\times6+1\). |
| F8 | A | \(72=2^3\times3^2\), deux premiers distincts : \(2,3\). |
| F9 | C | \(9+x\) doit valoir neuf ou dix-huit ; \(x=0\) ou \(9\). |
| F10 | B | \(15+10-5=20\), en retirant une copie des multiples de douze. |
| F11 | A | L'exposant de deux est nul ; trois choix pour celui de trois : \(1,3,9\). |
| F12 | C | \(20,26,\ldots,80\) : \((80-20)/6+1=11\). |
| F13 | A | Cycle \(3,9,7,1\), période quatre ; \(100\) mène à la quatrième position. |
| F14 | C | \(180=2^2\times3^2\times5\). Complément \(2\times3\times5^2=150\). |
| F15 | C | Solutions \(5,17,29,41,\ldots\). Première au-delà de vingt : \(29\). |
| F16 | B | \(n(n+1)\) est pair, donc douze divise toujours. Pour \(n=1\), la valeur est douze : aucun plus grand diviseur positif universel. |
| F17 | C | \(\lfloor50/5\rfloor+\lfloor50/25\rfloor=10+2=12\). |
| F18 | B | \(a=6u,b=6v\), \(uv=12\), \(u,v\) premiers entre eux : meilleur couple \(3,4\), somme \(42\). |
| F19 | C | \(24+24/k\) : \(k\mid24=2^3\times3\), donc huit choix positifs. |
| F20 | B | \((k+1)(2+1)=24\), donc \(k+1=8\), \(k=7\). |

</details>

## Votre bilan — Retrouver le geste qui vous manque

- **« J'hésite entre PGCD et PPCM. »** Reformulez la situation en une phrase : le résultat doit-il diviser chaque quantité, ou être divisible par chacune ? Reprenez les sachets et les voyants.
- **« Je connais la formule, mais je compte mal les diviseurs. »** Reconstruisez la grille des exposants, en incluant zéro. Appliquez ensuite le filtre pair, impair ou carré.
- **« Je trouve un nombre juste, mais pas la réponse demandée. »** Nommez votre résultat avant de valider : quotient, reste, taille d'un sachet, nombre de sachets ou durée.
- **« Je me trompe d'une unité. »** Vérifiez les bornes strictes, le reste nul et la place de zéro. Distinguez le nombre d'écarts du nombre de valeurs.
- **« Les grands exposants me bloquent. »** Calculez quelques petits restes, trouvez leur répétition et situez l'exposant dans le bon cycle.
- **« Je réussis après avoir vu la correction. »** Faites une variante sans aide. Reconnaître une solution lue et construire sa propre solution sont deux étapes différentes.

Une compétence est consolidée quand vous savez reconnaître la situation, expliquer la méthode et réussir une variante dont les nombres et les contraintes ont changé.

## Votre fiche de révision

| Situation | Règle ou réflexe |
|---|---|
| Divisibilité | \(d\mid n\iff n=dk\), \(k\) entier, \(d\ne0\) |
| Division euclidienne | \(N=dq+r\), \(d>0\), \(0\le r<d\) |
| Lots complets / capacité totale | \(q\) / \(q+1\) si reste non nul, sinon \(q\) |
| Multiple strictement suivant | Ajouter \(d-r\) si \(r>0\), sinon \(d\) |
| Tests 3 et 9 | Somme des chiffres |
| Tests 4 et 8 | Deux / trois derniers chiffres |
| Diviseurs de \(p^aq^b\) | \((a+1)(b+1)\), avec premiers distincts |
| Impairs / pairs | Exposant de deux nul / strictement positif |
| Carré / cube | Exposants premiers pairs / multiples de trois |
| PGCD | Exposants minimaux, facteurs disponibles dans chaque nombre |
| PPCM | Exposants maximaux, toutes les ressources nécessaires |
| Deux nombres strictement positifs | \(ab=\operatorname{PGCD}(a,b)\operatorname{PPCM}(a,b)\) |
| Premiers entre eux | PGCD un ; cela n'impose pas que chacun soit premier |
| Multiples dans 1 à N | \(\lfloor N/d\rfloor\) |
| « Ou » | Additionner les effectifs, retirer une copie de l'intersection |
| Reste d'une opération | Opérer sur les restes puis réduire |
| Deux restes simultanés | Filtrer une progression ; vérifier compatibilité et borne |
| Dernier chiffre | Reste modulo dix ; cycle adapté à la base |
| Zéros finaux | Minimum des exposants de deux et cinq |
| Zéros de \(n!\) | \(\lfloor n/5\rfloor+\lfloor n/25\rfloor+\cdots\) |
| Quotient entier | Réécrire et chercher une condition de divisibilité |

**Prochaine étape : les fractions.** Les facteurs communs et le PPCM vous serviront à simplifier, comparer et additionner des fractions sans multiplier inutilement les nombres.
