import { BsInstagram, BsWhatsapp, BsGeoAlt, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-[#EA631B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">StartZone</h2>
            <p className="text-[#EBEBDF] max-w-md">
              Um lugar novo e diferente para jogar
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <BsEnvelope className="text-[#A8C2E0] text-lg" />
              <p>startzone@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <BsWhatsapp className="text-[#A8C2E0] text-lg" />
              <p>(11) 99999-9999</p>
            </div>

            <div className="flex items-center gap-3">
              <BsInstagram className="text-[#A8C2E0] text-lg" />
              <p>@startzone</p>
            </div>

            <div className="flex items-center gap-3">
              <BsGeoAlt className="text-[#A8C2E0] text-lg" />
              <p>Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#A8C2E0] pt-4 text-center text-sm text-[#EBEBDF]">
          <p>&copy; 2026 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
