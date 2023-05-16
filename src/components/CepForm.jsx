import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export const CepForm = () => {


    const [estados, setEstados] = useState([])
    const [endereço, setEndereço] = useState([])


    const buscarEstados = () => {

        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then(function (response) {

                let arrayEstados = response.data.map((estado, index) => (
                    <option key={index} value={estado.sigla}>
                        {estado.nome}
                    </option>
                ));
                setEstados(arrayEstados);
            })
            .catch(function (erro) {
                console.log(erro);
            })

    };
    const buscarPorCep = (e) => {
        console.log(e.target.value)
        axios
        .get(`viacep.com.br/ws/${cep}/json/`)
         



    }

    useEffect(() => {
        buscarEstados()
    }, [])

   
    return (
        < div className="container" >
            <h1>Buscar CEP</h1>
            <hr />

            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="Cep" className="form-label">Cep</label>
                    <input type="text" className="form-control" id="Cep" onBlur={buscarPorCep} />
                

                    <div />

                    <div className="col-md-12">
                        <label htmlFor="Logradouro" className="form-label">Logradouro</label>
                        <input type="text" className="form-control" id="Endereço" />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="Complemento" className="form-label">Complemento</label>
                        <input type="text" className="form-control" id="Complemento" />

                    </div>
                    <div className="col-md-12">
                        <label htmlFor="Bairro" className="form-label">Bairro</label>
                        <input type="text" className="form-control" id="Bairro" />

                    </div>

                    <div className="col-md-6">
                        <label htmlFor="Estado" className="form-label">Estado</label>
                        <select id="Estado" className="form-select">
                            <option value>Selecione</option>
                            {estados}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="Cidade" className="form-label">Cidade</label>
                        <select id="Cidade" className="form-select">
                            <option value>selecione</option>
                           
                        </select>
                    </div>



                </div>
            </form>
        </div >
    )
}


