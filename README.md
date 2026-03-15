# Trendyol Shopping Cart Clone (React State) 🛒⚛️

Canlı baxmaq üçün kliklə: https://hasanova-a.github.io/Trendyol-Cart-Clone-React/
Salam! Bu repository mənim **React.js** istifadə edərək yığdığım tam interaktiv və dinamik bir e-ticarət səbəti (Shopping Cart) simulyasiyasıdır. Layihənin əsas məqsədi Türkiyənin məşhur "Trendyol" alış-veriş platformasının səbət səhifəsini həm vizual (UI), həm də məntiqi (Logic) olaraq koda tökmək və React-in `State` (vəziyyət) arxitekturasını dərindən mənimsəməkdir.

## 🛠 Nələri öyrəndim və tətbiq etdim?

- **React State İdarəetməsi:** Səbətdəki məhsul məlumatlarını (qiymət, endirim, stok) və məhsul sayını (`count`) React-in Sinif Komponentlərindəki (Class Components) `this.state` obyekti daxilində saxladım.
- **Dinamik Riyazi Hesablamalar:** Məhsulun sayı artdıqca və ya azaldıqca, aralıq cəm, endirim məbləği, qazanc və yekun ödəniş məbləğinin anında, səhifə yenilənmədən hesablanmasını təmin etdim. (Məs: `(price * count) - ((price - sale) * count)`).
- **Hadisələrin İdarə Edilməsi (Events & setState):** Səbətdəki "+" və "-" düymələrinə `onClick` hadisələri əlavə edərək `this.setState` funksiyası ilə state-i yenilədim. Eyni zamanda məhsul sayının 1-dən aşağı düşməməsi üçün xüsusi şərt (`if (count > 1)`) tətbiq etdim.
- **UI/UX Klonlanması (Trendyol UI):** Satıcı məlumatları, pulsuz çatdırılma bildirişləri, məhsul vizualları və sağ paneldəki "Səbət Xülasəsi" (Order Summary) kimi blokları təmiz CSS istifadə edərək əsl Trendyol dizaynına uyğun yığdım.

## 📂 Layihənin Strukturu
- `src/components/Card.jsx` - Səbətin bütün vizual strukturu, state məlumatları və məntiqi hesablamalarının yerləşdiyi ana komponent.
- `src/assets/css/style.css` - Trendyol səhifəsinin rəng palitrası (`#f27a1a`), qrid sistemləri və element düzülüşlərini ehtiva edən dizayn faylı.
- `src/App.jsx` - Komponentləri ekrana render edən (çap edən) təməl fayl.
