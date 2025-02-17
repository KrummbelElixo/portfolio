import Link from "next/link";

export function Header() {
    return (
        <header className="flex px-2 py-6 bg-zinc-900 text-white">
            <div className="flex items-center justify-between mx-auto max-w-7x1">
                <nav>
                    <ul className="flex items-center justify-center gap-5 text-2xl">
                        <li className="text-purple-500 transition duration-300 hover:text-black hover:bg-purple-500 rounded-md font-mono">
                            <Link href={'/'}>
                                Krummbel
                            </Link>
                        </li>
                        <li className="text-purple-500 transition duration-300 hover:text-black hover:bg-purple-500 rounded-md font-mono">
                            <Link href={'/tecnologias'}>
                                Tecnologias
                            </Link>
                        </li>
                        <li className="text-purple-500 transition duration-300 hover:text-black hover:bg-purple-500 rounded-md font-mono">
                            <Link href={'/sobremim'}>
                                Sobre mim
                            </Link>
                        </li>
                        <li className="text-purple-500 transition duration-300 hover:text-black hover:bg-purple-500 rounded-md font-mono">
                            <Link href={'https://github.com/KrummbelElixo'}>
                                Github
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}