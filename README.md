<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Деплой и открытие страниц КП (например /nettare-uz)

Сайт — SPA: все пути вроде `/nettare-uz` должны отдавать `index.html`. Если после деплоя по прямой ссылке получаете 404, настройте веб-сервер:

- **nginx:** в `location /` добавьте `try_files $uri $uri/ /index.html;` — см. [docs/nginx-spa.md](docs/nginx-spa.md).
- **Netlify / Vercel:** в репозитории уже есть `public/_redirects` и `vercel.json` с нужными правилами.
