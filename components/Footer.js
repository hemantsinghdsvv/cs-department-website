// components/Footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 border-b border-gray-500 pb-6">
          {/* Department Info */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Department of Computer Science</h2>
            <p className="text-sm">
              Dev Sanskriti Vishwavidyalaya, Haridwar<br />
              Gayatrikunj-Shantikunj<br />
              Haridwar, Uttarakhand, India<br />
              Pin: 249411
            </p>
            <p className="text-sm mt-2">
              Email: <a href="mailto:computer.science@dsvv.ac.in" className="underline hover:text-[#FFCC00]">computer.science@dsvv.ac.in</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-[#FFCC00]">About</Link></li>
              <li><Link href="/academics/programs" className="hover:text-[#FFCC00]">Programs</Link></li>
              <li><Link href="/people/faculty" className="hover:text-[#FFCC00]">Faculty</Link></li>
              <li><Link href="/research/areas" className="hover:text-[#FFCC00]">Research Areas</Link></li>
              <li><Link href="/events" className="hover:text-[#FFCC00]">Events</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFCC00]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Map Embed */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <div className="rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.799505034529!2d78.12091301510464!3d29.945691981917675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947bc892cf309%3A0xd83c1d1bbf5b0e44!2sDev%20Sanskriti%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1652433425361!5m2!1sen!2sin"
                width="100%"
                height="150"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DSVV Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs text-gray-300">
          <p>© {new Date().getFullYear()} Department of Computer Science, DSVV. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.dsvv.ac.in/"
              className="underline hover:text-[#FFCC00]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Development Cell
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
