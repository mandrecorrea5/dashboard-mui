import {Routes, Route} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Groups } from '../pages/Groups';
import { Home } from '../pages/Home';
import { Relationship } from '../pages/Relationship';
import { Users } from '../pages/Users';

export const AppRoutes = () => (
    <Routes>            
        <Route path="/" element={<Home />} />            
        <Route path="/users" element={<Users />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/relationship" element={<Relationship />} />
    </Routes>
)