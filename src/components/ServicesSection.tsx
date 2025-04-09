
import { Droplets, PaintBucket, Wrench, Sparkles, Brush, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Droplets className="h-10 w-10 mb-4 text-autocare-700" />,
      title: "Detaylı Yıkama",
      description: "Aracınızın her köşesini özenle temizleyerek, fabrikadan çıkmış gibi parlak bir görünüm sağlıyoruz."
    },
    {
      icon: <PaintBucket className="h-10 w-10 mb-4 text-autocare-700" />,
      title: "Seramik Kaplama",
      description: "Uzun süreli koruma ve parlaklık için profesyonel seramik kaplama hizmetimiz ile aracınızı koruyun."
    },
    {
      icon: <Wrench className="h-10 w-10 mb-4 text-autocare-700" />,
      title: "Motor Bakımı",
      description: "Aracınızın kalbini temizliyor, performansı arttırıcı bakım işlemlerini gerçekleştiriyoruz."
    },
    {
      icon: <Sparkles className="h-10 w-10 mb-4 text-autocare-700" />,
      title: "İç Detaylı Temizlik",
      description: "Aracınızın iç mekanını, koltuk, tavan, halı ve diğer aksamlarını derinlemesine temizliyoruz."
    },
    {
      icon: <Brush className="h-10 w-10 mb-4 text-autocare-700" />,
      title: "Pasta Cila",
      description: "Aracınızın boyasındaki çizikleri ve matlaşmaları gidererek, parlak ve pürüzsüz bir yüzey elde ediyoruz."
    },
    {
      icon: <Shield className="h-10 w-10 mb-4 text-autocare-700" />,
      title: "Koruyucu Kaplamalar",
      description: "Çeşitli dış etkenlerden aracınızı koruyacak özel kaplamaları profesyonel ekibimizle uyguluyoruz."
    }
  ];

  return (
    <section id="services" className="section-wrapper">
      <div className="container mx-auto">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          Aracınızın ihtiyacına özel profesyonel bakım hizmetlerimiz ile tanışın.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="service-card p-6">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-autocare-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-autocare-800 mb-4">
            Profesyonel Ekibimizle Aracınız Güvende
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Her araç bizim için özeldir. Detaylı inceleme sonrası, aracınıza en uygun bakım planını oluşturuyoruz.
          </p>
          <a href="#contact" className="button-primary">
            Hemen Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
