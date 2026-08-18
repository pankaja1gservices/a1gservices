import { MessageCircle, Phone, Send } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "./site-data";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${PHONE}`}
          className="flex flex-col items-center gap-1 py-3 text-[0.7rem] font-medium text-primary transition-colors active:bg-secondary"
        >
          <Phone className="size-5" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border/70 py-3 text-[0.7rem] font-medium text-primary transition-colors active:bg-secondary"
        >
          <MessageCircle className="size-5" />
          WhatsApp
        </a>
        <a
          href="#enquiry"
          className="flex flex-col items-center gap-1 py-3 text-[0.7rem] font-medium text-primary transition-colors active:bg-secondary"
        >
          <Send className="size-5" />
          Enquire Now
        </a>
      </div>
    </div>
  );
}
