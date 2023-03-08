import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClickCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOn(e.target.checked);
  };

  return (
    <Wrapper htmlFor="toggle-input">
      <ToggleBody
        id="toggle-input"
        type="checkbox"
        checked={isOn}
        onChange={handleClickCheckBox}
      />
      <Circle isOn={isOn} />
    </Wrapper>
  );
};

const Wrapper = styled('label')(() => ({}))

const ToggleBody = styled('input')(() => ({
  WebkitAppearance: 'none',
  display: 'none',
}));

const Circle = styled('span')<{ isOn: boolean }>(({ isOn }) => ({
  position: 'relative',
  display: 'block',
  width: '60px',
  height: '30px',
  background: !isOn ? '#fff' : '#092c3e',
  cursor: 'pointer',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'ease-in 0.5s',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: '3px',
    left: '3px',
    backgroundColor: !isOn ? '#fff5e6' : '#fff',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    transition: '0.5s',
    transform: !isOn ? 'translateX(-60px)' : 'translateX(0px)',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    top: '3px',
    left: '3px',
    backgroundColor: !isOn ? '#092c3e' : '#fff5e6',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    transition: '0.5s',
    transform: isOn ? 'translateX(60px)' : 'translateX(0px)',
  },
}));

export default Toggle;
