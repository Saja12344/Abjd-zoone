// import giraffeMascot from "@/assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
//       <div className="container mx-auto flex items-center justify-between py-3 px-4">
//         <a href="#" className="flex items-center gap-2">
//           <img src={giraffeMascot} alt="أبجد" className="w-10 h-10 rounded-full" />
//           <span className="font-display text-xl font-bold text-primary">
//              </span>
//         </a>
//         <div className="hidden md:flex items-center gap-6">
//           {[
//             { label: "الرئيسية", href: "#home" },
//             { label: "قيمنا", href: "#values" },
//             { label: "المعرض", href: "#gallery" },
//             { label: "أرقامنا", href: "#numbers" },
//             { label: "تواصل", href: "#contact" },
//           ].map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>
//         <a
//           href="#contact"
//           className="bg-primary text-primary-foreground font-display font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
//         >
//           سجّل الآن
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import giraffeMascot from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#values" },
    { label: "معرض الصور", href: "#gallery" },
    { label: "إحصائياتنا", href: "#numbers" },
    { label: "تواصل معنا", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={giraffeMascot} alt="أبجد" className="w-10 h-10 rounded-full" />
          <span className="font-display text-xl font-bold text-primary">
            أبجد
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-primary text-primary-foreground font-display font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          سجّل الآن
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border p-4 flex flex-col gap-4 text-center">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-semibold text-muted-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;