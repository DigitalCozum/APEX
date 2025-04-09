
import { Car, Award, Settings, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Car className="h-8 w-8 text-autocare-700" />,
      value: "5000+",
      label: "Araç Bakımı",
    },
    {
      icon: <Award className="h-8 w-8 text-autocare-700" />,
      value: "10+",
      label: "Yıllık Deneyim",
    },
    {
      icon: <Settings className="h-8 w-8 text-autocare-700" />,
      value: "20+",
      label: "Profesyonel Hizmet",
    },
    {
      icon: <Users className="h-8 w-8 text-autocare-700" />,
      value: "3000+",
      label: "Mutlu Müşteri",
    },
  ];

  return (
    <section id="about" className="section-wrapper bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Hakkımızda</h2>
        <p className="section-subtitle">
          Uzman ekibimiz ve profesyonel ekipmanlarımızla aracınıza en iyi bakımı sunuyoruz.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-autocare-800">Detaylı Oto</span>, araç bakımı ve restorasyonu konusunda uzmanlaşmış 
              profesyonel bir ekiple hizmet vermektedir. Amacımız, her aracın orijinal güzelliğini 
              ortaya çıkarmak ve korumaktır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Yüksek kaliteli malzemeler, modern ekipmanlar ve alanında uzman personelimizle 
              aracınıza özel çözümler sunuyoruz. İç ve dış detaylı bakım, seramik kaplama, 
              pasta cila ve motor bakımı gibi birçok hizmeti profesyonel standartlarda sağlıyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Müşteri memnuniyeti önceliğimizdir. Aracınızın ihtiyaçlarını doğru belirleyerek, 
              beklentilerinizin ötesinde sonuçlar elde etmenizi sağlıyoruz.
            </p>
          </div>

          <div className="relative h-64 md:h-auto overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/a202786d-d9be-493c-b11e-2d1b1358eee4.png" 
              alt="Araba bakımı" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-autocare-800">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
