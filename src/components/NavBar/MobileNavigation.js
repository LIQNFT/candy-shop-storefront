import NavLinks from "./NavLinks";
import { useState } from "react";
const MobileNavigation = () =>{

    const [open, setOpen]= useState(false);
    
    const closeMobileMenu = () => setOpen(false);
    return(
        <>
        <span class="navbar-toggler-icon hamburger" onClick={() => setOpen(!open)}></span>
        <nav className="mobileNav">
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
        </>
        
        
        
    );
}
export default MobileNavigation;