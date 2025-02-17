import './tecnologias.css';

interface Stack {
    name: string,
    url: string
}

const stackList: Array<Stack> = [
    {
        name: ".NET",
        url: "https://www.softwarecraftsperson.com/images/dotnet.png"
    },
    {
        name: "TypeScript",
        url: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
    },
    {
        name: "Java",
        url: "https://static.vecteezy.com/system/resources/previews/022/101/050/original/java-logo-transparent-free-png.png"
    },
    {
        name: "Unity",
        url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.png"
    }
]

export default function Tecnologias() {
    return (
        <div>
            <h1>Essas são as tecnologias que eu estudo...</h1>
            <section>
                {stackList.map((stack, index) => (
                    <div className='stackpallete'>
                        <h1>{stack.name}</h1>
                        <img src={stack.url}></img>
                    </div>
                ))}
            </section>
        </div>
    )
}