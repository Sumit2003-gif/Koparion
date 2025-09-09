import React from "react";
import {
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
  FaYoutube,
  FaFlickr,
  FaVimeoV,
  FaInstagram,
} from "react-icons/fa";

const socialIcons = [
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Google+", icon: FaGooglePlusG, url: "#" },
  { name: "Facebook", icon: FaFacebookF, url: "#" },
  { name: "YouTube", icon: FaYoutube, url: "#" },
  { name: "Flickr", icon: FaFlickr, url: "#" },
  { name: "Vimeo", icon: FaVimeoV, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" },
];

const SocialIcons = () => {
  return (
    <div className="flex justify-end bg-gray-100 px-10 py-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl font-bold mb-4">STAY CONNECTED</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {socialIcons.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              aria-label={name}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-black transition-colors duration-300 relative group"
            >
              <Icon className="text-black group-hover:text-white text-xl transition-colors duration-300" />
              <span className="absolute -bottom-8 px-2 py-1 text-xs bg-white text-black rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
