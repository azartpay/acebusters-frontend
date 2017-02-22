/**
 * Created by helge on 14.02.17.
 */
import styled from 'styled-components';


import {
  lightBlue,
} from 'variables';

export const GamePlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 100%;
`;

export const TableInfo = styled.div`
  float: left;
  min-width: 200px;
  max-width: 600px;
  width: 320px;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  color: ${lightBlue};
  border-right: 2px double #d5d5d5;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

export const TableArea = styled.div`
  ${(props) => `width:${props.computedStyles().f}px`};
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  float: left;
  vertical-align: baseline;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
`;

export const TableContainer = styled.div`
  ${() => {
    const height = (document.getElementById('action-bar')) ? document.getElementById('action-bar').clientHeight : 0;
    return `height:${ window.screen.availHeight - height}px`;
  }};
  width: inherit;
  height: 100%;
`;

export const TableAndChairs = styled.div`
  ${(props) => `height:${ props.computedStyles().computeSize().height}px`};
  ${(props) => `width:${ props.computedStyles().computeSize().width}px`};
  margin-top: ${() => (document.getElementById('header')) ? document.getElementById('header').clientHeight + 250 : 0}px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const PokerTable = styled.div`
  margin: 0 auto;
  position: relative;
  top: 100%;
  transform: translateY(-100%);
  width: 81.6666666%;
  height: 57.6000000%;
  background-color: ${lightBlue};
  border: 2px solid beige;
  border-radius: 35%;
`;

export const SeatsWrapper = styled.div`
  position: relative
`;
