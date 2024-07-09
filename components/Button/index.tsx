import { ReactNode } from 'react'
import styles from './style.module.scss'

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
}) => {
  return (
    <button
    className={styles.button}
      onClick={() => { }}
    >
      {children}
    </button>
  )
}