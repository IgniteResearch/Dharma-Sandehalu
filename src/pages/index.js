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
  min-height: 190px;
  height: calc(100% - 560px);

 img {
    width: 50px;
    height: calc(100% - 560px);
    margin-top: auto;
    vertical-align:middle
  }

  p{
    font-size: -webkit-xxx-large;
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
    <Container>
      {/* <div class="navbar__item dropdown dropdown--hoverable dropdown--left"><a href="#" class="navbar__link"><span><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" class="iconLanguage_node_modules-@docusaurus-theme-classic-lib-next-theme-NavbarItem-LocaleDropdownNavbarItem-styles-module"><path fill="currentColor" d="M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"></path></svg><span>English</span></span></a><ul class="dropdown__menu"><li><a href="/tel/" target="_self" rel="noopener noreferrer" class="dropdown__link">తెలుగు</a></li><li><a href="/" target="_self" rel="noopener noreferrer" class="dropdown__link dropdown__link--active">English</a></li><li><a href="/hin/" target="_self" rel="noopener noreferrer" class="dropdown__link">हिन्दी</a></li></ul></div> */}
      <LogoTextSection>
        <p><img src="img/DharmaSandehalu.png" alt="Smiley face" /> <Translate>Dharma Sandehalu</Translate>  </p>
      </LogoTextSection>
      <SearchSection>
        <Form action='/' method='GET' role='search'>
          <Search>
            <SearchIcon>
              <svg
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
              </svg>
            </SearchIcon>
            <SearchInput type='text' />
            <MicIcon>
              <svg
                focusable='false'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='#4285f4'
                  d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
                />
                <path fill='#34a853' d='m11 18.08h2v3.92h-2z' />
                <path
                  fill='#fbbc05'
                  d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
                />
                <path
                  fill='#ea4335'
                  d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
                />
              </svg>
            </MicIcon>
          </Search>
        </Form>
        <ButtonSection>
          <button><Translate>Search</Translate></button>
        </ButtonSection>
        <ButtonSection>
          <Translate>Dharma Sandehalu offered in</Translate><span>&nbsp;:&nbsp;</span><a href="https://www.w3schools.com">తెలుగు</a><span>&nbsp;,&nbsp;</span> <a href="https://www.w3schools.com">हिन्दी</a>
        </ButtonSection>
      </SearchSection>
    </Container>
  );
}
