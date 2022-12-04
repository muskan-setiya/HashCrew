import { Link} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Navigation = ({ web3Handler, account }) => {
    const path = window.location.pathname;;

    return (
        
        <Navbar   className="navbar navbar-dark bg-dark" fixed='top' style={{height:'70px'}}>
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img src='https://cdn-icons-png.flaticon.com/128/2822/2822678.png' width="40" height="40" className="" alt="" color="#FFFFFF"/></Link>
                         {/* NFTDocs */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        
                        <Nav.Item style={{color:"#ffffff"}}>NFTDocs</Nav.Item>
                        <Nav.Item></Nav.Item>
                        <Nav.Item></Nav.Item>
                    </Nav>
                   
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://mumbai.polygonscan.com/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-2">
                                    <Link to = "/CreateIdentity"><br></br>                                
                                    <Button variant="outline-light"> CREATE IDENTITY</Button></Link>
                                    
                                <Button variant="outline-light">
                                    {account}
                                </Button>

                                {/* <a href="/" className="nftdocs">NFT Docs</a> */}
                                <span></span>
                                <Link to = "/Admin">
                                 
                                <Button variant="outline-light">Admin</Button></Link>
                                            
                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar >
    )
}
export default Navigation;
