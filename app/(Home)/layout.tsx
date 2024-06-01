import React from 'react';

import MainNavigation from '@/components/navbar/mainNavigation';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <MainNavigation />
      {children}
    </main>
  );
};

export default layout;
