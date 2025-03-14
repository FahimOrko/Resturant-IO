import { motion } from "motion/react";

const BackButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg bg-blue-500 px-3 py-3 font-semibold text-white shadow-md hover:bg-blue-600"
    >
      {children}
    </motion.button>
  );
};

export default BackButton;
