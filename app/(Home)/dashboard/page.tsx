import React from 'react';

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

const DashBoard = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/auth/signin');
  }
  return <div>DashBoard</div>;
};

export default DashBoard;
