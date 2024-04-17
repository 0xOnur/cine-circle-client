interface IRouteConfig {
    path: string;
    title: string;
    component: ReactElement<any, any>,
    private?: boolean;
}