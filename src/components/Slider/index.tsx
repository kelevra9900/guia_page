import React, {Fragment} from "react";
import Link from 'next/link'
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { BabelLoading } from 'react-loadingg';

import { useFetch } from "../../hooks/fetch";
import Container from "../UI/Container";
import SectionWrapper, { CarouselWrapper, SectionHeader }  from "./slider.style";
import Heading from "../Heading";
import Text from "../Text";
import Image from "../Image";
import GlideSlide from "../GlideCarousel/glideSlide";
import GlideCarousel from "../GlideCarousel";

const SugeridosCarousel = ({
  secText,
  secHeading
}:any) => {
  const router = useRouter();

  const { idCategory } = router.query;
  
  const { loading, categorias } = useFetch(
    `https://admin.guiainternacional.com/api/categorias/${idCategory}`
    // `http://127.0.0.1:8000/api/categorias/${idCategory}`
  );

  const glideOptions = {
    type: "carousel",
    gap: 20,
    perView: 2,
    animationDuration: 700,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };


   if (loading)
     return (
    <BabelLoading />
  )

  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>

            <Heading {...secHeading} content="Sugerencias" />
            <Heading {...secText} content="Nuestras sugerencias para ti" />

        </SectionHeader>

        <CarouselWrapper>

            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {categorias.map((item:any) => (
                  <GlideSlide key={`testimonial--key${item.id}`}>
                    <div className="review-card">
                      <Heading as={"h3"} content={item.nombre_empresa} />
                      <Text content={item.descripcion_breve} />
                      <div className="card-footer">
                        <div className="image">
                          {/* <Image src={logo} alt="Client Image" /> */}
                        </div>
                        <div className="reviewer-info">
                          <div className="content">
                            <Heading as={"h4"} content={item.nombre_ejecutivo} />
                            <Text content={item.sitio_web} />
                            <Text content={item.telefono_principal} />
                          </div>
                          {/* <Rating rating={item.review} /> */}
                        </div>
                      </div>
                    </div>
                  </GlideSlide>
                ))}
              </Fragment> 
            </GlideCarousel>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

SugeridosCarousel.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  reviewStyle: PropTypes.object,
  TestimonialMeta: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
};

SugeridosCarousel.defaultProps = {
  secTitleWrapper: {
    mb: ["40px", "40px", "50px", "75px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#eb4d4b",
    mb: "10px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  reviewStyle: {
    fontSize: ["16px", "16px", "17px", "17px", "19px"],
    fontWeight: "300",
    color: "#343d48",
    lineHeight: "1.74",
    mb: ["30px", "30px", "30px", "40px", "55px"],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: "center",
  },
  nameStyle: {
    as: "h3",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "8px",
  },
  designationStyle: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#6f7a87",
    mb: "0",
  },
};

export default SugeridosCarousel;
