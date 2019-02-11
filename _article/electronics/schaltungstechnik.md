---
title: schaltungstechnik
---







# Schaltungstechnik

Die Schaltungstechnik beschäftigt sich mit der Analyse elektronischer Schaltungen. 
Dafür wird eine reale Schaltung als abstraktes Netzwerk aus Bauelementen und ideal leitenden Verbindungsdraht modelliert.
Dieses Netzwerk wird durch seine Verbindungsstruktur und durch die Operationsbeschreibungen der enthaltenen Bauelemente vollständig beschrieben.
Die Beschreibung liefert die Arbeitspunkte also die Spannungs- und Stromwerte bei den die Schaltung real betrieben werden kann.

# Allgemeines

## Die vier zentralen Größen $u,i,q,\Phi$
... beschreiben die Wirkungsweise von elektronischen Bauelementen.\\ 

| Größe | | Definition|
|--------|--------|--------|--------|
|Spannung | $u$ | Potentialdifferenz. Richtung: Von hohem zu niedrigen Potential.|
|Stromfluss | $i$ | Bewegte Ladung. Richtung: Bewegungsrichtung positiver Ladung.|
|Ladung | $q$ | Elementare Eigenschaft von Materie. Es gibt positive und negative Ladung.|
|Magnetischer Fluss | $\Phi$ | Elementare Eigenschaften von elektr. magn. Feldern. |


### Allgemeine Zusammenhänge $u,i,q,\Phi$
Ladung und Strom beschreiben den Zustand der Materie.

Spannung und magn. Fluss beschreiben den Zustand des elekt. magn. Feldes.\\ 

| $i(t) = \dot q(t)$ | $[i]=A$|
|--------|--------|
|$q(t) = q(t_0) + \int_{t_0}^t i(\tau) \mathrm d\tau$	| $[q]=As=C$ |
|$u(t) = \dot \Phi(t)$ | $[u]=V$|
|$\Phi = \Phi(t_0) + \int_{t_0}^t u(\tau) \mathrm d\tau$ | $[\Phi]=Vs=Wb$  |




## Bauelemente allgemein
Ein elektronisches Bauelement besitzt zwei oder mehr Anschlüsse.

Merke: Jedes Bauelement kann als Teilschaltung und jede Teilschaltung als Bauelement betrachtet werden! Es gibt resistive und reaktive Bauelemente. \\ 

| resistives Bauteil | reaktives Bauteil |
|--------|--------|
|speichert keine Energie | speichert Energie |
|Verhält sich immer gleich | Verhalten abhänging vom vorherigen Zustand|
|Beschreibung durch $u$ **und** $i$ | Beschreibung durch $q$ **oder** $\Phi$|
|Es gibt nur eine Art | Es gibt drei Arten  |


### Arten von Bauelementen
| Art | Symbol | Beschr. | linear | Beispiel|
|--------|--------|--------|--------|--------|
|Resistivität | <figure><img src="Resistivitat.svg" /></figure> | $f_R(u,i)$  | $u = U_0 + R \cdot i$ | PN-Diode|
|Kapazität | <figure><img src="Kapazivitat.svg" /></figure> | $f_C(u,q)$ | $q = Q_0 + C \cdot u$ | Kondensator|
|Induktivität | <figure><img src="Induktivitat.svg" /></figure> | $f_L(i,\Phi)$ | $\Phi = \Phi_0 + L \cdot i$ | Spule|
|Memristivität | <figure><img src="Memristivitat.svg" /></figure> | $f_M(q,\Phi)$ | $\begin{array}{l}\Phi = \Phi_0 + M \cdot q  \\ u = U_0 + M \cdot i \end{array}$ | Memristor |




## Schaltung und Netzwerkgraph


Der gerichtete Netzwerkgraph stellt die Verbindungsstruktur einer Schaltung durch $n$ Knoten (node) und $b$ Verbindungskanten (branch) mit Richtungspfeilen dar.

Jedes Bauelement mit zwei Anschlüssen entspricht einer Verbindungskante. Ein Knoten ist dort, wo ein oder mehr Anschlüsse von Bauteilen durch ideal leitenden Draht miteinander verbunden sind.
Verbundene Anschlüsse entsprechen einem Kurzschluss, nicht verbundene Anschlüsse einem Leerlauf!
\begin{figure}[ht]
\centering
<figure><img src="Netzwerkgraph.svg" /></figure>
\caption{Netzwerk und Graph, $n = 5$, $b = 7$}
\label{fig1}
\end{figure}
### Wichtige Begriffe
\begin{description}		\item[Zählpfeile:] Zeigen die gemeinsame(assoziierte) Zählrichtung von Stromfluss und Spannungsabfall zwischen zwei Knoten an, unabhängig von den tatsächlichen Richtungen(Vorzeichen).
\item[Masse(Erdung) $\perp$:] Bezugspunkt des elektr. Potentials mit Potential $0V$
\item[Kurzschluss(KS):] ideal leitender Draht. $u_{KS} = 0$, $i_{KS}=$beliebig
\item[Leerlauf(LL):] ideal isolierende Luft. $u_{LL}=$beliebig, $i_{LL} = 0$
\item[Tor:] Ein Tor bilden zwei Anschlüsse bei denen der Stromzufluss des einen Anschluss gleich dem Stromabfluss des anderen Anschluss entspricht. $i_{in} = i_{out}$
\end{description}	
Um die Betriebspunkte einer Schaltung zu bestimmen sind $2b$ linear unabhängige Gleichungen nötig. Man erhält diese $2b$ Gleichungen aus den Beschreibungen der Bauelemente und den Kirchoff Gleichungen.



## Die Kirchoffgesetze
... beschreiben die Verbindungsstruktur eines Netzwerks und liefern $b$ Gleichungen. Sie beziehen sich nur auf die Spannung $u$ und den Strom $i$.

### Kirchoffsches Stromgesetz (\bf{KCL)}
In einem elektronischen Netzwerk aus konzentrierten Elementen addiert sich zu jedem Zeitpunkt die Summe aller aus einem Knoten herausfließenden Ströme zu null.

### Kirchoffsches Spannungsgesetz (\bf{KVL)}
In einem elektronischen Netzwerk aus konzentrierten Elementen addiert sich zu jedem Zeitpunkt die Summe aller Spannungen zwischen Knotenpaaren, die einen geschlossenen Umlauf(Masche) bilden, zu null.

### Übersicht
| | $\underset{\text{Kirchoff's Current Law}}{\text{Stromgesetz **KCL**}}$ | $\underset{\text{Kirchoff's Voltage Law}}{\text{Spannungsgesetz **KVL**}}$ |
|--------|--------|--------|
|Regel	| Knotenregel | Maschenregel|
|| \boxed{ \sum\limits_{Knoten} i_k (t) = 0 } | \boxed{ \sum\limits_{Masche} u_m (t) = 0 } |
|Vorzeichen | rausfließende positiv | in Umlaufrichtung positiv |
|Maxwell:	| $\mathrm{div}\, \vec j = 0$ | $\mathrm{rot}\, \vec E = 0$ |
|$b$ Gleichungen | $(n-1)$ | $b-(n-1)$  |


## Knoteninzidenzmatrix
Knoteninzidenzmatrix: $A\in\mathbb S^{n\times b}$ $A=[E_{n-1}\ A_v] $ $A\cdot i = 0$





## Arbeitspunkt
Der Arbeitspunkt ist derjenige Betriebspunkt, in dem sich die Schaltung befindet, wenn alle Kleinsignalquellen(Wechselquellen) gerade die Spannung $0V$ bzw. den Strom $0A$ liefern.

Gesteuerte Quellen sind quellenfrei. Sie sind demnach keine unabhängigen Quellen und zählen somit weder als Konstant- noch als Wechselquellen. Sie werden also in keinem der Ersatzschaltbilder zu Null gesetzt.

## Kurzschluss/Leerlaufmethode
Um eine bestimme Beschreibungsform eines $n$-Tores zu bestimmen kann man wie folgt vorgehen:

Bei der KS/LL Methode werden alle steuernden Größen bis auf eine an den einzelnen Toren zu null gesetzt(aufgeprägt)
Dadurch kann man die Ausgangstorgrößen jeweils in abhängigkeit von nur einer steuernden Größe berechnen.
Um die Quellen zu berechnen setzt man alle steuernden Torgrößen zu null.
Am Schluss alles zusammenaddieren (wegen Superpositionsprinzip)



## Kleinsignalanalyse
Da diese Abweichung als klein angenommen wird, verwendet man die Linearisierte

Im Kleinsignalersatzschaltbild werden also alle nichtlinearen Eintore durch einen Leitwert $g$ oder Widerstand $r$ ersetzt.




# Wichtige resistive Eintore
Ein Tor bilden zwei Anschlüsse bei denen der Stromzufluss des einen Anschluss gleich dem Stromabfluss des anderen Anschluss entspricht. $i_{in} = i_{out}$. Jeder Zweipol ist ein Eintor.

<figure><img src="Eintor.svg" /></figure>

Allgemeine Beschreibungen:

| Beschreibung	| nicht linear | linear |
|--------|--------|--------|
|**Implizit** | $f_{\mathcal F}(u,i)=0$ | $u-U_0 - Ri = 0$ |
|**Parametrisch** | $u=u_{\mathcal F}(\lambda)$  $i=i_{\mathcal F}(\lambda)$ | $u = U_0 + R\lambda$  $i=\lambda$ </br> \addlinespace[10pt]
**Explizit** |
|Widerstandsbeschr. |  $ u=r_{\mathcal F}(i) $ | $u=U_0 + Ri$ |
|Leitwertbeschr.	| $i=g_{\mathcal F}(u)$ | $i=I_0 + Gu$  |


## Leerlauf und Kurzschluss
Eigenschaften: verlustlos, streng linear, dual zueinander

|  Leerlauf </br> {% inlineimage LL.svg %} | $i = 0  u=beliebig$ | {% inlineimage Kennlinie_LL.svg %}  |
|--------|--------|--------|
| Kurzschluss </br> {% inlineimage KS.svg %} | $u = 0  i = beliebig$ |  {% inlineimage Kennlinie_KS.svg %}  |




## Nullator und Norator
... sind keine realen Bauteile sondern dienen ausschließlich zur Modellierung. Sie können nur paarweise vorkommen und sind dual zu sich selbst.

|  Nullator </br> {% inlineimage Nullator.svg %} | $u = 0  i = 0$ | {% inlineimage Kennlinie_Nullator.svg %} |
|--------|--------|
| Norator </br> {% inlineimage Norator.svg %} | $u = beliebig  i=beliebig$ | {% inlineimage Kennlinie_Norator.svg %}
\end{tabular}	


## Ohmscher Widerstand
Eigenschaften: passiv, ungepolt, streng linear.

|  Widerstand </br> {% inlineimage Widerstand.svg %}| $\begin{array}{cc} u = R \cdot i  \\ i = G \cdot u \end{array}  G = \frac{1}{R}$ | {% inlineimage Kennlinie_Widerstand.svg %}  |
|--------|--------|--------|


## Diode
Eigenschaften: Gepolt 

|  ideale Diode </br> {% inlineimage Diode.svg %}| $\begin{array}{ll} u = 0 | \text{falls } i > 0  \\ i = 0 | \text{falls } u < 0\end{array}$ | {% inlineimage Kennlinie_Diode.svg %} |
|--------|--------|--------|
| reale Diode </br> {% inlineimage rDiode.svg %}| $\begin{array}{ll} u_D = u_T \cdot \ln \left(\frac{i_D}{I_S} + 1 \right)  \\ i_D = I_S \cdot \left( \exp \left(\frac{u_D}{U_T}\right) -1 \right) \end{array}$ | {% inlineimage Kennlinie_rDiode.svg %} |
| Photodiode </br> {% inlineimage photoDiode.svg %}| $i = I_S \cdot \left( \exp \left(\frac{u_D}{U_T}\right) -1 \right) - i_L$ | {% inlineimage Kennlinie_photoDiode.svg %}  |


## Unabhängige Quellen
... sind Quellen die unabhängig von allen Bauelementen sind.

|  Spannungsquelle </br> {% inlineimage Spannungsquelle.svg %}| $\begin{array}{ll} u = U_0  \\ i = beliebig \end{array}$ | {% inlineimage Kennlinie_Spannungsquelle.svg %} |
|--------|--------|--------|
| Stromquelle </br> {% inlineimage Stromquelle.svg %}| $\begin{array}{ll} u = beliebig  \\ i = I_0 \end{array}$ | {% inlineimage Kennlinie_Stromquelle.svg %}  |


Quellwandlung:

<figure><img src="Quellwandlung.svg" /></figure>  <figure><img src="Kennlinie_Quellwandlung.svg" /></figure>

## Gesteuerte Quellen
... werden durch Spannungen oder Ströme innerhalb der Schaltung gesteuert. Schreibweise: $xSy$ $x$ **s**teuert $y$

|  USI </br> {% inlineimage Spannungsquelle.svg %}| $\begin{array}{ll} u = U_0  \\ i = beliebig \end{array}$ | {% inlineimage Kennlinie_Spannungsquelle.svg %} |
|--------|--------|--------|
| ISI </br> {% inlineimage Stromquelle.svg %}| $\begin{array}{ll} u = beliebig  \\ i = I_0 \end{array}$ | {% inlineimage Kennlinie_Stromquelle.svg %}  |


# Wichtige resistive Zweitore
Ein Zweitor besteht aus zwei Eintoren.

<figure><img src="Zweitor.svg" /></figure>

## Beschreibungsformen von Zweitoren
| Beschreibung	| nicht linear | linear |
|--------|--------|--------|
|**Implizit** | $f_{\mathcal F}( \ul u, \underline i) = \ul 0$ | $\mat{ \ma M\ \ma N} \cdot \left. \begin{matrix} \ul u  \\  \ul i \end{matrix}  \right] = 0$ |
|**Parametrisch** | $\begin{array}{l} \ul u = u_{\mathcal F}(\ul \lambda)  \\ \ul i=i_{\mathcal F}(\ul \lambda) \end{array}$ | $\vect{ \ul u </br> \ul i } = \begin{bmatrix}  \ma U  \\ \ma I \end{bmatrix} \cdot \ul \lambda$ </br> \addlinespace[10pt]
**Explizit** |
|Widerstandsbeschr. |  $\begin{array}{ll} u_1=r_1(i_1,i_2)  \\ u_2=r_2(i_1,i_2) \end{array}$ | $\vect{ u_1 </br> u_2} = \vect{ U_0 </br> U_0} + \ma R \vect{ i_1  \\ i_2} $ |
|Leitwertbeschr.	| $\begin{array}{ll} i_1=g_1(u_1,u_2)  \\ i_2=g_2(u_1,u_2) \end{array}$ | $\vect{ i_1 </br> i_2} = \vect{ I_0 </br> I_0} + \ma G \vect{ u_1  \\ u_2} $  |


Explizit: 

| Widerstandsbeschreibung | Hybridbeschreibung | Kettenbeschreibung |
|--------|--------|--------|
|$\begin{array}{ll} u_1=r_1(i_1,i_2) </br> u_2=r_2(i_1,i_2) \end{array}$ | $\begin{array}{ll} u_1=h_1(i_1,u_2)  \\ i_2=h_2(i_1,u_2) \end{array}$ | $\begin{array}{ll} u_1=a_1(u_2,-i_2)  \\ i_1=a_2(u_2,-i_2) \end{array}$ </br> \addlinespace[0.5cm]
Leitwertbeschreibung | Inverse Hybridbeschr. | Inverse Kettenbeschr. |
|$\begin{array}{ll} i_1=g_1(u_1,u_2) </br> i_2=g_2(u_1,u_2) \end{array}$ | $\begin{array}{ll} i_1=h'_1(u_1,i_2)  \\ u_2=h'_2(u_1,i_2) \end{array}$ | $\begin{array}{ll} u_2=a'_1(u_1,-i_1)  \\ i_2=a'_2(u_1,-i_1) \end{array}$  |


### Übertrager (z.B. Transformator

$$A=\begin{bmatrix} \text{ü} & 0 \\ 0 & \frac{1}{\text{ü}} \end{bmatrix}$$


$$R_{in}=\frac{u_1}{i_1}=\text{ü}^2 R_L$$


Eigenschaften: verlustlos(ideal)

### Gyrator
Der Gyrator wandelt das an Tor 1 geschaltete Bauteil in das duale Bauteil an Tor 2 um.

$$\mathcal F_{in}=\mathcal F^d$$



$$A=\begin{bmatrix} 0 & R_1 \\ \frac{1}{R_2} & 0 \end{bmatrix}$$


Eigenschaften: streng linear, verlustlos für $R_1=R_2$

### Negativ-Immitanz-Konverter

$$A=\begin{bmatrix} -k & 0 \\ 0 & \frac{1}{k} \end{bmatrix}$$


$R_{in}=\frac{u_1}{i_1}=-k^2R$  $-k^2 R:$\ negativer Widerstand(et voilà xD)

Eigenschaften: streng linear, aktiv

### Transistor
Ein **Trans**fer Res**istor** ist ein elektronischer Schalter und Verstärker.

Wichtige Transistorschaltungen:

## Bipolar-Transistor


## MOS-FET
Metal Oxide Silicium - Field Effect Transistor.

## Operationsverstärker (OP-AMP)
Der Operationsverstärker ist ein elektronischer Verstärker.

| Invertierender Verstärker | Nichtinvertierender Verstärker | Spannungsfolger|
|--------|--------|--------|
|<figure><img src="invamp.svg" /></figure> | <figure><img src="notinvamp.svg" /></figure> | <figure><img src="voltagefollower.svg" /></figure>|
|$u_{out} = \frac{-R_0}{R_1} u_{in}$ | $u_{out} = \left( 1+ \frac{R_0}{R_1} \right) u_{in}$ | $u_{out} = u_{in}$  $i_{in} = 0$</br> 
Differenzierer | Integrierer | Addierer |
|<figure><img src="differenzierer.svg" /></figure> | <figure><img src="integrierer.svg" /></figure> | |
|$u_{out} = -RC \cdot \dot u_{in}$ | $u_{out} = -\frac{1}{RC} \int\limits^{t_1}_{t_0} u_{in} \diff t$ | $u_{out} = -R_0 \sum \frac{u_i}{R_i}$|
|Logarithmierer | Exponenzierer | NIK |
|<figure><img src="logarithmierer.svg" /></figure> | <figure><img src="exponenzierer.svg" /></figure> | <figure><img src="NIK.svg" /></figure>|
|$u_{out} = -U_T \ln \frac{u_{in}}{R \cdot I_S}$ | $u_{out} = -R \cdot I_S \exp \left( \frac{u_{in}}{U_T} \right)$ | $u = -R_L \cdot i$  |





## Beschreibungsformen von $n$-Toren
\ul{Resistive(Gedächtnislose)} {Eintore(Zweipole)}:

| Beschreibung	| nicht linear | linear |
|--------|--------|--------|
|Implizit | $f_{\mathcal F}( \ul u, \underline i) = \ul 0$ | $\mat{ \utilde M\ \utilde N} \cdot \left. \begin{matrix} \ul u  \\  \ul i \end{matrix}  \right] = 0$ |
|Parametrisch | $\begin{array}{l} \ul u = u_{\mathcal F}(\ul \lambda)  \\ \ul i=i_{\mathcal F}(\ul \lambda) \end{array}$ | $\vect{ \ul u </br> \ul i } = \begin{bmatrix}  \utilde U  \\ \utilde I \end{bmatrix} \cdot \ul \lambda$ </br> \addlinespace[10pt]
Explizit |
|Widerstandsbeschr. |  $\begin{array}{ll} u_1=r_1(i_1,i_2)  \\ u_2=r_2(i_1,i_2) \end{array}$ | $\vect{ u_1 </br> u_2} = \vect{ U_0 </br> U_0} + \ma R \vect{ i_1  \\ i_2} $ |
|Leitwertbeschr.	| $\begin{array}{ll} i_1=g_1(u_1,u_2)  \\ i_2=g_2(u_1,u_2) \end{array}$ | $\vect{ i_1 </br> i_2} = \vect{ I_0 </br> I_0} + \ma G \vect{ u_1  \\ u_2} $  |


Implizite Beschreibung ist nicht eindeutig und somit meist unpraktisch!

Kapazitive Eintore(Zweipole):

| Beschreibung	| nicht linear | linear | streng linear|
|--------|--------|--------|--------|
|Implizit | $f_{\mathcal F}(q,u)=0$ |  | $R i - u=0$|
|Parametrisch | $i=i_{\mathcal F}(\lambda)$  $u=u_{\mathcal F}(\lambda)$ | | |
|Explizit |  $u=r_{\mathcal F}(i)$ | $u=U_0 + Ri$ | $q=Cu$|
|| $i=g_{\mathcal F}(u)$ | $i=I_0 + Gu$ | $u=C^-1 u$ |


Resistive Zweitore:

Implizite Beschreibung(Kernbeschreibung):

$$\mathcal F=Kern [M\ N]:= \left\{ \left. \left. \begin{matrix} u \\ i \end{matrix} \right]\ \right|\ [M\ N] \cdot \left. \begin{matrix} u \\ i \end{matrix}  \right] = 0 \right\}$$


Parametrische Beschreibung(Bildbeschreibung):

$$\mathcal F=Bild \begin{bmatrix} U \\ I \end{bmatrix}:= \left\{ \left. \left. \begin{matrix} u \\ i \end{matrix} \right]\ \right|\ \left. \begin{matrix} u \\ i \end{matrix} \right] = \begin{bmatrix} U \\ I \end{bmatrix} \cdot c,\ c\in\mathbb R^n \right\} $$


Explizite Beschreibung:



| Widerstandsbeschreibung | Hybridbeschreibung | Kettenbeschreibung |
|--------|--------|--------|
|$\begin{array}{ll} u_1=r_1(i_1,i_2) </br> u_2=r_2(i_1,i_2) \end{array}$ | $\begin{array}{ll} u_1=h_1(i_1,u_2)  \\ i_2=h_2(i_1,u_2) \end{array}$ | $\begin{array}{ll} u_1=a_1(u_2,-i_2)  \\ i_1=a_2(u_2,-i_2) \end{array}$ </br> \addlinespace[0.5cm]
Leitwertbeschreibung | Inverse Hybridbeschr. | Inverse Kettenbeschr. |
|$\begin{array}{ll} i_1=g_1(u_1,u_2) </br> i_2=g_2(u_1,u_2) \end{array}$ | $\begin{array}{ll} i_1=h'_1(u_1,i_2)  \\ u_2=h'_2(u_1,i_2) \end{array}$ | $\begin{array}{ll} u_2=a'_1(u_1,-i_1)  \\ i_2=a'_2(u_1,-i_1) \end{array}$  |





Umrechnen von Beschreibungsformen:

Explizit nach Parametrisch: Jede steuernde Größen mit einem eigenen Parameter gleichsetzen: $u=1V\cdot c_1$, $i=1A\cdot c_2$

Paramterisch nach Explizit: Steuernde Größen nach Parameter auflösen und in Beschreibung der Ausgabegröße einsetzen.

$$\left. \begin{matrix} u_1 \\ i_1 \end{matrix} \right] = \left. \begin{matrix} f_1(\lambda_1,\lambda_2) \\ f_2(\lambda_1,\lambda_2) \end{matrix} \right] \rightarrow \left. \begin{matrix} \lambda_1 \\ \lambda_2 \end{matrix} \right] = \left. \begin{matrix} h_1(u_1,i_1) \\ h_2(u_1,i_1) \end{matrix} \right]$$


## Linearisierung:
Da sich viele Bauteile nicht linear zu Strom und Spannung verhalten, werden diese Bauteilbeschreibungen im Arbeitspunkt(AP) linearisiert um eine einfache Beschreibung zu erreichen.
Ströme und Spannungen werden in einen Gleichanteil ($I_{AP}$ bzw $U_{AP}$) und einen Wechselanteil ($\Delta i$ bzw $\Delta u$) aufgeteilt.

$$i=I_{AP}+\Delta i \  \  \Delta i=I_{AP}-i$$


$$u=U_{AP}+\Delta u \  \  \Delta u=U_{AP}-u$$


Um eine Linearisierung durchführen zu können, müssen die partiellen Ableitungen einer beliebigen Beschreibungsform am Arbeitspunkt existieren.

Kleinsignal: $\delta i=G_F \cdot \Delta u$ \ \    Großsignal: $i=I_{AP}+G_F(U_{AP}) \cdot (u-U_{AP})$	

$$i_k \approx I_k + \left.\frac{\partial g_k(u_1,\dotsc,u_j)}{\partial u_1}\right|_{AP}\cdot \Delta u_1  + \dotsc + \left.\frac{\partial g_k(u_1,\dotsc,u_j)}{\partial u_j}\right|_{AP}\cdot \Delta u_j$$


## Vorgehensweise zur Analyse resistiver Netzwerke

1. Netzwerkgraph erstellen (Baum einzeichnen)
1. Kirchoff'sche Spannungs- und Stromgleichungen aufstellen (KCL + KVL)
1. Spannungs- bzw. Strombeschreibung der Bauelemente aufstellen
1. Das entstandene LGS mit $2b$ Gleichungen nach den gewünschten Klemmgrößen auflösen.

1. Arbeitspunkt bestimmen und linearisieren.


Bemerkung: Nur lin. unabh. KCL und KVL verwenden, da sonst leicht im Kreis gerechnet wird.



# Eigenschaften

Rezeprozität, Matrix transponierbar(r12=r21). Stärker: Symmetrie: r11=r22
Merke: Alle Mehrtore die nur aus R, L, C bestehen sind reziprok!
### Gesteuert
Ein Bauelement ist von einer Größe gesteuert, wenn die jeweilige explizite Beschreibung existiert.

Stromgesteuert: $u=\mathcal R(i)$ 

Spannungsgestuert: $i=\mathcal G(i)$

Ladungsgesteuert: $u=\mathcal C^{-1}(q)$

Flussgesteuert: $i=\mathcal L^{-1}(\Phi)$

### Passiv, Aktiv, Verlustlos
Leistung: $P(t)=\ul u^T \cdot \ul i=u_1 i_1 + \dotsc + u_n i_n$ 

Für n-Tore gilt: 

| Passiv: | $\forall \mathcal F(u,i): P(t)\ge 0$ | $\Rightarrow$ Kennlinie nur I. und III. Quadrant|
|--------|--------|--------|
|Aktiv: | $\exists \mathcal F(u,i): P(t)<0$ | $\Rightarrow$ Kennlinie im II. oder IV. Quadrant|
|Verlustlos: | $\forall \mathcal F(u,i): P(t)=0$ | $\Rightarrow$ Kennlinie nur auf $u$- und/oder $i$-Achse. |


inkremental passiv:

letztendlich passiv: $\exists U,I>0 \ \forall (u,i) \in \mathcal F : (|u| > U \lor |i| > I \ \Rightarrow \ ui > 0)$

Alle realen Bauteile sind letztendlich passiv, da sonst unendlich viel Energie entstehen würde.

reaktive Elemente: $W(t_1,t_2) = \int_{t1}^{t2} P(t) \mathrm dt$

Kapazitiv: $W_C(t_1,t_2) = \int_{q(t_1)}^{q(t_2)} u(q) \mathrm dq = \int_{u(t1)}^{u(t2)} u\cdot q'(u) \mathrm du$

Spezialfall: linear: $W_C(t_1,t_2) = \frac{1}{2C} \cdot (q_2^2 - q_1^2)$

Induktiv: $W_L(t_1,t_2) = \int_{\Phi(t_1)}^{\Phi(t_2)} i(\Phi) \mathrm d\Phi = \int_{i(t1)}^{i(t2)} i\cdot \Phi'(i) \mathrm di$

Spezialfall: linear: $\frac{1}{2L} \cdot (\Phi_2^2 - \Phi_1^2)$

Energiespeicherung im Betriebspunkt: $E_C (u_1) = \frac{1}{2}C u_1^2  E_L = \frac{1}{2}L i_1^2$
Energie $W(t_1,t_2) = 0$ für spannungs- \& ladungsgesteuerte Kapazität, bzw. für strom- \& flussgesteuerte Induktivität! (Keine Histerese Schleifen) 

Reaktive Elemente sind verlustlos, wenn die Kennlinie keine geschlossene Umläufe hat.

Reale Kapazitäten und Induktivitäten sind nicht verlustlos, da ein Isolator nicht perfekt isoliert und ein Draht nicht perfekt leitet.


**Relaxationspunkt $t^*$:** $\forall t_1: \int_{t*}^{t_1} P(t) \mathrm dt \ge 0$

Punkt mit niedrigster Energie.

Merke: Alle Mehrtore die nur aus passiven Bauelementen(R,C,L,...) bestehen, sind selbst passiv!
### Dualität: $\mathcal F^d(u,i)=\mathcal F\left(i\cdot R_d,\frac{u}{R_d}\right)$  ($u$ und $i$ vertauscht) $R_d=\frac{V}{A}$ 

Die Eigenschaften Stromgesteuert oder Spannungsgesteuert werden vertauscht.

Die Eigenschaften passiv, aktiv, verlustlos, umkehrbar und zeitvariant werden beibehalten 

$f(u,q)=f^d(R_d i, \frac{1}{R_d} \Phi(t))$  $f(i,\Phi) = f^d (\frac{1}{R_d} u, R_d q)$


### Symmetrie (Umkehrbarkeit)
Ein Zweitor ist symmetrisch bzw umkehrbar, falls: 

$F(u,i)=F^u(u,i)$ ($u_1=u_2$ und $i_1=i_2$) (Vertauschen der beiden Tore - gleicher Betriebsraum)

Antimetrisch, falls $\mathcal F^u(u,i)=\mathcal F^d(u,i)$ 

Ein Eintor ist punktsymmetrisch bzw. ungepolt, falls 
$\mathcal F(u,i)=\mathcal F(-u,-i)$ (Vertauschte Polung)

$$\mathcal F(u,q)=\mathcal F(-u,-q)$$



$$\mathcal F(i,\Phi)=\mathcal F(-i,-\Phi)$$


### Quellenfreiheit
Ein n-Tor heißt quellenfrei, wenn $0^n \in \mathcal F(u,i)$
### Zeitvarianz
Ein Mehrtor heißt zeitvariant, wenn sich sein Betriebsraum mit der Zeit ändern kann, ansonsten is es Zeitinvariant.





# Verschaltung von Bauelementen




### Verschaltung von Eintoren
Es gibt zwei mögliche Verschaltungen.

| | {Serienschaltung} | {Parallelschaltung} |
|--------|--------|--------|
|allgemein | $\begin{array}{l} u(t)=u_1(t)+u_2(t) </br> i(t)=i_1(t) = i_2(t) </br> q(t)=q_1(t)=q_2(t)  \\ \Phi(t)=\Phi_1(t) + \Phi_2(t)  \end{array}$ | $\begin{array}{l} u_(t)=u_1(t)=u_2(t) </br> i(t)=i_1(t)+i_2(t) </br> q(t)=q_1(t)+q_2(t)  \\ \Phi(t)=\Phi_1(t) = \Phi_2(t) \end{array}$ |
|resistiv | $R=R_1 + R_2$ | $R = \frac{R_1 \cdot R_2}{R_1 + R_2}$ |
|kapazitiv | $C=\frac{C_1 \cdot C_2}{C_1 + C_2}$ | $C=C_1 + C_2$|
|induktiv | $L=L_1 + L_2$ | $L=\frac{L_1 \cdot L_2}{L_1 + L_2}$ </br>
Impedanz | $Z=Z_1 + Z_2$ | $Z = \frac{Z_1 \cdot Z_2}{Z_1 + Z_2}$|
|Admittanz | $Y=\frac{Y_1 \cdot Y_2}{Y_1 + Y_2}$ | $Y=Y_1 + Y_2$ |


Parallel: $\frac{1}{ R_{ges} } = \sum\limits^n \frac{1}{R_i}$

Für $n = 2$: \boxed{ R_1 || R_2 = \frac{R_1 \cdot R_2}{R_1 + R_2} }	



## Verschaltung von Zweitoren
Es gibt sechs mögliche Verschaltungen.

| Verschaltung | allgemein | linear |
|--------|--------|--------|
|Parallelschaltung | $g_{ges}=g_{\mathcal F1}+g_{\mathcal F2}$ | |
|Serienschaltung | $r_{ges}=r_{\mathcal F1}+r_{\mathcal F2}$ | |
|Hybride Verschaltung | $h_{ges}=h_{\mathcal F1}+h_{\mathcal F2}$ | |
|Kettenschaltung | $a_{ges}=a_{\mathcal F1}+a_{\mathcal F2}$  |








### Kettenschaltung

$$\left. \begin{matrix} u_{1\mathcal G} \\ i_{1\mathcal G} \end{matrix} \right]=\left. \begin{matrix} u_{1\mathcal F1} \\ i_{1\mathcal F1} \end{matrix} \right]=a_{\mathcal F1} \left(a_{\mathcal F2}\begin{bmatrix} u_{2\mathcal F2} \\ -i_{2\mathcal F2} \end{bmatrix} \right)$$


streng linear:

$$A_{\mathcal G}=A_{\mathcal F1}\cdot A_{\mathcal F2}$$


$$A'_{\mathcal G}=A'_{\mathcal F2}\cdot A'_{\mathcal F1}$$


## Zusammenschaltung reaktiver Eintore
Parallelschaltung:

KCL: $i=\sum i_k$; KVL: $u = u_1 = u_2 $

$$q = q_0 + \int_{t0}^t i(t') \mathrm dt' = q_{01} + q_{02} + \int_{t0}^t i_1(t') \mathrm dt' + \int_{t0}^t i_2(t') \mathrm dt'$$


$$q(u) = c_1(u) + c_2(u)=c(u)$$


## Knotenspannungsanalyse
\boxed{ \underset{\text{Knotenleitwertsmatrix}}{Y_k} \cdot \underset{\text{Spannungsvektor}}{u_k} = \underset{\text{Stromquellenvektor}}{i_q} }

Vorgehen: 

1. Nicht lineare Elemente linearisieren
1. Nicht spannungsgesteuerte Elemente (dual)wandeln
1. Aufstellen der Leitwertsmatrix $Y_k$
1. Bestimmung des Stromquellenvektors $i_q$



Da Knoten, die über einen Nullator miteinander verbunden sind auf dem selben Potential liegen, werden die beiden Knotenspalten eines Nullators addiert.


## Die Tableau-Gleichung
... beschreibt ein Netzwerk vollständig bezüglich Verschaltung und Bauteilverhalten.

$$T=\begin{bmatrix} A & 0 \\ 0 & B \\ M & N \end{bmatrix}$$


# Quellen
Es gibt Spannungsquellen und Stromquellen. Es gibt Versorgungsquellen und Wechselsignalquellen.






# Schaltung
Eine Schaltung ist ein Netzwerk aus elektronischen Bauelementen.

## Eintore
... sind Bauelemente mit zwei Anschlüssen.



## Zweitore
... sind Bauelemente mit zwei verschalteten Toren und vier Anschlüssen. 


### Zweitormatrizen
| In $\rightarrow$ | $R$ | $G$ | $H$ | $H'$ | $A$ | $A'$ |
|--------|--------|--------|--------|--------|--------|--------|
|$R$ | $\mat{r_{11}  & r_{12}  \\  r_{21}  & r_{22} }$ | $\frac{1}{\mathrm{det} G} \mat{ g_{22}  & -g_{12}  \\  -g_{21}  & g_{11} }$ | $\frac{1}{h_{22}} \mat{ \mathrm{det} H  & -h_{12}  \\  -h_{21}  & 1 }$ | $\frac{1}{h'_{11}} \mat{ 1  & -h'_{12}  \\  -h'_{21}  & \mathrm{det} H' }$ | $\frac{1}{a_{21}} \mat{ a_{11}  & \mathrm{det} A  \\  1  & a_{22} }$ | $\frac{1}{a'_{21}} \mat{ a'_{22}  & 1  \\  \mathrm{det} A  & a'_{11} }$ |
|$G$ | $\frac{1}{\mathrm{det} R} \mat{ r_{22}  & -r_{12}  \\  -r_{21}  & r_{11} }$ | $\mat{g_{11}  & g_{12}  \\  g_{21}  & g_{22} }$ | $\frac{1}{h_{11}} \mat{ 1  & -h_{12}  \\  -h_{21}  & \mathrm{det} H }$ | $\frac{1}{h'_{22}} \mat{ \mathrm{det} H'  & -h'_{12}  \\  -h'_{21}  & 1 }$ | $\frac{1}{a_{12}} \mat{ a_{22}  & -\mathrm{det} A  \\  -1  & a_{11} }$ | $\frac{1}{a'_{12}} \mat{ a'_{11}  & -1  \\  -\mathrm{det} A  & a'_{22} }$ |
|$H$ | $\frac{1}{r_{22}} \mat{ \mathrm{det} R  & r_{12}  \\  -r_{21}  & 1 }$ | $\frac{1}{g_{11}} \mat{ 1  & -g_{12}  \\  -g_{21}  & \mathrm{det} G }$ | $\mat{h_{11}  & h_{12}  \\  h_{21}  & h_{22} }$ | $\frac{1}{\mathrm{det} H'} \mat{ h'_{22}  & -h'_{12}  \\  -h'_{21}  & h'_{11} }$ | $\frac{1}{a_{22}} \mat{ a_{12}  & \mathrm{det} A  \\  -1  & a_{21} }$ | $\frac{1}{a'_{11}} \mat{ a'_{12}  & 1  \\  -\mathrm{det} A  & a'_{21} }$ |
|$H'$ | $\frac{1}{r_{11}} \mat{ 1  & -r_{12}  \\  -r_{21}  & \mathrm{det} R }$ | $\frac{1}{g_{22}} \mat{ \mathrm{det} G  & g_{12}  \\  -g_{21}  & 1 }$ | $\frac{1}{\mathrm{det} H} \mat{ h_{22}  & -h_{12}  \\  -h_{21}  & h_{11} }$ | $\mat{h'_{11}  & h'_{12}  \\  h'_{21}  & h'_{22} }$ | $\frac{1}{a_{11}} \mat{ a_{21}  & -\mathrm{det} A  \\  1  & a_{12} }$ | $\frac{1}{a'_{22}} \mat{ a'_{21}  & -1  \\  \mathrm{det} A  & a'_{12} }$  |



# Resistive Netzwerke
... bestehen nur aus Bauelementen, die keine Energie speichern.
Sie besitzen somit kein Gedächtnis und verhalten sich immer gleich.

## resistive Bauelemente
... werden nur durch Beziehungen zwischen Spannung $u$ und Strom $i$ beschrieben.

Allgemeine Beschreibungen:

| Implizit | Explizit | Parametrisch |
|--------|--------|--------|
|$f(u,i) = 0$ | $\begin{array}{l} u = r(i)  \\ i = g(u) \end{array}$ | $\begin{array}{l} i=i_{\mathcal F}(\lambda)  \\ u=u_{\mathcal F}(\lambda) \end{array}$  |





# Reaktive Netzwerke
\!\! ... enthalten Bauelemente, die Energie speichern können. Ihr Verhalten hängt von ihrem vorherigen Zustand ab.





## Übersicht Bauteilbeschreibungen
| Art | Beschr. | linear |
|--------|--------|--------|
|Resistiv | $f_R(u,i)$  | $u = R \cdot i$|
|Kapazitiv | $f_C(u,q)$ | $q = C \cdot u$ |
|Induktiv | $f_L(i,\Phi)$ | $\Phi = L \cdot i$|
|Memristiv | $f_M(q,\Phi)$ | $\Phi = M \cdot q$ |



## Kapazität und Induktivität

$$q_C(t)= c(u_C) = q_C(t_0) + \int_{t_0}^{t} i_C(\tau)\mathrm d\tau$$


$$\Phi_L(t) = l(i_L) = \Phi_L (t_0) + \int_{t_0}^{t} u_L (\tau)\mathrm d\tau$$


$$i_C(t) = \dot{q_C}(t) = \dot C(t) \cdot u_C(t) + C(t) \cdot \dot u_C(t)$$


$$u_L(t) = \dot{\Phi_L}(t) = \dot L(t) \cdot i_L(t) + L(t) \cdot \dot i_L(t)$$


Zeitkonstante $\tau$

$\tau = RC$  $\tau=GL$

$$1-e^{-1} = 0,63$$


# Dynamische Schaltungen
... enthalten mindestens ein reaktives Bauelement und werden durch differentielle Zustandsgleichungen beschrieben. Reaktive Bauelemente können Energie speichern. Dadurch hängt ihr Verhalten vom vorherigen Zustand ab.

## Reaktive Bauelemente (Reaktanzen)
| Art | Bild | Beschr. | linear |
|--------|--------|--------|--------|--------|
|Resitivität | <figure><img src="Resistivitat.svg" /></figure> | $f_R(u,i)$  | $u = R \cdot i$|
|Kapazitivtät | <figure><img src="Kapazivitat.svg" /></figure> | $f_C(u,q)$ | $q = C \cdot u$ |
|Induktivtät | <figure><img src="Induktivitat.svg" /></figure> | $f_L(i,\Phi)$ | $\Phi = L \cdot i$|
|Memristivität | <figure><img src="Memristivitat.svg" /></figure> | $f_M(q,\Phi)$ | $\Phi = M \cdot q$ |



Elementare Differentialgleichungen:

| Kapazität | Induktivität|
|--------|--------|
|$i_C = C \cdot \dot u_C$ | $u_L = L \cdot \dot i_L$  |



## Dynamisches System
mit $k$ Ausgängen, $n$ Zustandsgrößen und $r$ Erregungen.

| Allgemeine Zustandsgleichung: | \boxed{ \boldsymbol{ \dot {\vec x}}(t) = \ma A \vec x(t) + \ma B \vec v(t) }|
|--------|--------|
|Allgemeine Ausgangsgleichung: | \boxed{ \vec y(t) = \ma C \vec x(t) + \ma D \vec v(t) }|
|Zustandsvariable | $\vec x(t) \in \mathbb R^n$ |
|Ausgangsvariable | $\vec y(t) \in \mathbb R^k$ |
|Erregungsvektor | $\vec v \in \mathbb R^r$ |
|Systemmatrix | $\ma A\in \mathbb R^{n \times n}$ |
|Einkopplungsmatrix | $\ma B \in \mathbb R^{n \times r}$ |
|Auskopplungsmatrix | $\ma C \in \mathbb R^{k \times n}$ |
|Durchgangsmatrix | $\ma D \in \mathbb R^{k \times r}$  |


#### Gleichgewichtspunkte $\vec p$: sind konstane Lösungen eines dynamischen Systems: $\boldsymbol{\dot {\vec x}}(t) |_{\vec x = \vec p} = 0$

Gleichgewichtspunkte $\vec x_\infty$: $\boldsymbol{ \dot {\vec x}} = 0 = \ma A \vec x_\infty + \ma B \vec v$

Gleichgewichts-/Fixpunkte bestimmen: $\vec x_\infty = \ma A^{-1} \ma B \vec v$

## Schaltungen ersten Grades
... sind Schaltungen mit **entweder** einer Induktivität **oder** einer Kapazität.



Eindimensionale Zustandsgleichung: \boxed{ \dot x(t) = A x(t) + Bv(t) }

Zustandsvariable $x = u_C / i_L$  Erregung $v = u_0 / i_0$

Gleichgewichts-/Fixpunkt $x_\infty = A^{-1} Bv$



Konstante Erregung ($v = 0$): $\dot x(t) = -\frac{1}{\tau} x(t) + \frac{1}{\tau} x(t_\infty)$

| | kapazitiv | induktiv|
|--------|--------|--------|
|Erregung | $u_c(t_\infty)=U_0$ | $i_L(t_\infty)=I_0$|
|Reaktanz | $i_C = C \dot u_C$ | $u_L = L \dot i_L$|
|Zeitkonstante | $\tau = RC$ | $\tau = GL$|
|Gleichgewicht $x_\infty$ | $u_C(t_\infty)=U_0$ | $i_L(t_\infty)$|
|DGL 1. Grades  |

$\tau < 0:$ instabil

$\tau > 0$ stabil



Lösung: $x(t) = x(t_\infty) + \bigl[ x(t_0) - x(t_\infty) \bigr] \cdot exp \left( - \frac{t-t_0}{\tau} \right)$



### Abschnittsweise konstante Erregung
### Stückweise lineare Schaltung
### Dynamischer Pfad
| kapazitiv | induktiv |
|--------|--------|
|$u_C$ stetig, $i_C$ springt | $i_L$ stetig, $u_L$ springt |
|$\dot u(t) = - \frac{1}{C} \cdot i(t)$ | $\dot i(t) = - \frac{1}{L} \cdot u(t)$ |
|$i$ pos. $\Rightarrow$ $u$ fällt | $u$ pos. $\Rightarrow$ $i$ fällt |
|$i$ neg. $\Rightarrow$ $u$ steigt | $u$ neg. $\Rightarrow$ $i$ steigt  |




Gleichgewichtspungte(GGP): Zustandsgröße bleibt konstant. ($\ne$ Relaxationspunkt)

Es gibt erreichbare(reele) und unerreichbare(virtuelle) GGPs die jeweils stabil oder instabil sind.
Bei stabilen $RC(GL)$ Schaltungen endet der dynamische Pfad auf der $u$-Achse($i$-Achse).

1. Reaktanzen zusammenfassen, falls sie direkt parallel oder seriell geschaltet sind.
1. resistiven Anteil der Schaltung zusammenfassen.(ESB: Helmholz-Thévenin(C) / Mayer-Norton(L))
1. Zustandsgröße $x$ bestimmen/erkennen($u_C$/$u_L$)


1. ${U_0}/{I_0}$ bestimmen mit Nullquellen. R/G bestimmen mit LL/KS
1. Zustandsgleichung aufstellen: $\dot x(t) = f \bigl( x(t) \bigr)$

\begin{tabular}{c|c} C+C | $ \dot u = AG \cdot u + \frac{u_0}{\tau}$ </br> L+L | $\dot i = AR \cdot i + \frac{i_0}{\tau}$ \end{tabular}
1. $t_0$ und $x(t_0)$ durch Anfangszustand oder vorherigen Abschnitt bestimmen.




Allgemeine Erregung: $x_0(t)$

## Schaltungen zweiten Grades
Zwei DGL aufstellen.


Vorgehen:

1. Reaktanzen zusammenfassen, falls sie direkt parallel oder seriell geschaltet sind.
1. Resistiven Teil der Schaltung zusammenfassen und die Schaltung wie folgt umzeichnen:
1. Zustandsgrößen $\vec x(t)$ bestimmen/erkennen($u_C$/$u_L$)
1. Zustandsgleichung aufstellen: $\dot x(t) = f \bigl( x(t) \bigr)$

\begin{tabular}{c|c} C+C | $ \dot u = AG \cdot u + \frac{u_0}{\tau}$ </br> L+L | $\dot i = AR \cdot i + \frac{i_0}{\tau}$ \end{tabular}
1. ${U_0}/{I_0}$ bestimmen mit Nullquellen. R/G bestimmen mit LL/KS:

1. Alle Quellen zu Null setzen; erste Reaktanz zu Null setzen($x_1 = 0$) $\Rightarrow$ Abhängigkeit von $x_2$

2. Alle Quellen zu Null setzen; zweite Reaktanz zu Null setzen($x_2 = 0$) $\Rightarrow$ Abhängigkeit von $x_1$

3. Beide Reaktan zu Null setzen; $\vec x = 0$ $\Rightarrow$ Quellvektor $\vec v$ bestimmen

4. Superposition: $\vec x = x_1 + x_2$

1. Eigenwerte(EW) $\lambda$ von $\ma A$ bestimmen:

$\det(\ma A-\lambda \ma 1) = 0$  man wählt $|\lambda_1| < |\lambda_2|$ 



Vereinfachung für $2 \times 2$ Matrizen:

$$\lambda_{1/2} = \frac{\mathrm{sp} \ma A}{2} \pm \sqrt{ \left( \frac{\mathrm{sp} \ma A}{2} \right)^2 - \Delta } $$


$\mathrm{Sp } \ma A = a_{11} + a_{22}$,  $\Delta = \det \ma A = (a_{11} a_{22} - a_{12} a_{21}$

1. 3 Fälle:

1. $\lambda_1 \ne \lambda_2$ mit $\lambda_1, \lambda_2 \in \mathbb R$

\item Fixpunkte analysieren

Wenn $\vec p \in \mathbb C$, dann schwingt die Zustandsgröße, da $e^{\beta j} = \sin(\beta) + \cos(\beta)$

instabil: $\exists \lambda:\Re(\lambda) > 0$, stabil: $\forall \lambda : \Re(\lambda) < 0$








Definition: $\exp(A) = \sum\limits_{ij} \exp(a_ij)$

Lösung der DGL:

Rücktransformation: $x(t) = Q \cdot \xi(t)$  $v'(t) = Q^{-1} B v(t)$

$$x(t) = Q \exp\bigl(\Lambda (t-t_0)\bigr) Q^{-1} x(t_0) + \int\limits_{t_0}^{t} Q \exp\bigl(\Lambda (t-t')\bigr) Q^{-1} B v(t') \mathrm dt$$


Mit $\exp(At) = Q \exp (\Lambda t) Q^{-1}$ gilt

\boxed{ x(t) = \exp\bigl(A (t-t_0)\bigr) x(t_0) + \int\limits_{t_0}^{t} \exp\bigl( A (t-t')\bigr) B v(t') \mathrm dt }

homogene DGL: $v(t) = 0$

Lösung: \boxed{ x(t) = Q \cdot \exp\bigl(\Lambda (t-t_0)\bigr) \xi(t_0) = \exp\bigl(A (t-t_0)\bigr) x(t_0) }



## Eigenwerte bestimmen
\boxed{ \ma A \vec q = \lambda \vec q  \text{bzw.}  (\ma A - \lambda \ma 1) \vec q = 0 }

mit Eigenwert $\lambda$ und Eigenvektor $\vec q$

$$\det (\ma{A}-\lambda \ma{1}) = 0$$


Eigenwerte sind Nullstellen des charakteristischen Polynoms $\det(\ma A-\lambda \ma 1) = 0$



Merke: Falls EW komplex sind, so sind sie immer konjugiert komplex, da nur reele Bauteilparameter vorkommen.($\sqrt{-\mathbb R}=\pm \beta j$)

Vereinfachung für $2 \times 2$ Matrizen:

$$\lambda_{1/2} = \frac{\mathrm{sp} \ma A}{2} \pm \sqrt{ \left( \frac{\mathrm{sp} \ma A}{2} \right)^2 - \det \ma A } $$


$\mathrm{Sp } \ma A = a_{11} + a_{22}$,  $\det \ma A = a_{11} a_{22} - a_{12} a_{21}$



## Eigenvektoren bestimmen

$$(\ma A-\lambda \ma 1) \vec q = 0 \ \Rightarrow \ \ma Q = \ker(\ma A-\lambda \ma 1)$$


Vereinfachung für $2 \times 2$ Matrizen, falls $\lambda_1 \ne \lambda_2$:



| $a_{12} \ne 0:$ | $a_{21} \ne 0:$ | $a_{12} = a_{21} = 0:$ |
|--------|--------|--------|
|$q_{1/2} = \vect{-a_{12} </br> a_{11} - \lambda_{1/2} }$ | $q_{1/2} = \vect{a_{22} - \lambda_{1/2}  \\ -a_{21} }$ | $q_1 = \vect{1 </br> 0}  q_2 = \vect{0  \\ 1}$ |


\\ 

Lösung der homogenen DGL $\boldsymbol{ \dot {\vec x}}(t) = \ma A \vec x(t)$ :

| Fall | Formel |
|--------|--------|--------|
|$\lambda_1 \ne \lambda_2$ | Lösung: $\vec x(t) = c_1 \cdot \exp(\lambda_1 t) \cdot \vec q_1 + c_2 \cdot \exp(\lambda_2 t) \cdot \vec q_2$</br> 
| Normalform: |
|| $\ma \Lambda = \mat{\lambda_1  & 0  \\  0  & \lambda_2}  \ma Q = \mat{\vec q_1  & \vec q_2}$|
|| Lösung der Normalform: $\vec \xi(t) = \exp(\ma \Lambda t) \cdot \vec \xi_0$ |
|$\lambda_1 = \lambda_2$ | Lösung: $\vec x(t) = \left[ \ma 1 + (\ma A - \ma 1) \cdot t \right] \cdot \exp(\lambda t) \cdot \vect{c_1  \\ c_2}$|
|| Jordan Normalform: $\vec \xi(t) = \ma \exp(\ma J \cdot t) \cdot \vec \xi_0 = \mat{\exp(\lambda t)  & t \exp(\lambda t)  \\  0  & \exp(\lambda t)} \cdot \vec \xi_0$ |
|| $\ma J = \mat{\lambda | 1  \\  0  & \lambda}  \ma Q' = \mat{-a_{12}  & -a_{12}  \\  \frac{a_{11} - a_{22}}{2}  & \frac{a_{11} - a_{22}}{2} - 1}$|
|$\lambda_1 = \lambda^*_2$ | Lösung: $\begin{array}{rl} \vec x(t) | = c_1 e^{\alpha t} \cdot \left[ \cos (\beta t) \Re{\vec q} - \sin(\beta t) \cdot \Im{\vec q} \right] +  \\ | +\, c_2 e^{\alpha t} \cdot \left[ \sin (\beta t) \Re{\vec q} + \cos(\beta t) \cdot \Im{\vec q} \right] \end{array}$|
|| Komplexwertige Normalform: $\vec \xi(t) = \ma \exp(\ma \Lambda \cdot t) = \mat{\exp((\alpha + j\beta ) \cdot t) \cdot \xi_{01}  \\  \exp((\alpha - j\beta ) \cdot t) \cdot \xi^*_{01}}$|
|| $\ma \Lambda = \mat{\alpha + j\beta  & 0  \\  0  & \alpha - j\beta}  \ma Q = \mat{\vec q  & \vec q*}$|
|| Reelwertige Normalform: $\vec \xi = \ma Q'^{-1} \ma Q \vec \xi = \mat{1  & 1  \\  -j  & j} \vec \xi$ |
|| $\ma \Lambda' = \mat{\alpha  & -\beta  \\  \beta  & \alpha}  \ma Q' = \mat{\vec q_r  & - \vec q_i}$ |






# Normalformen
Um DGL's 2ten Grades zu entkoppeln und auf zwei DGL's ersten Grades zurückzuführen.

Transformiertes System = Diagonalisiertes System = Xi System in xi Koordinaten.

Allgemeine Normalform:  \boxed{ \underset{ \ma Q^{-1} \vec{\dot x}(t) }{\vec{ \dot \xi}(t)} = \underset{\ma Q^{-1} \ma A \ma Q}{\ma \Lambda} \cdot \underset{ \ma Q^{-1} \vec x(t) }{\vec \xi(t)} + \underset{ \ma Q^{-1} \ma B \vec v(t) }{\vec v'(t)} }

$\ma Q$: Matrix der Eigenvektoren  $\ma \Lambda$: Diagonalmatrix der Eigenwerte.



Vorgehen:

\begin{description}
\item[Erregungsvektor entkoppeln:] $\vec x' = \vec x - \vec x_\infty$ mit $\vec x_\infty = -\ma A^{-1} \ma B \vec v$ 
\item[Zustandsgleichungen entkopplen:] $\boldsymbol {\dot {\vec \xi}}(t) = \ma \Lambda \vec \xi(t)$ mit $\vec \xi(t) = \ma Q^{-1} \vec x'(t)$ (Xi Ebene)
\item[Rücktransformieren:] $\vec x = \ma Q \vec \xi + \vec x_\infty$

\end{description}

| Transformation: | Rücktransformation |
|--------|--------|
|$\vec \xi(t) = \ma Q^{-1} \vec x(t)$ | $\vec x(t) = \ma Q \vec \xi(t)$|
|$\ma \Lambda = \ma Q^{-1} \ma A \ma Q$ | $\ma A = \ma Q \ma \Lambda \ma Q^{-1}$|
|$\vec v' = \ma Q^{-1} \ma B \vec v(t)$ | $\ma B \vec v = \ma Q \vec v'$ |


## Normalform
##  Falls $\lambda_1 \ne \lambda_2$ mit $\lambda_1, \lambda_2 \in \mathbb R$ 
Geg: Homogenes GLS: $\vec{\dot x}(t) = \ma A \vec x(t)$

Ges: Entkoppeltes GLS: $\vec{ \dot \xi}(t) = \ma \Lambda \cdot \vec \xi(t)$



Es gilt: \boxed{ \ma A = \ma Q \ma \Lambda \ma Q^{-1}  \ma \Lambda = \ma Q^{-1} \ma A \ma Q} 

$$\dot x(t) = Q \Lambda Q^{-1} x(t) + Bv(t)$$


## Jordan-Normalform
Falls $\lambda_1 = \lambda_2 = \lambda \in \mathbb R$ ist, existiert $\ma Q^{-1}$ nicht $\Rightarrow$ keine Normalform möglich.

$$\ma J = \mat{\lambda & 1 \\ 0 & \lambda}  \ma Q' = \mat{-a_{12} & -a_{12} \\ \frac{a_{11} - a_{22}}{2} & \frac{a_{11} - a_{22}}{2} - 1}$$


Bestimme $Q'$ durch die Gleichung: $\ma A \ma Q' = \ma Q' \ma J$  $\ma J = \ma Q'^{-1} \ma A \ma Q'$

$$\vec x(t) = \ma Q' \vec \xi(t)$$


$$\dot{\vec \xi}'(t) = \ma J \vec \xi'(t)$$


$$\det (\ma{A}-\lambda \ma{1}) \vec q'_2 = q_1$$


## Transformation auf komplex- bzw. reelwertige Normalfunktion

$$\lambda_1 = \lambda^*_2 = \alpha + j\beta$$


$$q_2 = q^*_1 = q_r - j q_j$$


$$\xi_2(t) = \xi^*_1(t)$$


Komplexwertige Normalform:

$$\dot \xi(t) = \utilde{ \bf \Lambda} \xi(t) = \mat{\alpha + j\beta & 0 \\ 0 & \alpha - j\beta} \cdot \xi(t)$$


Lösung: $\xi(t) = \exp(\utilde{ \bf \Lambda} t) \cdot \xi_0 = \mat{\exp((\alpha + j\beta ) \cdot t) \cdot \xi_{01} \\ \exp((\alpha - j\beta ) \cdot t) \cdot \xi^*_{01}}$

$$\xi_r(t) = \mat{ 2\Re(\xi_1(t)) \\ 2\Im(\xi_1(t)) } = \mat{1 & 1 \\ -j & j} \cdot \mat{\xi_1 (t) \\ \xi^*_1 (t) }$$


$\ma T = \mat{1 & 1 \\ -j & j}$  $\ma T^{-1} = \frac{1}{2} \mat{1 & j \\ 1 & -j}$

$$\dot \xi_r(t) = \utilde{ \bf \Lambda}_r \cdot \xi_r(t)$$


$$\utilde{ \bf \Lambda}_r = \ma T \cdot \utilde{ \bf \Lambda} \cdot \ma T^{-1} = \mat{ \alpha & -\beta \\ \beta & \alpha }$$


$$\ul x(t) = \ma Q \cdot \xi(t) = \ma Q \ma T^{-1} \cdot \xi_r(t)$$


$$\ma Q_r = \ma Q \ma T^{-1} = \mat{q_r & - q_i}$$


$$\ul x(t) = \ma Q_r \cdot \xi_r(t) = q_r \cdot 2\Re(\xi_1(t)) - q_i \cdot 2\Im \left( \xi_1(t) \right)$$


$\xi_1(t) = \exp((\alpha + j\beta ) \cdot t) \cdot \xi_{01}$  $\xi_{01} = \gamma + j \delta$

$$\Re(\xi_1(t)) = \exp(\alpha t) [\gamma \cdot \cos(\beta t) - \delta \cdot \sin(\beta t)]$$


$$\Im(\xi_1(t)) = \exp(\alpha t) [\delta \cdot \cos(\beta t) - \gamma \cdot \sin(\beta t)]$$


$$\xi_r(t) = \mat{\Re(\xi_1(t)) \\ \Im(\xi_1(t))} = 2\exp(\alpha t) \cdot \mat{\gamma & -\delta \\ \delta & \gamma} \cdot \mat{\cos(\beta t) \\ \sin(\beta t)}$$


\fbox{ $\ul x(t) = q_r 2\exp(\alpha t) [\gamma \cdot \cos(\beta t) - \delta \cdot \sin(\beta t)] + (-q_i) 2\exp(\alpha t) [\delta \cdot \cos(\beta t) - \gamma \cdot \sin(\beta t)]$ }

$$2\cdot \xi_{01} = k \cdot \exp(j \Theta)$$


$2\delta = k \sin(\Theta)$ \\ $2\gamma = k \cos(\Theta)$

\fbox{ $\ul x(t) = k \cdot \exp(\alpha t) [q_r \cos(\beta t + \theta) + (-q_i) \sin(\beta t + \theta)]$ }




Merke: Falls $\exists \lambda > 0  \Rightarrow  $ Zustandsgleichung instabil.

## Allgemein Erregung
\boxed{ \vec x(t) = \exp\bigl(\ma A (t-t_0)\bigr) \vec x(t_0) + \int\limits_{t_0}^{t} \exp\bigl( \ma A (t-\tau)\bigr) \ma B \vec v(\tau) \mathrm d\tau }

$$\vec \xi(t) = \exp\bigl(\ma \Lambda (t-t_0)\bigr) \vec \xi(t_0) + \int\limits_{t_0}^t \exp \bigl(\ma \Lambda (t-t')\bigr) v'(t') \mathrm dt'$$


## Phasenportrait

$$\ul x(t) = \mat{x_1(t) \\ x_2(t)}$$


Trajektorie: $x_2(x_1(t))$

Steigung der trajektorie:

$$m = \frac{\mathrm d x_2}{\mathrm d x_1} = \frac{\dot x_2}{\dot x_1} = \frac{a_{21} x_1 + a_{22} x_2 + v_{02} } {a_{11} x_1 + a_{12} x_2 + v_{01}}$$


Isokline:

$m = 0:  a_{21} x_1 + a_{22} x_2 + v_{02} = 0$  $x_2 = - \frac{a_{21}}{a_{22}} x_1$  $v_{02} = 0$

$m = \infty:  a_{11} x_1 + a_{12} x_2 + v_{01} = 0$  $x_2 = - \frac{a_{11}}{a_{12}} x_1$  $v_{02} = 0$

## Fallunterscheidungen
Strudelpunkt: $\lambda_1 = \lambda^*_2$

$$\begin{array}{l} \xi_r(t) = k \exp(\alpha t) \cos(\beta t + \theta) \\ \xi_r(t) = k \exp(\alpha t) \sin(\beta t + \theta) \end{array}$$


Trajektorie läuft von $q_r$ nach $q_i$. Zur darstellung in $\ul x$ Ebene transponieren!

Homogene Lösung geht zum Nullpunkt, nicht homogene gegen $\ul x_\infty$

# Zeitverläufe
jede Zustandsgröße kann vier verschiedene zeitliche Verläufe haben.
Die Phasenportraits der DGLs ergeben sich aus den kombinationsmöglichkeiten dieser Verläufe.
## ungedämpfte Schwingung

$$\lambda_1 = \lambda^*_2 = j\beta$$


## schwach gedämpfte Schwingung
$\lambda_1 = \lambda^*_2 = \alpha + j\beta$ mit $\alpha < 0$

## stark gedämpfte Schwingung
$\lambda_1 \ne \lambda_2$ mit $\lambda_1,lambda_2 \in \mathbb R \ \land \ \lambda_1,lambda_2 < 0$

## aperiodischer Grenzfall
$\lambda_1 = \lambda_2 = \lambda \in \mathbb R$ mit $\lambda < 0$

| | stabil | instabil|
|--------|--------|--------|
|Strudelpunkte $\lambda_1 = \lambda^*_2$ | | |
|Knotenpunkte $\lambda_1, \lambda_2 < 0$ | | |
|$\lambda_1, \lambda_2 > 0$


\end{tabular}


# Nichtlineare dynamische Schaltungen
$\boldsymbol{\dot {\vec x}} (t) = \vec f \bigl(\vec x(t) \bigr)$  $[\boldsymbol{\dot {\vec x}}(t) = \ma A \vec x(t) + \ma B \vec v(t)]$

Annahme: $\vec f$ zeitinvariant. (Autonomes System)



Falls $\mathcal C_i$ und $\mathcal N$ spannungsgesteuert:

$q = c(u_c)$ und $\dot q(t) = i_C(t) = \left. \frac{\mathrm d c(u')}{\mathrm d u'} \right|_{u'=u_C(t)} \cdot \dot u_C(t) = \mathcal C \bigl( u_C(t) \bigr) \cdot u_C(t)$

$$\dot u = \frac{1}{\mathcal C (u)} \cdot g(u)$$


Falls $\mathcal C_i$ ladungsgesteuert und $\mathcal N$ spannungsgesteuert:

$$u_C = c^{-1} (q);\ i_C = \dot q$$


$$\dot q = -g\bigr( c^{-1}(q)\bigl)$$


| Kapazität | $q = c(u_c)$ | $u_C = c^{-1} (q)$|
|--------|--------|--------|
|resistives Netzwerk $\mathcal N$ | $i = g(u)$ | $i = g(u)$|
|DGL | $\dot u = \frac{1}{\mathcal C (u)} \cdot g(u)$ | $\dot q = -g\bigr( \mathcal C^{-1}(q)\bigl)$ |





Vorgehen:

1. finde DGL
1. finde GGP's
1. linearisieren
1. GGP untersuchen




## Gleichgewichtspunkte $\vec x_{eq$}

$$\dot{\vec x} = \vec f(\vec x) \stackrel{!}= \vec 0$$


| $C:$ | $\dot u_C = 0$ | $\Rightarrow \ i_C = 0$ | $\Rightarrow$ LL|
|--------|--------|--------|--------|
|$L:$ | $\dot i_L = 0$ | $\Rightarrow \ u_L = 0$ | $\Rightarrow$ KS |



Danach $i_{L,eq}$ bzw. $u_{C,eq}$ bestimmen.

Es ergeben sich $i$ GGP's $\vec x_{eq,i}$

## Linearisierung von $\vec f(\vec x)$

$$\vec f(\vec x) = \vec f(\vec x_{eq}) + \ma J (\vec x_{eq}) \cdot (\vec x - \vec x_{eq}) + \vec r(...) \approx \ma J (\vec x_{eq}) \cdot \Delta \vec x$$


$$\Delta \boldsymbol{\dot{\vec x}} \cong \ma J (\vec x_{eq}) \cdot \Delta \vec x$$


Satz von Hartman: 

Falls der Realteil der Eigenwerte von $\ma J (\vec x_{eq,i})$ ungleich null sind $\Re(\lambda) \ne 0$, verhält sich das System in der Umgebung $\vec x_{eq,i}$ wie ein lineares System mit der selben Systemmatrix.

# Nichtlineare dynamische Schaltungen 2. Grades

1. DGL aufstellen mit KCL, KVL, Bauteilbeschreibungen: $\vec{\dot x} = \vec  f(x_1, x_2)$
1. GGP's $\vec p_i$ bestimmen:

$\vec{\dot x} = \vec 0  \Rightarrow \vec f(x_1,x_2) = \vec 0$  (rechnerisch)

$C \rightarrow LL$  $L \rightarrow KS$  (Schaltbild)
1. Analyse der GGP: 

Linearisiere in $\vec p_i: \ma J_p = \mat{\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2}}$

EWs und EVs von $\ma J_p$ bestimmen.
1. Phasenportraits der $\vec p_i$ bestimmen und zusammenfügen:

Satz von Hartmann: Falls $Re(\lambda) \ne 0$ dann ist die Umgebung von $\vec p_i$ gleich mit linearem System. 





# Oszillatoren
... sind autonome Schaltungen 2. Grades mit nur einem ereichbaren, instabilen GGP $\vec p \in \mathbb C$, deren Zustandsvariablen eine stationäre periodische Schwinung ausführen. 
Das Phasenportrait besitzt eine geschlossene Trajektorie(Grenzzyklus).


## Van der Pol Oszillator
... beseteht aus einem verlustbehafteten Schwingkreis und einem Stückweise negativen Widerstand mit 

$$i_{\mathcal F} = g_{\mathcal F}(u_C) = - \frac{u_C}{R} + a(u_C)^3$$


$$\vec{\dot u}_C(t) = -\frac{1}{C} i_L(t) - i_{\mathcal F} \frac{1}{C}$$


$$\vec{\dot i}_L(t) = -\frac{1}{L} u_C(t)$$


$$\vec{\dot x}(t) = \vec f(\vec x(t))$$


Einziger GGP: $\vec p = \vec 0$

$$\ma J_p = \mat{\frac{1}{RC} & -\frac{1}{C} \\ \frac{1}{L} & 0}$$


EW: $\lambda_{1/2} = \frac{1}{2RC} \pm \sqrt{\left( \frac{1}{2RC} \right)^2- \frac{1}{LC} }$

## Stückweise lineare Oszillatoren

$$u_{\mathcal F} = r_{\mathcal F}(i_{\mathcal F}) = \begin{cases} R i_{\mathcal F} + U & i_{\mathcal F} < -\frac{I}{2} \\ -R i_{\mathcal F} & |i_{\mathcal F}| \le \frac{I}{2} \\ R i_{\mathcal F} - U & i_{\mathcal F} > \frac{I}{2} \end{cases}$$


Einziger GGP: $\vec p = \vec 0$

### Bereich II
$\ma J_p = \mat{0 & -\frac{1}{C} \\ \frac{1}{L} & \frac{R}{L} }$ und $\lambda_{1/2} = \frac{R}{2L} \pm \sqrt{\left( \frac{R}{2L} \right)^2- \frac{1}{LC} }$

### Bereich I und III
$\ma J_p = \mat{0 & -\frac{1}{C} \\ \frac{1}{L} & -\frac{R}{L} }$ und $\lambda_{1/2} = -\frac{R}{2L} \pm \sqrt{\left( \frac{R}{2L} \right)^2- \frac{1}{LC} }$

## Fast harmonischer Oszillator

$$\frac{1}{LC} \gg \frac{R}{2L})^2$$


II: $\lambda_{1/2} \approx \frac{R}{2L} \pm j \sqrt{ \frac{1}{LC} }$

I,III: $\lambda_{1/2} \approx -\frac{R}{2L} \pm j \sqrt{ \frac{1}{LC} }$

Kreisfrequenz: $\omega_0 = \frac{1}{\sqrt {LC}}$

II: $\ma J_p = \mat{-j \frac{1}{\sqrt{LC}} & -\frac{1}{C} \\ \frac{1}{L} & -j \frac{1}{\sqrt{LC}} }$

$$\vec q = \vect{ \sqrt{ \frac{L}{C} } \\ -j}  \Rightarrow  \vec q_r = \vect{ \sqrt{ \frac{L}{C} } \\ 0}, \ -\vec q_i = \vect{ 0 \\ 1}$$


## Relaxationsoszillatoren
Für der Grenzwert $L \rightarrow 0$ gilt: $\frac{R}{2} \gg \\sqrt{ frac{L}{C} }$

II: $\lambda_1 \approx \frac{R}{L} \rightarrow \infty  \lambda_2 \approx \frac{1}{RC}$

I, III: $\lambda_1 \approx -\frac{R}{L} \rightarrow -\infty  \lambda_2 \approx -\frac{1}{RC}$

Differenzialgleichungen:

Schwingungen erst bei DGL's 2. Grades
Lösung ist komplexe exponentialfunktion mit sin und cos (reale und imaginäre Lösung möglich)

Schwingung nur wenn beide lambdas imaginär sind




























Andi Tutorium:
# Komplexe Wechselstromrechnung
Konvention: Komplexe Zeiger werden mit Großbuchstaben geschrieben.

Vorraussetzungen:

\* eingeschwungenes System (zero-input-response)
\* sinusförmige Erregung: $x(t) = A \cdot \cos(\omega t + \varphi) = A \cdot \sin(\omega t + \varphi + \frac{\pi}{2})$

bei mehreren Erregungen muss die Kreisfrequenz $\omega$ gleich sein!
\* lineare Schaltung: $\boldsymbol{ \dot {\vec x}}(t) = \ma A \vec x(t) + \ma B \vec v(t)$ 



Komplexer Zeiger: $X = A \cdot e^{j \varphi} = \underbrace A_{\text{Amplitude}} \cdot \exp(j \cdot \underbrace\varphi_{\text{Phase}})$ 

Zeitsignal $x(t) = \Re(X \cdot \exp(j \omega t) = \Re\bigl(A \cdot \exp(\omega t + \varphi)\bigr) = A \cos (\omega t + \varphi)$



Herleitung: $e^{j\omega t} = \cos(\omega t) + j \sin(\omega t)$

Eigenschaften:

\* Eindeutigkeit: $a(t) = b(t) \ \Leftrightarrow \ A = B$
\* Linearität: $\alpha a(t) + \beta b(t) \ \Leftrightarrow \ \alpha A + \beta B$
\* Differenzierbarkeit: $b(t) = \frac{\mathrm d}{\mathrm dt} a(t) \ \Leftrightarrow \ B = j \omega A$  \boxed{ \frac{\mathrm d}{\mathrm dt} = j \omega }


Beispiel: $u_L = L \cdot \frac{\mathrm d}{\mathrm dt} i_l \ \Rightarrow \vec U_L = L \cdot j \omega \vec I_L$



$\underset{\text{Impedanz}}{Z(j\omega)} = \underset{\text{Resistanz}}{R(j\omega)} + \underset{\text{Reaktanz}}{jX(j\omega)}$: Impedanz $U = Z \cdot I $

$\underset{\text{Admittanz}}{Y(j\omega)} = \underset{\text{Konduktanz}}{G(j\omega)} + \underset{\text{Suszeptanz}}{jB(j\omega)}$: Admittanz $I = Y \cdot U$

| | $Z$ | $Y$|
|--------|--------|--------|
|Widerstand | $R$ | $\frac{1}{R}$ |
|Kondensator | $\frac{1}{j \omega C}$ | $j \omega C$|
|Spule | $j \omega L$ | $\frac{1}{j \omega L}$  |


Rechenregeln:

$$A = a + j b = \hat A_m \exp(j \varphi)$$


Radius $\hat A_m = \sqrt{a^2 + b^2}$

Mehrere Erregungen mit unterschiedlicher Kreisfrequenz:

Getrennte Zeigerrechnung für einzelne Frequenzen, dann zurücktransformieren und addieren.



## Komplexe Knotenspannungsanalyse

$$\ma Y_k(j\omega) \cdot \ma U_k = I_q$$


Hauptdiagonale Positiv, Nebendiagonale negativ.

$\ma Y$ immer symmetrisch, wenn keine gesteuerten Quellen vorhanden sind.

## Tableau	

$$\mat{\ma B & \ma 0 \\ \ma 0 & \ma A \\ \ma M(j\omega) & \ma N(j\omega) } \cdot \mat{\ma U \\ \ma I } = \mat{ \ma 0 \\ \ma 0 \\ \ma E }$$


## Transferfunktion

$$H(j\omega) = \frac{U_{Km}}{I_n} = \frac{(-1)^{n+mm} \det \ma Y_{nm}(j\omega)}{\det \ma Y_k(j\omega)}$$


## Übertragungsfunktion
$H(j \omega) = \frac{U_{out}((I_{out}))}{U_{in}(I_{in})}$  \boxed{p = j \omega }

Beschreibt das Verhältnis von Amplitude und Phase zwischen einer Eingangs- und einer Ausgangsgröße.



Aufstellen von $H(j \omega)$

1. By Inspection:

<figure><img src="hfunk.svg" /></figure>

$$H(j \omega) = \frac{U_a}{U_0} = \frac{\frac{1}{j\omega C}}{R + \frac1{j\omega C}}$$


2. Knotenspannungsanalyse: $C,L$ wie Widerstände mit entsprechender Admittanz

$$H(j\omega) = \frac{U_{Km}}{I_n} = \frac{(-1)^{n+m} \det \ma Y_{nm}(j\omega)}{\det \ma Y_k(j\omega)}$$


$\ma Y_{nm}$: Streichungsmatrix.

$\ma Y_{k}$: Reduzierte Knotenleitwertsmatrix.



falls $U_{out}$ und $U_{in}$ zu $U_{k}$ gehören:

$$H(j \omega) = \frac{U_{out}}{U_{in}} = \frac{U_{Ki}}{U_{Kj}}$$


$H(j \omega)$ faktorisieren: $\begin{cases} \text{NST des Zählers} \\ \text{Polstellen des Nenners(EW von} \ma A = \text{Eigenfrequenzen)} \end{cases}$

$\Rightarrow$ Form von $H(j \omega) = k \cdot \frac{\prod\limits^n_{i = 1} \left(1 + j \frac{\omega}{\beta_i}\right)}{\prod\limits^n_{i = 1} \left(1 + j \frac{\omega}{\alpha_i}\right)}$  bzw.  $H(j\omega) = k \cdot \frac{p}{p^2 + p \frac{\omega_0}{Q} + \omega^2_0 }$



Bodediagramm:(Betrag und Phase von $H(j \omega)$ in 2 Diagrammen)

$$H(j \omega) = \underset{\text{Betrag}}{ | H(j \omega) | } \cdot \underset{\text{Phase}}{ \exp\bigl(j \sphericalangle H(j \omega)\bigr) }$$


- Betrag $v(w) = 20 \log_{10} \left| \frac{H(j \omega)}{H(j \omega_0)} \right|$  in DB

$$\Rightarrow v(w) = 20 \log_{10} |k| + \sum\limits^n_{i=1} \log_{10} \left(1 + j \frac{\omega}{\beta_i}\right) - \sum\limits^n_{i=1} \log_{10} \left(1 + j \frac{\omega}{\alpha_i}\right)$$


##  Güte $Q$ 
$Q = \frac{ \omega_0 }{2 \pi B}$  mit $B$: Bandbreite.
Analytische Fortsetzung: $H_0(p) = k \cdot \frac{p}{p^2 + p \frac{\omega_0}{Q} + \omega^2_0 }$



## Ortskurven (Nyquist - Diagramm)
Realteil \& Imaginärteil in der komplexen Ebene mit $\omega$ als Parameter.

Berechne $H(j \omega)$ für:

$$\omega = 0$$


$$\omega \ra \infty$$


Grenzfrequenz: $\omega_g = \frac{1}{\tau}$

Dann Zeichne Kreis oder Gerade durch die 3 Punkte.

Bsp: $Y(j \omega) = G + j\omega C + \frac{1}{j \omega L}$: Gerade Parallel (um $G$ verschoben) zur $j$-Achse.

## Leistung und Energie
Differenzielle Energie: $\\diff E = p(t) \diff t = u(t) \cdot i(t) \diff t$

Wirkleistung: $P_w = \frac{1}{T} \int\limits_0^T p(t) \diff t$

Für lineare resistive Schaltungen: $P_w = R \cdot I^2_{eff} = \frac{U^2_{eff}}{R}$
Für sinusförmige Freq: $I_{eff} = \frac{I_{max}}{\sqrt{2}}$  $U_{eff} = \frac{U_{max}}{\sqrt{2}}$

!Überprüfen!: $P_w = U_{eff} \cdot I_{eff} \cdot (\alpha_U - \alpha_I)$



Komplexe Leistung: $P = \frac12 UI* = P_w + j P_B$

Wirkleistung $P_W$: Sinvolle Ströme die die Schaltung betreiben

Blindleistung $P_B$: Unötige Kreisströme in den Leitugnen (Reaktanzen)

Für Prüfung:
1/3 Komplexe Wechselstromrechnung (Kap. 16)




Halde:



| Implizit | Explizit | Parametrisch |
|--------|--------|--------|
|$f(u,i) = 0$ | $\begin{array}{l} u = r(i)  \\ i = g(u) \end{array}$ | $\begin{array}{ll} i=i_{\mathcal F}(\lambda) | u=u_{\mathcal F}(\lambda) \end{array}$  |





