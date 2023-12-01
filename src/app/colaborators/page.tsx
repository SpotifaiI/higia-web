'use client';
import { CollaboratorsAPI } from "@/api/collaborators/collaborators";
import { Collaborator } from "@/api/collaborators/collaborators.model";
import { AppWrapper } from "@/components/AppWrapper";
import { GradientActionButton } from "@/components/GradientActionButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlusCircle } from "react-feather";
import { TaskListTools } from "../tasks/styles";
import { ColaboratorsEmail, ColaboratorsFont, ColaboratorsIncialDate, ColaboratorsMainFont, ColaboratorsName, ColaboratorsTitle } from "./styles";


function Colaborators() {
  const router = useRouter();
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);

  function onAddColaboratorsHandler() {
    router.push('/colaborators/register');
  }

  useEffect(() => {
    (async () => {
      const collaboratorsApi = new CollaboratorsAPI();
      const collaboratorsList = await collaboratorsApi.getCollaborators();

      setCollaborators(collaboratorsList);
    })();
  }, []);

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

          {
            collaborators.map(({ name }, index) => (
              <ColaboratorsFont key={index}>{name}</ColaboratorsFont>
            ))
          }


        </ColaboratorsName>



        <ColaboratorsEmail>

          <ColaboratorsMainFont>E-MAIL</ColaboratorsMainFont>


          {
            collaborators.map(({ email }, index) => (
              <ColaboratorsFont key={index}>{email}</ColaboratorsFont>
            ))
          }



        </ColaboratorsEmail>


        <ColaboratorsIncialDate>

         <ColaboratorsMainFont>CRIAÇÃO</ColaboratorsMainFont>


         {
            collaborators.map(({ birthday }, index) => (
              <ColaboratorsFont key={index}>{birthday.getDate()}</ColaboratorsFont>
            ))
          }


        </ColaboratorsIncialDate>


      </ColaboratorsTitle>
    </AppWrapper>
  );
}

export default Colaborators;
