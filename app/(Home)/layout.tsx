import React from 'react';

import { redirect } from 'next/navigation';

import MainNavigation from '@/components/navbar/mainNavigation';
import { createClient } from '@/utils/supabase/server';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/auth/signin');
  }
  return (
    <main>
      <MainNavigation />
      {children}
    </main>
  );
};

export default layout;
