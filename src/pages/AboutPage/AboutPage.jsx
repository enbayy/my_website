import React from 'react';
import '../../css/AboutPage.css';
import EnesBayarCv from '../../assets/EnesBayarCv.pdf';

function AboutPage() {
  const handleScrollToContact = () => {
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Kim bu Enes?</h1>
      <div className="about-content">
        <p>
          Merhaba, ben Enes Bayar. 2024 yılında Selçuk Üniversitesi Bilgisayar
          Mühendisliği bölümünden mezun oldum. Üniversite hayatım boyunca
          teknoloji ve yazılım dünyasında çeşitli alanlarda kendimi geliştirme
          fırsatı buldum.
        </p>
        <p>
          Kariyerime mobil uygulama geliştirme alanında başladım ve bu süreçte
          çeşitli projelerde aktif olarak yer aldım. Mobil platformlarda
          kullanıcı deneyimini iyileştirmek ve işlevselliği artırmak amacıyla
          çeşitli uygulama geliştirme çalışmalarında bulundum.
        </p>
        <p>
          Sonrasında oyun sektöründe çalışmalara başladım ve bu alanda kapsamlı
          deneyimler edindim. İki farklı şirkette staj yaparak oyun geliştirme
          süreçlerinin tüm aşamalarında ve reklam entegrasyonlarında görev
          aldım. Ancak zamanla web teknolojilerine olan ilgim arttı ve kariyerimi
          Front-End geliştirme üzerine şekillendirmeye karar verdim. Şu anda aktif
          olarak Front-End geliştirme alanında çalışmalarımı sürdürüyorum.
        </p>
        <p>
          Global bir şirkette başarılı bir staj dönemini tamamladım. Bu süreçte,
          AWS hizmetlerini kullanarak full-stack bir e-ticaret platformu
          geliştirdim. Bu platformda, kullanıcılar ürünleri görüntüleyip sepete
          ekleyebiliyor ve güvenli ödeme yapabiliyor. AWS Cognito ile kullanıcı
          kimlik doğrulama ve yetkilendirme işlemlerini gerçekleştirdim ve IAM ile
          güvenli erişim ve rol yönetimi sağladım. Bu süreç, AWS bulut
          hizmetlerinde derinlemesine bilgi kazanmamı ve full-stack geliştirme
          becerilerimi pekiştirmemi sağladı.
        </p>
      </div>
      <div className="button-cnt">
        <a href={EnesBayarCv} download="EnesBayarCv.pdf">
          <button className="button">CV İndir</button>
        </a>
        <button className="button" onClick={handleScrollToContact}>
          İletişime Geç
        </button>
      </div>
    </div>
  );
}

export default AboutPage;