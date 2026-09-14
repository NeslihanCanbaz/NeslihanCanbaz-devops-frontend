# Statik dosyalari non-root nginx ile servis ediyoruz
FROM nginxinc/nginx-unprivileged:1.27-alpine

# nginx-unprivileged imaji zaten non-root kullaniciyla calisir
COPY public/ /usr/share/nginx/html/

# Bu image varsayilan olarak 8080 portunu dinler
EXPOSE 8080
