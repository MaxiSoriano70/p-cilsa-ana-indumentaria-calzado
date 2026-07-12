import style from '../css/Marquesina.module.css';

const Marquesina = () => {
    const mensajes = [
        "Envio gratis a todo el país",
        "Aceptamos todos los medios de pago",
        "Entrega inmediata",
        "Venta mayorista y minorista"
    ];

    // Repetimos el bloque 4 veces para garantizar
    // que siempre haya contenido de sobra, sin importar
    // el ancho de pantalla (evita el "salto" al final del loop)
    const grupos = [0, 1, 2, 3];

    return (
        <section className={style.contenedorM}>
            <div className={style.track}>
                {grupos.map((g) => (
                    mensajes.map((msg, i) => (
                        <p key={`${g}-${i}`} className={style.txtM}>{msg}</p>
                    ))
                ))}
            </div>
        </section>
    )
}

export default Marquesina;