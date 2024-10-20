function Nota(props) {
    if (props.Nota >= 90) {
        return <p>Excelente</p>;
    } else if (props.Nota >= 70) {
        return <p>Bom</p>;
    } else {
        return <p>Precisa Melhorar</p>;
    }
}

export default Nota