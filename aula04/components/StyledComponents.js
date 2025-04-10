import styled from "styled-components";

//Container flexivel com props
export const Container = styled.View`
  flex: 1;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  background-color: ${(props) => props.bgColor || "#f5f5f5"};
  padding: 20px;
`;

//Título com tamanho dinamico
export const Title = styled.Text`
  font-size: ${(props) => props.size || "24px"};
  color: ${(props) => props.color || "#333"};
  font-weight: ${(props) => props.bold ? "bold" : "normal"};
  margin-bottom: 20px;
`;