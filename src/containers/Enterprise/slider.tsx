import { Fragment } from 'react';
import { BabelLoading } from 'react-loadingg';
import Container from '@components/UI/Container';
import Heading from '@components/Heading';
import Text from '@components/Text';
import GlideCarousel from '@components/GlideCarousel';
import GlideSlide from '@components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouselWrapper, SectionHeader } from './slider.style';
import { useFetch } from 'src/hooks/fetch';

function EmpresasSugeridas({ id }: any) {
    console.log('id recibido', id);
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

    const {response, loading } = useFetch(`https://admin.guiainternacional.com/api/categorias/${id}`);

    console.log('data', response);
    console.log('loading', loading);

    if(loading)
    return(
        <BabelLoading />
    );
      
  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Heading as={'h3'} content="Sugerencias" />
          <Heading as={'h3'} content="Nuestras sugerencias para ti" />
        </SectionHeader>

        <CarouselWrapper>
          <GlideCarousel
            carouselSelector="interior_carousel"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {response.map((item: any) => (
                <GlideSlide key={`testimonial--key${item.id}`}>
                  <div className="review-card">
                    <Heading as={'h4'} content={item.nombre_empresa} />
                    <Text as={"p"} content={item.descripcion_breve} />
                    <div className="card-footer">
                      <div className="image">
                      </div>
                      <div className="reviewer-info">
                        <div className="content">
                          <Heading as={'h4'} content={item.nombre_ejecutivo} />
                          <Text as={"p"} content={item.sitio_web} />
                          <Text as={"p"} content={item.telefono_principal} />
                        </div>
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
}

export default EmpresasSugeridas;
