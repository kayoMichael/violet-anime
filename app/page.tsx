import { redirect } from 'next/navigation';

import SignOutButton from '@/components/button/signoutButton';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/auth/signin');
  }
  return (
    <div>
      <SignOutButton />
      <h1>This is a Anime Website?</h1>
    </div>
  );
}
