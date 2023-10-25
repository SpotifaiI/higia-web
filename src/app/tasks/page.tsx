import { Calendar, Search } from "react-feather";

import { AppWrapper } from "@/components/AppWrapper";
import { ActionButton } from "@/components/ActionButton";
import {
  SearchContainer,
  SearchFieldContainer,
  SearchFieldLabel,
  SearchFieldGroup,
  SearchField,
  SearchFieldIconContainer
} from "./styles";

function Tasks() {
  return (
    <AppWrapper title="Tarefas">
      <p>Aqui estão as tarefas</p>

      <SearchContainer>
        <SearchFieldContainer style={{ gridArea: 'a' }}>
          <SearchFieldLabel htmlFor="#Btn-one">Data Início</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-one"/>
            <SearchFieldIconContainer>
              <Calendar size={32} />
            </SearchFieldIconContainer>
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer style={{ gridArea: 'b' }}>
          <SearchFieldLabel htmlFor="#Btn-two">Data Início</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIconContainer>
              <Calendar size={32} />
            </SearchFieldIconContainer>
          </SearchFieldGroup>
        </SearchFieldContainer>

        <ActionButton
          label="Buscar"
        />
      </SearchContainer>
    </AppWrapper>
  );
}

export default Tasks;

