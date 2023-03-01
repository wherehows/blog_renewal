import { ChangeEventHandler, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const DarkModeToggle = () => {
  if (typeof window === 'undefined') {
    return <></>;
  }

  const [checked, setChecked] = useState(window.__theme === 'dark');

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    window.__setPreferredTheme(isChecked ? 'dark' : 'light');
  };

  return <Toggle checked={checked} onChange={onChange} />;
};

export default DarkModeToggle;
