import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-semibold">Shopz</h2>
          <p className="text-sm mt-2">
            Online brand clothing founded in 2006 in Japan. Heavenly focuses on
            selling only quality and branded items, limited edition collections
            by best fashion designers.
          </p>
          <p className="text-sm mt-4">@Shopz 2023. All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-sm">
            <li>Information</li>
            <li>Store Locator</li>
            <li>Bulk Purchase</li>
            <li>Alteration Service</li>
            <li>Gift Delivery Service</li>
            <li>Live Station</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-1 text-sm">
            <li>FAQ</li>
            <li>Online Shopping Guide</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social Media</h3>
          <div className="flex space-x-3">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        @Shopz 2025. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;