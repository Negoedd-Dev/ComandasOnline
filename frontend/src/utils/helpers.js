import { TOTAL_MESAS } from "./constantes";

export function mesasIniciais() {
  return array.from({ length: TOTAL_MESAS }, (_, indice) => ({
    numero: +1,
    sattus: "livre",
  }));
}

export function geraId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
