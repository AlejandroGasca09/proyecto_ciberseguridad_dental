import Image from "next/image";

export default function Inicio() {
  return (
    <div className="flex min-h-full flex-col items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src="/img/image.png" alt="diente" width={40} height={40} className="mx-auto h-10 w-auto hover:bg-sky-700"/>
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Inicia sesión con tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input type="email" name="email" id="email" autoComplete="email" required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">Contraseña</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No eres miembro?{' '}
          <a href="/registro" className="font-semibold text-indigo-600 hover:text-indigo-500">
            ¡Regístrate!
          </a>
        </p>
      </div>
    </div>
  );
}
