import { motion } from "motion/react";

const OrderButton = ({ disabled, type, onClick, children }) => {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 shadow-md hover:bg-yellow-500 focus:outline-none";
  const style = {
    small: base + " px-2 py-1 text-sm md:px-3 md:py-1.5",
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    round: base + " px-2 py-1 text-sm md:px-5 md:py-2.5",
    secondary:
      "px-4 py-3 md:px-6 md:py-4 inline-block rounded-full border-2 border-stone-300 bg-transparent font-semibold uppercase text-stone-800 shadow-md hover:bg-stone-100 focus:outline-none",
  };

  if (onClick)
    return (
      <motion.button
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={style[type]}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.button
      disabled={disabled}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={style[type]}
    >
      {children}
    </motion.button>
  );
};

export default OrderButton;
