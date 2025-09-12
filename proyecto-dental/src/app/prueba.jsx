import Link from 'next/link';

export function Prueba() {
  return (
    <main>
      <h1>Hola esta es una prueba</h1>
      <Link href="page.jsx" className="text-blue-600 underline hover:text-blue-800">
        Prueba
      </Link>
    </main>
  );
}
