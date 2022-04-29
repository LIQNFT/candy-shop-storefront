import React from 'react'
import styled from "styled-components";

const Home = () => {
  return (

      <PageContent>
        <PageItems>
          <PageHeader>
            <img src="monstamarket.png" alt="" data-aos="fade-up" data-aos-duration="1500"></img>
            
          </PageHeader>
          <PageLogo>
            <a href="//discord.gg/kuPRwhHYks" data-aos="fade-up" data-aos-duration="2500"><PageSocial src="discord.png" alt="" ></PageSocial></a>
            <a href="//www.instagram.com/monstadao_nft" data-aos="fade-up" data-aos-duration="2500"><PageSocial src="instagram.png" alt=""></PageSocial></a>
            <a href="https://twitter.com/monstadao_"data-aos="fade-up" data-aos-duration="2500"><PageSocial src="twitter.png" alt=""></PageSocial></a>
          </PageLogo>
        </PageItems>
      </PageContent>

  )
}





const PageItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    
    @media screen and (max-width: 650px){
        width: 100%
    }
`;
const PageContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
`;
const PageLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
const PageSocial = styled.img`
  color: #fff;
  height: 50px;

  &:hover{
        cursor: pointer;
        height: 70px;
        -webkit-filter: hue-rotate(90deg); /* Safari 6.0 - 9.0 */
        filter: grayscale(90deg);
    }

`;

const PageHeader = styled.h1`

    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    text-align: center;
    
    img{
        height: 200px;
        z-index:1 ;
    }
    @media screen and (max-width: 650px){
        width: 100%;
        font-size: clamp(1rem, 10vw, 1.5rem);
        img{
            height: 100px;
        }
    }
`;

export default Home