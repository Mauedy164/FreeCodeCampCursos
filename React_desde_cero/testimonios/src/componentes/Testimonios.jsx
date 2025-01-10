import React from "react";


export function Testimonio(props) {
  const imgSrc =new URL(`../imagenes/Persona_${props.numeroImagen}.jpg`, import.meta.url).href;

  return(
    <div className="contenedor-testimonio">
      <img
      className="imagen-testimonio"
      src={imgSrc}
      alt="Foto de perfil"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

