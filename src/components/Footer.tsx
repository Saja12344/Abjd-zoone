import giraffeMascot from "@/assets/girffe.png";
import CTS from "@/assets/CTSlogo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={giraffeMascot} alt="" className="w-8 h-8 rounded-full" />
          <span className="font-display font-bold">
          
          </span>
        </div>
       <p className="font-body text-sm opacity-80 flex items-center gap-2">
  <img src={CTS} alt="CTS logo" className="h-[1em]" />
  CTS © 2026 — All rights reserved
</p>
      </div>
    </footer>
  );
};

export default Footer;
