# Dockerfile
FROM php:8.2-fpm-alpine

# Sistem paketlerini kur
RUN apk add --no-cache \
    bash \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    freetype-dev \
    oniguruma-dev \
    libzip-dev \
    zip \
    unzip \
    shadow \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl \
    && docker-php-ext-configure gd \
        --with-freetype \
        --with-jpeg \
        --with-webp \
    && docker-php-ext-install gd

# Composer'ı ekle
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Çalışma dizini
WORKDIR /var/www

# Proje dosyalarını kopyala
COPY . .

# Tüm dosyalara ve klasörlere 777 izni ver
RUN chmod -R 777 /var/www

# Kullanıcı oluştur ve geç
RUN adduser -D laravel && chown -R laravel:laravel /var/www
USER laravel
