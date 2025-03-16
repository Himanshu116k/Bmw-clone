import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 text-sm">
      {/* Top row: FIND YOUR BMW | All Models */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="mb-2 sm:mb-0">
          <a
            href="#"
            className="font-semibold uppercase tracking-widest hover:underline"
          >
            Find Your BMW
          </a>
        </div>
        <div>
          <a
            href="#"
            className="font-semibold uppercase tracking-widest hover:underline"
          >
            All Models
          </a>
        </div>
      </div>

      {/* Middle section: columns with links */}
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Find a Dealer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Request a Test Drive
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Build your BMW
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BMW Financial Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BMW Safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BMW Premium Selection (Used Cars)
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Experience BMW</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                BMW Group
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BMW Excellence Club
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                BMW Motorrad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Charging Network
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Legal Disclaimer/Imprint
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator line */}
      <hr className="border-gray-300" />

      {/* Bottom row: social icons, copyright, extra links */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Social Icons (Replace with actual icons or images) */}
        <div className="flex space-x-4">
  <a href="#" className="hover:opacity-75">
    <span className="sr-only">Facebook</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 4.98 3.66 9.13 8.44 9.93v-7.02H7.89v-2.91h2.55V9.41c0-2.53 1.52-3.94 3.84-3.94 1.11 0 2.28.2 2.28.2v2.5H15.5c-1.25 0-1.64.77-1.64 1.56v1.86h2.79l-.45 2.91h-2.34v7.02c4.78-.8 8.44-4.95 8.44-9.93z"/>
    </svg>
  </a>

  <a href="#" className="hover:opacity-75">
    <span className="sr-only">Twitter</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.46 6.01c-.77.34-1.6.56-2.47.66.89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.83-2.73 1.02a4.15 4.15 0 0 0-7.07 3.78A11.78 11.78 0 0 1 3.23 4.91a4.13 4.13 0 0 0 1.28 5.55 4.1 4.1 0 0 1-1.88-.52v.05c0 2.02 1.43 3.71 3.34 4.09a4.16 4.16 0 0 1-1.87.07 4.15 4.15 0 0 0 3.88 2.89A8.34 8.34 0 0 1 2 19.29a11.76 11.76 0 0 0 6.36 1.86c7.63 0 11.8-6.33 11.8-11.82 0-.18 0-.36-.01-.54a8.41 8.41 0 0 0 2.07-2.14z"/>
    </svg>
  </a>

  <a href="#" className="hover:opacity-75">
    <span className="sr-only">Instagram</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.18.05 1.82.24 2.25.4.56.22.96.5 1.38.92.42.42.7.82.92 1.38.16.43.35 1.07.4 2.25.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.18-.24 1.82-.4 2.25a3.43 3.43 0 0 1-.92 1.38 3.43 3.43 0 0 1-1.38.92c-.43.16-1.07.35-2.25.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.18-.05-1.82-.24-2.25-.4a3.43 3.43 0 0 1-1.38-.92 3.43 3.43 0 0 1-.92-1.38c-.16-.43-.35-1.07-.4-2.25-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.18.24-1.82.4-2.25a3.43 3.43 0 0 1 .92-1.38A3.43 3.43 0 0 1 4.9 2.63c.43-.16 1.07-.35 2.25-.4C8.42 2.17 8.8 2.16 12 2.16zm0 1.84a7.81 7.81 0 1 0 0 15.62 7.81 7.81 0 0 0 0-15.62zm0 12.94a5.12 5.12 0 1 1 0-10.24 5.12 5.12 0 0 1 0 10.24zm6.4-10.56a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
    </svg>
  </a>

  <a href="#" className="hover:opacity-75">
    <span className="sr-only">YouTube</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 15.5v-7l6 3.5-6 3.5zM21.8 8.01c-.24-1.4-.95-2.51-2.35-2.75-2.06-.37-10.31-.37-12.36 0-1.4.24-2.11 1.35-2.35 2.75-.3 1.78-.3 5.42 0 7.2.24 1.4.95 2.51 2.35 2.75 2.05.37 10.3.37 12.36 0 1.4-.24 2.11-1.35 2.35-2.75.3-1.78.3-5.42 0-7.2z"/>
    </svg>
  </a>

  <a href="#" className="hover:opacity-75">
    <span className="sr-only">LinkedIn</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM4 8h4v12H4V8zm6 0h4v1.71c.59-.89 1.75-2.21 3.73-2.21 3.26 0 3.86 2.15 3.86 4.94V20h-4v-6.94c0-1.66-.03-3.81-2.33-3.81-2.33 0-2.69 1.82-2.69 3.69V20h-4V8z"/>
    </svg>
  </a>
</div>

        {/* Copyright */}
        <div className="text-center md:text-left text-gray-500">
          &copy; BMW AG 2025
        </div>

        {/* Extra links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Legal Disclaimer/Imprint
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
