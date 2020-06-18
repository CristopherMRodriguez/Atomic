import styled from 'styled-components';
import Button from '../../../components/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  margin-right: 32px;
`;

export const DataSourcesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 475px);
  grid-gap: 31px 48px;
  height: 100%;
  width: 100%;
  padding: 37px 50px 0 53px;
`;

export const Card = styled.div`
  position: relative;
  width: 333.2px;
  height: 268px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-left: 0;
`;

export const Icon = styled.img`
  height: 32.08px;
  width: 40px;
  margin-top: 14px;
  margin-left: 17.48px;
`;

export const EditButton = styled(Button)``;

export const DeleteButton = styled(Button)``;

export const TextHeader = styled.header`
  position: absolute;
  width: 153.08px;
  height: 59.95px;
  left: 17.33px;
  top: 45px; /*75.49px*/
  font-family: ${(props) => props.theme.font.font1.med};
  font-size: 16px;
  line-height: 50px;
  color: #ffffff;
`;

export const UList = styled.ul`
  width: 100%;
  list-style-type: none;
  position: absolute;
  top: 124.51px;
  left: 17.48px;
  font-family: ITCFranklinGothicStd;
  font-size: 12px;
  line-height: 15x;
  color: #ffffff;
  text-decoration-line: underline;
  padding: 0;
`;

export const List = styled.li`
  margin: 0em;
  height: 15px;
`;

export const Span = styled.span`
  position: absolute;
  left: 156.32px;
  width: 100%;
`;
