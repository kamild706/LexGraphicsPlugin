# LexGraphicsPlugin
Plugin wyświetlający grafiki w systemie LEX
 
**Dodatek renderuje tylko grafikę w formacie SVG. Zaimplementowanie wyświetlania plików PDF jest na tę chwilę zbyt skomplikowane i/lub niemożliwe "od zewnątrz".**

### Instalacja:


1. W przeglądarce:
  * Mozilla Firefox instalujemy [GreaseMonkey](https://addons.mozilla.org/es/firefox/addon/greasemonkey/)
  * Google Chrome instalujemy [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pl)
  * Opera instalujemy [TamperMonkey](https://addons.opera.com/es/extensions/details/tampermonkey-beta/?display=en)

2. Następnie instalujemy LexGraphicsPlugin [klikając tutaj](https://github.com/kamild706/LexGraphicsPlugin/raw/master/LexGraphicsPlugin.user.js)


### Używanie:
* Po załadowaniu aktu prawnego wystarczy nacisnąć dowolny przycisk na klawiaturze, a w miejscu w którym znajdował się odnośnik do grafiki w formacie SVG (np. znaków drogowych w rozporządzeniu o znakach i sygnałach drogowych) pojawi się przetworzona grafika


### Problemy:
#### Załadowały się tylko niektóre z grafik dołączonych do ustawy, pozostałe odnośniki nie uległy przetworzeniu
_Plugin na tę chwilę obsługuje tylko grafiki w formacie SVG. Pliki PDF nadal muszą być otwarte ręcznie._

#### Mimo naciśnięcia jakiegokolwiek klawisza na klatiaturze nie widać żadnych zmian

_Należy upewnić się, że focus skierowany jest na okno dokumentu, i.e. kliknąć najpierw w dowolne miejsce na stronie. W innym wypadku należy odświeżyć stronę_
