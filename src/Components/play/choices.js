export default function Choices({classe , texto , set , choice , valor}){

    return (
        <div onClick={() => set(!choice) } className={`choice ${classe}`}>{texto}</div>
    )
}