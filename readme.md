# 📝 Laravel Todo API

### İçindekiler

- [Tech Stack](#tech-stack)
- [API](#api)
- - [Yazılım Prensipleri](#yazılım-prensipleri)
- - [Kod Organizasyonu ve Mimari](#kod-organizasyonu-ve-mimari)
- [Web App](#web-app)

## Tech Stack

- Laravel 12
- React.js
- PHP 8.2
- MySQL
- Redis
- Docker


## API

### Restful

#### Todos

| Yöntem | Endpoint             | Açıklama                                  |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/todos`         | Sayfalı todo listesi (filtreleme, sıralama) |
| POST   | `/api/todos`         | Yeni bir todo oluşturur                   |
| GET    | `/api/todos/{id}`    | Belirli bir todo'yu getirir               |
| PUT    | `/api/todos/{id}`    | Todo günceller                            |
| DELETE | `/api/todos/{id}`    | Todo siler                                |

#### Arama

| Yöntem | Endpoint             | Açıklama                                  |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/todos/search`  | Başlık ve açıklamaya göre arama           |

#### İstatistikler

| Yöntem | Endpoint                  | Açıklama                                |
|--------|---------------------------|-----------------------------------------|
| GET    | `/api/stats/todos`        | Durum bazında todo sayıları             |
| GET    | `/api/stats/priorities`   | Öncelik bazında todo sayıları           |

### Yazılım Prensipleri

Proje boyunca aşağıdaki yazılım prensiplerine dikkat edilmiştir:

- OOP (Object-Oriented Programming)
- SOLID
- Clean Code
- DRY


### Kod Organizasyonu ve Mimari

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


## Web App

### Kullanılan Teknolojiler

- **React 18+**
- **Redux Toolkit** (state yönetimi)
- **React Router v6+** (sayfalar arası yönlendirme)
- **Axios** (API istekleri)
- **React Hook Form** + **Yup** (form ve validasyon yönetimi)
- **Tailwind CSS** (UI bileşenleri ve stillendirme)

### Sayfalar

1. **Dashboard**
  - Durumlara göre todo sayıları (istatistik kartları)
  - Yaklaşan görev listesi
  - Hızlı durum değiştirme

2. **Todo Listesi Sayfası**
  - Arama ve filtreleme
  - Sıralama seçenekleri
  - Sayfalama desteği
  - Hızlı durum güncelleme, silme ve düzenleme

3. **Todo Detay/Düzenleme Sayfası**
  - Başlık, açıklama, tarih ve kategoriler için form
  - Çoklu kategori seçimi
  - Tarih seçici ile bitiş tarihi
  - Yup validasyonu

4. **Kategori Yönetimi (Bonus)**
  - Kategori ekleme, düzenleme, silme
  - Renk atama

### Bileşenler

- **TodoList**: Todo'ları listeleyen tablo veya grid yapısı
- **TodoItem**: Tek bir todo öğesi kartı
- **TodoForm**: Todo ekleme/düzenleme formu
- **TodoFilter**: Arama, filtreleme ve sıralama kontrolleri
- **StatusBadge**: Todo'nun durum rozetleri
- **PriorityIndicator**: Öncelik gösterge simgesi
- **StatePagination**: Sayfalama kontrol bileşeni
- **CategorySelector**: Çoklu seçim ile kategori belirleme
- **ConfirmationModal**: Silme işlemleri için onay modali