
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8 px-6 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Conversion Insights Calculator</h4>
            <p className="text-sm text-gray-200">
              The professional tool for marketers and business analysts to optimize conversion rates and maximize ROI.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">Calculators</a></li>
              <li><a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-accent transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm text-gray-200">
              <p>Email: contact@conversioninsights.com</p>
              <p>Phone: +91 98765-43210</p>
              <p>Address: Bengaluru, Karnataka, India</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Conversion Insights Calculator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
