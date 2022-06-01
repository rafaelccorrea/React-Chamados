import styled from 'styled-components'

export const Header = styled.header`
  box-shadow: 0px 4px 4px 0px #C1C1C180;
  display:  flex;
  justify-content: space-between;
  align-items: center ;
  background-color: rgba(255, 255, 255, 1);
  width: calc(100% - 60px);
  height: 3.625em;
  position: fixed;
  top: 0;
  z-index: 50;

  h1{
    color: #6A708D;
    font-weight: 400;
    font-size: 1em;
    line-height: 1em;
  }
`

export const Container = styled.div`
  display: flex;
  padding-inline: 5px;
`

export const Img = styled.img`
  margin-left: 1.5em;
  width: 75px;
`

export const UserMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1em;
`
