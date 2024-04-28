import styled from 'styled-components';
import { colors } from '../../global/theme.js';
import { sizes } from '../../global/sizes.js';

export const Container = styled.div`
  padding: 0px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

export const TaksMap = styled.div`
  background-color: ${colors.lighter};
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  display: flex;
  margin-top: 20px;
  padding: 7px 15px 7px 5px;
  width: 100%;
`;

export const TasksText = styled.span`
  font-size: 20px;
  color: ${colors.black};
  margin-right: 15px;

  @media (min-width: ${sizes.mobileS}) {
    font-size: 16px;
  }
`;

export const SizeIcons = styled.div`
  background-color: ${colors.lighter};
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MapButtonText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px 0px 11px;
  width: 100%;
  justify-content: space-between;
`;

export const MapButtonDescription = styled.span`
  font-size: 24px;
  display: flex;
  font-weight: bold;
`;

export const SizeButtonDescription = styled.span`
  font-size: 20px;
  display: flex;
  color: ${colors.dark};
  font-weight: bold;
`;

export const AntDesignWrapper = styled.div``;

export const SwitcherButton = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const SwitcherButtonPadding = styled.div``;

export const ContainerMiddle = styled.div`
  margin-top: 30px;
`;

export const MapButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0px 15px 0px 11px;
  width: 100%;
  justify-content: space-between;
`;

export const SizeSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 15px;
`;

export const SizeButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  display: flex;
  padding-left: 2rem;
  background-color: ${(props) => (props.selected ? "#3498db" : "#ecf0f1")};
  color: ${(props) => (props.selected ? "#ffffff" : "#2c3e50")};
  border: none;
  cursor: pointer;
`;