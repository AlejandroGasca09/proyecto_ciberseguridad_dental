import Link from 'next/link';

export default function Contacto() {
  return (
    <main>
      <h1>Página de Contacto</h1>
      <p>Puedes contactarnos en: contacto@proyectodental.com</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}