'use client';

import { Icons } from '@/lib/icons';
import { Button } from './ui/button';

export default function GoogleLoginBtn() {
  return (
    <Button variant="outline" size="lg">
      <Icons.google className="w-4 h-4 mr-2" />
      Continue with Google
    </Button>
  );
}
