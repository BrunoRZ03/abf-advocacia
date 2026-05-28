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
          <Link className="hover:text-neutral-300 transition" href="/">
            Home
          </Link>
          <Link className="hover:text-neutral-300 transition" href="/sobre">
            Sobre
          </Link>
          <Link className="hover:text-neutral-300 transition" href="/areas">
            Áreas
          </Link>
          <Link className="hover:text-neutral-300 transition" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-neutral-300 transition" href="/contato">
            Contato
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl transition-transform duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU COM ANIMAÇÃO */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4 px-6 pb-4 text-white border-t border-neutral-800 pt-4">
          <Link
            onClick={() => setOpen(false)}
            className="hover:text-neutral-300 transition"
            href="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="hover:text-neutral-300 transition"
            href="/sobre"
          >
            Sobre
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="hover:text-neutral-300 transition"
            href="/areas"
          >
            Áreas
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="hover:text-neutral-300 transition"
            href="/blog"
          >
            Blog
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="hover:text-neutral-300 transition"
            href="/contato"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
