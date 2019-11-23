import React from "react";
import { Container, Content, Icon } from "native-base";

const Food = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Content>
        <Icon type="FontAwesome" name="cutlery" style={{ color: "#97A5BC" }} />
      </Content>
    </Container>
  );
};

export default Food;
