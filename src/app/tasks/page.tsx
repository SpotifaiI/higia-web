import { Search } from "react-feather";

import { AppWrapper } from "@/components/AppWrapper";
import {
  SearchContainer,
  SearchFieldContainer,
  SearchFieldLabel,
  SearchFieldGroup,
  SearchField,
  SearchFieldIcon, ActionButton
} from "./styles";

function Tasks() {
  return (
    <AppWrapper title="Tarefas">
      <p>Aqui estão as tarefas</p>

      <SearchContainer>










        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-one">Data Início</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-one"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>

        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>
        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>
        <SearchFieldContainer>
          <SearchFieldLabel htmlFor="#Btn-two">Data Fim</SearchFieldLabel>
          <SearchFieldGroup>
            <SearchField id="Btn-two"/>
            <SearchFieldIcon size={32} />
          </SearchFieldGroup>
        </SearchFieldContainer>



        <ActionButton>
          Buscar
        </ActionButton>

        <ActionButton>
          <Search /> Buscar
        </ActionButton>
      </SearchContainer>
    </AppWrapper>
  );
}

export default Tasks;

