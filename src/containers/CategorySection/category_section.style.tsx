import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CategorySectionWrapper =  styled.section`
padding: 80px 0;
overflow: hidden;
@media (max-width: 990px) {
  padding: 60px 0 30px 0;
}
@media (max-width: 767px) {
  padding: 40px 0 30px 0;
}
.feature__block {
  position: relative;
  height: 100%;
  transition: box-shadow 0.3s ease;
  .icon__wrapper {
    position: relative;
    background: linear-gradient(
      -60deg,
    );
    .flaticon-flask {
      &:before {
        margin-left: 8px;
      }
    }
    &:before,
    &:after {
      content: '';
      width: 28px;
      height: 100%;
      position: absolute;
    }
    &:before {
      transform: rotate(45deg);
      background-color: rgba(255, 255, 255, 0.15);
    }
    &:after {
      transform: rotate(-45deg);
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  &:hover {
    box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
  }
}
.row {
  > .col {
    &:nth-child(-n + 3) {
      border-top: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
    }
    &:nth-child(3n + 3),
    &:last-child {
      border-right: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
    }
    @media only screen and (max-width: 991px) {
      &:nth-child(-n + 3) {
        border-top: 0;
      }
      &:nth-child(3n + 3) {
        border-right: 0;
      }
      &:nth-child(-n + 2) {
        border-top: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
      }
      &:nth-child(2n + 2) {
        border-right: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
      }
    }
    @media only screen and (max-width: 480px) {
      &:nth-child(-n + 2) {
        border-top: 0;
      }
      &:nth-child(2n + 2) {
        border-right: 0;
      }
      &:nth-child(-n + 1) {
        border-top: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
      }
      &:nth-child(1n + 1) {
        border-right: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
      }
    }
    &:nth-child(2) {
      .feature__block {
        .icon__wrapper {
          background: linear-gradient(
            -60deg,
          );
        }
      }
    }
    &:nth-child(3) {
      .feature__block {
        .icon__wrapper {
          background: linear-gradient(
            -60deg,
          );
        }
      }
    }
    &:nth-child(4) {
      .feature__block {
        .icon__wrapper {
          background: linear-gradient(
            -60deg,
          );
        }
      }
    }
    &:nth-child(5) {
      .feature__block {
        .icon__wrapper {
          background: linear-gradient(
            -60deg,
          );
        }
      }
    }
    &:last-child {
      .feature__block {
        .icon__wrapper {
          background: linear-gradient(
            -60deg,
          );
        }
      }
    }
  }
}
`;

export default CategorySectionWrapper;