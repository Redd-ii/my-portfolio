// src/components/ClientBackgroundAnimationWrapper.tsx

"use client";

import React, { useEffect, useState } from 'react';
import BackgroundAnimation from '@/app/components/BackgroundAnimation';
import { isPageScrollable } from '@/utils/isPageScrollable';

export default function ClientBackgroundAnimationWrapper() {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const updateScrollability = () => {
      setIsScrollable(isPageScrollable());
    };

    updateScrollability(); 
    window.addEventListener("resize", updateScrollability);

    return () => {
      window.removeEventListener('resize', updateScrollability);
    };
  }, []);

  return <BackgroundAnimation isScrollable={isScrollable} />;
}
