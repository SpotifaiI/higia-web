import { AppWrapper } from "@/components/AppWrapper";
import { Users, PauseCircle } from "react-feather";
import { TaskList } from '@/components/TaskList';
import { ColaboratorsEmail, ColaboratorsMainFont, ColaboratorsIncialDate, ColaboratorsName, ColaboratorsTitle, ColaboratorsFont } from "./styles";

function Colaborators() {
  return (
    <AppWrapper title="Colaboradores">
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
