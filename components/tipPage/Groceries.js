import React from "react";
import { Container, Content, Icon } from "native-base";

const Goods = () => {
  return (
    <Container style={{ flex: 1 }}>
      <Content>
        <Icon type="FontAwesome" name="gift" style={{ color: "#97A5BC" }} />
      </Content>
    </Container>
  );
};

export default Goods;