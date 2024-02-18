'use client';

import { MouseEventHandler } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

function AppButton({ onClick = () => {}, title = '' }: Props) {
  return <button onClick={onClick}>{title}</button>;
}

export default AppButton;
