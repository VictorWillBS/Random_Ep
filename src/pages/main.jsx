import { useEffect, useState } from "react"
import styled from "styled-components"
import EpisodesBox from "../components/episodesBox"
import { RandomButton } from "../components/randomButton"
import { Title } from "../components/title"
import { generateOrder } from "../functions/generateOrder"
import { useRefreshList } from "../hooks/useRefreshList"

export function MainPage(){
  const [epList,setEpList]=useState([]);
  const [update,setUpdate] = useState(true)
    useRefreshList(setEpList,generateOrder,update)
  return(
    <Body>
      <Container>
            <Title>Sua ordem é: </Title>
        <EpContainer>
            <EpisodesBox epList={epList}/>
        </EpContainer>
            <RandomButton update={update} setUpdate={setUpdate}></RandomButton>
        </Container>
    </Body>
  )
}
const Body= styled.div` 
  width:100vw;
  min-height:100vh;
  height: 100%;
  background-color:#171717;
  `

const EpContainer = styled.section`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow:scroll;
  padding-bottom:30px;
  @media screen and (min-width: 600px) {
    &::-webkit-scrollbar{
      display:none
    }
    
  }
  `
const Container = styled.section`
  width:100%;
  min-height:100vh;

  height:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  
  padding:60px 60px 0 60px;
  

`