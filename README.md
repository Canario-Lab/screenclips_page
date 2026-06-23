# ScreenClips landing page

Nowoczesny landing page dla aplikacji ScreenClips, zbudowany w React + Vite.

## Uruchomienie

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Do podmiany przed publikacją

W `src/App.jsx` podmień:

```js
const APP_STORE_URL = '#app-store-link-do-podmiany'
```

na docelowy link App Store.

## Uwaga o App Store badge

Na razie CTA jest własnym przyciskiem tekstowym. Przed publiczną kampanią warto podmienić go na oficjalny badge wygenerowany z Apple Marketing Tools, jeśli chcesz używać graficznego badge’a Apple.
