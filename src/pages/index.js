/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import { useLocation } from 'react-router-dom';
import Image from '@theme/IdealImage';
import SearchBlock from '../theme/SearchBlock';


const Container = styled.div`
  display: flex;
  flex-direction: column;

`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 190px;
  height: calc(100% - 560px);

  img {
    width: 562px;
    height: 69px;
    margin-top: auto;
  }
`;


const LogoTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20vw;
  height: calc(100% - 560px);

  img {
    width: 60vw;
    height: calc(100% - 560px);
    margin-top: auto;
    vertical-align: middle;
    margin-left: -4%;
  }

  p{
    font-size: 6vw;
    font-weight: 900;
    color: tomato;
    vertical-align:middle;
    margin-top: 9%;
  }
`;

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;

`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;

  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }

  grayout {
    opacity: 0.6; /* Real browsers */
    filter: alpha(opacity = 60); /* MSIE */
  }
`;

const OfferedInText = styled.p`
  padding: 0px;
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  @media (max-width: 800px) {
    font-size: 4vw;
  }
`;
const OfferedIn = styled.div`
    display:flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto !Important;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
      }
`;

const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;

const MicIcon = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 40px;
  line-height: 44px;
  height: 44px;

  svg {
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
`;


export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <>
      <Container>
        <LogoTextSection>
          {(() => {
            if (useLocation().pathname === "/tel/") {
              return (
                <img src={'img/imageedit_18_6732335896.png'} />
              )
            } else if (useLocation().pathname === "/hin/") {
              return (
                <img src={'img/imageedit_23_6872318713.png'} />
              )
            } else {
              return (
                <img src={'img/imageedit_8_4291775595.png'} />
              )
            }
          })()}

        </LogoTextSection>
        {/* <SearchSection> */}

          {/* <Form action='/' method='GET' role='search'> */}
            {/* <Search> */}
              <SearchIcon>
              
              </SearchIcon>
              <SearchBlock />
              {/* <SearchInput type='text' /> */}
            {/* </Search> */}
          {/* </Form> */}
          <ButtonSection>
            <button><Translate>Search</Translate></button>
          </ButtonSection>
          <OfferedIn>
            <OfferedInText>
              <Translate>Dharma Sandehalu offered in</Translate>&nbsp;&nbsp;
            </OfferedInText>
            <OfferedInText>
              &nbsp;&nbsp;<a href="/tel/">తెలుగు</a>&nbsp;,&nbsp;<a href='/'>English</a></OfferedInText>
          </OfferedIn>
        {/* </SearchSection> */}
      </Container>
    </>
  );
}
