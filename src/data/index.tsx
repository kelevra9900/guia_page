const cobertura = [
  {
    value: 'local',
    label: 'Local',
  },
  {
    value: 'Nacional',
    label: 'Nacional',
  },
  {
    value: 'Internacional',
    label: 'Internacional',
  },
];


export const categorias = [
  { value: '1', label: 'Alarmas' },
  { value: '2', label: 'Asociaciones' },
  { value: '3', label: 'Blindaje' },
  { value: '4', label: 'Cableado' },
  { value: '5', label: 'Cajas fuertes' },
  { value: '6', label: 'Control de acceso' },
  { value: '7', label: 'Control de confianza' },
  { value: '8', label: 'Consultoria' },
  { value: '9', label: 'Cursos y entrenamientos' },
  { value: '10', label: 'Custodia de mercancía' },
  { value: '11', label: 'Distribuidor mayorista' },
  { value: '12', label: 'Equipamiento policiaco' },
  { value: '13', label: 'Equipo de inspección' },
  { value: '14', label: 'Guardias y escoltas' },
  { value: '15', label: 'Incendios' },
  { value: '16', label: 'Integradores' },
  { value: '17', label: 'Rastreo vehicular' },
  { value: '18', label: 'Telecom y TI' },
  { value: '19', label: 'Traslado de valores' },
  { value: '20', label: 'Videovigilancia' },
  { value: '21', label: 'Otros' },
]


export const subCategories = [
    { value: '1', label: 'Anunciadores de alarmas', categoria: '1' },
    { value: '2', label: 'Aplicaciones móviles para alarmas', categoria: '1' },
    { value: '3', label: 'Equipo para centrales monitoreo', categoria: '1' },
    { value: '4', label: 'Monitores y pantallas murales', categoria: '1' },
    { value: '5', label: 'Paneles de control de alarma', categoria: '1' },
    { value: '6', label: 'Sensores y teclados', categoria: '1' },
    { value: '7', label: 'Servicios de monitoreo de alarmas', categoria: '1' },
    { value: '8', label: 'Sistemas de alarma comerciales', categoria: '1' },
    { value: '9', label: 'Sistemas de alarma residenciales', categoria: '1' },
    { value: '10', label: 'Sistemas de voceo y notificación', categoria: '1' },
    { value: '11', label: 'Certificaciones profesionales', categoria: '2' },
    { value: '12', label: 'Cerficaciones empresariales', categoria: '2' },
    { value: '13', label: 'Blindaje automotriz', categoria: '3' },
    { value: '14', label: 'Blindaje arquitectónico', categoria: '3' },
    { value: '15', label: 'Vehículos blindados usados', categoria: '3' },
    { value: '16', label: 'Renta de vehículos blindados', categoria: '3' },
    { value: '17', label: 'Ropa blindada', categoria: '3' },
    { value: '18', label: 'Cableado estructurado', categoria: '4' },
    { value: '19', label: 'Cableado estructurado y fibra óptica', categoria: '4' },
    { value: '20', label: 'Cables y conectores', categoria: '4' },
    { value: '21', label: 'Cajas fuertes y bóvedad', categoria: '5' },
    { value: '22', label: 'Aplicaciones móviles para control de acceso', categoria: '6' },
    { value: '23', label: 'Automatización de portones', categoria: '6' },
    { value: '24', label: 'Barreras y control de acceso vehicular', categoria: '6' },
    { value: '25', label: 'Cercas eléctricas', categoria: '6' },
    { value: '26', label: 'Cerraduras mecánicas y electromagnéticas', categoria: '6' },
    { value: '27', label: 'Gafetes y credenciales', categoria: '6' },
    { value: '28', label: 'Impresoras de gafetes', categoria: '6' },
    { value: '29', label: 'Lectores biométricos', categoria: '6' },
    { value: '30', label: 'Lectores de tarjetas de proximidad', categoria: '6' },
    { value: '31', label: 'Paneles para control de acceso', categoria: '6' },
    { value: '32', label: 'Productos y sistemas de identificación', categoria: '6' },
    { value: '33', label: 'Protección perimetral', categoria: '6' },
    { value: '34', label: 'Proveedor de soluciones para control de acceso', categoria: '6' },
    { value: '35', label: 'Puertas y portones de seguridad', categoria: '6' },
    { value: '36', label: 'Retenciones y mecanismos de salida para puertas', categoria: '6' },
    { value: '37', label: 'Sistemas de control de llaves', categoria: '6' },
    { value: '38', label: 'Sistemas de control para estacionamientos', categoria: '6' },
    { value: '39', label: 'Sistemas de reconocimiento de placas vehiculares', categoria: '6' },
    { value: '40', label: 'Sistemas para el control de asistencia laboral', categoria: '6' },
    { value: '41', label: 'Sistemas para gestión de visitas', categoria: '6' },
    { value: '42', label: 'Torniquetes', categoria: '6' },
    { value: '43', label: 'Toxicología', categoria: '7' },
    { value: '44', label: 'Pruebas psicomètricas', categoria: '7' },
    { value: '45', label: 'Investigación', categoria: '7' },
    { value: '46', label: 'Evaluación de riesgos y amenazas', categoria: '8' },
    { value: '47', label: 'Servicios de investigación', categoria: '8' },
    { value: '48', label: 'Educación y entretenimiento', categoria: '9' },
    { value: '49', label: 'Custodia de mercancía', categoria: '10' },
    { value: '50', label: 'Candadeo y bloqueo', categoria: '10' },
    { value: '51', label: 'Rastreo de mercancía', categoria: '10' },
    { value: '52', label: 'Equipo para seguridad electrónica', categoria: '11' },
    { value: '53', label: 'Equipo para tecnología de la información', categoria: '11' },
    { value: '54', label: 'Equipo para detección y extinción de incendios', categoria: '11' },
    { value: '55', label: 'Equipos para radiocomunicación', categoria: '11' },
    { value: '56', label: 'Armas no letales, armas y municiones, bastones, inmovilizadores', categoria: '12' },
    { value: '57', label: 'Calzado, botas, fornituras y accesorios', categoria: '12' },
    { value: '58', label: 'Campanas y sirenas', categoria: '12' },
    { value: '59', label: 'Chalecos, escudos y otros aditamentos de protección balìstica', categoria: '12' },
    { value: '60', label: 'Equpamiento para primer respondiente', categoria: '12' },
    { value: '61', label: 'Equipo para radiocomunicación', categoria: '12' },
    { value: '62', label: 'Equipos de protección civil y rescate, equipos de rappel', categoria: '12' },
    { value: '63', label: 'Patrullas, vehículos tácticos, torretas, torres de vigilancia', categoria: '12' },
    { value: '64', label: 'Plataformas aéreas/robótica', categoria: '12' },
    { value: '65', label: 'Platadormas en tierra/robótica', categoria: '12' },
    { value: '66', label: 'Preservación de la escena del delito', categoria: '12' },
    { value: '67', label: 'Sirenas y altavoces', categoria: '12' },
    { value: '68', label: 'Sistemas CCTV para vehículos', categoria: '12' },
    { value: '69', label: 'Sistemas de comunicación de emergencias', categoria: '12' },
    { value: '70', label: 'Uniformes, prendas y vestuario táctico', categoria: '12' },
    { value: '71', label: 'Vehículos especializados, laboratorios móviles', categoria: '12' },
    { value: '72', label: 'Accesorios con cámaras ocultas', categoria: '12' },
    { value: '73', label: 'Detectores de explosivos', categoria: '13' },
    { value: '74', label: 'Sistemas de identificación de drogas, químicos, armas y explosivos', categoria: '13' },
    { value: '75', label: 'Detectores de metales y escaners corporales', categoria: '13' },
    { value: '76', label: 'Equipos de rayos X y escaners', categoria: '13' },
    { value: '77', label: 'Guardias armados', categoria: '14' },
    { value: '78', label: 'Guardias no armados', categoria: '14' },
    { value: '79', label: 'Sistemas de detección', categoria: '15' },
    { value: '80', label: 'Sistemas de extinción', categoria: '15' },
    { value: '81', label: 'Accesorios', categoria: '15' },
    { value: '82', label: 'Integración comercial', categoria: '16' },
    { value: '83', label: 'Integración residencial', categoria: '16' },
    { value: '84', label: 'Rastreo de vehículos particulares', categoria: '17' },
    { value: '85', label: 'Rastreo de flotillas', categoria: '17' },
    { value: '86', label: 'Almacenamiento y protección de datos', categoria: '18' },
    { value: '87', label: 'Seguridad de redes', categoria: '18' },
    { value: '88', label: 'Servicios de datos', categoria: '18' },
    { value: '89', label: 'Servicios de seguridad TI', categoria: '18' },
    { value: '90', label: 'Servicios en la nube', categoria: '18' },
    { value: '91', label: 'Sistemas de almacenamiento de datos', categoria: '18' },
    { value: '92', label: 'Software', categoria: '18' },
    { value: '93', label: 'Recolección y manejo de dinero', categoria: '19' },
    { value: '94', label: 'Recolección de objetos de valor', categoria: '19' },
    { value: '95', label: 'Cámaras analógicas', categoria: '20' },
    { value: '96', label: 'Cámaras de visión nocturna e infrarroja', categoria: '20' },
    { value: '97', label: 'Cámaras IP', categoria: '20' },
    { value: '98', label: 'Cámaras para uniformes', categoria: '20' },
    { value: '99', label: 'Centro de datos e infraestructura', categoria: '20' },
    { value: '100', label: 'Consolas', categoria: '20' },
    { value: '101', label: 'Detección de drones', categoria: '20' },
    { value: '102', label: 'Drones de seguridad y videovigilancia', categoria: '20' },
    { value: '103', label: 'Equipo para centrales monitoreo', categoria: '20' },
    { value: '104', label: 'Grabadoras de video DVR', categoria: '20' },
    { value: '105', label: 'Grabadoras de video NVR', categoria: '20' },
    { value: '106', label: 'Monitores y pantallas murales', categoria: '20' },
    { value: '107', label: 'Sistemas de audio y video profesional', categoria: '20' },
    { value: '108', label: 'Video portero', categoria: '20' },
    { value: '109', label: 'Videovigilancia urbana, centros de control y comando', categoria: '20' },
    { value: '110', label: 'Vigilancia aérea, aviones no tripulados, drones', categoria: '20' },
    { value: '111', label: 'Sistemas de reconocimiento de placas vehiculares', categoria: '20' },
    { value: '112', label: 'Anàlisis forense digital', categoria: '21' },
    { value: '113', label: 'Computadoras y equipamiento', categoria: '21' },
    { value: '114', label: 'Dispositivos y sensores inalámbricos', categoria: '21' },
    { value: '115', label: 'herramientas para instalación', categoria: '21' },
    { value: '116', label: 'Productos para la prevención de pérdidas', categoria: '21' },
    { value: '117', label: 'Protección contra rayos y sobretensiones', categoria: '21' },
    { value: '118', label: 'Protección para soldaduras', categoria: '21' },
    { value: '119', label: 'Ropa industrial', categoria: '21' },
    { value: '120', label: 'Sistemas de iluminación', categoria: '21' },
    { value: '121', label: 'Sistemas de intercomunicación', categoria: '21' },
    { value: '122', label: 'Sistemas de radiocomunicación y misión crítica', categoria: '21' },
    { value: '123', label: 'Sistemas para automatización de edificios', categoria: '21' },
    { value: '124', label: 'Sistemas para prisiones, exclusas, mobiliario, brazaletes electrónicos', categoria: '21' },
    { value: '125', label: 'Teclados, pulsadores y accesorios', categoria: '21' },
    { value: '126', label: 'Fuentes de alimentación y baterías', categoria: '21' },
    { value: '127', label: 'Gabinetes, tableros y cajas para montaje de equipo', categoria: '21' },
]

import slide1 from '../assets/images/slider/slide-1.png';
import slide2 from '../assets/images/slider/slide-2.png';
import slide3 from '../assets/images/slider/slide-3.png';
import slide4 from '../assets/images/slider/slide-4.png';

export const bannerData = {
  title: 'GUÍA INTERNACIONAL DE SEGURIDAD',
  description: "GUÍA INTERNACIONAL DE SEGURIDAD",
  text: "Regístrate a nuestra Revista de seguridad",
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      title: 'Johnson Controls',
      link: '/empresas/195/AXIS Communications'
    },
    {
      id: 2,
      thumb_url: slide2,
      title: 'HID',
      link: '/empresas/803/HID Global'
    },
    {
      id: 3,
      thumb_url: slide3,
      title: 'AXIS Communications',
      link: '/empresas/195/AXIS Communication'
    },
    {
      id: 4,
      thumb_url: slide4,
      title: 'GSI Seguridad privada',
      link: '/empresas/164/GSI Seguridad privada'
    }
  ]
}

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: "Publicidad",
  slogan: "",
  reviews: [
    {
      id: 0,
      name: "Johnson Controls",
      designation: "Data information",
      username: "@Johnson",
      account_url: "#",
      comment:
        "Morbi congue justo non orci ultricies ullamcorper. Aliquam nec magna eros. Morbi sed neque porta ipsum pharetra luctus. Fusce et nisi aliquam, rhoncus lacus ac, vestibulum nisl.",
      avatar:
        "https://www.mundohvacr.com.mx/wp-content/uploads/2020/04/page600x400.png",
    },
    {
      id: 1,
      name: "Axis Comunucations",
      designation: "Data information",
      username: "@Axis",
      account_url: "#",
      comment:
        "Morbi congue justo non orci ultricies ullamcorper. Aliquam nec magna eros. Morbi sed neque porta ipsum pharetra luctus. Fusce et nisi aliquam, rhoncus lacus ac, vestibulum nisl.",
      avatar:
        "https://01solutions.net/wp-content/uploads/2019/11/Axis-Communication-Zero-One-2.png",
    },
    {
      id: 2,
      name: "HID",
      designation: "Data information",
      username: "@HID",
      account_url: "#",
      comment:
        "Morbi congue justo non orci ultricies ullamcorper. Aliquam nec magna eros. Morbi sed neque porta ipsum pharetra luctus. Fusce et nisi aliquam, rhoncus lacus ac, vestibulum nisl.",
      avatar:
        "https://circuitoscerrados.mx/wp-content/uploads/2019/12/HID-Logo.jpg",
    },
    {
      id: 3,
      name: "GSI",
      designation: "Data information",
      username: "@GSI",
      account_url: "#",
      comment:
        "Morbi congue justo non orci ultricies ullamcorper. Aliquam nec magna eros. Morbi sed neque porta ipsum pharetra luctus. Fusce et nisi aliquam, rhoncus lacus ac, vestibulum nisl.",
      avatar:
        "https://gsiseguridad.es/wp-content/uploads/2017/08/logos-empresas-gsi-seguridad-privada-400x200.png",
    },
    {
      id: 4,
      name: "Coleman",
      designation: "Data information",
      username: "@coleman",
      account_url: "#",
      comment:
        "Morbi congue justo non orci ultricies ullamcorper. Aliquam nec magna eros. Morbi sed neque porta ipsum pharetra luctus. Fusce et nisi aliquam, rhoncus lacus ac, vestibulum nisl.",
      avatar:
        "https://seguridadenamerica.com.mx/noticias/publicidad/28/logotipo/logo1.png",
    },
  ],
};

/* ------------------------------------ */
// Footer data
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { linkedin } from "react-icons-kit/fa/linkedin";

import logo from "../assets/images/logo.png";

export const footerData = {
  logo: logo,
  mail: "soporte@seguridadenamerica.com.mx",
  phone: "+55 5572 6005",
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} style={{color: '#d1d1d1'}}/>,
      name: "facebook",
      link: "#",
    },
    {
      id: 2,
      icon: <Icon icon={linkedin} style={{color: '#d1d1d1'}} />,
      name: "linkedin",
      link: "#",
    },
    {
      id: 3,
      icon: <Icon icon={twitter} style={{color: '#d1d1d1'}} />,
      name: "twitter",
      link: "#",
    },
  ],
  menuWidgets: [
    {
      id: 1,
      title: "ACERCA DE NOSOTROS",
      menu: [
        {
          id: 1,
          text: "Soporte al cliente",
          link: "#",
        },
        {
          id: 2,
          text: "Soporte técnico",
          link: "#",
        },
        {
          id: 3,
          text: "Conócenos",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      title: "NUESTRA INFORMACIÓN",
      menu: [
        {
          id: 1,
          text: "Póliticas de privacidad",
          link: "/aviso",
        },
        {
          id: 2,
          text: "Términos y condiciones",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      title: "MI CUENTA",
      menu: [
        {
          id: 1,
          text: "Perfil",
          link: "#",
        },
        {
          id: 2,
          text: "Permisos",
          link: "#",
        },
        {
          id: 3,
          text: "Suscripciones",
          link: "#",
        },
      ],
    },
  ],
};

export default cobertura;
