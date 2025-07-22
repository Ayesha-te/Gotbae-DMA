import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/447470089199"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="text-lg font-semibold"> </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
