import React from 'react';

import { LayoutChooser } from '../components/LayoutChooser';
import { LayoutSuspense } from '../components/LayoutSuspense';

export default function NewPage() {
  return <LayoutSuspense layoutPath='layouts.json'>
    <LayoutChooser />
  </LayoutSuspense>
}
