import React from 'react';
import '../../css/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <p>Merhaba, ben Enes Bayar. 2024 yılında Selçuk Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum.
          Üniversite hayatım boyunca teknoloji ve yazılım dünyasında çeşitli alanlarda kendimi geliştirme fırsatı buldum.
        </p>
        <p>Önceleri oyun sektöründe çalışmalara başladım ve bu alanda kendime deneyim kazandırdım. Ancak daha sonra web teknolojilerine olan ilgim arttı ve kariyerimi Front-End geliştirme üzerine şekillendirmeye karar verdim. Şu an aktif olarak Front-End geliştirme üzerine çalışmalarımı sürdürüyorum.</p>
        <p>Global bir şirkette başarılı bir staj dönemini tamamladım. Bu süreçte, tam anlamıyla bir full-stack e-ticaret platformu geliştirdim. Projede, AWS hizmetlerini aktif şekilde kullandım. Kullanıcıların ürünleri görüntüleyebildiği, sepet oluşturabildiği ve güvenli ödeme işlemleri gerçekleştirebildiği bir platform inşa ettim.</p>
        <p>Bu proje sırasında AWS'nin çeşitli hizmetlerinden faydalandım. AWS Cognito ile kullanıcı kimlik doğrulama ve yetkilendirme işlemlerini gerçekleştirdim. Kullanıcıların güvenli bir şekilde giriş yapabilmesi ve kayıt olabilmesi için güçlü bir kimlik yönetim sistemi oluşturduk. AWS IAM (Identity and Access Management) kullanarak sistemdeki kaynaklara erişimi güvenli hale getirdim ve kullanıcı rollerini tanımladım.</p>
        <p>Ayrıca, projede AWS S3'ü kullanarak statik dosya yönetimini gerçekleştirdim ve AWS Lambda ile sunucusuz fonksiyonları etkin bir şekilde kullanarak dinamik işlemleri otomatik hale getirdim. Bu sistemler, platformun ölçeklenebilir ve güvenli bir altyapıya sahip olmasını sağladı.</p>
        <p>Bu deneyim sayesinde AWS'nin bulut bilişim hizmetlerinde derin bir bilgi birikimi kazandım ve tam anlamıyla bir full-stack geliştirici olarak çalıştım. Şu anda kendi projelerim üzerinde çalışmaya devam ediyorum ve gelecekte daha büyük projelerde AWS hizmetlerini etkin bir şekilde kullanmayı hedefliyorum.</p>
        <p>Oyun projelerimle ilgili daha fazla bilgiyi ve detayları projeler sekmesinden bulabilirsiniz. Bu projeler, oyun geliştirme konusundaki becerilerimi ve yaratıcı yeteneklerimi sergiliyor.</p>
      </div>
    </div>
  );
}

export default AboutPage;