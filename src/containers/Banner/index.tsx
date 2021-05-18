import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Image from '../../components/Image';
import Input from '../../components/Input';
import Button from '@material-ui/core/Button';

import GlideCarousel from '../../components/GlideCarousel';
import GlideSlide from '../../components/GlideCarousel/glideSlide';

import BannerWrapper, {
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
  CircleLoader,
} from './banner.style';
import { bannerData } from '../../data';

const Banner = () => {
  const { title, carousel, text } = bannerData;

  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
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

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
  }, []);

  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <HighlightedText>
            <strong style={{ color: '#fff' }}>TOP</strong>GUÍA INTERNACIONAL DE
            SEGURIDAD
          </HighlightedText>
          <Heading as="h1" content="GUÍA INTERNACIONAL DE SEGURIDAD" />
          <p style={{color: '#fff'}}>Regístrate a nuestra Revista de seguridad</p>
          <FormWrapper>
            <Input
              className="valid"
              inputType="email"
              placeholder="Ingresa tu correo electrónico"
              iconPosition="left"
              required={true}
              aria-label="email"
            />
            <ButtonGroup>
              <Button
                style={{
                  background: '#0c386d',
                  width: '190px',
                  height: '47px',
                }}
              >
                <p style={{ color: '#ffff', fontSize: '10px' }}>SUSCRIBIRME</p>
              </Button>
            </ButtonGroup>
          </FormWrapper>
        </ContentArea>
        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map((item) => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    <Link href={{
                      pathname: '/empresas/[id]/[empresa]',
                      query: {id: 195, empresa: 'AXIS'}
                    }}>
                      <a className="item_wrapper">
                        <Image src={item.thumb_url} alt={item.title} />
                        <Heading as="h4" content={item.title} />
                      </a>
                    </Link>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
