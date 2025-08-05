import {
  AttachMoney,
  Facebook,
  Instagram,
  Language,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../LayoutWrapper";
import SectionWrapper from "../../SectionWrapper";
import CategoryTabs from "../../CategoryTabs";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <SectionWrapper>
        
        <CategoryTabs/>
      </SectionWrapper>
      <LayoutWrapper className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  AirCover
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Anti-discrimination
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Disability support
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Cancellation options
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Report neighborhood concern
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Airbnb your home
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Airbnb your experience
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Airbnb your service
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  AirCover for Hosts
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Hosting resources
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Community forum
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Hosting responsibly
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Airbnb-friendly apartments
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Join a free Hosting class
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Find a co-host
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  2025 Summer Release
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Gift cards
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Airbnb.org emergency stays
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-sm text-gray-600">© 2025 Airbnb, Inc.</span>
              <div className="flex items-center space-x-4 text-sm">
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  Terms
                </Link>
                <span className="text-gray-400">·</span>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  Sitemap
                </Link>
                <span className="text-gray-400">·</span>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
                <span className="text-gray-400">·</span>
                <div className="flex items-center space-x-2">
                  <Link to={""} className="text-gray-600 hover:text-gray-900">
                    Your Privacy Choices
                  </Link>
                  <div className="w-6 h-3 bg-blue-600 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                  <Language className="w-4 h-4" />
                  <span>English (US)</span>
                </button>
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
                  <AttachMoney className="w-4 h-4" />
                  <span>USD</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
