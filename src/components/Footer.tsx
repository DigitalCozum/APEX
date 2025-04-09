
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DETAYLI OTO</h3>
            <p className="text-gray-400 mb-4">
              Profesyonel araç bakım ve restorasyon hizmetleri ile aracınızın değerini ve görünümünü koruyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-autocare-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-autocare-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-autocare-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-autocare-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Sanayi Mahallesi, Otomotiv Caddesi No:123, Trabzon, Türkiye
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-autocare-400 flex-shrink-0" />
                <span className="text-gray-400">+90(532) 363 46 05</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-autocare-400 flex-shrink-0" />
                <span className="text-gray-400">0(462) 325 55 61</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-autocare-400 flex-shrink-0" />
                <span className="text-gray-400">info@detaylioto.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Detaylı Oto. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
