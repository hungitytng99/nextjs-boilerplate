'use client';

import AppButton from '@/components/common/AppButton/AppButton';
import { appContants } from '@/shared/configs';
import { appStorage } from '@/shared/configs/app.di-container';
import { useState } from 'react';

function DemoComponents() {
  const [cookiesValue, setCookiesValue] = useState<string>('');
  const handleSetCookie = () => {
    appStorage.setItem(appContants.tokenKey, cookiesValue);
  };

  return (
    <>
      <br />
      <input
        className="border border-zinc-500"
        placeholder="Enter cookies"
        value={cookiesValue}
        onChange={(e) => setCookiesValue(e.target.value)}
      ></input>
      <br />
      <AppButton onClick={handleSetCookie} title="Save cookies" />
      <br />
      <br />
    </>
  );
}

export default DemoComponents;
