
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-autocare-700" />,
      title: "Telefon",
      details: [
        "+90(532) 363 46 05",
        "0(462) 325 55 61"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-autocare-700" />,
      title: "E-posta",
      details: [
        "info@detaylioto.com",
        "destek@detaylioto.com"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-autocare-700" />,
      title: "Adres",
      details: [
        "Sanayi Mahallesi,",
        "Otomotiv Caddesi No:123",
        "Trabzon, Türkiye"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-autocare-700" />,
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 08:00 - 18:00",
        "Cumartesi: 09:00 - 17:00",
        "Pazar: Kapalı"
      ]
    }
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="container mx-auto">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">
          Aracınızın bakımı için randevu almak veya bilgi almak için bize ulaşın.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {info.icon}
                    <h3 className="ml-3 text-xl font-semibold text-autocare-800">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-gray-700 mb-4">
                Şimdi deneyimleyin! 🔧⬇️
              </p>
              <div className="bg-autocare-50 p-4 rounded-lg border border-autocare-200">
                <p className="font-medium text-autocare-800 mb-2">İletişim Hatlarımız:</p>
                <p className="text-gray-700 mb-1">📱 İletişim: +90(532) 363 46 05</p>
                <p className="text-gray-700">📞 İletişim: 0(462) 325 55 61</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-autocare-800 mb-6">Bize Mesaj Gönderin</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-autocare-500 focus:border-autocare-500"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-autocare-500 focus:border-autocare-500"
                    placeholder="E-posta Adresiniz"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-autocare-500 focus:border-autocare-500"
                    placeholder="Telefon Numaranız"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-autocare-500 focus:border-autocare-500"
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full button-primary"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
