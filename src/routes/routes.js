import config from '~/config';

// import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Lists from '~/pages/List';
import Profile from '~/pages/Profile';
import Form from '~/pages/Form';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.lists, component: Lists },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.form, component: Form },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
