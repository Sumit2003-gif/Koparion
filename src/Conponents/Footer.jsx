import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-400 px-6 py-10 text-sm">
      <nav className="text-center mb-6 border-b border-gray-700 pb-4">
        <ul className="inline-flex space-x-6 text-gray-400">
          {["Home", "About", "Shop", "Contact", "Affiliate", "Site Map"].map((item, idx) => (
            <li key={idx} className="hover:text-white cursor-pointer">
              {item}
              {idx !== 5 && <span className="mx-2">|</span>}
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
        <div>
          <h3 className="text-white font-bold mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Delivery Information",
              "Privacy Policy",
              "Terms & Conditions",
              "Gift Certificates",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            {[
              "Contact Us",
              "Returns",
              "Site Map",
              "Order History",
              "Wish List",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">EXTRAS</h3>
          <ul className="space-y-2">
            {["Brands", "Gift Certificates", "Affiliate", "Specials", "My Account"].map(
              (item, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">STORE INFORMATION</h3>
          <p className="mb-2 font-semibold text-white">My Company</p>
          <p>42 avenue des Champs Elysées 75000</p>
          <p>Paris France</p>
          <p>
            <strong>Call us now: </strong>(+1)866-540-3229
          </p>
          <p>
            <strong>Email: </strong>support@plazathemes.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center pt-6">
        <p className="text-gray-500 text-xs">
          Copyright © 2018 <strong>PlazaThemes</strong>. All Right Reserved.
        </p>
        <div className="flex space-x-3">
          <img src="https://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/payment.png" alt="Visa" className="h-6" />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/2CO_logo.svg" alt="2CO" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Moneybookers.svg" alt="Moneybookers" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Cirrus_logo.svg" alt="Cirrus" className="h-6" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
