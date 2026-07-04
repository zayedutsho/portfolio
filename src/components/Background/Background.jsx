import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]"
      />
    </div>
  );
};

export default Background;
