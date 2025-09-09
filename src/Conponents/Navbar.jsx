import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="bg-black text-white font-bold">
      <ul className="flex">
        {navLinks.map((link) => (
          <li key={link.name} className="relative">
            <NavLink
              to={link.path}
              end
              className={({ isActive }) =>
                `block px-6 py-4 relative  transition-all duration-300 ${
                  isActive
                    ? 'bg-[#F07C29] border-t-[#F07C29] border-t-2'
                    : 'hover:bg-[#F07C29]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* 🔼 Orange Triangle on top */}
                  {isActive && (
                    <div
className="absolute -top-[1px] -right-[17px] -translate-x-1/2 -translate-y-full 
               w-0 h-0 border-l-[9px] border-r-[9px] border-b-[9px] 
               border-l-transparent border-r-transparent border-b-[#A74600]"
                    />
                  )}

                  {/* 🔶 Full-width Orange Block Above Tab (Optional, based on your earlier code) */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 w-full h-2 bg-[#F07C29] border-t-[#F07C29]"
                      style={{ transform: 'translateY(-107%)' }} // Push it above the tab
                    />
                  )}

                  {link.name}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
