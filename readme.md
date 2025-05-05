# 📝 Laravel Todo API

## Tech Stack

- Laravel 10
- PHP 8.2
- MySQL
- Redis
- Docker
- Laravel Sanctum


## API Özellikleri

### Todos

| Yöntem | Endpoint             | Açıklama                                  |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/todos`         | Sayfalı todo listesi (filtreleme, sıralama) |
| POST   | `/api/todos`         | Yeni bir todo oluşturur                   |
| GET    | `/api/todos/{id}`    | Belirli bir todo'yu getirir               |
| PUT    | `/api/todos/{id}`    | Todo günceller                            |
| DELETE | `/api/todos/{id}`    | Todo siler                                |

### Arama

| Yöntem | Endpoint             | Açıklama                                  |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/todos/search`  | Başlık ve açıklamaya göre arama           |

### İstatistikler

| Yöntem | Endpoint                  | Açıklama                                |
|--------|---------------------------|-----------------------------------------|
| GET    | `/api/stats/todos`        | Durum bazında todo sayıları             |
| GET    | `/api/stats/priorities`   | Öncelik bazında todo sayıları           |

## Yazılım Prensipleri

Proje boyunca aşağıdaki yazılım prensiplerine dikkat edilmiştir:

- OOP (Object-Oriented Programming)
- SOLID
- Clean Code
- DRY


## 🧱 Kod Organizasyonu ve Mimari

Proje katmanlı mimari prensiplerine göre yapılandırılmıştır:

### 1. Repository Pattern
- Veritabanı işlemleri `App\Repositories` klasöründe soyutlanmıştır.
- Örnek: `TodoRepository`, `StatsRepository`

### 2. Service Layer
- İş mantığı `App\Services` klasöründe tutulur.
- Controller'lar doğrudan model ile değil, servis katmanı ile iletişim kurar.
- Örnek: `TodoService`, `StatsService`

### 3. Dependency Injection
- Laravel'in service container'ı aracılığıyla controller ve service katmanına bağımlılıklar otomatik olarak enjekte edilir.
- Örnek:
  ```php
      /**
     * @param CategoryService $service
     */
    public function __construct(
        private CategoryService $service
    ){}
  
### 4. Middleware
- Throttle ve sanitize middleware kulalnılmıştır.
- Throttle middleware üst üste her 5 request sonrası 1 dakika ip ban işlemi yapar.

### 5. Form Request
- Input validation için form request sınıfları kullanılmıştır.