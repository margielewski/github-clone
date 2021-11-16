import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from 'styles/ThemeSwitch.module.css';

type ThemeSwitchProps = { className?: string };

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const [activeTheme, setActiveTheme] = useState(
    document.body.dataset.theme as 'light' | 'dark'
  );

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  const toggleTheme = () =>
    setActiveTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <span
      className={classNames(styles['switch'], className)}
      onClick={toggleTheme}
    >
      <i
        className={classNames(styles[`switch--icon`], {
          'gg-sun': activeTheme === 'light',
          'gg-moon': activeTheme === 'dark',
        })}
      />
    </span>
  );
};

export default ThemeSwitch;
