import React from "react";
import "./MesaCard.css";
import "../Button";

export default function MesaCard() {
  return (
    <>
      <div className="mesa-container">
        <div className="mesa">
          <h1>Mesa 01</h1>
          <button className="btn-mesa">Criar Comanda</button>
          <button className="btn-mesa">Ver Comanda</button>
          <button className="btn-mesa">Reservar Mesa</button>
        </div>
        <div className="mesa">
          <h1>Mesa 02</h1>
          <button className="btn-mesa">Criar Comanda</button>
          <button className="btn-mesa">Ver Comanda</button>
          <button className="btn-mesa">Reservar Mesa</button>
        </div>
        <div className="mesa">
          <h1>Mesa 03</h1>
          <button className="btn-mesa">Criar Comanda</button>
          <button className="btn-mesa">Ver Comanda</button>
          <button className="btn-mesa">Reservar Mesa</button>
        </div>
        <div className="mesa">
          <h1>Mesa 04</h1>
          <button className="btn-mesa">Criar Comanda</button>
          <button className="btn-mesa">Ver Comanda</button>
          <button className="btn-mesa">Reservar Mesa</button>
        </div>
        <div className="mesa">
          <h1>Mesa 05</h1>
          <button className="btn-mesa">Criar Comanda</button>
          <button className="btn-mesa">Ver Comanda</button>
          <button className="btn-mesa">Reservar Mesa</button>
        </div>
      </div>
    </>
  );
}
