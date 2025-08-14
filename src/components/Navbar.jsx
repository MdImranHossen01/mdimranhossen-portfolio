// src/components/Navbar.jsx

const Navbar = () => {
  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Projects', path: '#projects' },
    { title: 'Education', path: '#education' },
    { title: 'Contact', path: '#contact' },
  ];

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      {/* ✨ Added px-6 here for alignment */}
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="#home" className="text-2xl font-bold text-cyan-400">Md Imran Hossen</a>
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <li key={link.title}>
              <a href={link.path} className="text-white hover:text-cyan-400 transition-colors duration-300">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;