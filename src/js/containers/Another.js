import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const Text = styled.div`
  color: red;
`;

class Another extends React.Component {
  render() {
    return <Text>This is my Another Pages....</Text>;
  }
}

export default Another;
