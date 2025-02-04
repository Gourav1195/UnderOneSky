import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">UnderOneSky</h3>
          <p className="text-sm">
            Connecting you with the wonders of the universe. Explore telescopes, binoculars, and more to bring the sky closer to you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/ai" className="hover:text-white">AI Chatbot</a></li>
            {/* <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">Email: gouravmodi1195@gmail.com</p>
          <p className="text-sm">Phone: +91 870 957 5693 </p>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} UnderOneSky. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
