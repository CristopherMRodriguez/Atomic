import styled from 'styled-components';

export const RightArrow = styled.img`
  margin-left: 8px;
  margin-right: 10px;

`;
export const LeftArrow = styled.img`
  margin-left: 8px;
  margin-right: 10px;

`;

export const CardComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #979797;
  height: 98%;
  padding-left: 30px;
  margin-top: 2%

`;

export const CardComponentFontName = styled.div`
  font-family: ${(props) => props.theme.font.font1.med};
  font-size: 15px;
  line-height: 50px;
  color: ${(props) => props.theme.colors.secondary.main};
`;

export const CardComponentPlacement = styled.p`
  font-family: ${(props) => props.theme.font.font1.med};
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.secondary.main};
`;

export const Span = styled.span`
  color: #FFFFFF;
  line-height: 20px;
`;

export const CardComponentFontSample = styled.p`
  max-width: 200px;
  max-height: 200px;
  word-wrap: normal;
  padding: 0 10px 0 0;
`;
