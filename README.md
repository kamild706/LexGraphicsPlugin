# LexGraphicsPlugin
Plugin wyświetlający grafiki w systemie LEX
 
**Dodatek renderuje tylko grafikę w formacie SVG. Zaimplementowanie wyświetlania plików PDF jest na tę chwilę zbyt skomplikowane i/lub niemożliwe "od zewnątrz".**

### Instalacja:


1. W przeglądarce:
  * Mozilla Firefox instalujemy [GreaseMonkey](https://addons.mozilla.org/es/firefox/addon/greasemonkey/)
  * Google Chrome instalujemy [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pl)

2. Następnie instalujemy LexGraphicsPlugin [klikajac tutaj](https://github.com/kamild706/LexGraphicsPlugin/raw/master/LexGraphicsPlugin.user.js)


### Używanie:
* Po załadowaniu aktu prawnego wystarczy nacisnąć dowolny przycisk na klawiaturze, a w miejscu w którym znajdował się odnośnik do grafiki w formacie SVG (np. znaków drogowych) pojawi się przetworzona grafika


### Problemy:
#### Załadowały się tylko niektóre z grafik dołączonych do ustawy, pozostałe odnośniki nie uległy przetworzeniu
_Plugin na tę chwilę obsługuje tylko grafiki w formacie SVG. Pliki PDF nadal muszą być otwarte ręcznie._

#### Mimo naciśnięcia jakiegokolwiek klawisza na klatiaturze nie widać żadnych zmian

_Należy upewnić się, że focus skierowany jest na okno dokumentu, i.e. kliknąć najpierw w dowolne miejsce na stronie._
