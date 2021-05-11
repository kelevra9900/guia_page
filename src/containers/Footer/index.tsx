import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Container from '../../components/UI/Container';
import FooterWrapper, {
  CurvIcon,
  List,
  ListItem,
  SocialList,
} from './footer.style';

import { footerData } from '../../data';

const Footer = ({ row, col, colOne, colTwo }: any) => {
  const { logo, mail, phone, socialLinks, menuWidgets } = footerData;

  return (
    <Fragment>
      <CurvIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 222.29">
          <g>
            <g>
              <path fill="#06101E" d="M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z" />
            </g>
          </g>
        </svg>
      </CurvIcon>
      <FooterWrapper>
        <Container width="1330px">
          <Box className="row" {...row}>
            <Box className="col-one" {...colOne}>
              <img src={logo} alt="logoSEA" style={{width: '160px'}}/>
              <Text className="text" content={mail} />
              <Text className="text" content={phone} />
              <SocialList>
                {socialLinks.map((item) => (
                  <li className={item.name} key={`link-key${item.id}`}>
                    <Link href={item.link}>
                      <a aria-label={item.name}>{item.icon}</a>
                    </Link>
                  </li>
                ))}
              </SocialList>
            </Box>
            {/* End of logo column */}

            <Box className="col-two" {...colTwo}>
              {menuWidgets.map((widget) => (
                <Box
                  className="col"
                  {...col}
                  key={`footer__widget-key${widget.id}`}
                >
                  <Heading
                    className="widget_title"
                    as="h3"
                    content={widget.title}
                  />
                  <List>
                    {widget.menu.map((item) => (
                      <ListItem key={`list__item-${item.id}`}>
                        <Link href={item.link}>
                          <a style={{color: '#d1d1d1'}}>{item.text}</a>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
            {/* End of List column */}
          </Box>
          {/* End of widgets row */}
        </Container>
      </FooterWrapper>
    </Fragment>
  );
};

// Footer style props
Footer.propTypes = {
    row: PropTypes.object,
    col: PropTypes.object,
    colOne: PropTypes.object,
    colTwo: PropTypes.object,
  };
  
  // Footer default style
  Footer.defaultProps = {
    // Footer row default style
    row: {
      flexBox: true,
      flexWrap: "wrap",
      ml: "-15px",
      mr: "-15px",
    },
    // Footer col one style
    colOne: {
      width: ["100%", "30%", "35%", "28%"],
      mt: [0, "13px", "0"],
      mb: ["30px", 0],
      pl: ["15px", 0],
      pr: ["15px", "15px", 0],
    },
    // Footer col two style
    colTwo: {
      width: ["100%", "70%", "65%", "72%"],
      flexBox: true,
      flexWrap: "wrap",
    },
    // Footer col default style
    col: {
      width: ["100%", "50%", "50%", "25%"],
      pl: "15px",
      pr: "15px",
      mb: "30px",
    },
  };

  export default Footer;