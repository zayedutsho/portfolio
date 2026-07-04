import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#020617] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <h2 className="font-mono text-xl text-cyan-400">{"<Utsho />"}</h2>

        <p className="flex items-center gap-2 text-slate-400">
          Made with
          <FaHeart className="text-red-500" />
          using React & Tailwind
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/zayedutsho"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="transition hover:text-cyan-400" />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="transition hover:text-cyan-400" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MD Rifat Al Jayed Utsho. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
