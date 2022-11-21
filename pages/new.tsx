import React from 'react';

import { NewTabCreator } from '../components/NewTabCreator';
import { LayoutSuspense } from '../components/LayoutSuspense';

export default function NewPage() {
  return <LayoutSuspense layoutPath='layouts.json'>
    <NewTabCreator />
  </LayoutSuspense>
}
