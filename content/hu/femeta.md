# FEMETA Versenykezelő (WPF/.NET 8)

## Mi ez?
Offline versenypontozó alkalmazás légfegyveres versenyekhez (egyéni + csapat), amelyet helyszíni, gyors és megbízható használatra készítettem.

## Miért készült?
A pontozás eredetileg Excelben indult, makrókkal. Használható volt, de idővel nehezen karbantarthatóvá vált, és túl sok hibalehetőséget adott (rendezés, csoportos/összevont sorok, véletlen átírás). Az új program igyekszik kizárni a hibázás lehetőségét. A bevitel és a ranglista logika kiszámíthatóbb, és a kimenetek egységesek.

## Milyen problémákat old meg?
- Gyors helyszíni bevitel, gyengébb gépen is stabil futás
- Automatikus ranglista (egyéni + csapat) holtverseny-kezeléssel
- Kategóriánkénti A4 PDF export korrekt oldaltöréssel
- Kevesebb felhasználói hibalehetőség: validáció, duplikáció-ellenőrzés, mentési figyelmeztetések

## Tech stack
- C# / WPF / MVVM (.NET 8)
- JSON alapú mentés + automatikus mentés (biztonsági előzmények)
- PDF export (PDFsharp/MigraDoc)

## Showcase
<details>
<summary><b>Fő ablak</b></summary>

![Menu](../../assets/case/fem_main_menu.png)

</details>
<details>
<summary><b>Pontozó (Gyors bevitelhez)</b></summary>

![Scorer](../../assets/case/fem_scorer.png)

</details>
<details>
<summary><b>Generált PDF</b></summary>

![Output](../../assets/case/fem_output.png)

</details>

## Next improvements
- Edzés/statisztika: fejlődés követése + grafikonok