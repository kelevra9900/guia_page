import styled, {keyframes} from "styled-components";
import { themeGet } from "@styled-system/theme-get";

/* ------------------------------------ */
// style for circle loader
/* ------------------------------------ */
const rotate = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

const grow = keyframes`
	50% {
		transform: scale(1);
	}
`;


const SectionWrapper = styled.section`
  padding: 75px 0 125px;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    padding: 75px 0;
  }
  @media (max-width: 1024px) {
    padding: 20px 0 50px;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: -30px;
  margin-right: -33px;
  margin-bottom: -50px;

  .glide__slide {
    padding-top: 30px;
    padding-right: 33px;
    padding-bottom: 50px;
  }

  .review-card {
    padding: 37px 40px 40px;
    border-radius: 5px;
    border: 1px solid ${themeGet("colors.lightBorder", "#F2F4F7")};
    transition: all 0.3s ease;
    @media only screen and (max-width: 480px) {
      padding: 25px 25px 30px;
    }

    &:hover {
      box-shadow: 0 10px 50px rgba(38, 78, 118, 0.1);
    }

    h3 {
      color: ${themeGet("colors.quoteText", "#343D48")};
      font-size: 16px;
      line-height: 33px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      color: ${themeGet("colors.quoteText", "#343D48")};
      font-size: 18px;
      line-height: 32px;
      font-weight: 300;
      @media only screen and (max-width: 667px) {
        font-size: 16px;
        line-height: 30px;
      }
    }

    .card-footer {
      display: flex;
      align-items: center;
      margin-top: 33px;
      @media only screen and (max-width: 480px) {
        align-items: flex-start;
        margin-top: 30px;
      }

      .image {
        flex-shrink: 0;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 6px 30px rgba(39, 79, 117, 0.2);
        }
      }

      .reviewer-info {
        width: calc(100% - 50px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 19px;
        @media only screen and (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }
      }

      .content {
        h4 {
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 7px;
          color: ${themeGet("colors.headingColor", "#0F2137")};
          @media only screen and (max-width: 480px) {
            margin-bottom: 3px;
          }
        }
        p {
          font-size: 14px;
          line-height: 24px;
          color: rgba(15, 33, 52, 0.6);
          font-weight: 400;
          margin: 0;
        }
      }
    }

    .rating {
      flex-shrink: 0;
      @media only screen and (max-width: 480px) {
        margin-top: 2px;
      }
      i {
        margin-right: 2px;
        &:last-child {
          margin-right: 0;
        }
        @media only screen and (max-width: 480px) {
          svg {
            width: 14px;
            height: auto;
          }
        }
      }
      .star {
        color: ${themeGet("colors.blue", "#F6C416")};
      }
      .star-o {
        color: ${themeGet("colors.gray", "#E4E4E4")};
      }
    }
  }

  .glide__controls {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    > div {
      top: calc(50% - 70px / 2);
      &.glide__prev--area {
        left: -44px;
        @media only screen and (max-width: 480px) {
          left: 12px;
        }
      }
      &.glide__next--area {
        right: 38px;
        @media only screen and (max-width: 480px) {
          right: 46px;
        }
      }
      .reusecore__button {
        &:hover {
          box-shadow: #0f3d72 0px 12px 24px -10px;
        }
      }
    }
  }

  .glide {
    &:hover {
      .glide__controls {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet("colors.primary", "#2563FF")};
    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet("colors.headingColor", "#0F2137")};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
`;

export const ContenedorLoading = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-right: 50%;
  margin-top: 20%;
`;

export const CircleLoader = styled.div`
animation: ${rotate} 3s linear infinite;
width: 50px;
height: 50px;
flex-shrink: 0;
transform-origin: bottom center;

.circle {
  animation: ${grow} 1.5s linear infinite;
  background-color: ${themeGet('colors.primary', '#FDEF00')};
  border-radius: 50%;
  display: inline-block;
  margin: -9px;
  height: 40px;
  width: 40px;
  transform: scale(0);

  &:nth-of-type(2) {
    animation-delay: 0.75s;
    background-color: ${themeGet('colors.white', '#ffffff')};
  }
}

&.alt {
  .circle {
    &:nth-of-type(2) {
      background-color: ${themeGet('colors.heading', '#191919')};
    }
  }
}
`;


export default SectionWrapper;