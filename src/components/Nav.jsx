// Dans votre fichier ../components/Nav.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";  
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" passHref>
        <img src="/assets/images/logo.svg" alt="logo" className="w-8 h-8 object-contain" />
        <p className="text_logo">Prompt App</p>
      </Link>
    </nav>
  );
}