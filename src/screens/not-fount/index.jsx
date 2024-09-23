import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <main className="flex h-[80vh] w-full flex-col items-center justify-center gap-12 px-6 text-center md:flex-row xsm:gap-24">
      <span className="text-7xl md:mb-16 xsm:text-8xl">404</span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl md:text-3xl xsm:text-4xl">
          Página no encontrada
        </span>
        <p className="text-sm opacity-75 md:text-base">
          Por favor, revise la URL o vuelva al inicio.
        </p>
        <Link
          to={"/"}
          className="mt-4 rounded-lg bg-primary  px-3 py-2 text-lg font-semibold text-white"
        >
          Ir a Inicio
        </Link>
      </div>
    </main>
  )
}
