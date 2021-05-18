import React, { Fragment } from "react";
import { Wrapper } from "../../containers/Home/home.style";
import { ContentWrapper } from "../../assets/css/Global.style";

import Head from '../../containers/Head';
import Header from "../../components/Header";
import SectionWrapper from "../../components/Slider/slider.style";
import Block_search from "../../components/Block_search";


const Busqueda = () => {
        return(
        <Wrapper>
            <Head />
            <ContentWrapper>
               <Header />
               <SectionWrapper>
                <Block_search/>
               </SectionWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Busqueda;