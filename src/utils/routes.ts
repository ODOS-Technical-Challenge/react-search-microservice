interface RouteType {
  path: string;
  roles?: string[];
}

export const ROUTES: Record<string, RouteType> = {
  Home: { path: "/home" },
};
