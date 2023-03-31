import { 
    Diversity2Outlined, 
    GroupOutlined, 
    GroupsOutlined, 
    HandshakeOutlined, 
    HomeOutlined 
} from "@mui/icons-material";
import { Groups } from "../pages/Groups";
import { Home } from "../pages/Home";
import { Relationship } from "../pages/Relationship";
import { Users } from "../pages/Users";

export const AppMenu = () => {
    return [
        {
            title: 'Home',
            subTitle: 'Detalhes sobre Home',
            path: '',
            icon: <HomeOutlined />,
            component: <Home />
        },
        {
            title: 'Usuários',
            subTitle: 'Detalhes sobre Usuários',
            path: 'users',
            icon: <GroupOutlined />,
            component: <Users />
        },
        {
            title: 'Grupos',
            subTitle: 'Detalhes sobre Grupos',
            path: 'groups',
            icon: <Diversity2Outlined />,
            component: <Groups />
        },
        {
            title: 'Relacionamento',
            subTitle: 'Detalhes sobre Relacionamento',
            path: 'relationship',
            icon: <HandshakeOutlined />,
            component: <Relationship />
        },
    ];
}