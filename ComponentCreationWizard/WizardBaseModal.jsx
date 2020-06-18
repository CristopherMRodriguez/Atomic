import React from 'react';
import * as S from './WizardBaseModal.style';



function WizardBaseModal() {

  {/*const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [deploymentModalIsOpen, setDeploymentModalOpen] = useState(true);
  */}
  return (
    <S.WizardBaseWrapper>
      <styles>
        <S.Title>Component Creation Wizard</S.Title>
        <S.PreviousButton>Previous</S.PreviousButton>
        <S.NextButton>Next</S.NextButton>
      </styles>  
    </S.WizardBaseWrapper>
  );
}

export default WizardBaseModal;