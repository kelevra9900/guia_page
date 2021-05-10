export interface IRegistro {
    nombre_contacto: string;
    puesto_contacto: string;
    correo_contacto: string;
    nombre_responable: string;
    correo_responsable: string;
    nombre_empresa: string;
    sitio_web: string;
    telefono_principal: string;
    telefono_secundario: string;
    direccion: string;
    pais_empresa: string;
    descripcion_completa: string;
    descripcion_breve: string;
    comentario_adicional: string;
    cobertura_mercado: string;
    tipo_mencion: number;
    metodo_pago: "Gratis";
    estado_pago: "Gratis";
    categoria: "Sin categoria";
    subcategoria: string;
    id_transaccion: "Gratis";
    autorizado: 0;
    categorias: any;
}