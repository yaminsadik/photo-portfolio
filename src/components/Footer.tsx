import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  path: string;
}

interface FooterProps {
  siteName: string;
  copyright: string;
  text?: string;
  links?: FooterLink[];
}

export function Footer({ siteName, copyright, text, links }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-light tracking-wider mb-6 md:mb-0"
          >
            {siteName}
          </Link>

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex space-x-6 mb-6 md:mb-0">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>{copyright}</p>
          {text && <p className="mt-2 md:mt-0">{text}</p>}
        </div>
      </div>
    </footer>
  );
}
