# Travail et débits : additionner les contributions, pas les durées

Une personne termine en six heures, une autre en neuf. Travaillent-elles ensemble en quinze heures, en sept heures et demie, ou autrement ? Une fuite prend douze heures pour vider une cuve ; faut-il soustraire douze à la durée de remplissage ?

La structure commune est une **quantité produite ou retirée par unité de temps**. Les contributions s’additionnent lorsque les débits s’additionnent. Les durées seules ne s’additionnent pas pour un travail simultané.

**Votre objectif :** choisir une unité de travail, calculer les cadences et suivre exactement ce qui est fait et ce qui reste à chaque changement.

## Avant de commencer — Trois prédictions

Indiquez votre confiance et la grandeur que vous additionnez.

<!-- interaction D1 | QCM unique + confiance | compétence : cadence-travail -->
**D1.** A termine une tâche en six heures à rythme constant. Quelle fraction accomplit-il en une heure ?

A. Six tâches. · B. \(1/6\) de tâche. · C. \(1/5\) de tâche. · D. Impossible à savoir.

<details><summary>Raisonnement</summary>

**B.** Si la tâche entière vaut un, chaque heure en produit un sixième, tant que le travail reste à faire.

</details>

<!-- interaction D2 | QCM unique + confiance | compétence : addition-debits -->
**D2.** A et B accomplissent chacun seuls la même tâche en six heures. S’ils travaillent ensemble au même rendement et sans se gêner, ils terminent en :

A. Douze heures. · B. Six heures. · C. Trois heures. · D. Une heure.

<details><summary>Raisonnement</summary>

**C.** Débit commun \(1/6+1/6=1/3\) de tâche par heure. La durée est trois heures.

</details>

<!-- interaction D3 | QCM unique + confiance | compétence : fuite-signee -->
**D3.** Une pompe apporte dix litres par minute et une fuite en retire quatre. Une cuve non vide et non pleine gagne en une minute :

A. Quatorze litres. · B. Quatre litres. · C. Dix litres. · D. Six litres.

<details><summary>Raisonnement</summary>

**D.** L’entrée et la sortie portent des signes opposés : débit net dix moins quatre, soit six litres par minute.

</details>

D1 oriente vers S1–S2 ; D2 S3 ; D3 S4. Les hypothèses de débit constant et de travail partageable doivent être conservées dans les activités.

## Séquence 1 — Quantité, cadence et durée

Pour un débit constant r et une durée t, la contribution vaut rt. Si r>0, produire une quantité Q≥0 demande t=Q/r. Les unités doivent s’accorder : litres/minute avec minutes, pièces/heure avec heures.

Une minute trente vaut une minute et demie ; une heure vingt vaut \(4/3\) heure. Ne mélangez pas le nombre affiché sur une horloge avec une durée décimale.

| Donnée | Unité possible |
|---|---|
| Quantité | L, mL, pièces ou fraction d’une tâche |
| Débit | L/min, pièces/h, tâche/jour |
| Durée | min, h ou jours compatibles avec le débit |

Un débit moyen sur plusieurs phases vaut quantité totale / durée totale. Une pause doit entrer dans la durée si la question porte sur l’ensemble du processus.

### Atelier I1 — Changez d’unité avant de multiplier

<!-- interaction I1 | conversion puis bilan | compétence : unites-debit -->
Un robinet fournit quatre litres par minute pendant une minute trente. Quel volume fournit-il ? Combien de millilitres par seconde cela représente-t-il ?

<details><summary>Correction</summary>

Six litres. Quatre mille millilitres par soixante secondes donnent \(200/3\) mL/s. La première conversion concerne le temps ; la seconde le débit complet.

</details>

## Séquence 2 — Une tâche entière peut valoir un

Si A accomplit une tâche en a>0 heures, son débit vaut 1/a tâche par heure. En t heures, sa contribution théorique est t/a, tant que l’on n’a pas déjà terminé la tâche.

Pour deux tiers d’une tâche à douze heures la tâche entière, la durée vaut huit heures. Pour savoir ce qui reste après quatre heures d’un chantier normalement réalisé en seize, calculer \(1-4/16=3/4\).

Choisir la tâche entière comme unité évite de connaître un nombre de mètres ou de pièces absent de l’énoncé. On peut aussi choisir un total commode, par exemple dix-huit unités de travail pour des durées six et neuf ; il faut que tous les travailleurs partagent **la même unité de tâche**.

### Atelier I2 — Travail fait ou temps écoulé ?

<!-- interaction I2 | barre de travail normalisee et reste | compétence : fraction-travail -->
Une équipe termine un chantier en quinze jours. Après six jours au même rythme, quelle fraction est faite ? Quelle fraction reste ? Combien de jours faut-il encore sans changement ?

<details><summary>Correction</summary>

Deux cinquièmes faits, trois cinquièmes restants, neuf jours supplémentaires. Le temps restant et la fraction restante sont deux grandeurs différentes.

</details>

## Séquence 3 — Travail simultané : additionner les débits

Si les contributions sont indépendantes au sens productif, sans gêne et avec un rythme constant :

\[
r_{A+B}=\frac1a+\frac1b,
\qquad\boxed{T=\frac1{1/a+1/b}=\frac{ab}{a+b}}.
\]

Cette formule vaut pour deux travailleurs **coopérants sur la même tâche**. A seul en six heures et B seul en neuf donnent un débit \(5/18\), donc un temps \(18/5=3{,}6\) heures, soit trois heures trente-six minutes.

La durée commune doit être strictement plus petite que chacune des deux durées individuelles si les deux cadences sont strictement positives et actives pendant tout le travail. Cela élimine les réponses somme ou moyenne des durées.

### Qui a fait quelle part ?

Pendant une même durée T, A contribue T/a et B T/b. Les fractions se répartissent comme les **débits**, donc dans le ratio b:a, et non comme les durées individuelles a:b.

### Atelier I3 — Les contributions doivent totaliser un

<!-- interaction I3 | deux barres de contribution et somme | compétence : travail-commun -->
A termine seul en quatre heures, B en douze. Donnez leur durée commune, puis la fraction faite par chacun.

<details><summary>Correction</summary>

Débit un quart plus un douzième, soit un tiers : durée trois heures. A fait trois quarts et B un quart. La somme est un et le plus rapide a produit la plus grande part.

</details>

## Séquence 4 — Entrées et sorties : un débit net signé

Un robinet qui remplit une cuve en a heures apporte 1/a cuve par heure. Une fuite qui la viderait en b heures retire 1/b cuve par heure. S’ils agissent ensemble à débits constants :

\[
r_{\mathrm{net}}=\frac1a-\frac1b.
\]

Pour remplir depuis un niveau inférieur au plein, il faut un débit net strictement positif. Si a=b, le niveau ne monte pas tant que les deux débits sont actifs. Si le débit net est négatif, le niveau baisse jusqu’à la borne vide ; on ne continue pas une droite vers un volume négatif.

Une cuve de capacité C, contenant initialement V, avec débit net positif r en litres par minute, se remplit en \((C-V)/r\). Si les durées a et b sont données pour une cuve entière, le reste doit être exprimé en **fraction de cuve** avant de diviser par le débit en cuves par heure.

### Atelier I4 — Même unité, signes différents

<!-- interaction I4 | jauge avec entrees/sorties et domaine | compétence : debit-net -->
Une cuve de soixante litres contient vingt litres. Une pompe apporte sept litres par minute et une sortie en retire trois. Combien de temps jusqu’au plein ? Que se passe-t-il si la sortie retire elle aussi sept litres par minute ?

<details><summary>Correction</summary>

Quarante litres manquent, débit net quatre : dix minutes. Dans le second scénario, le niveau reste à vingt litres, sous l’hypothèse de débits constants actifs ; le plein n’est jamais atteint.

</details>

## Séquence 5 — Machines ou personnes identiques : passer au rendement unitaire

Avec m agents identiques, de rendement individuel r constant pendant t :

\[
\boxed{Q=mrt}.
\]

À travail fixé, le produit m×t est constant si r ne change pas. Trois personnes pendant quatre jours représentent douze journées-personne ; cinq personnes mettent douze cinquièmes de jour, si le travail peut être partagé et si les jours fractionnaires sont admis.

Si la quantité à produire change aussi, utilisez les deux facteurs :

\[
t_2=t_1\frac{Q_2}{Q_1}\frac{m_1}{m_2}\frac{r_1}{r_2}.
\]

Écrivez d’abord les unités et le sens de chaque effet : plus de travail demande plus de temps ; plus d’agents ou un meilleur rendement en demande moins. Ne mettez pas tous les rapports dans le même sens par réflexe.

### Atelier I5 — Une machine, une heure

<!-- interaction I5 | tableau agents/temps/quantite | compétence : rendement-unitaire -->
Deux machines produisent soixante pièces en trois heures. Combien produisent cinq machines identiques en deux heures ? Si le rendement individuel augmente de vingt pour cent, combien de pièces dans ce second scénario ?

<details><summary>Correction</summary>

Dix pièces par machine et par heure. Le second scénario produit cent pièces ; avec un rendement individuel multiplié par 1,2, cent vingt. Ce modèle suppose une production divisible ou une quantité entière compatible avec la cadence.

</details>

## Séquence 6 — Rendements inégaux : le nombre d’agents ne suffit pas

Si A a un débit double de B, écrire rA=2rB. Ils produisent ensemble trois fois le débit de B. Leur travail commun ne se traite pas comme celui de deux machines identiques.

Si, ensemble, ils produisent quarante-cinq pièces en trois heures, leur débit commun est quinze par heure. Donc B produit cinq par heure et A dix. « Deux fois plus productive » est traduit ici explicitement par **deux fois le débit**, pas par un ajout de deux pièces.

Une amélioration de cinquante pour cent du débit multiplie celui-ci par 1,5. Pour une quantité fixée, le temps est alors multiplié par 2/3 ; il n’est pas divisé par 1,5 puis encore diminué de cinquante pour cent.

### Atelier I6 — Temps deux fois plus court, débit deux fois plus grand

<!-- interaction I6 | correspondance duree/debit et partage | compétence : rendement-relatif -->
A produit deux fois le débit de B. Ensemble, elles fabriquent soixante-douze pièces en quatre heures. Donnez chaque débit et chaque contribution pendant ces quatre heures.

<details><summary>Correction</summary>

Débit total dix-huit ; B six, A douze pièces par heure. Contributions B vingt-quatre, A quarante-huit. Les contributions ont le même ratio que les débits, puisque la durée est commune.

</details>

## Séquence 7 — Travail par phases : conserver ce qui est déjà fait

A seul en six heures travaille deux heures, puis B, seul en huit heures, le rejoint. Première phase : A fait un tiers. Il reste deux tiers au débit commun \(1/6+1/8=7/24\).

\[
T_{\mathrm{phase\ 2}}=\frac{2/3}{7/24}=\frac{16}{7}\text{ h},
\qquad T_{\mathrm{total}}=2+\frac{16}{7}=\frac{30}{7}\text{ h}.
\]

Le débit de la deuxième phase s’applique seulement au **reste**, pas à une nouvelle tâche entière. La question peut demander la durée totale ou la durée après l’arrivée de B : il faut distinguer les deux.

| Phase | Durée | Débit | Travail réalisé |
|---|---|---|---|
| A seul | deux heures | 1/6 | 1/3 |
| A et B | inconnue | 7/24 | 2/3 |

Arrêtez le processus dès que la tâche est terminée. Si la première phase prévue suffirait déjà, les phases suivantes n’ont pas lieu dans un problème demandant la première fin.

### Atelier I7 — L’aide arrive sur un chantier déjà avancé

<!-- interaction I7 | frise de travail et duree totale | compétence : phases-travail -->
A termine seul en huit heures ; B en douze. A travaille seul deux heures, puis ils travaillent ensemble. Donnez le reste après deux heures, la durée commune et la durée totale.

<details><summary>Correction</summary>

Reste trois quarts. Débit commun cinq vingt-quatrièmes, donc durée commune \(18/5\) heures. Total \(28/5\) heures, soit cinq heures trente-six minutes.

</details>

## Séquence 8 — Une fuite commence, un robinet s’arrête, un effectif change

La même méthode par phases s’applique au réservoir. S’il se remplit en quatre heures sans fuite et qu’une fuite capable de le vider en dix heures démarre après une heure, un quart est déjà rempli. Le reste trois quarts est produit au débit \(1/4-1/10=3/20\), soit cinq heures supplémentaires : six heures au total.

Pour un chantier prévu à six personnes pendant dix jours, trois jours de travail consomment dix-huit journées-personne sur soixante. Le reste quarante-deux, réalisé à neuf personnes, demande \(14/3\) jours ; total \(23/3\) jours.

Un volume déjà présent ou un travail déjà effectué ne disparaît pas au changement de phase. Le nombre de personnes restantes ou arrivantes doit lui aussi être distingué de l’effectif final.

### Atelier I8 — Coupez la chronologie au changement

<!-- interaction I8 | deux phases de remplissage et conservation | compétence : changement-debit -->
Deux robinets débitent chacun cinq litres par minute pendant trois minutes. Un seul continue quatre minutes. Quel volume total est versé ? Quel est le débit moyen sur les sept minutes ?

<details><summary>Correction</summary>

Première phase trente litres ; seconde vingt litres ; total cinquante. Débit moyen cinquante septièmes de litre par minute, pas la moyenne simple de dix et cinq puisque les durées diffèrent.

</details>

## Séquence 9 — Retrouver une cadence cachée

Si A+B réalisent une tâche en trois heures et A seul en neuf, alors :

\[
r_B=\frac13-\frac19=\frac29,\qquad T_B=\frac92\text{ h}.
\]

On soustrait les **débits**, puis on inverse pour retrouver la durée de B. Soustraire neuf à trois ne donne pas son temps.

Pour une cuve de quarante-huit litres remplie en trois heures sans fuite et quatre avec fuite, le robinet donne seize litres/h, le débit net douze, donc la fuite quatre litres/h. Le résultat doit être positif pour une fuite réellement sortante.

### Atelier I9 — Ce qui manque dans la somme des débits

<!-- interaction I9 | calcul inverse d’une cadence | compétence : debit-inconnu -->
A et B terminent ensemble en quatre heures ; A seul en douze. Combien de temps faudrait-il à B seul ?

<details><summary>Correction</summary>

Débit de B = un quart moins un douzième = un sixième de tâche par heure ; durée six heures. Le temps commun quatre est bien inférieur à six et à douze.

</details>

## Séquence 10 — Cycles, fournées et pauses : continu ou par lots ?

Une machine qui livre cinq pièces à la fin de chaque cycle de quatre minutes ne produit pas nécessairement une fraction de lot au milieu du cycle. En vingt minutes, cinq cycles complets donnent vingt-cinq pièces. En dix minutes, seuls deux lots sont terminés si aucune pièce n’est livrée avant la fin de chaque cycle.

Pour sept pains par fournée, cuire vingt-huit pains demande quatre fournées. S’il faut cuire trente pains et si une fournée peut être partielle, il faut cinq fournées ; si elle doit être pleine, la cinquième produit aussi des pains supplémentaires. Ne pas confondre cycles complets livrés et capacité nécessaire.

### Une pause après le dernier bloc n’est pas toujours comptée

Une imprimante produit quarante pages/min pendant cinq minutes, puis s’arrête deux minutes. Pour six cents pages, il faut quinze minutes de production, réparties en trois blocs. Il n’y a que deux pauses **avant la dernière page** : durée dix-neuf minutes, pas vingt et une.

Avec une quantité positive Q et des blocs de capacité b, le nombre de blocs entamés est ceil(Q/b), et le nombre de pauses entre blocs est ce nombre moins un. La dernière phase peut être plus courte si la production y est continue.

### Atelier I10 — La pause qui n’a pas encore eu lieu

<!-- interaction I10 | blocs de production et pauses a placer | compétence : cycles-pauses -->
Une machine produit trente pièces par minute pendant quatre minutes, puis fait une pause d’une minute. Combien de minutes jusqu’à la trois cent soixantième pièce, sans pause après cette pièce ?

<details><summary>Correction</summary>

Trois blocs de cent vingt pièces : douze minutes actives et deux pauses, soit quatorze minutes. La pause suivant le troisième bloc ne précède pas l’achèvement demandé.

</details>

## Atelier avancé A — Alternance : le dernier cycle peut être incomplet

A produit un sixième de tâche par heure et B un neuvième. Ils alternent une heure chacun, A d’abord. Un cycle de deux heures fait \(5/18\) de tâche. Après trois cycles, six heures, le travail fait vaut \(5/6\). A termine le sixième restant en une heure : durée totale sept heures.

Il ne faut pas arrondir le nombre de cycles au-dessus puis facturer toutes les deux heures du dernier cycle. Cherchez d’abord les cycles complets qui laissent un reste positif, puis faites intervenir les travailleurs dans l’ordre jusqu’à la fin.

### Atelier I11 — Arrêtez la frise au premier achèvement

<!-- interaction I11 | alternance et fraction finale de phase | compétence : alternance -->
A termine seul en quatre heures, B en six. Ils alternent une heure chacun, A commençant. Combien de temps faut-il pour finir ?

<details><summary>Correction</summary>

Deux cycles font \(2(1/4+1/6)=5/6\) en quatre heures. Reste un sixième ; A le fait en \((1/6)/(1/4)=2/3\) heure. Total quatre heures quarante minutes. La deuxième phase du troisième cycle n’a pas lieu.

</details>

## Atelier avancé B — Débits de paires : chaque agent est compté deux fois

Si les débits des paires AB, AC et BC valent p,q,r, alors :

\[
r_{A+B+C}=\frac{p+q+r}{2},\qquad r_C=\frac{q+r-p}{2}.
\]

Ces formules portent sur des débits, pas directement sur les temps annoncés. Pour des durées de chantier par paire de dix-huit, douze et neuf jours, les débits sont 1/18,1/12,1/9. Leur somme vaut un quart et le débit des trois un huitième : ils terminent en huit jours.

Des données censées décrire des agents tous productifs doivent produire des débits individuels non négatifs. Une différence négative signale une incompatibilité avec ce modèle d’addition, pas un travailleur « à durée négative ».

### Atelier I12 — Reconstituez la contribution de chacun

<!-- interaction I12 | trois paires et comptage des copies | compétence : paires-debits -->
A+B produisent vingt-cinq unités/h, A+C trente et B+C trente-cinq. Donnez le débit des trois, puis celui de C seul.

<details><summary>Correction</summary>

Débit total \((25+30+35)/2=45\). C vaut \((30+35-25)/2=20\). On en déduit A=10 et B=15, ce qui reconstitue les trois paires.

</details>

## Atelier avancé C — Production utile et bornes du modèle

Si cinquante pièces sont produites et cinq rejetées, il reste quarante-cinq pièces utilisables. Un débit brut et un débit utile ne sont identiques que si aucun rebut n’intervient. Avec une proportion constante de quatre-vingt-dix pour cent de pièces utiles dans un modèle déterministe, le débit utile est 0,9 fois le brut. Un taux aléatoire de défaut ne garantit pas, à lui seul, un nombre exact de pièces dans chaque lot.

Une cuve ne dépasse pas sa capacité sans débordement, un réservoir vide ne fournit pas un débit de sortie constant indéfiniment, et une tâche achevée ne continue pas à produire des « fractions supplémentaires » si l’on compte seulement cette tâche. Les formules sont valables entre les événements qui modifient ces conditions.

### Atelier I13 — Le même nombre peut désigner une autre production

<!-- interaction I13 | brut/utile et hypothese de rendement | compétence : controle-modele -->
Un lot contient quatre-vingts pièces fabriquées, dont six sont rejetées. Combien sont utilisables ? Peut-on garantir ce même nombre si l’on sait seulement qu’à long terme le taux de rejet est de 7,5 % ?

<details><summary>Correction</summary>

Soixante-quatorze pour le lot décrit. Le taux à long terme ne garantit pas ce nombre exact dans un autre lot de quatre-vingts ; il faut une hypothèse supplémentaire pour le traiter comme une proportion déterministe.

</details>

## La boîte à outils — Unité de travail et chronologie

| Situation | Premier geste | Contrôle |
|---|---|---|
| Durée individuelle a | Cadence 1/a | Même tâche pour tous ? |
| Travail en commun | Additionner les cadences | Contributions sans gêne ? |
| Fuite / retrait | Débit signé | Niveau entre vide et plein ? |
| Agents identiques | Quantité=m×r×t | Rendement individuel inchangé ? |
| Plusieurs phases | Déduire le travail déjà accompli | Total ou temps après changement ? |
| Cadence inconnue | Soustraire les cadences connues | Résultat compatible avec le modèle ? |
| Alternance | Cycles complets puis dernière phase | Achèvement avant la fin du cycle ? |
| Pauses | Ne compter que celles avant la fin demandée | Une pause finale est-elle incluse ? |

### Atelier I14 — Les trois fausses additions

<!-- interaction I14 | critique de modeles | compétence : transfert -->
Expliquez pourquoi on n’additionne pas les durées individuelles pour un travail simultané, pourquoi une fuite ne se soustrait pas en « heures de remplissage », et pourquoi une nouvelle équipe ne recommence pas forcément tout le chantier.

<details><summary>Correction</summary>

Les débits partagent une même unité et s’additionnent ; leurs inverses, les durées, non. Une fuite retire une quantité par unité de temps. Le chantier déjà effectué reste acquis : la nouvelle cadence s’applique au reste. Un exemple numérique valide peut compléter chaque explication.

</details>

## Mission finale — Choisir, compter et vérifier

Répondez avant d’ouvrir le corrigé. F1–F8 consolident les fondations ; F9–F16 combinent les outils ; F17–F20 demandent du transfert. Indiquez votre confiance et une méthode. Il n’y a pas de temps imposé au premier passage.

### F1

Une machine produit huit unités par heure pendant une heure et demie. Combien d’unités produit-elle ?

A. \(12\)  
B. \(80\)  
C. \(16\)  
D. \(8\)  

### F2

Un robinet fournit deux litres par minute pendant quatre-vingt-dix secondes. Quel volume verse-t-il, en litres ?

A. \(180\)  
B. \(3\)  
C. \(45\)  
D. \(\frac{9}{5}\)  

### F3

Une machine produit cent quatre-vingts pièces en trois heures. Quel est son débit horaire ?

A. \(540\)  
B. \(90\)  
C. \(60\)  
D. \(\frac{1}{60}\)  

### F4

Une tâche entière demande douze heures à rythme constant. Combien d’heures pour ses deux tiers ?

A. \(4\)  
B. \(18\)  
C. \(8\)  
D. \(6\)  

### F5

A termine seul en six heures, B en trois. Combien d’heures pour terminer ensemble, à cadences constantes et sans gêne ?

A. \(9\)  
B. \(3\)  
C. \(\frac{9}{2}\)  
D. \(2\)  

### F6

A termine seul en quatre heures, B en douze. Quelle fraction de la tâche A réalise-t-il lorsqu’ils travaillent ensemble du début à la fin ?

A. \(\frac{1}{3}\)  
B. \(\frac{2}{3}\)  
C. \(\frac{1}{4}\)  
D. \(\frac{3}{4}\)  

### F7

Une cuve de quatre-vingts litres contient vingt litres. Elle reçoit neuf L/min et en perd trois. Combien de minutes pour le plein ?

A. \(10\)  
B. \(\frac{20}{3}\)  
C. \(5\)  
D. \(15\)  

### F8

Trois machines identiques produisent cent quatre-vingts pièces en deux heures. Combien produisent cinq machines en quatre heures au même rendement ?

A. \(360\)  
B. \(300\)  
C. \(900\)  
D. \(600\)  

### F9

A produit deux fois le débit de B. Ensemble, elles produisent soixante-douze pièces en quatre heures. Quel est le débit de B, en pièces par heure ?

A. \(12\)  
B. \(9\)  
C. \(6\)  
D. \(18\)  

### F10

A et B terminent ensemble en trois heures ; A seul met douze heures. Combien d’heures faudrait-il à B seul ?

A. \(4\)  
B. \(9\)  
C. \(\frac{12}{5}\)  
D. \(15\)  

### F11

Une cuve de soixante litres se remplit en trois heures sans fuite, cinq avec fuite. Quel est le débit de la fuite, en litres par heure ?

A. \(20\)  
B. \(2\)  
C. \(8\)  
D. \(12\)  

### F12

A termine seul en six heures, B en douze. A travaille une heure seul puis B le rejoint. Quelle est la durée totale exacte, en heures ?

A. \(5\)  
B. \(\frac{10}{3}\)  
C. \(\frac{13}{3}\)  
D. \(4\)  

### F13

Un robinet remplit une cuve en quatre heures. Une fuite qui la viderait en huit heures commence après une heure. Combien d’heures depuis le début jusqu’au plein ?

A. \(7\)  
B. \(8\)  
C. \(6\)  
D. \(4\)  

### F14

Quatre personnes devaient finir en neuf jours. Après trois jours, deux personnes aussi efficaces arrivent. Quelle est la durée totale du chantier, en jours ?

A. \(7\)  
B. \(6\)  
C. \(9\)  
D. \(\frac{15}{2}\)  

### F15

Un four fournit sept pains à la fin de chaque fournée de six minutes. Combien de minutes pour vingt-huit pains, sans temps entre les fournées ?

A. \(4\)  
B. \(42\)  
C. \(24\)  
D. \(28\)  

### F16

Une machine produit vingt pièces par minute pendant trois minutes puis fait deux minutes de pause. Quelle durée jusqu’à la cent quatre-vingtième pièce, sans pause finale, en minutes ?

A. \(13\)  
B. \(15\)  
C. \(11\)  
D. \(9\)  

### F17

A termine seul en cinq heures, B en dix. Ils alternent une heure chacun, A commençant. Quelle est la durée totale exacte, en heures ?

A. \(\frac{13}{2}\)  
B. \(7\)  
C. \(6\)  
D. \(\frac{20}{3}\)  

### F18

Les débits des paires A+B, A+C et B+C valent vingt, vingt-six et trente unités/h. Quel est le débit de C seul ?

A. \(18\)  
B. \(38\)  
C. \(12\)  
D. \(36\)  

### F19

Une machine devait produire trois cent soixante objets en six heures. Après trois heures au rythme prévu, son débit augmente de cinquante pour cent. Quelle est la durée totale en minutes ?

A. \(270\)  
B. \(360\)  
C. \(300\)  
D. \(240\)  

### F20

Un lot contient cent vingt pièces fabriquées, dont exactement dix pour cent sont rejetées. Combien sont utilisables ?

A. \(120\)  
B. \(108\)  
C. \(110\)  
D. \(12\)  

<details><summary>Corrigé raisonné de la mission finale</summary>

| Item | Réponse | Raisonnement | Reprise |
|---|---|---|---|
| F1 | A | 8×3/2=12. | S1 |
| F2 | B | Quatre-vingt-dix secondes valent une minute et demie : deux fois 1,5. | S1 |
| F3 | C | Débit=180/3=60 pièces par heure. | S1 |
| F4 | C | Le temps est proportionnel à la fraction de tâche : 12×2/3. | S2 |
| F5 | D | Débit commun un sixième plus un tiers, soit un demi ; durée deux heures. | S3 |
| F6 | D | Le temps commun est trois heures ; A fait trois quarts de tâche. | S3 |
| F7 | A | Reste soixante litres au débit net six : dix minutes. | S4 |
| F8 | D | Rendement trente pièces par machine et heure ; 5×4×30=600. | S5 |
| F9 | C | Débit total dix-huit, partagé en trois parts ; B en représente une. | S6 |
| F10 | A | Débit de B=1/3−1/12=1/4 ; durée quatre heures. | S9 |
| F11 | C | Pompe vingt L/h, débit net douze ; sortie huit L/h. | S9 |
| F12 | C | Après un sixième fait, reste cinq sixièmes au débit un quart : dix tiers d’heure supplémentaires, total treize tiers. | S7 |
| F13 | A | Un quart déjà rempli ; reste trois quarts au débit un huitième, soit six heures de plus. | S8 |
| F14 | A | Travail total trente-six journées-personne, douze faites ; reste vingt-quatre à six personnes, donc quatre jours de plus. | S8 |
| F15 | C | Quatre fournées complètes de six minutes. | S10 |
| F16 | A | Trois blocs de soixante pièces : neuf minutes actives et deux pauses de deux minutes. | S10 |
| F17 | A | Chaque cycle fait trois dixièmes. Après six heures, neuf dixièmes sont faits ; A finit en une demi-heure. | Avancé A |
| F18 | A | 2C=26+30−20=36 ; C=18. | Avancé B |
| F19 | C | Cent quatre-vingts objets restent, à quatre-vingt-dix par heure : deux heures de plus, cinq heures au total. | S6 et S7 |
| F20 | B | Douze rejetées, donc cent huit utilisables. Le taux donné décrit ici ce lot exact. | Avancé C |

</details>

## Votre bilan — Revenir à la bonne structure

Une erreur peut porter sur le modèle, le calcul, une unité, un rang, un événement ou la demande finale. Reprenez le passage indiqué, formulez la règle et ses conditions en une phrase, puis essayez une variante sans aide. Une réponse correcte après lecture du corrigé reste une réussite accompagnée jusqu’à confirmation sur un autre énoncé. Ce bilan ne prédit pas une note officielle à l’examen.

## Votre fiche de révision

| Situation | Geste à retenir |
|---|---|
| Cadence | Quantité / durée ; quantité= cadence × durée |
| Tâche faite seul en a | Débit 1/a tâche par unité de temps |
| Travail simultané | Somme des cadences, pas somme des durées |
| Entrées/sorties | Cadences signées ; contrôle vide/plein |
| Agents identiques | Q=mrt ; unité et rendement communs |
| Changement de phase | Calculer travail fait, reste, nouvelle cadence |
| Cadence cachée | Soustraire les cadences connues puis inverser si une durée est demandée |
| Alternance | Cycles complets puis éventuelle phase finale partielle |
| Lots livrés en fin de cycle | Ne compter que les cycles terminés pour la production disponible |
| Pauses | Compter celles réellement placées avant l’achèvement demandé |
| Paires AB,AC,BC | Débit total = moitié de la somme des débits des trois paires |
| Rebut | Production utile distincte de production brute ; préciser déterministe ou aléatoire |

**Prochaine étape : les suites et les régularités.** Conservez le même réflexe : définir les objets, les unités et les conditions avant de choisir une formule.
