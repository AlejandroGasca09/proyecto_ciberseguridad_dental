import Link from "next/link";
import Image from "next/image";

export default function Nosotros() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5"><span className="sr-only">Dental</span>
                        <Image src="/img/image.png" alt="diente" width={25} height={25} className='hover:bg-sky-700' />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" aria-label="Open main menu">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-hidden="true"
                            className="size-6"
                        >
                            <path
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/" className="text-sm font-semibold text-gray-900">Inicio</Link>
                    <Link href="/nosotros" className="text-sm font-semibold text-gray-900"> Sobre nosotros</Link>
                    <Link href="/deposito" className="text-sm font-semibold text-gray-900">Deposito dental</Link>
                    <Link href="/informacion" className="text-sm font-semibold text-gray-900">Informacion</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
            <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-md ">
                <h1 className="text-5xl font-semibold tracking-tight text-center text-gray-900 mb-6">
                    Clínica & Dental Market
                </h1>

                <p className="mb-4 leading-relaxed">
                    Clinical & Dental Market es un empresa mexicana dirigida por el Dr.Luis Corona Perez , nuestra sede principal esta en el corazón de la Ciudad de Mexico, donde las calles aún guardan el eco de los pregones y el aroma de tamales al amanecer, nació <strong>Clínica & Dental Market</strong> , con una base odontólogos apasionados por la salud bucal y comprometidos con su comunidad.
                </p>

                <p className="mb-4 leading-relaxed">
                    Todo comenzó con el Dr. Luis Corona Pérez, un odontólogo visionario egresado de la UNAM que, tras años de atender pacientes en su consultorio familiar, notó una necesidad urgente entre sus colegas: muchos profesionales del área tenían que recorrer grandes distancias para conseguir insumos básicos y herramientas confiables. Inspirado por su compromiso con la salud bucal y el bienestar de la comunidad, decidió crear un espacio que ofreciera atención clínica de calidad y, al mismo tiempo, acceso directo a productos especializados para dentistas. Así nació Clínica & Dental Market, con la misión de facilitar sonrisas y soluciones desde la Ciudad de México.

                </p>

                <p className="mb-4 leading-relaxed">
                    Así nació la idea: ¿por qué no crear un espacio que fuera clínica y tienda a la vez? Un lugar donde los pacientes recibieran atención de calidad, y los dentistas encontraran todo lo necesario sin rrecorrer tantas distancias.
                </p>

                <p className="mb-6 leading-relaxed">
                    Hoy, la clínica no solo atiende a cientos de familias, sino que también abastece a consultorios en toda la CDMX.
                </p>

                <Link href="/" className="text-indigo-600 hover:underline text-sm font-semibold">
                    ← Regresar al inicio
                </Link>
            </div>
        </div>
    );
}