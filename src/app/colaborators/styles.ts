'use client';
import styled from "styled-components";


export const ColaboratorsTitle = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: space-around;
align-items: center;
width: 100%;
`;

export const ColaboratorsInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: .8rem;
`;

export const ColaboratorsName = styled(ColaboratorsInfo)``;
export const ColaboratorsEmail = styled(ColaboratorsInfo)``;
export const ColaboratorsIncialDate = styled(ColaboratorsInfo)``;

export const ColaboratorsMainFont = styled.p`
font-size: 1.5rem;
`;

export const ColaboratorsFont = styled.p`
font-size: 1rem;
margin-top: .5rem;
`;