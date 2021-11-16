import styles from 'styles/Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => (
  <button className={styles['button']} {...props}>
    {children}
  </button>
);

export default Button;
