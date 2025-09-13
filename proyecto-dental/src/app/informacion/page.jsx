'use client';
import Image from "next/image";

import Link from "next/link";

export default function Informacion() {
    return (
        <div className="relative min-h-screen bg-white absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] ">
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
                    <a href="#" className="text-sm font-semibold text-gray-900">Inicio</a>
                    <Link href="/nosotros" className="text-sm font-semibold text-gray-900"> Sobre nosotros</Link>
                    <Link href="/deposito" className="text-sm font-semibold text-gray-900">Deposito dental</Link>
                    <Link href="/informacion" className="text-sm font-semibold text-gray-900">Informacion</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
                    Información General
                </h1>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Servicios</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Odontología general, ortodoncia y odontopediatría</li>
                        <li>Venta de insumos y productos para dentistas</li>
                        <li>Asesoría técnica y capacitación profesional</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contacto</h2>
                    <p className="text-gray-700">📞 Teléfono: 55-1234-5678</p>
                    <p className="text-gray-700">📱 WhatsApp: 55-1234-5678</p>
                    <p className="text-gray-700">✉️ Email: contacto@dentalmarket.mx</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Métodos de Pago</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Tarjetas de crédito y débito</li>
                        <li>Transferencias bancarias</li>
                        <li>Pago en efectivo</li>
                    </ul>
                </section>

                <div className="text-center mt-10">
                    <Link href="/" className="text-indigo-600 hover:underline font-semibold text-sm">
                        ← Regresar al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
