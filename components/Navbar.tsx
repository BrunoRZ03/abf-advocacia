"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-950">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/advogado.png"
            alt="ABF Advocacia"
            width={120}
            height={120}
            className="rounded-md object-cover"
          />

          <h1 className="text-xl font-bold text-white">ABF Advocacia</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/areas">Áreas</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-white border-t border-neutral-800">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/sobre" onClick={() => setOpen(false)}>
            Sobre
          </Link>
          <Link href="/areas" onClick={() => setOpen(false)}>
            Áreas
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contato" onClick={() => setOpen(false)}>
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}
