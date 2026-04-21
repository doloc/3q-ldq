"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="z-100 fixed inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70" />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;