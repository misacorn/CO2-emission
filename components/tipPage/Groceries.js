import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Content, Icon } from "native-base";

const Goods = () => {
  return (
    <TouchableOpacity>
      <Container>
        <Content>
          <Icon type="FontAwesome" name="gift" style={{ color: "#97A5BC" }} />
        </Content>
      </Container>
    </TouchableOpacity>
  );
};

export default Goods;
