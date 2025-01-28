import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t py-14 border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Code 4 Cause
            </Link>
            <p className="mt-2 text-gray-600">Bridging the digital divide, one line of code at a time</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <p>Email: code4causenonprofit@gmail.com</p>
            <p>Phone: (804) 366 2515</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/code4cause_org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Code 4 Cause. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

