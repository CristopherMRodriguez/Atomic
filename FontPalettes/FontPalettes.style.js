import styled from 'styled-components';
import Button from '../../../../components/Button';


export const UIKitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavBar = styled.nav`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;

  a {
    margin-bottom: 3px;
    margin-left: 47px;
    font-size: 20px;
  }
  a:first-of-type {
    margin-left: 0px;
  }
  
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  background: #272626;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  height: 30px;
`;



export const SearchButton = styled(Button)`
  height: 30px;
  margin-left: 10px;
  margin-right: 65px;
`;

export const CreateButton = styled(Button)`
  margin-left: 150px;
  height: 30px;
  width: 160px;
  min-width: 125px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  padding-top: 10px;

  margin-right: 65px;
  border-radius: 2px;
`;

export const FontPalettesCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
