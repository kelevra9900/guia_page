import styled from "styled-components";
import { rem } from "polished";

const sizeUnit = 16;

const createSize = (size) => rem(`${size * sizeUnit}px`);

const sizes = {
    sm: createSize(3),
    md: createSize(4),
    lg: createSize(5),
}

const size = (size) => {
    if(typeof sizes[size] !== 'undefined'){
        return sizes[size];
    }else{
        return sizes['md'];
    }
}

const TabWrapper = styled.div``;

export const Image = styled.img`
    display:block;
    border-radius: 50%;
    width: 100%;
    height: auto;
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    border-radius: 50%;
    border: ${rem("1px")} solid #ddd;
    padding: ${rem("2px")};
    width: ${(props) => size(props.size)};
    height: ${(props) => size(props.size)};
    background-color: white;
`;

export const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${rem("14px")} 0;

  > div {
    margin: 0 ${rem("24px")};
  }
`;

export default TabWrapper;