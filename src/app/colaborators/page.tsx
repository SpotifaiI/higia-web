'use client';
import { AppWrapper } from "@/components/AppWrapper";
import { Users, PauseCircle, PlusCircle } from "react-feather";
import { ColaboratorsEmail, ColaboratorsMainFont, ColaboratorsIncialDate, ColaboratorsName, ColaboratorsTitle, ColaboratorsFont } from "./styles";
import { TaskListTools } from "../tasks/styles";
import { GradientActionButton } from "@/components/GradientActionButton";
import { useRouter } from "next/navigation";
import { use } from "react";


function Colaborators() {
  const router = useRouter();

  function onAddColaboratorsHandler() {
    router.push('/colaborators/register');
  }
  return (
    <AppWrapper title="Colaboradores">

      <TaskListTools>
        <GradientActionButton onClick={onAddColaboratorsHandler}>
          <PlusCircle size={32} color="white" />
          Adicionar
        </GradientActionButton>
      </TaskListTools>
      
      <ColaboratorsTitle>
     
        <ColaboratorsName>
        
          <ColaboratorsMainFont>NOME</ColaboratorsMainFont>

          <ColaboratorsFont>Lucas Cristian de Souza</ColaboratorsFont>
          <ColaboratorsFont>Marlon de Souza</ColaboratorsFont>

        
        </ColaboratorsName>

      
      
        <ColaboratorsEmail>
        
          <ColaboratorsMainFont>E-MAIL</ColaboratorsMainFont>

          <ColaboratorsFont>lucas@hotmail.com</ColaboratorsFont>
          <ColaboratorsFont>marlon@hotmail.com</ColaboratorsFont>


        
        </ColaboratorsEmail>

        
        <ColaboratorsIncialDate>
        
         <ColaboratorsMainFont>CRIAÇÃO</ColaboratorsMainFont>

         <ColaboratorsFont>02/09/2001</ColaboratorsFont>
         <ColaboratorsFont>16/09/2003</ColaboratorsFont>



        </ColaboratorsIncialDate>
      
      
      </ColaboratorsTitle>
    </AppWrapper>
  );
}

export default Colaborators;
