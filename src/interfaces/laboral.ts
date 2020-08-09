export interface datos {
    fecha: string;
    cantidad: unknown;
}

export interface SkillAgrupados {
    skill: string;
    datos: datos[];
}

export interface Laboral {
    fecha: string;
    pais: string;
    link: string;
    clasificacion: string;
    sueldo: string;
    sueldominimo: number;
    sueldomaximo: number;
    sueldomoneda: string;
    sueldotipotiempo: string;
    skill: [string];
  }