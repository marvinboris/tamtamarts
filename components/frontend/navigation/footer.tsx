import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white text-sm">
      <div className="container flex items-center justify-between h-[72px]">
        <div>TAMTAMARTS © 2022 – Tous droits réservés</div>

        <div className="flex gap-6">
          <FaFacebookF className="w-5 h-5 flex-none" />
          <FaTwitter className="w-5 h-5 flex-none" />
          <FaInstagram className="w-5 h-5 flex-none" />
        </div>
      </div>
    </footer>
  );
}
