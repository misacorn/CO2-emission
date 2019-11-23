import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Content, Icon } from "native-base";

const Traffic = () => {
  return (
    <TouchableOpacity>
      <Container>
        <Content>
          <Icon type="FontAwesome" name="car" style={{ color: "#97A5BC" }} />
        </Content>
      </Container>
    </TouchableOpacity>
  );
};

export default Traffic;
