import React from "react";
import { ContentWrapper } from "../../assets/css/Global.style";
import { Wrapper } from "../../containers/Home/home.style";
import Head from '../../containers/Head';
import Header from "../../components/Header";
import SectionWrapper from "../../components/Slider/slider.style";
import Block from '../../components/Block_by_id';

const Categorias = () => {
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