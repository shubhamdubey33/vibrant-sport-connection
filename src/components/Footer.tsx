
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 grid place-items-center rounded-lg font-bold text-white bg-[#ea384c]">
                Ti
              </div>
              <div className="font-medium">
                Techinterio <span className="text-primary">Sports</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Celebrating teamwork, competition, and company culture through our annual sports day event.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#teams" className="text-sm text-gray-600 hover:text-primary transition-colors">Teams</a></li>
              <li><a href="#cricket" className="text-sm text-gray-600 hover:text-primary transition-colors">Cricket</a></li>
              <li><a href="#tugofwar" className="text-sm text-gray-600 hover:text-primary transition-colors">Tug of War</a></li>
              <li><a href="#volunteers" className="text-sm text-gray-600 hover:text-primary transition-colors">Volunteers</a></li>
              <li><a href="#schedule" className="text-sm text-gray-600 hover:text-primary transition-colors">Schedule</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">Teams</h4>
            <ul className="space-y-2">
              <li><a href="#teams" className="text-sm text-gray-600 hover:text-primary transition-colors">Knight Vipers</a></li>
              <li><a href="#teams" className="text-sm text-gray-600 hover:text-primary transition-colors">Eagle Warriors</a></li>
              <li><a href="#teams" className="text-sm text-gray-600 hover:text-primary transition-colors">Royal Strikers</a></li>
              <li><a href="#teams" className="text-sm text-gray-600 hover:text-primary transition-colors">Supreme Spartans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">+91 9667070312</li>
              <li className="text-sm text-gray-600">Ground Floor B-4/5a</li>
              <li className="text-sm text-gray-600">Sector 63 Noida</li>
              <li className="text-sm text-gray-600">201301</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Techinterio. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-sm text-gray-500 flex items-center">
              Made with <Heart size={14} className="text-red-500 mx-1" /> by Techinterio Design Team
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
