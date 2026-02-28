import { Users, Bus, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "+200",
    label: "طالب وطالبة",
  },
  {
    icon: Bus,
    number: "+10",
    label: "رحلة خارجية ",
  },
  {
    icon: Trophy,
    number: "+50",
    label: "فعالية تعليمية",
  },
];

const NumbersSection = () => {
  return (
    <section id="numbers" className="bg-primary section-padding relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary-foreground/5" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary-foreground/5" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-foreground/15 text-primary-foreground font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            🏆 إنجازاتنا
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-3">
            أرقامنا تتحدث
          </h2>
          <p className="font-body text-primary-foreground/70 max-w-lg mx-auto">
            نفتخر بمسيرتنا في تعليم ورعاية أطفالكم
          </p>
        </div>
      
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6"> */}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-1">
                {stat.number}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
