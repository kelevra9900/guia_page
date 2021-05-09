import styled from "styled-components";

export const PromoItem = styled.div`
  background-color: "#ffffff";
  width: calc(100% / 2 - 25px);
  max-width: 340px;
  min-width: 250px;
  min-height: 250px;
  padding: 20px;
  margin: 0 auto;
  height: calc(100% / 2 - 20px);
  border-radius: 15px;
  box-shadow: 0 6px 50px "rgba(27, 33, 45, 0.2)";
  position: relative;
  @media only screen and (max-width: 1366px) {
    width: calc(100% / 2 - 20px);
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2 - 15px);
  }
  @media only screen and (max-width: 667px) {
    width: calc(80% - 30px);
    flex-shrink: 0;
    margin-right: 30px;
  }
  @media only screen and (max-width: 480px) {
    width: calc(96% - 25px);
    margin-right: 20px;
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
    margin-right: 0;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 109px;
    height: 30px;
    position: absolute;
    top: -10px;
    left: 37px;
    border-radius: 5px;
    color: "#ffffff";
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
    background-color: "#FFA740";
    img {
      margin-right: 6px;
    }
  }

  .card-header {
    padding: 17px 20px;
    margin-bottom: 20px;
    @media only screen and (max-width: 480px) {
      padding: 15px 10px 10px;
    }
    h3 {
      color: "#0F2137";
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      color: "rgba(52, 61, 72, 0.8)";
      font-size: 15px;
      margin: 0;
    }
  }

  .card-body {
    padding: 0 20px;
    margin-bottom: 25px;
    @media only screen and (max-width: 480px) {
      padding: 0 10px;
      margin-bottom: 30px;
    }
    ul {
      li {
        color: "#343D48";
        font-size: 16px;
        margin-bottom: 21px;
        i {
          color: "#2563FF";
          margin-right: 8px;
          svg {
            width: 20px;
            height: auto;
          }
        }
      }
    }
  }

  .card-footer {
    padding: 17px 30px;
    border-top: 1px solid #f3f4f5;
    text-align: center;
    @media only screen and (max-width: 480px) {
      padding: 30px 10px 20px;
    }
    strong {
      display: block;
      color: "rgba(52, 61, 72, 0.8)";
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 27px;
      span {
        font-weight: 700;
        font-size: 36px;
        color: "#0F2137";
      }
    }
    .reusecore__button {
      border-radius: 5px;
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }
    .trail {
      margin-top: 22px;
      a {
        color: rgba(37, 99, 255, 0.9);
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;
