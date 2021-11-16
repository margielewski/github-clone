import styles from 'styles/Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => (
  <input {...props} className={styles['input']} />
);

export default Input;
