import React from 'react';

const Vector = ({ isOpen }: { isOpen: boolean}) => {
  return (
    <svg
      style={{
        display: 'inline-block',
        position: 'absolute',
        right: '7px',
        top: '50%',
        transform: 'translateY(-50%)',
        transformOrigin: '50% 0',
        rotate: !isOpen ? '180deg' : 'unset',
      }}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.17165 0.812982L0.114695 4.8615C-0.0380198 5.01392 -0.0382542 5.26124 0.114129 5.41392C0.266511 5.56664 0.513836 5.56689 0.66655 5.41451L4.7238 1.3657C4.8761 1.21339 5.12391 1.21339 5.27651 1.36599L9.33346 5.41451C9.48618 5.56689 9.7335 5.56664 9.88589 5.41392C9.96198 5.33769 10 5.23783 10 5.138C10 5.03791 9.96177 4.93781 9.8853 4.8615L5.82864 0.813275C5.37173 0.356361 4.62827 0.356361 4.17165 0.812982Z"
        fill="#353238"
      />
    </svg>
  );
};

export default Vector;
