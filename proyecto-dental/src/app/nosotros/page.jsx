import Link from "next/link"

export default function Nosotros() {
    return (
        <div className="nosotros-div">
            <h1>Nosotros</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla amet neque eveniet, eos ullam deserunt ipsam aliquam dolorum repellendus culpa nesciunt eaque eligendi et doloribus dignissimos necessitatibus sint vitae nemo?</p>
            <Link href="/" className="text-sm font-semibold text-gray-900">Regreso</Link>
        </div>
    )
}