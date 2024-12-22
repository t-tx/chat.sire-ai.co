import * as React from 'react';
import Image from 'next/image';
export default function SitemarkIcon() {
  return (
    <Image
    src="/icon128.png"
    alt="My image"
    width={48}  // specify the width
    height={48} // specify the height
  />
  );
}
