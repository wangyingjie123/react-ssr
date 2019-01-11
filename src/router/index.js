import NestedRoute from "./NestedRoute";
import StatusRoute from "./StatusRoute";
import { fatchTopList, fetchTopDetail, fetchFooList } from "../redux/actions";
// 代码分割-路由懒加载
import loadable from "@loadable/component";

const router = [
  {
    path: "/bar",
    name: 'bar',
    component: loadable(() => import("../views/bar/Bar"))
  },
  {
    path: "/baz",
    name: 'baz',
    component: loadable(() => import("../views/baz/Baz"))
  },
  {
    path: "/redux",
    name: 'redux',
    component: loadable(() => import("../containers/redux/ReduxFoo")),
    asyncData(store) {
      return store.dispatch(fetchFooList());
    }
  },
  {
    path: "/pbl",
    name: 'pbl',
    component: loadable(() => import("../views/flow/flow"))
  },
  {
    path: "/top-list",
    name: 'top-list',
    component: loadable(() => import("../containers/TopList")),
    exact: true,
    asyncData(store) {
      return store.dispatch(fatchTopList());
    }
  },
  {
    path: "/top-list/:id",
    component: loadable(() => import("../containers/TopDetail")),
    asyncData(store, params) {
      return store.dispatch(fetchTopDetail(params.id));
    }
  }
];

export default router;

export {
  router,
  NestedRoute,
  StatusRoute
}
