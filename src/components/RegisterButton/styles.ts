import { Button } from "@mui/material";
import styled from "styled-components";

export const RegisterButtonContainer = styled(Button)`

    &.MuiButton-root {
        margin-top: 1rem;
        padding: 0.75rem 4rem;
        border-radius: 10px;

        @media (max-width: 375px) {
            padding: 1rem 6rem;
        }
  }
`;