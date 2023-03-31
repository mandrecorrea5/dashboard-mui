import { RegisterButtonContainer } from "./styles";

type Props = {
    text: string;
}

export function RegisterButton({text}: Props) {
  return (
    <RegisterButtonContainer color="secondary" variant="contained">        
            {text}                
    </RegisterButtonContainer>
  )
}