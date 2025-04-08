"use client";

import { motion } from "framer-motion";

export default function HeartsAnimation() {
  const hearts = Array.from({ length: 1 });

  return (
    <div className="absolute w-full h-screen overflow-hidden flex justify-center gap-4 items-end">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="w-8 h-8 bg-red-500 rounded-full "
          initial={{ y: 0, opacity: 0.7, scale: 0.5 }}
          animate={{
            y: -800,
            opacity: 0,
            scale: [0.5, 1, 0.8],
            rotate: 360,
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <style jsx>{`
        .clip-heart {
          clip-path: polygon(50% 0%, 61% 14%, 75% 20%, 86% 34%, 92% 50%, 86% 66%, 75% 80%, 61% 86%, 50% 100%, 39% 86%, 25% 80%, 14% 66%, 8% 50%, 14% 34%, 25% 20%, 39% 14%);
        }
      `}</style>
    </div>
  );
}
