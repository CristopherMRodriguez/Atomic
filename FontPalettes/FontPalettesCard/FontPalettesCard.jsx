import React from 'react';
import * as S from './FontPalettesCard.style';

import CardCarousel from '../CardCarousel';
import {
  IconLightning,
  IconSearchDirectory,
  IconStar
} from '../../../../../icons';

import PropTypes from 'prop-types';


const FontPalettesCard = ({title, components}) => {
  return (
    <S.CardWrapper> 
      <S.CardHeader>
        <S.OptionIconLightening src={IconLightning} />
        <S.OptionIconSearch src={IconSearchDirectory} />
        <S.OptionIconStar src={IconStar} />
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardHeader>
      <S.CardComponentsContainer>
        <S.CardComponents>
          <CardCarousel components={components} />
        </S.CardComponents>
      </S.CardComponentsContainer>
    </S.CardWrapper>
  );
};

FontPalettesCard.propTypes = {
    title: PropTypes.string.isRequired,
    components: PropTypes.string.isRequired
};

export default FontPalettesCard;
