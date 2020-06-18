import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import * as S from './FontPalettes.style';
import Link from '../../../../components/Link';
import FontPalettesCard from './FontPalettesCard/FontPalettesCard';
import { apiDomain, fp } from '../../../../config';


function FontPalettes() {
  const navLinks = [
    {
      text: 'UI-Kits',
      to: '/projects/ui-kits',
      color: 'secondary',
    },
    {
      text: 'Color Palettes',
      to: '/projects/ui-kits/color-palettes',
      color: 'secondary',
    },
    {
      text: 'Font Palettes',
      to: '/projects/ui-kits/font-palettes',
      color: 'secondary',
    },
  ];
const URL = `${apiDomain}/ui-kit.php`;

const [data, getData] = useState([]);

useEffect(() => {
  const option = {

  method: 'post',
  url: URL,
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: {
    'atomic_session': 1,
    'command': "list_all_font_palettes",
    fp
  }   
};

  Axios(option)
    .then((result) => {
      getData(result.data)
    })
    .catch((err) => {
      throw(err);
    })
}, []);  
  return ( 
    <S.UIKitsWrapper>
      <S.NavBar>
        <S.SearchForm>
          <S.SearchInput />
          <S.SearchButton>Search</S.SearchButton>
        </S.SearchForm>
        {navLinks.map((link) => (
          <Link
            to={link.to}
            color={link.color}
            key={link.text}
            style={{ marginTop: '4px' }}
          >
            {link.text}
          </Link>
        ))}
        <S.CreateButton>Create Font Palette</S.CreateButton>
      </S.NavBar>
      <S.FontPalettesCardWrapper>
        {data.map((obj) => (
          <FontPalettesCard 
            title={obj.name} 
            components={obj.fonts} 
            key={obj.id}
          />
        ))}
      </S.FontPalettesCardWrapper>
      
    </S.UIKitsWrapper>
  );
}

export default FontPalettes;
