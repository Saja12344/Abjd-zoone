import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg"
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";

const images = [
{ src: gallery1, alt: "أنشطة تعليمية ممتعة" },
{ src: gallery2, alt: "لعب جماعي في الساحة" },
{ src: gallery3, alt: "ركن القصة والخيال" },
{ src: gallery4, alt: "استكشاف الإيقاع والموسيقى" },
{ src: gallery5, alt: "إبداع وبناء بالمكعبات" },
{ src: gallery6, alt: "تحديات ومسابقات مرحة" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background giraffe-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-12">
         <div className="text-center mb-14 max-w-3xl mx-auto">
  <span className="inline-block bg-secondary text-secondary-foreground font-display font-semibold text-sm px-5 py-2 rounded-full mb-5">
    🌈 معرض أبجد
  </span>

  <h2 className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-4">
    ذكريات تنمو مع الأطفال
  </h2>

  <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
    لحظات من التعلم باللعب، الاكتشاف، وصنع الذكريات الجميلة كل يوم
  </p>
</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              {/* <img
                src={image.src}
                alt={image.alt}
                className="w-full h-58 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              /> */}
              <img
  src={image.src}
  alt={image.alt}
  className="w-full aspect-[4/3] md:aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
  loading="lazy"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-display text-sm font-bold text-primary-foreground">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
