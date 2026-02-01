"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpen={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main>{children}</main>
    </div>
  );
}
