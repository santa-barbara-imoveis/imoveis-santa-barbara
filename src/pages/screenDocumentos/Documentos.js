import React from 'react';
import "./ScreenDocumentos.css";
import "./heroSection/HeroDocs.css";
import "../../assets/style/brand.css";
import {ScreenDocumentos} from "../screenDocumentos/ScreenDocumentos";
import {HeroDocs} from './heroSection/HeroDocs';


function Documentos() {
  return (
    <>
    <HeroDocs/>
    <ScreenDocumentos/>
  </>
  );
}
  
export { Documentos }
