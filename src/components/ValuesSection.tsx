import { Sprout, Smile, Sparkles } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "نمو ",
    description: "في أبجد نؤمن بأن كل طفل ينمو بطريقته الخاصة، لذلك نقدم تعليمًا داعمًا ينمي مهاراته الفكرية والاجتماعية والحركية بثقة."
  },
  {
    icon: Smile,
    title: "مرح",
    description:"التعلم في أبجد مليء باللعب والاكتشاف، حيث تتحول الأنشطة التعليمية إلى تجارب ممتعة تعزز حب التعلم لدى الطفل",
  },
  {
    icon: Sparkles,
    title: "بهجة",
    description: "نخلق في أبجد بيئة مليئة بالسعادة والراحة، يشعر فيها الطفل بالأمان والانتماء، فتزدهر شخصيته ويتعلم بفرح.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="bg-cream section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
  <span className="inline-block bg-secondary text-secondary-foreground font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
 ما يميزنا ☀️ 
</span>

<h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-3">
لماذا أبجد؟
</h2>

<p className="font-body text-muted-foreground max-w-lg mx-auto">
نصنع تجربة تعلم ممتعة، آمنة، ومليئة بالحب لكل طفل
</p>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-border group"
            >
              <div className="w-14 h-14 rounded-xl bg-soft-lavender flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{value.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
