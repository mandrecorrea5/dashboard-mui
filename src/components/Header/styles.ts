import { Box } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const HeaderTitleContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;    
    
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {        
        justify-content: center;
    }
`

export const HeaderTitle = styled.h2`
    margin-top: 1rem;
    margin-bottom: 0;
    padding-bottom: 0;
`