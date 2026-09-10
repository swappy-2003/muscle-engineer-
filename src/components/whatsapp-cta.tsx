import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/917420883355?text=Hi%20Muscle%20Engineers%2C%20I%20want%20to%20join%20the%20gym.";

export function WhatsappCta() {
  return (
    <a
      className="whatsapp-cta"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Muscle Engineers on WhatsApp"
    >
      <MessageCircle size={23} strokeWidth={2} aria-hidden="true" />
      <span>WhatsApp us</span>
    </a>
  );
}
