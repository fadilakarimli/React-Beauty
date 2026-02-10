import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcPaypal, FaChevronRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiPayoneer } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300">
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">Find us here:</p>
              <div className="flex gap-3">
                <a href="#" className="w-11 h-11 bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300">
                  <FaFacebookF className="text-gray-400 text-base" />
                </a>
                <a href="#" className="w-11 h-11 bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300">
                  <FaTwitter className="text-gray-400 text-base" />
                </a>
                <a href="#" className="w-11 h-11 bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300">
                  <FaInstagram className="text-gray-400 text-base" />
                </a>
                <a href="#" className="w-11 h-11 bg-[#3a3a3a] flex items-center justify-center hover:bg-[#4a4a4a] transition-colors duration-300">
                  <FaLinkedinIn className="text-gray-400 text-base" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-white text-5xl font-bold italic" style={{ fontFamily: 'cursive' }}>
                BeShop
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">Payment methods:</p>
              <div className="flex gap-2">
                <div className="w-14 h-9 bg-[#1a47b8] flex items-center justify-center rounded">
                  <FaCcVisa className="text-white text-2xl" />
                </div>
                <div className="w-14 h-9 bg-gradient-to-r from-[#eb001b] to-[#f79e1b] flex items-center justify-center rounded">
                  <FaCcMastercard className="text-white text-2xl" />
                </div>
                <div className="w-14 h-9 bg-[#003087] flex items-center justify-center rounded">
                  <FaCcPaypal className="text-white text-2xl" />
                </div>
                <div className="w-14 h-9 bg-[#ff4f00] flex items-center justify-center rounded">
                  <SiPayoneer className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Make up
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  SPA
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Perfume
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Nails
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Skin care
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Hair care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Shipping details
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaChevronRight className="text-xs mr-2" />
                  Information
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-500 text-lg mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>27 Division St, New York,</p>
                  <p>NY 10002, USA</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-pink-500 text-lg flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="text-white font-medium">+1 345 99 71 345</p>
                  <p>+1 345 74 64 975</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-pink-500 text-lg flex-shrink-0" />
                <p className="text-gray-400">info@beshop.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © All rights reserved. BeShop 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;