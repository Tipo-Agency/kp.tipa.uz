# Настройка nginx для SPA (страницы вида /nettare-uz)

Сайт — одностраничное приложение (React Router). При прямом заходе на `https://kp.tipa.uz/nettare-uz` сервер ищет файл по пути и отдаёт 404.

**Что сделать:** в конфиге nginx для этого сайта в блоке `location /` добавить:

```nginx
try_files $uri $uri/ /index.html;
```

Пример полного блока:

```nginx
server {
    server_name kp.tipa.uz;
    root /путь/к/сайту;   # SERVER_PATH из деплоя

    location / {
        try_files $uri $uri/ /index.html;
    }

    # остальные директивы...
}
```

После изменения конфига: `nginx -t` и `systemctl reload nginx` (или `service nginx reload`).
