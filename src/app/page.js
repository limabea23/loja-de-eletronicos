"use client";
import React, { useState } from "react";
import CardAlbuns from "./Card";

export default function Page() {
  const [albuns, setAlbuns] = useState ([
    {nome: 'Music Of The Spheares', descricao: 'new album out now', ano: 2022},
    {nome: 'El Comienzo', descricao: 'new album out now', ano: 2023},
    {},
  ])
  return (
    <div>
        {albuns.map((album, index) => (

        <CardAlbuns
        key={index}
        nome={album.nome}
        descricao={album.descricao}
        ano={album.ano}
        />

        ))}
    </div>
  );
}