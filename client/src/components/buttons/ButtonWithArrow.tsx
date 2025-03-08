import React from "react";


import styles from "@/styles/buttons/ButtonWithArrow.module.css";
import { MoveRight } from "lucide-react";

type ButtonWithArrowProps = {
  children: React.ReactNode;
  action: () => void;
};

export default function ButtonWithArrow({
  children,
  action,
}: ButtonWithArrowProps) {
  return (
    <button onClick={action} className={`${styles.buttonWithArrow} primary`}>
      {children}
   <MoveRight size={24} />
    </button>
  );
}
