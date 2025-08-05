import React from "react";

export default function CardAlbuns({nome, descricao, ano}) {
    const nomeExibido = nome ? nome: "Nome não Informado";
    const descricaoExibida = descricao ? descricao: "Descrição não informada";
    const anoExibido = ano ? `${ano} anos de lancamento` : "Ano não informado";

    return (
        <div>
            <h4>Nome: {nomeExibido} </h4>
            <p>Descrição: {descricaoExibida} </p>
            <p>Ano: {anoExibido} </p>
            <hr />
        </div>
    );
}





