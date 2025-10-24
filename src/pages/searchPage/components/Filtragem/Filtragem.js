import React, { useEffect, useState } from "react";
import "../../../../assets/style/brand.css";
import { imoveisDisp } from "../../../../data/dataImoveis";
import { allFiltersSelectedPlaceholder } from "../../../../dicts/all-filters-selected-placeholder";
import { amenitiesQuantities, isAmenityQuantity } from "../../../../dicts/amenities-quantity";
import { cities } from "../../../../dicts/cities";
import { contractType, contractTypes } from "../../../../dicts/contract-type";
import { filterSearchParams } from "../../../../dicts/filter-search-params";
import { propertyTypes } from "../../../../dicts/property-type";
import "./Filtragem.css";

function Filtragem({ mudarImoveisAtuais, itens, initialFilters }) {
  const [contrato, setContrato] = useState("todos");
  const [tipoImovel, setTipoImovel] = useState("todos");
  const [cidade, setCidade] = useState("todos");
  const [quartos, setQuartos] = useState("todos");
  const [vagas, setVagas] = useState("todos");
  const [banhos, setBanhos] = useState("todos");

  const initialFilterToSetterMapping = {
    [filterSearchParams.contractType]: setContrato,
    [filterSearchParams.propertyType]: setTipoImovel,
    [filterSearchParams.city]: setCidade,
    [filterSearchParams.rooms]: setQuartos,
    [filterSearchParams.parking]: setVagas,
    [filterSearchParams.bathroom]: setBanhos,
  };

  useEffect(() => {
    console.log({ initialFilters });
    const initialFilterEntries = Object.entries(initialFilters);

    initialFilterEntries.forEach(([key, value]) => {
      const setter = initialFilterToSetterMapping[key];

      if (setter) {
        setter(value);
      }
    });

    filtrarImoveisPorSelecao(initialFilters);
  }, [initialFilters]);

  function filtrarImoveisPorSelecao(override = {}) {
    let lista = [];

    console.log({ override });

    const contract = override?.contractType || contrato;
    const propertyType = override?.propertyType || tipoImovel;
    const city = override?.city || cidade;
    const rooms = isAmenityQuantity(override?.rooms) ? String(override.rooms) : quartos;
    const parking = isAmenityQuantity(override?.rooms) ? String(override.parking) : vagas;
    const bathrooms = isAmenityQuantity(override?.rooms) ? String(override.bathroom) : banhos;

    console.log({
      contract,
      propertyType,
      city,
      rooms,
      parking,
      bathrooms,
      numberOfImov: imoveisDisp.length,
    });

    const filtrosDeContratoAplicar = contract == allFiltersSelectedPlaceholder ? contractTypes : [contract];
    const filtrosDeImovelAplicar = propertyType == allFiltersSelectedPlaceholder ? propertyTypes : [propertyType];
    const filtrosDeCidade = city == allFiltersSelectedPlaceholder ? cities : [city];
    const filtrosQuartos = rooms == allFiltersSelectedPlaceholder ? amenitiesQuantities : [Number(rooms)];
    const filtrosVagas = parking == allFiltersSelectedPlaceholder ? amenitiesQuantities : [Number(parking)];
    const filtrosBanhos = bathrooms == allFiltersSelectedPlaceholder ? amenitiesQuantities : [Number(bathrooms)];

    console.log({
      filtrosDeContratoAplicar,
      filtrosDeImovelAplicar,
      filtrosDeCidade,
      filtrosQuartos,
      filtrosVagas,
      filtrosBanhos,
    });

    imoveisDisp.forEach((imovel) => {
      if (
        filtrosDeContratoAplicar.includes(imovel.contrato) &&
        filtrosDeImovelAplicar.includes(imovel.tipoImovel) &&
        filtrosDeCidade.includes(imovel.cidade) &&
        filtrosQuartos.includes(imovel.quartos) &&
        filtrosVagas.includes(imovel.vagas) &&
        filtrosBanhos.includes(imovel.banheiros)
      ) {
        lista.push(imovel);
      } else {
        // console.log({imovel})
      }
    });

    // console.log({lista, filtrosQuartos})
    mudarImoveisAtuais(lista);
  }

  function alterarTipoContrato(tpContrato) {
    setContrato(tpContrato);
  }

  function alterarTipoImovel(tpImovel) {
    setTipoImovel(tpImovel);
  }

  function alterarCidade(tpCidade) {
    setCidade(tpCidade);
  }

  function alterarQuartos(tpQuartos) {
    setQuartos(tpQuartos);
  }

  function alterarVagas(tpVagas) {
    setVagas(tpVagas);
  }

  function alterarBanhos(tpBanhos) {
    setBanhos(tpBanhos);
  }

  return (
    <body>
      <main>
        <article className="FormSearchMain2">
          <div className="MainBox">
            <div className="boxFilter">
              <div>
                <h1>Busca avançada</h1>
              </div>
              <div className="mSltFilter">
                <label className="lbTipoContrato"> Contrato </label>
                <select
                  defaultValue={allFiltersSelectedPlaceholder}
                  placeholder={allFiltersSelectedPlaceholder}
                  value={contrato}
                  onChange={(e) => {
                    alterarTipoContrato(e.target.value);
                  }}
                  className="sltMode"
                  name="selectInteresse"
                >
                  <option value={allFiltersSelectedPlaceholder} label={allFiltersSelectedPlaceholder} selected>
                    {" "}
                  </option>
                  <option value={contractType.rent} label={contractType.rent}>
                    {" "}
                  </option>
                  <option value={contractType.buy} label={contractType.buy}>
                    {" "}
                  </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbTipoImovel"> Tipo de imóvel </label>
                <select
                  defaultValue={allFiltersSelectedPlaceholder}
                  placeholder={allFiltersSelectedPlaceholder}
                  value={tipoImovel}
                  onChange={(e) => {
                    alterarTipoImovel(e.target.value);
                  }}
                  className="sltMode"
                  name="sltTipoImovel"
                >
                  <option value={allFiltersSelectedPlaceholder} label={allFiltersSelectedPlaceholder} selected>
                    {" "}
                  </option>
                  <option value="Apartamento" label="Apartamento">
                    {" "}
                  </option>
                  <option value="Casa" label="Casa">
                    {" "}
                  </option>
                  <option value="Kitnet" label="Kitnet">
                    {" "}
                  </option>
                  <option value="Chácara" label="Chácara">
                    {" "}
                  </option>
                  <option value="Sítio" label="Sítio">
                    {" "}
                  </option>
                  <option value="Fazenda" label="Fazenda">
                    {" "}
                  </option>
                  <option value="Lote" label="Lote">
                    {" "}
                  </option>
                  <option value="Terreno" label="Terreno">
                    {" "}
                  </option>
                  <option value="Ponto comercial" label="Ponto comercial">
                    {" "}
                  </option>
                  <option value="Galpão" label="Galpão">
                    {" "}
                  </option>
                  <option value="Lote/Casa" label="Lote/Casa">
                    {" "}
                  </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbCidade"> Cidade </label>
                <select
                  defaultValue={allFiltersSelectedPlaceholder}
                  placeholder={allFiltersSelectedPlaceholder}
                  value={cidade}
                  onChange={(e) => {
                    alterarCidade(e.target.value);
                  }}
                  className="sltMode"
                  name="sltCidade"
                >
                  <option value={allFiltersSelectedPlaceholder} label={allFiltersSelectedPlaceholder} selected>
                    {" "}
                  </option>
                  <option value="Santa Bárbara" label="Santa Bárbara">
                    {" "}
                  </option>
                  <option value="Barão de Cocais" label="Barão de Cocais">
                    {" "}
                  </option>
                  <option value="Catas Altas" label="Catas Altas">
                    {" "}
                  </option>
                  <option value="São Gonçalo do Rio Abaixo" label="São Gonçalo do Rio Abaixo">
                    {" "}
                  </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbQuartos"> Quartos </label>
                <select
                  defaultValue={allFiltersSelectedPlaceholder}
                  placeholder={allFiltersSelectedPlaceholder}
                  value={quartos}
                  onChange={(e) => {
                    alterarQuartos(e.target.value);
                  }}
                  className="sltMode"
                  name="sltQuartos"
                >
                  <option value={allFiltersSelectedPlaceholder} label={allFiltersSelectedPlaceholder} selected>
                    {" "}
                  </option>
                  <option value={0} label="0 quarto">
                    {" "}
                  </option>
                  <option value={1} label="1 quarto">
                    {" "}
                  </option>
                  <option value={2} label="2 quartos">
                    {" "}
                  </option>
                  <option value={3} label="3 quartos">
                    {" "}
                  </option>
                  <option value={4} label="4 quartos">
                    {" "}
                  </option>
                  <option value={5} label="5 quartos">
                    {" "}
                  </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbVagas"> Vagas </label>
                <select
                  defaultValue={allFiltersSelectedPlaceholder}
                  placeholder={allFiltersSelectedPlaceholder}
                  value={vagas}
                  onChange={(e) => {
                    alterarVagas(e.target.value);
                  }}
                  className="sltMode"
                  name="sltVagas"
                >
                  <option value={allFiltersSelectedPlaceholder} label={allFiltersSelectedPlaceholder} selected>
                    {" "}
                  </option>
                  <option value={0} label="0 vaga">
                    {" "}
                  </option>
                  <option value={1} label="1 vaga">
                    {" "}
                  </option>
                  <option value={2} label="2 Vagas">
                    {" "}
                  </option>
                  <option value={3} label="3 Vagas">
                    {" "}
                  </option>
                  <option value={4} label="4 Vagas">
                    {" "}
                  </option>
                  <option value={5} label="5 Vagas">
                    {" "}
                  </option>
                </select>
              </div>
              <div className="mSltFilter">
                <label className="lbBanhos"> Banheiros </label>
                <select
                  defaultValue={allFiltersSelectedPlaceholder}
                  placeholder={allFiltersSelectedPlaceholder}
                  value={banhos}
                  onChange={(e) => {
                    alterarBanhos(e.target.value);
                  }}
                  className="sltMode"
                  name="sltBanhos"
                >
                  <option value={allFiltersSelectedPlaceholder} label={allFiltersSelectedPlaceholder} selected>
                    {" "}
                  </option>
                  <option value={0} label="0 banheiro">
                    {" "}
                  </option>
                  <option value={1} label="1 banheiro">
                    {" "}
                  </option>
                  <option value={2} label="2 banheiros">
                    {" "}
                  </option>
                  <option value={3} label="3 banheiros">
                    {" "}
                  </option>
                  <option value={4} label="4 banheiros">
                    {" "}
                  </option>
                  <option value={5} label="5 banheiros">
                    {" "}
                  </option>
                </select>
              </div>
              <div className="divBt">
                <button onClick={(e) => filtrarImoveisPorSelecao()} className="btBuscarIm" name="btBuscarIm">
                  {" "}
                  Buscar{" "}
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </body>
  );
}

export { Filtragem };
