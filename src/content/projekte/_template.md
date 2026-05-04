---
titel: "Projekttitel"
beschreibung: "Kurze Zusammenfassung in 1-2 Sätzen. Wird in der Übersicht und als SEO-Beschreibung verwendet."
datum: 2025-01-01
titelbild: "/projekte/PROJEKTNAME/titelbild.jpg"
tags: ["Tag1", "Tag2", "Tag3"]
branche: "Industrie / Branche"
featured: false
---

## Ausgangslage

Was war die Situation des Kunden? Was war das Problem?

## Vorgehen

Wie bist du vorgegangen?

## Ergebnis

- Ergebnis 1
- Ergebnis 2

---
---
---

# REFERENZ – Schreibtechniken
# (alles unterhalb dieser Linie beim echten Projekt löschen)

---

## Fliesstext

Normaler Absatz. Jede Leerzeile erzeugt einen neuen Absatz.

Mit **fettem Text** hebt man Schlüsselbegriffe hervor. Mit *kursivem Text* betont man einzelne Wörter. Beides zusammen: ***fett und kursiv***.

---

## Aufzählung (ungeordnet)

- Erster Punkt
- Zweiter Punkt
- Dritter Punkt

---

## Nummerierte Liste

1. Zuerst die Anforderungsliste erstellen
2. Dann die Lastfälle ableiten
3. Konstruktion ausarbeiten
4. FEM-Nachweis führen

---

## Unterkapitel mit h3

### Details zur FEM-Analyse

Für längere Projekte kann man mit `###` Unterkapitel einfügen. So bleibt der Text übersichtlich ohne zu viele Hauptabschnitte.

---

## Bild im Text

Bild einfügen an einer bestimmten Stelle im Text:

![FEM-Spannungsplot des Rohrsystems](/projekte/PROJEKTNAME/fem-analyse.png)

Text geht hier weiter. Man kann so viele Bilder einfügen wie man möchte.

---

## Tabelle (z.B. für technische Kennwerte)

| Parameter         | Wert         |
|-------------------|--------------|
| Betriebsdruck     | 40 bar       |
| Temperatur        | 280 °C       |
| Medium            | Dampf        |
| Norm              | EN 13480     |
| Werkstoff         | 1.4571       |

---

## Zitat (z.B. Kundenaussage oder Kernerkenntnis)

> Die Überarbeitung der Leitungsführung hat uns nicht nur Kosten gespart, sondern auch die Montage deutlich vereinfacht.

---

## Hinweisbox (mit Fettschrift simuliert)

**Vertraulichkeitshinweis:** Kundenname und projektspezifische Masszahlen wurden anonymisiert.

---

## Datei zum Download anbieten

[Technischen Bericht herunterladen](/projekte/PROJEKTNAME/bericht.pdf)

Oder eingebettet in einen Satz: Die vollständige Spannungsanalyse steht als [PDF zum Download](/projekte/PROJEKTNAME/fem-bericht.pdf) bereit.

**Achtung:** Alles in `public/` ist öffentlich. Vor dem Hochladen Kundennamen, Masszahlen und Logos entfernen.

---

## Kombination: Text + Bild + Ergebnis

So könnte ein vollständiger Abschnitt aussehen:

Die kritischen Stützpunkte wurden zunächst analytisch mit Handrechnung nach **EN 13480-3** vorausgelegt. Anschliessend erfolgte die Verifikation mittels FEM:

![Verformungsplot unter thermischer Last](/projekte/PROJEKTNAME/verformung.png)

Die Simulation bestätigte die Handrechnung und zeigte zusätzlich eine lokale Spannungskonzentration an der Schweissnaht, die durch eine Geometrieanpassung behoben wurde.

**Resultat:** Spannungen lagen 18 % unter dem zulässigen Grenzwert nach Norm.
