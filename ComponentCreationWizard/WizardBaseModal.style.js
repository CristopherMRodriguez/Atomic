import styled from 'styled-components';
import Button from '../Button'

export const WizardBaseWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const styles = {
  overlay: {
    backgroundColor: 'rgba(30, 30, 30, .9)',
  },
  content: {
    position: 'absolute',
    width: '903px',
    height: '548px',
    top: '50%',
    left: '50%',
    background: '#111',
    padding: 0,

    border: '1px solid #EE982F',
    boxSizing: 'border-box',
    borderRadius: '4px',
    transform: 'translate(-50%, -50%)',
  },
};

export const Title = styled.p`
  color: ${props => props.theme.colors.textSecondary.main};
  font-family: ${(props) => props.theme.font.font1.demi};
  line-height: 50px;
  font-size: 24px;
  position: absolute;
  width: 500px;
  height: 40px;
  left: 18px;
  top: 0px;
`;

export const Body = styled.div`
  
`;

export const PreviousButton = styled(Button)`
  position: absolute;
  width: 98px;
  height: 35px;
  top: 335px;
  left: 34px;
  text-align: center;
  padding: 0;
`;

export const NextButton = styled(PreviousButton)`
  left: 469px;
`;