import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import PropTypes from "prop-types";
import Link from "next/link";
import Box from '../../components/Box';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Image from '../../components/Image';
import Container from '../../components/UI/Container';
import SugeridosCarousel from '../../components/Slider';
import Reviewer1 from "../../assets/images/example-2.jpg";

import {
    EnterpriseShowcaseWrapper,
    EnterpriseShowcaseItem,
    EnterpriseLink,
    ContenedorLoading,
    EnterpriseMeta,
    MetaItem,
} from './enterprice_show_case.style';
import { useFetch } from "../../hooks/fetch";
import { BabelLoading } from 'react-loadingg';

interface IRegistro{
  autorizado: number,
  cobertura_mercado: string,
  correo_contacto: string,
  correo_responsable: string,
  descripcion_breve: string,
  descripcion_completa: string,
  direccion: string,
  estado: string,
  id: number,
  id_transaccion: string,
  id_usuario: number,
  logo_empresa: string,
  metodo_pago: string,
  nombre_contacto: string,
  nombre_empresa:string,
  nombre_responsable: string,
  pais_empresa: string,
  puesto_contacto: string,
  sitio_web: string,
  telefono_principal: string,
  telefono_secundario: '',
  tipo_mencion: number
}

const InfoShowcase = ({
    sectionWrapper,
    secTitleWrapper,
    secTitle,
    secDescription,
    portfolioImage,
    portfolioDetails,
    titleStyle,
    detailsStyle,
  }: any) => {
    const router = useRouter();
    const [data, setData] = useState<IRegistro>();

    const { id } = router.query;
    useEffect(() => {
      axios
        .get(`https://admin.guiainternacional.com/api/guia/${id}`)
        .then((res: any) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log('error--->', error);
          return null;
        });
    }, []);
  
    return (
      <Box {...sectionWrapper} as="section" id="portfolio_section">
        <Container noGutter mobileGutter width="1200px">
          <Box {...secTitleWrapper}>
            <Heading {...secTitle} content={data?.nombre_empresa} />
            <Text {...secDescription} content={data?.descripcion_breve} />
          </Box>
  
          <EnterpriseShowcaseWrapper>
            <>
              <EnterpriseShowcaseItem>
                <Box {...portfolioImage}>
                  <Image src={Reviewer1} alt={`PortfolioImage-1`} />
                </Box>
                <Box {...portfolioDetails}>
                  <EnterpriseLink>
                    <Link href={`https://${data?.sitio_web}` || 'https://google.com'} passHref={true} >
                      <a>VISITA SU SITIO WEB</a>
                    </Link>
                  </EnterpriseLink>
                  <Heading content={data?.nombre_empresa} {...titleStyle} />
                  <Text content={data?.descripcion_completa} {...detailsStyle} />
                </Box>
  
                <EnterpriseMeta>
                  <MetaItem className="meta_featured">
                    Dirección
                    <Link href="#">
                      <a>{data?.direccion} {data?.estado}</a>
                    </Link>
                  </MetaItem>
  
                  <MetaItem>
                    <b>
                      {data?.nombre_contacto}
                    </b>{" "}
                  </MetaItem>
  
                  <MetaItem>
                    Teléfono <b> {data?.telefono_principal}</b>
                  </MetaItem>
  
                  <MetaItem>
                    <b>{data?.correo_responsable}</b>
                  </MetaItem>
                </EnterpriseMeta>
              </EnterpriseShowcaseItem>
              {/* <SugeridosCarousel /> */}
            </>
          </EnterpriseShowcaseWrapper>
        </Container>
      </Box>
    );
  };
  
  InfoShowcase.propTypes = {
    sectionWrapper: PropTypes.object,
    secTitleWrapper: PropTypes.object,
    secTitle: PropTypes.object,
    secDescription: PropTypes.object,
    portfolioImage: PropTypes.object,
    portfolioDetails: PropTypes.object,
    titleStyle: PropTypes.object,
    detailsStyle: PropTypes.object,
  };
  
  InfoShowcase.defaultProps = {
    sectionWrapper: {
      pt: ["60px", "80px", "100px", "110px", "150px"],
      pb: ["60px", "80px", "100px", "110px", "150px"],
    },
    secTitleWrapper: {
      width: ["100%", "100%", "60%", "50%", "50%"],
      mb: ["50px", "65px"],
    },
    secTitle: {
      fontSize: ["22px", "26px", "26px", "30px", "30px"],
      fontWeight: "600",
      color: "#302b4e",
      lineHeight: "1.34",
      mb: ["15px", "18px", "18px", "20px", "20px"],
    },
    secDescription: {
      fontSize: ["15px", "16px"],
      fontWeight: "400",
      color: "#43414e",
      lineHeight: "1.5",
      mb: "0",
    },
    portfolioImage: {
      width: [1, 1, 1 / 2],
    },
    portfolioDetails: {
      width: [1, 1, 1 / 2],
      p: ["30px 0 0 0", "40px 0 0 0", "0 0 0 30px", "0 50px", "0 50px"],
    },
    titleStyle: {
      fontSize: ["22px", "22px", "26px", "40px", "40px"],
      fontWeight: "600",
      color: "#302b4e",
      mb: "17px",
    },
    detailsStyle: {
      fontSize: ["15px", "15px", "15px", "16px", "16px"],
      color: "#43414e",
      lineHeight: "1.5",
      mb: "0",
    },
  };
  
  export default InfoShowcase;
  