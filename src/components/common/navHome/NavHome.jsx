const NavHome = () =>{
    return(
        <div>
            <ul style={{
                width:"100%",
                height:"50",
                border:"2px solid black",
                borderRadius:"3px",
                display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center"
            }}>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Contactos</li>
                <input type="text" placeholder="Buscar" />
            </ul>
        </div>
    )
}
export default NavHome;