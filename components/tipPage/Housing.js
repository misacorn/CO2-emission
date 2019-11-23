import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Content, Icon } from "native-base";

const Housing = () => {
  return (
    // <TouchableOpacity>
    <Container style={{ flex: 1 }}>
      <Content>
        <Icon type="FontAwesome" name="home" style={{ color: "#97A5BC" }} />
      </Content>
    </Container>
    // </TouchableOpacity>
  );
};

export default Housing;
