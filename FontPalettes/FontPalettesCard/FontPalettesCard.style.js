import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 45%;
  width: 750px;
  height: 33%;
  min-height: 300px;
  max-height: 400px;
  background: #454444;
  margin: 20px 0 0 20px;

  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
`;

export const OptionIconLightening = styled.img`
  margin-left: 15px;
  padding: 10px 0;
`;

export const OptionIconSearch = styled.img`
  
  margin-left: 30px;
  padding: 10px 0;
`; 

export const CardTitle = styled.div`
  font-family: ${(props) => props.theme.font.font1.med};
  font-size: 16px;

  text-align: center;  

  margin-top: -33px;
  padding-bottom: 15px;
`;

export const OptionIconStar = styled.img`
    margin-left: 625px;
    padding: 10px 0;

`;

export const CardComponentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto
`;

export const CardComponents = styled.div`
  border-top: 1px solid #979797;
  width: 98%;
  margin-left: 1%;

`;