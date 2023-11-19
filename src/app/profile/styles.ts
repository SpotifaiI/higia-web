"use client";

import styled from "styled-components";
import { css } from "@/global/styles";
import { sizes } from "@/global/sizes";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 16px;
`;

export const ProfileAvatar = styled.div`
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 150px;
  background: ${css.linearGradient};
`;

export const ProfileName = styled.span`
  font-size: 32px;
  line-height: 48px;
`;

export const ProfileBody = styled.div`
  border-radius: 16px;
  overflow: hidden;
  margin: 24px 0;
  width: 20rem;
  height: 254px;

  @media (min-width: ${sizes.laptop}) {
    width: 60rem;
  }
`;

export const lastComponent = styled.div`
  border-bottom: none!important;
`;