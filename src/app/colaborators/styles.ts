'use client';

import { components } from "@/global/styles";
import styled from "styled-components";

export const ColaboratorsTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
`;

export const ColaboratorsInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const CollaboratorsActionWrapper = components.ActionWrapper;