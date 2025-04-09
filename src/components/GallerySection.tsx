
import { useState } from "react";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "/lovable-uploads/589284ef-6f27-4788-a3be-859daf34635d.png",
      alt: "Audi bakım sonrası",
    },
    {
      url: "/lovable-uploads/a202786d-d9be-493c-b11e-2d1b1358eee4.png",
      alt: "Land Rover Discovery",
    },
    {
      url: "/lovable-uploads/4fefa3de-3723-477f-a9be-d7ad2a77c1e6.png",
      alt: "BMW X6",
    },
    {
      url: "/lovable-uploads/589284ef-6f27-4788-a3be-859daf34635d.png",
      alt: "Audi seramik kaplama",
    },
    {
      url: "/lovable-uploads/a202786d-d9be-493c-b11e-2d1b1358eee4.png",
      alt: "Land Rover detaylı yıkama",
    },
    {
      url: "/lovable-uploads/4fefa3de-3723-477f-a9be-d7ad2a77c1e6.png",
      alt: "BMW detaylı bakım",
    },
  ];

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="section-wrapper bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Galeri</h2>
        <p className="section-subtitle">
          Önceki çalışmalarımızdan bazı örnekleri inceleyebilirsiniz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64"
              onClick={() => openLightbox(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Görüntüle</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Daha fazla çalışmamızı görmek için sosyal medya hesaplarımızı takip edebilirsiniz.
          </p>
          <a href="#contact" className="button-outline">
            Tüm Çalışmalarımızı Görün
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
