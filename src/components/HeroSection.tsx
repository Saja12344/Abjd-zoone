import heroBg from "@/assets/hero-bg.jpg";
import giraffeMascot from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden giraffe-pattern">
      
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
           {/* <div className="flex-1 flex justify-center">
      <img
  src={giraffeMascot}
  alt="زرافة الروضة"
  className="w-40 md:w-64 lg:w-80 mx-auto md:mx-0 drop-shadow-2xl animate-float"
/>
        </div> */}

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 pt-24 pb-16 px-4">
        <div className="flex-1 text-center md:text-right">
          <span className="inline-block bg-secondary text-secondary-foreground font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4 animate-fade-in-up">
            أهلاً بكم في أبجد
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
         بداية طفولة سعيدة ورحلة تعلم  <br />
            <span className="text-primary">فريدة</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
            بيئة تعليمية ممتعة حيث يصل كل طفل إلى النجوم ! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground font-display font-bold text-base px-8 py-3 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              انضم لعائلتنا
            </a>
            <a
              href="#values"
              className="bg-secondary text-secondary-foreground font-display font-bold text-base px-8 py-3 rounded-full hover:bg-accent transition-colors"
            >
              اعرف المزيد
            </a>
          </div>
        </div>

   
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V100H0V50Z" fill="hsl(var(--cream))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
