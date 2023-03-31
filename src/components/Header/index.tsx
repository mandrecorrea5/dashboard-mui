import { RegisterButton } from "../RegisterButton";
import { HeaderContainer, HeaderTitle, HeaderTitleContainer } from "./styles";

type Props = {
  title: string;
  subTitle: string;
}

export function Header({ title, subTitle} : Props) {
  return (
    <HeaderContainer sx={{ flexGrow: 1 }}>
      <HeaderTitleContainer>
        <HeaderTitle>{title}</HeaderTitle>
        {subTitle && <p>{subTitle}</p>}        
      </HeaderTitleContainer>      
        <RegisterButton text="Cadastrar" />
    </HeaderContainer>
  )
}