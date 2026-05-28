import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-950">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          <Image
            src="/advogado.png"
            alt="ABF Advocacia"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />

          <h1 className="text-xl font-bold text-white">ABF Advocacia</h1>
        </div>

        {/* LINKS */}
        <div className="flex gap-6 text-sm md:text-base text-white">
          <Link href="/" className="hover:text-neutral-300 transition">
            Home
          </Link>

          <Link href="/sobre" className="hover:text-neutral-300 transition">
            Sobre
          </Link>

          <Link href="/areas" className="hover:text-neutral-300 transition">
            Áreas
          </Link>

          <Link href="/blog" className="hover:text-neutral-300 transition">
            Blog
          </Link>

          <Link href="/contato" className="hover:text-neutral-300 transition">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
