import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/fetch";
import CategorySectionWrapper from "../../containers/CategorySection/category_section.style";
import Container from "../../components/UI/Container";
import Text from "../../components/Text";
import { CircleLoader, ContentWrapper } from "../../assets/css/Global.style";
import { Wrapper } from "../../containers/Home/home.style";
import Head from '../../containers/Head';
import Header from "../../components/Header";
import SectionWrapper from "../../components/Slider/slider.style";
import Block from '../../components/Block_by_id';

const Categorias = () => {
    const router = useRouter();

    return(
        <Wrapper>
            <Head />
            <ContentWrapper>
               <Header />
               <SectionWrapper>
                <Block/>
               </SectionWrapper>
            </ContentWrapper>
        </Wrapper>
    );


}

export default Categorias;