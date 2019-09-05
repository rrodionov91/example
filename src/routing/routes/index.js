import {ANOTHER_PAGE, SOME_PAGE} from "../pathes";

export const routes = [
    { path: '/', redirect: SOME_PAGE },
    { path: SOME_PAGE, component: () => import('@pages/some_page/page') },
    { path: ANOTHER_PAGE, component: () => import('@pages/another_page/page') }
]