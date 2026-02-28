import { MapPin, Phone, Mail } from "lucide-react";

const socials = [
  {
    name: "تيك توك",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.96a8.28 8.28 0 0 0 3.76.92V6.43a4.85 4.85 0 0 1-0-.26z" />
      </svg>
    ),
    href: "https://www.tiktok.com/@abjd.zoon?_r=1&_t=ZS-94Gwdsno1VF",
  },
  {
    name: "سناب شات",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0 scale-x-100" preserveAspectRatio="xMidYMid meet"  >
      <path d="M12 2C8.69 2 6.5 4.39 6.5 7.67v1.71c-.58-.09-1.22.02-1.58.26-.3.2-.45.49-.45.82 0 .64.6.91 1.09 1.12.15.06.43.18.47.23.05.06-.02.34-.06.48-.18.6-.42 1.22-1.3 1.85-.29.21-.61.37-.89.57-.51.36-.8.8-.72 1.32.1.7.86 1 1.47 1.15.21.05.43.09.59.15.16.07.2.14.29.29.12.18.32.39.78.39.34 0 .76-.15 1.36-.32.5-.15 1.08-.31 1.85-.31.19 0 .39.02.59.04.9.12 1.6.77 2.42 1.52.56.51 1.2.87 1.99.87s1.43-.36 1.99-.87c.82-.75 1.52-1.4 2.42-1.52.2-.02.4-.04.59-.04.77 0 1.35.16 1.85.31.6.17 1.02.32 1.36.32.46 0 .66-.21.78-.39.09-.15.13-.22.29-.29.16-.06.38-.1.59-.15.61-.15 1.37-.45 1.47-1.15.08-.52-.21-.96-.72-1.32-.28-.2-.6-.36-.89-.57-.88-.63-1.12-1.25-1.3-1.85-.04-.14-.11-.42-.06-.48.04-.05.32-.17.47-.23.49-.21 1.09-.48 1.09-1.12 0-.33-.15-.62-.45-.82-.36-.24-1-.35-1.58-.26V7.67C17.5 4.39 15.31 2 12 2z"/>      </svg>
    ),
    href: "https://www.snapchat.com/@abjdzoone?locale=en_SA%40calendar%3Dgregorian&sid=9a99a704a0e043099a4888d2a4234180&share_id=mWfYTDYIQH651lsdb2-FHQ&invite_id=z-YbawJF",
  },
  {
    name: "انستغرام",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: "https://www.instagram.com/abjdzone?igsh=bWt6cThnbzVmbTF6",
  },
  {
    name: "واتساب",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: "https://api.whatsapp.com/send/?phone=966538968897&text&type=phone_number&app_absent=0",
  },
   {
    name: "لنكد ان",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.477-.9 1.637-1.85 3.367-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.063 2.064 2.064 0 112.063 2.063zM6.814 20.452H3.865V9h2.949v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.222 0h.003z"/>      </svg>
    ),
    href: "https://www.linkedin.com/company/abjad-أبجد/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-cream section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
         <span className="inline-block bg-secondary text-secondary-foreground font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
🌟 تواصل معنا
</span>

<h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-3">
ابدأ رحلة طفلك معنا اليوم
</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-72 md:h-full min-h-[280px]">
            <iframe
            
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1775.81206365436!2d41.57206853727581!3d19.88380195122558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef5d4c09baeea3%3A0xacb8c760dc560463!2z2YXYsdmD2LIg2KPYqNis2K8g2YTYttmK2KfZgdipINin2YTYo9i32YHYp9mEIPCfkbzwn4-h!5e0!3m2!1sen!2ssa!4v1772295111787!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع أبجد"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">معلومات التواصل</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-soft-lavender flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground"> الدوائر الحكومية, Baljurashi 65627</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-soft-lavender flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground" dir="ltr">+966 538 968 897</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-soft-lavender flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">abjdtimes@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">تابعونا</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-soft-lavender flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
