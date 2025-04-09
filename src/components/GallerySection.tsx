
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const galleryImages = [
    {
      url: "/lovable-uploads/fb3d45bd-5791-467e-b7e9-67e6de2c0f9c.png",
      alt: "Volkswagen Golf - Detaylı bakım sonrası",
    },
    {
      url: "/lovable-uploads/d6169b76-0d35-4294-adcc-0d36557b1087.png",
      alt: "Land Rover Freelander - Arka görünüm",
    },
    {
      url: "/lovable-uploads/f15cba00-427b-4ca7-90d3-4597b436cab1.png",
      alt: "Land Rover Discovery - Ön ızgara",
    },
    {
      url: "/lovable-uploads/e6c2621f-7ea8-4a46-a0d8-af54d5b23ee7.png",
      alt: "Lüks araç iç temizlik ve bakım",
    },
    {
      url: "/lovable-uploads/15aed1a1-a711-499a-9fd3-78112d584a19.png",
      alt: "BMW M5 - Detaylı bakım sonrası",
    },
    {
      url: "/lovable-uploads/0e7cc5cf-ee40-4450-a7d6-1e764fc4c431.png",
      alt: "BMW lüks araç iç döşeme",
    },
    {
      url: "/lovable-uploads/0aacea6a-963d-4139-be1a-377ec8dc875e.png",
      alt: "Land Rover iç temizlik",
    },
    {
      url: "/lovable-uploads/eff9de68-93a7-4eac-b27d-062d1832f130.png",
      alt: "Audi motor detaylı temizlik",
    },
    {
      url: "/lovable-uploads/dfc2182a-df81-42ae-bd47-fbb6f4764d07.png",
      alt: "Land Rover Freelander bakım sonrası",
    },
    {
      url: "/lovable-uploads/6f2c42ff-e642-469a-b1ce-234264ee70fb.png",
      alt: "BMW Logolu iç döşeme",
    },
    {
      url: "/lovable-uploads/382b9fc7-52d7-4792-9693-db34e19765c2.png",
      alt: "Araç boyama hazırlık",
    },
  ];

  const openLightbox = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
      setSelectedImage(galleryImages[currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1].url);
    } else {
      setCurrentImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
      setSelectedImage(galleryImages[currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1].url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="section-wrapper bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Galeri</h2>
        <p className="section-subtitle">
          Önceki çalışmalarımızdan bazı örnekleri inceleyebilirsiniz.
        </p>

        {/* Featured Carousel */}
        <div className="mb-12 px-4">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.slice(0, 5).map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-[50vh] md:h-[60vh]">
                    <div 
                      className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(image.url, index)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">Görüntüle</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64"
              onClick={() => openLightbox(image.url, index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Görüntüle</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm truncate">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X size={24} />
            </button>
            <button 
              className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ChevronRight size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white">
              {galleryImages[currentImageIndex].alt}
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Daha fazla çalışmamızı görmek için sosyal medya hesaplarımızı takip edebilirsiniz.
          </p>
          <a href="#contact" className="button-outline">
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
