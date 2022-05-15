import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import React from "react";
import { FunctionsOutlined } from "@material-ui/icons";
import { getConstantValue } from "typescript";

const Container = styled("div")`
  width: 100%;
  min-height: 200px;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled("div")`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NFTImage = styled("img")`
  width: 200px;
  height: auto;
  margin: 1rem;
  border-radius: 10%;
`;

const NFTDisplay = () => {
  const wallet = useWallet();
  const [metaData, setMetaData] = useState<any[] | []>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const getTokens = (anchorWallet: { publicKey: PublicKey }) => {
    if (process.env.REACT_APP_BACKEND_URL) {
      let walletPubkey: string = anchorWallet.publicKey?.toString();

      const options: RequestInit = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pubKey: walletPubkey,
        }),
      };

      console.log(walletPubkey);

      let status: number;
      fetch(`${process.env.REACT_APP_BACKEND_URL}/getTokens`, options)
        .then((res) => {
          console.log(res);
          status = res.status;
          return res.json();
        })
        .then((res) => {
          if (status === 200) {
            console.log(res.data);
            if (res && res.pubKey === walletPubkey) {
              console.log(res.data);
              setMetaData(res.data);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (anchorWallet) {
      if (!isFetching) {
        setIsFetching(true);
        getTokens(anchorWallet);
      }
    }
  }, [anchorWallet, isFetching]);

// const [modalIsOpen, setModalOpen] = useState(false);
// function modalhandler()
// {
  
//   setModalOpen(true);
// }
  const [modal, setModal] = useState(false);
  const [nftname, setNftname] = useState('');
  // var nftImage = document.getElementById('nftImage');

  const toggleModal = () => {
    setNftname(nftname);
    setModal(!modal);
    
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <Container id="nftdisplay">
      <h1 style={{ marginBottom: "50px" }}>MY COLLECTION</h1>
      {/* <div>
        <WalletModalProvider>
          <WalletMultiButton style={{ backgroundColor: "#a855f7" }} />
        </WalletModalProvider>
      </div> */}
      <ImageContainer>
        {metaData?.length > 0 &&
          metaData.map((data: any, index: number) => (
            <>

      <div className="card  m-2">
            <button onClick={toggleModal}  className="card-borders ">
                <div className="imgcon">
                <NFTImage className="imgNFT"
                    key={`${data.image}-${index}`}
                    src={`${data.image}`}
                    alt={`${index}`}
                  />
                </div>
                <div className='cubeName'>
                    <p className='name'>
                    {`${data.name}`}
                    </p>
                </div>
              </button>
        </div>
            {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
            <div className="modal-header">
                <div className="modal-title">
                <h4>{`${data.name}`}</h4>
                </div>
                <button className="btn-close" onClick={toggleModal}>
              </button>
            </div>
            <div className="modal-body">
            <img src={`${data.image}`} />
            </div>
            <div className="modal-footer">
            <a href={`${data.animation_url}`} download rel="noopener noreferrer" target="_blank" className="ahref">
            <button className="exchange-button-more2 btn rounded-pill" type="button">
                  Download GLB
            </button>
            </a>
            </div>
              
            </div>
          </div>  
          )}
            </>
          ))}
      </ImageContainer>
      

    </Container>
  );
};

export default NFTDisplay;

{
  //     <div className="card">
  //                 <button onClick={toggleModal} className="card-borders">
  //                   <div className="imgcon">
  //                     <img
  //                       className="imgNFT"
  //                       src="https://hqnftstorage.blob.core.windows.net/gif/square_0001.gif"
  //                     />
  //                   </div>
  //                 </button>
  //                 <div className="cubeName">
  //                   <p className="name">Square #0001</p>
  //                   <hr></hr>
  //                   <p className="desname">
  //                     <img className="iconsol" src="./Img/solLogo.svg" /> 27.27SOL
  //                   </p>
  //                 </div>
  //               </div>
  //               <Modal
  //             isOpen={isModalOpen}
  //             onClose={toggleModal}
  //           >
  //    view more
  //           </Modal>
  /* <div className="card">
                        <button data-bs-toggle="modal" className='card-borders' data-bs-target="#card1-modal">
                                <div className="imgcon">
                                    <img className='imgNFT' src="https://hqnftstorage.blob.core.windows.net/gif/square_0001.gif" />
                                </div>
                        </button>         
                            <div className='cubeName'>
                                <p className='name'>
                                Square #0001
                                </p>
                            <hr></hr>
                            <p className='desname' ><img className='iconsol' src='./Img/solLogo.svg'/> 27.27SOL
                            <a href='/NFT' className='links buy'> View More</a>
                            </p> 
                            </div>
                        </div>

             <div className="modal fade" id="card1-modal" tabIndex="-1" aria-labelledby="card1-modal-label"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="card-modal-title modal-header text-center ">
                                <div className="col-sm modal-title " id="card-modal-1">
                                  <div>
                                  Square #0001
                                  </div>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div className="card-modal-title modal-header text-center ">
                                <div className="col-sm modal-title " id="card-modal-1">
                                  <div>
                                  <img  src="https://hqnftstorage.blob.core.windows.net/gif/square_0001.gif" />
                                  </div>
                                </div>
                            </div>
                            <div className="modal-body text-uppercase">
                              <div className='col link d-flex align-items justify-content-center p-2'>
                                  <div className='container'>
                                      <button className="exchange-button-more btn btn-lg rounded-pill" type='button'>
                                          View 3D
                                      </button>  
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div> */
}
{
  /* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */
}
