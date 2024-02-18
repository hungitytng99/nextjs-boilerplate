'use client';

import { MouseEventHandler } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

function AppButton({ onClick = () => {}, title = '' }: Props) {
  return (
    <button className="mt-2 border border-zinc-500" onClick={onClick}>
      {title}
    </button>
  );
}

export default AppButton;
