import { Outlet } from "react-router-dom"
import { HeaderStyled, NavStyled, StyledNavLink } from "./Layout.styled";
import { Suspense } from "react"; 
    
export const Layout = () => {
    return <>
        <HeaderStyled>
            <NavStyled>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavStyled>
        </HeaderStyled>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};