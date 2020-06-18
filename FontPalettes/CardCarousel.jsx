import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { IconCarouselLeftArrow, IconCarouselRightArrow } from '../../../../icons';
import * as S from './CardCarousel.style';

const CardCarousel = ({ components }) => {
  const [componentsData, getComponentsData] = useState([]);

  useEffect(() => {
    getComponentsData(components);
  }, []);
  return (
    <Carousel
      arrowRight={<S.RightArrow src={IconCarouselRightArrow} />}
      arrowLeft={<S.LeftArrow src={IconCarouselLeftArrow} />}
      slidesPerScroll={3}
      slidesPerPage={3}
      addArrowClickHandler
    >
      {componentsData.map((component) => (
        <S.CardComponentWrapper key={component.name}>
          <S.CardComponentFontName>
            Font: <S.Span>{component.font}</S.Span>
          </S.CardComponentFontName>
          <S.CardComponentPlacement>
            Placement: {/*enter Placement data here*/}
          </S.CardComponentPlacement>
          <S.CardComponentFontSample>
            <span style={{fontFamily: component.font}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>
          </S.CardComponentFontSample>
        </S.CardComponentWrapper>
      ))}
    </Carousel>
  );
};

export default CardCarousel;
