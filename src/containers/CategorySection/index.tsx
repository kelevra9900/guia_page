import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from "next/router";

import Image from '@components/Image';
import Box from '@components/Box';
import Text from '@components/Text';
import Heading from '@components/Heading';
import Container from '@components/UI/Container';
import CategorySectionWrapper from './category_section.style';
import { useFetch } from '../../hooks/fetchCategories';
import { BabelLoading } from 'react-loadingg';
import FeatureBlock from '@components/CategoryBlock';

interface ICategorySection {
    row?:any,
    col?:any,
    sectionHeader?:any,
    sectionTitle?:any,
    sectionSubTitle?:any,
    featureTitle?:any,
    iconStyle?:any,
    contentStyle?:any,
    blockWrapperStyle?:any,
}
const CategorySection = ({
    row,
    col,
    sectionHeader,
    sectionTitle,
    sectionSubTitle,
    featureTitle,
    iconStyle,
    contentStyle,
    blockWrapperStyle,
}: ICategorySection) => {
    const router = useRouter();
    const { loading, response } = useFetch('https://admin.guiainternacional.com/api/categorias');
    

    const onClickCategory = (e:any, categoryID:number, nombre: string) => {
      router.push(`/categoria/${categoryID}/${nombre}`);
    };
    if(loading)
        return(
          <BabelLoading />
        );

        return (
            <CategorySectionWrapper id="featureSection">
              <Container>
                <Box {...sectionHeader}>
                  <Text content="CATEGORÍAS" {...sectionSubTitle} />
                  <Heading
                    content="Busca en la categoría relacionada con tu necesidad."
                    {...sectionTitle}
                  />
                </Box>
                <Box className="row" {...row}>
                  {response.data.map((feature:any, index:number) => (
                    <Box className="col" {...col} key={`feature-${index}`}>
                      <FeatureBlock
                        onClick={(value:any) => onClickCategory(value, feature.id, feature.nombre)}
                        icon={
                          <Image
                          alt="logo-icono"
                            width={50}
                            height={50}
                            key={index}
                            src={require(`@assets/images/categories/${feature.icono}`)}
                            // src={<i className={feature.icono} />}
                          />
                        }
                        wrapperStyle={blockWrapperStyle}
                        iconStyle={iconStyle}
                        contentStyle={contentStyle}
                        title={<Heading content={feature.nombre} {...featureTitle} />}
                      />
                    </Box>
                  ))}
                </Box>
              </Container>
            </CategorySectionWrapper>
          );
}

// CategorySection style props
CategorySection.propTypes = {
    sectionHeader: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    sectionTitle: PropTypes.object,
    sectionSubTitle: PropTypes.object,
    featureTitle: PropTypes.object,
    featureDescription: PropTypes.object,
  };
  
  // CategorySection default style
  CategorySection.defaultProps = {
    // section header default style
    sectionHeader: {
      mb: ["40px", "56px"],
    },
    // sub section default style
    sectionSubTitle: {
      as: "span",
      display: "block",
      textAlign: "center",
      fontSize: "14px",
      letterSpacing: "0.15em",
      fontWeight: "700",
      color: "#0f2137",
      mb: "10px",
    },
    // section title default style
    sectionTitle: {
      textAlign: "center",
      fontSize: ["20px", "24px"],
      fontWeight: "400",
      color: "#0f2137",
      letterSpacing: "-0.025em",
      mb: "0",
    },
    // feature row default style
    row: {
      flexBox: true,
      flexWrap: "wrap",
    },
    // feature col default style
    col: {
      width: [1, 1 / 2, 1 / 2, 1 / 3],
      borderLeft: "1px solid #f1f4f6",
      borderBottom: "1px solid #f1f4f6",
    },
    // feature block wrapper default style
    blockWrapperStyle: {
      p: ["20px", "20px", "20px", "20px"],
    },
    // feature icon default style
    iconStyle: {
      width: "84px",
      height: "84px",
      m: "0 auto",
      borderRadius: "50%",
      bg: "#dbdbda",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "36px",
      color: "#ffffff",
      overflow: "hidden",
      mb: "30px",
    },
    // feature content default style
    contentStyle: {
      textAlign: "center",
    },
    // feature title default style
    featureTitle: {
      fontSize: ["18px", "20px"],
      fontWeight: "400",
      color: "#0f2137",
      lineHeight: "1.5",
      mb: ["10px", "10px", "10px", "20px"],
      letterSpacing: "-0.020em",
    },
    // feature description default style
    featureDescription: {
      fontSize: "15px",
      lineHeight: "1.75",
      color: "#343d48cc",
    },
  };

  export default CategorySection;