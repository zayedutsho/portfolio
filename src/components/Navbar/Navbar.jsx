const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-cyan-400">{"<Utsho />"}</h1>

        <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
