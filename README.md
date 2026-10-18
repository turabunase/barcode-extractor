# Barcode Extractor

Web app per scansioni consecutive di pagine con barcode. La fotocamera viene richiesta all’apertura e le immagini sono elaborate localmente in memoria, senza invio o salvataggio di foto.

- Codici separati da punto e virgola (;).
- Copia codici e bozza email per turabunase@gmail.com, senza invio automatico.
- Duplicati opzionali, rimozione ultima pagina, nuova sessione.
- Lettore WebAssembly incluso: nessuna CDN durante l’uso.

Apri il sito HTTPS, autorizza la fotocamera, inquadra la pagina e premi Acquisisci pagina. Controlla il numero di codici prima di passare alla pagina successiva. Il riconoscimento dipende dalla messa a fuoco, dalla luce e dalla dimensione dei barcode. Le scansioni vuote non vengono aggiunte. I risultati si perdono alla ricarica.

Copia ed email trasferiscono i codici solo su comando. Le applicazioni email possono troncare URL molto lunghi: controlla il corpo della bozza e usa Copia codici se necessario.

Test: decodifica reale di immagini sintetiche Code128, EAN13 e QR; test simulati della gestione sessione, pagine, duplicati, copia, email e pulizia canvas. La fotocamera reale di uno smartphone resta da verificare.

Dipendenze: barcode-detector 3.2.2 e zxing-wasm 3.1.3 (MIT), basati su ZXing-C++ (Apache-2.0). Licenze nella cartella vendor.

