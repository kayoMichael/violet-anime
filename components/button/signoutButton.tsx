'use client';

import { createClient } from '@/utils/supabase/client';
import React from 'react';

import { Button } from '../ui/button';

const SignOutButton = () => {
  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };
  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
