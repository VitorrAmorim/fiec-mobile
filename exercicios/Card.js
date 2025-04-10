import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const CardContainer = styled.View`
  background-color: ${(props) => (props.highlight ? "#ffeb3b" : "#fff")};
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.borderColor || "#ddd"};
  box-shadow: ${(props) => (props.shadow ? "4px 4px 10px rgba(0, 0, 0, 0.2)" : "none")};
  elevation: ${(props) => (props.shadow ? 5 : 0)};
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #;
`;

const CardContent = styled.Text`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

const Card = ({ title, content, highlight, shadow, borderColor }) => {
  return (
    <CardContainer highlight={highlight} shadow={shadow} borderColor={borderColor}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;
