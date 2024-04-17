"use client";

import { AppWrapper } from "@/components/AppWrapper";
import Switch from "react-switch";
import React, { useState } from "react";

import {
  TaksMap,
  Container,
  TasksText,
  SizeIcons,
  MapButtonDescription,
  AntDesignWrapper,
  MapButtonText,
  SwitcherButton,
  SwitcherButtonPadding,
  ContainerMiddle,
  SizeButtonDescription,
  SizeButton,
  SizeSelectorContainer,
  MapButtons,
} from "./styles";
import { colors } from "@/global/theme";

interface SizeSelectorProps {
  selectedSize: string;
  onSelect: (size: string) => void;
}

export interface SizeButtonProps {
  selected: boolean;
  onClickCapture: () => void
}

function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedSize, setSelectedSize] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <AppWrapper title="Configurações">
      <Container>
        <MapButtonText>
          <MapButtonDescription>Mapa</MapButtonDescription>
          <AntDesignWrapper></AntDesignWrapper>
        </MapButtonText>
        <TaksMap>
          <SwitcherButton
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Switch
              onChange={toggleSwitch}
              checked={isEnabled}
              onColor={colors.light}
              onHandleColor={colors.main1Light}
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              height={40}
              width={70}
            />
          </SwitcherButton>
          <TasksText>Mostrar tarefas concluídas</TasksText>
        </TaksMap>
      </Container>
      <ContainerMiddle>
        <MapButtons>
          <SizeButtonDescription>Tamanho dos ícones</SizeButtonDescription>
          <SizeSelectorContainer>
            <SizeButton selected={false} onClickCapture={() => {}}>Pequeno</SizeButton>
            <SizeButton selected={true} onClickCapture={() => {}}>Médio</SizeButton>
            <SizeButton selected={false} onClickCapture={() => {}}>Grande</SizeButton>
          </SizeSelectorContainer>
        </MapButtons>
      </ContainerMiddle>
    </AppWrapper>
  );
}

export default Settings;