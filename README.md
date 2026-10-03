# Falconix Web

Samostatný prezentační web pro **falconix.cz**.

> Tento repozitář je záměrně oddělený od hlavní aplikace Falconix. Marketingový web lze upravovat a nasazovat nezávisle, zatímco aplikační backend zůstává ve vlastním repozitáři.

## Co obsahuje první verze

- responzivní homepage,
- představení hlavních funkcí Falconixu,
- ukázku toku zákazník → nabídka → zakázka → výroba → faktura,
- sekci pro 30denní zkušební účet,
- ceníkové balíčky Start / Business / Pro / Komplet,
- kontaktní formulář,
- mobilní navigaci,
- připravené místo pro budoucí API napojení na Falconix.

## Lokální spuštění

Web nepotřebuje žádné závislosti. Ve složce projektu stačí spustit například:

```bash
python -m http.server 8080
```

Potom otevřít `http://localhost:8080`.

Případně lze `index.html` otevřít přímo v prohlížeči.

## Co je zatím pouze demo

Formulář **Vyzkoušet 30 dní zdarma** ještě nezakládá organizaci ve Falconixu. Kontaktní formulář zatím neposílá e-mail. Oba formuláře jsou připravené pro následné napojení.

## Doporučené další kroky

1. Potvrdit texty, barvy a rozložení homepage.
2. Doplnit aktuální screenshoty přímo z Falconixu.
3. Doplnit reálné ceny balíčků a počet zahrnutých uživatelů.
4. Doplnit kontaktní údaje Falconix s.r.o.
5. Navrhnout API endpoint pro bezpečné založení 30denní zkušební organizace.
6. Napojit formulář registrace na aplikační backend.
7. Doplnit GDPR, obchodní podmínky a cookies.
8. Nasadit samostatně na `falconix.cz`.

## Budoucí API napojení

Doporučený princip:

`falconix.cz` → veřejný registrační endpoint Falconix API → validace → vytvoření organizace a admin uživatele → trial 30 dní → potvrzovací e-mail → přesměrování do aplikace.

Veřejný web nesmí mít přístup k interním databázovým údajům ani vytvářet tenanty napřímo v databázi.
