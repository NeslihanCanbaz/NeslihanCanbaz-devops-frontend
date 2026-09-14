# DevOps Projesi - Frontend

Duz HTML/CSS/JS ile yazilmis basit bir frontend. Backend'e istek atip cevabi ekranda gosterir.

## Deploy etmeden once

`public/config.js` icindeki `BACKEND_URL` degerini gercek backend domaininle guncelle:

```js
window.APP_CONFIG = {
  BACKEND_URL: "https://BACKEND_DOMAIN_GERCEK_DEGERI",
  APP_VERSION: "1.0.0",
};
```

## Yerel calistirma

`public/index.html` dosyasini herhangi bir statik sunucuyla acabilirsin, ornegin VS Code'un "Live Server" eklentisiyle, ya da:

```bash
npx serve public
```

## Docker ile calistirma

```bash
docker compose up --build
```

## Dokploy Deployment

1. Bu repository'yi Dokploy'da GitHub App uzerinden baglayin.
2. Branch: `main`, Compose path: `docker-compose.yml`
3. Domain: `FRONTEND_DOMAIN`, Container Port: `8080`, HTTPS: Let's Encrypt.
4. Auto Deploy'u etkinlestirin.

**Not:** `config.js` icindeki backend URL'i push etmeden once guncellemeyi unutma.
