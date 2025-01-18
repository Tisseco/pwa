/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PointsDeCollecteLesPlusProchesImport } from './routes/points-de-collecte-les-plus-proches'
import { Route as LoginImport } from './routes/login'
import { Route as CarteInteractiveImport } from './routes/carte-interactive'
import { Route as IsAuthenticatedImport } from './routes/_isAuthenticated'
import { Route as IsAuthenticatedIndexImport } from './routes/_isAuthenticated/index'
import { Route as IsAuthenticatedScheduledToursIndexImport } from './routes/_isAuthenticated/scheduled-tours/index'
import { Route as ReportAreaIdSignalementReussiImport } from './routes/report/$areaId/signalement-reussi'
import { Route as ReportAreaIdSignalementImport } from './routes/report/$areaId/signalement'
import { Route as ReportAreaIdConfirmerLaLocalisationImport } from './routes/report/$areaId/confirmer-la-localisation'
import { Route as ReportAreaIdAreaIdImport } from './routes/report/$areaId/_areaId'
import { Route as IsAuthenticatedScheduledToursScheduledTourIdIndexImport } from './routes/_isAuthenticated/scheduled-tours/$scheduledTourId/index'

// Create Virtual Routes

const ReportAreaIdImport = createFileRoute('/report/$areaId')()

// Create/Update Routes

const PointsDeCollecteLesPlusProchesRoute =
  PointsDeCollecteLesPlusProchesImport.update({
    id: '/points-de-collecte-les-plus-proches',
    path: '/points-de-collecte-les-plus-proches',
    getParentRoute: () => rootRoute,
  } as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CarteInteractiveRoute = CarteInteractiveImport.update({
  id: '/carte-interactive',
  path: '/carte-interactive',
  getParentRoute: () => rootRoute,
} as any)

const IsAuthenticatedRoute = IsAuthenticatedImport.update({
  id: '/_isAuthenticated',
  getParentRoute: () => rootRoute,
} as any)

const ReportAreaIdRoute = ReportAreaIdImport.update({
  id: '/report/$areaId',
  path: '/report/$areaId',
  getParentRoute: () => rootRoute,
} as any)

const IsAuthenticatedIndexRoute = IsAuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => IsAuthenticatedRoute,
} as any)

const IsAuthenticatedScheduledToursIndexRoute =
  IsAuthenticatedScheduledToursIndexImport.update({
    id: '/scheduled-tours/',
    path: '/scheduled-tours/',
    getParentRoute: () => IsAuthenticatedRoute,
  } as any)

const ReportAreaIdSignalementReussiRoute =
  ReportAreaIdSignalementReussiImport.update({
    id: '/signalement-reussi',
    path: '/signalement-reussi',
    getParentRoute: () => ReportAreaIdRoute,
  } as any)

const ReportAreaIdSignalementRoute = ReportAreaIdSignalementImport.update({
  id: '/signalement',
  path: '/signalement',
  getParentRoute: () => ReportAreaIdRoute,
} as any)

const ReportAreaIdConfirmerLaLocalisationRoute =
  ReportAreaIdConfirmerLaLocalisationImport.update({
    id: '/confirmer-la-localisation',
    path: '/confirmer-la-localisation',
    getParentRoute: () => ReportAreaIdRoute,
  } as any)

const ReportAreaIdAreaIdRoute = ReportAreaIdAreaIdImport.update({
  id: '/_areaId',
  getParentRoute: () => ReportAreaIdRoute,
} as any)

const IsAuthenticatedScheduledToursScheduledTourIdIndexRoute =
  IsAuthenticatedScheduledToursScheduledTourIdIndexImport.update({
    id: '/scheduled-tours/$scheduledTourId/',
    path: '/scheduled-tours/$scheduledTourId/',
    getParentRoute: () => IsAuthenticatedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_isAuthenticated': {
      id: '/_isAuthenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof IsAuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/carte-interactive': {
      id: '/carte-interactive'
      path: '/carte-interactive'
      fullPath: '/carte-interactive'
      preLoaderRoute: typeof CarteInteractiveImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/points-de-collecte-les-plus-proches': {
      id: '/points-de-collecte-les-plus-proches'
      path: '/points-de-collecte-les-plus-proches'
      fullPath: '/points-de-collecte-les-plus-proches'
      preLoaderRoute: typeof PointsDeCollecteLesPlusProchesImport
      parentRoute: typeof rootRoute
    }
    '/_isAuthenticated/': {
      id: '/_isAuthenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IsAuthenticatedIndexImport
      parentRoute: typeof IsAuthenticatedImport
    }
    '/report/$areaId': {
      id: '/report/$areaId'
      path: '/report/$areaId'
      fullPath: '/report/$areaId'
      preLoaderRoute: typeof ReportAreaIdImport
      parentRoute: typeof rootRoute
    }
    '/report/$areaId/_areaId': {
      id: '/report/$areaId/_areaId'
      path: '/report/$areaId'
      fullPath: '/report/$areaId'
      preLoaderRoute: typeof ReportAreaIdAreaIdImport
      parentRoute: typeof ReportAreaIdRoute
    }
    '/report/$areaId/confirmer-la-localisation': {
      id: '/report/$areaId/confirmer-la-localisation'
      path: '/confirmer-la-localisation'
      fullPath: '/report/$areaId/confirmer-la-localisation'
      preLoaderRoute: typeof ReportAreaIdConfirmerLaLocalisationImport
      parentRoute: typeof ReportAreaIdImport
    }
    '/report/$areaId/signalement': {
      id: '/report/$areaId/signalement'
      path: '/signalement'
      fullPath: '/report/$areaId/signalement'
      preLoaderRoute: typeof ReportAreaIdSignalementImport
      parentRoute: typeof ReportAreaIdImport
    }
    '/report/$areaId/signalement-reussi': {
      id: '/report/$areaId/signalement-reussi'
      path: '/signalement-reussi'
      fullPath: '/report/$areaId/signalement-reussi'
      preLoaderRoute: typeof ReportAreaIdSignalementReussiImport
      parentRoute: typeof ReportAreaIdImport
    }
    '/_isAuthenticated/scheduled-tours/': {
      id: '/_isAuthenticated/scheduled-tours/'
      path: '/scheduled-tours'
      fullPath: '/scheduled-tours'
      preLoaderRoute: typeof IsAuthenticatedScheduledToursIndexImport
      parentRoute: typeof IsAuthenticatedImport
    }
    '/_isAuthenticated/scheduled-tours/$scheduledTourId/': {
      id: '/_isAuthenticated/scheduled-tours/$scheduledTourId/'
      path: '/scheduled-tours/$scheduledTourId'
      fullPath: '/scheduled-tours/$scheduledTourId'
      preLoaderRoute: typeof IsAuthenticatedScheduledToursScheduledTourIdIndexImport
      parentRoute: typeof IsAuthenticatedImport
    }
  }
}

// Create and export the route tree

interface IsAuthenticatedRouteChildren {
  IsAuthenticatedIndexRoute: typeof IsAuthenticatedIndexRoute
  IsAuthenticatedScheduledToursIndexRoute: typeof IsAuthenticatedScheduledToursIndexRoute
  IsAuthenticatedScheduledToursScheduledTourIdIndexRoute: typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

const IsAuthenticatedRouteChildren: IsAuthenticatedRouteChildren = {
  IsAuthenticatedIndexRoute: IsAuthenticatedIndexRoute,
  IsAuthenticatedScheduledToursIndexRoute:
    IsAuthenticatedScheduledToursIndexRoute,
  IsAuthenticatedScheduledToursScheduledTourIdIndexRoute:
    IsAuthenticatedScheduledToursScheduledTourIdIndexRoute,
}

const IsAuthenticatedRouteWithChildren = IsAuthenticatedRoute._addFileChildren(
  IsAuthenticatedRouteChildren,
)

interface ReportAreaIdRouteChildren {
  ReportAreaIdAreaIdRoute: typeof ReportAreaIdAreaIdRoute
  ReportAreaIdConfirmerLaLocalisationRoute: typeof ReportAreaIdConfirmerLaLocalisationRoute
  ReportAreaIdSignalementRoute: typeof ReportAreaIdSignalementRoute
  ReportAreaIdSignalementReussiRoute: typeof ReportAreaIdSignalementReussiRoute
}

const ReportAreaIdRouteChildren: ReportAreaIdRouteChildren = {
  ReportAreaIdAreaIdRoute: ReportAreaIdAreaIdRoute,
  ReportAreaIdConfirmerLaLocalisationRoute:
    ReportAreaIdConfirmerLaLocalisationRoute,
  ReportAreaIdSignalementRoute: ReportAreaIdSignalementRoute,
  ReportAreaIdSignalementReussiRoute: ReportAreaIdSignalementReussiRoute,
}

const ReportAreaIdRouteWithChildren = ReportAreaIdRoute._addFileChildren(
  ReportAreaIdRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof IsAuthenticatedRouteWithChildren
  '/carte-interactive': typeof CarteInteractiveRoute
  '/login': typeof LoginRoute
  '/points-de-collecte-les-plus-proches': typeof PointsDeCollecteLesPlusProchesRoute
  '/': typeof IsAuthenticatedIndexRoute
  '/report/$areaId': typeof ReportAreaIdAreaIdRoute
  '/report/$areaId/confirmer-la-localisation': typeof ReportAreaIdConfirmerLaLocalisationRoute
  '/report/$areaId/signalement': typeof ReportAreaIdSignalementRoute
  '/report/$areaId/signalement-reussi': typeof ReportAreaIdSignalementReussiRoute
  '/scheduled-tours': typeof IsAuthenticatedScheduledToursIndexRoute
  '/scheduled-tours/$scheduledTourId': typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

export interface FileRoutesByTo {
  '/carte-interactive': typeof CarteInteractiveRoute
  '/login': typeof LoginRoute
  '/points-de-collecte-les-plus-proches': typeof PointsDeCollecteLesPlusProchesRoute
  '/': typeof IsAuthenticatedIndexRoute
  '/report/$areaId': typeof ReportAreaIdAreaIdRoute
  '/report/$areaId/confirmer-la-localisation': typeof ReportAreaIdConfirmerLaLocalisationRoute
  '/report/$areaId/signalement': typeof ReportAreaIdSignalementRoute
  '/report/$areaId/signalement-reussi': typeof ReportAreaIdSignalementReussiRoute
  '/scheduled-tours': typeof IsAuthenticatedScheduledToursIndexRoute
  '/scheduled-tours/$scheduledTourId': typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_isAuthenticated': typeof IsAuthenticatedRouteWithChildren
  '/carte-interactive': typeof CarteInteractiveRoute
  '/login': typeof LoginRoute
  '/points-de-collecte-les-plus-proches': typeof PointsDeCollecteLesPlusProchesRoute
  '/_isAuthenticated/': typeof IsAuthenticatedIndexRoute
  '/report/$areaId': typeof ReportAreaIdRouteWithChildren
  '/report/$areaId/_areaId': typeof ReportAreaIdAreaIdRoute
  '/report/$areaId/confirmer-la-localisation': typeof ReportAreaIdConfirmerLaLocalisationRoute
  '/report/$areaId/signalement': typeof ReportAreaIdSignalementRoute
  '/report/$areaId/signalement-reussi': typeof ReportAreaIdSignalementReussiRoute
  '/_isAuthenticated/scheduled-tours/': typeof IsAuthenticatedScheduledToursIndexRoute
  '/_isAuthenticated/scheduled-tours/$scheduledTourId/': typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/carte-interactive'
    | '/login'
    | '/points-de-collecte-les-plus-proches'
    | '/'
    | '/report/$areaId'
    | '/report/$areaId/confirmer-la-localisation'
    | '/report/$areaId/signalement'
    | '/report/$areaId/signalement-reussi'
    | '/scheduled-tours'
    | '/scheduled-tours/$scheduledTourId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/carte-interactive'
    | '/login'
    | '/points-de-collecte-les-plus-proches'
    | '/'
    | '/report/$areaId'
    | '/report/$areaId/confirmer-la-localisation'
    | '/report/$areaId/signalement'
    | '/report/$areaId/signalement-reussi'
    | '/scheduled-tours'
    | '/scheduled-tours/$scheduledTourId'
  id:
    | '__root__'
    | '/_isAuthenticated'
    | '/carte-interactive'
    | '/login'
    | '/points-de-collecte-les-plus-proches'
    | '/_isAuthenticated/'
    | '/report/$areaId'
    | '/report/$areaId/_areaId'
    | '/report/$areaId/confirmer-la-localisation'
    | '/report/$areaId/signalement'
    | '/report/$areaId/signalement-reussi'
    | '/_isAuthenticated/scheduled-tours/'
    | '/_isAuthenticated/scheduled-tours/$scheduledTourId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IsAuthenticatedRoute: typeof IsAuthenticatedRouteWithChildren
  CarteInteractiveRoute: typeof CarteInteractiveRoute
  LoginRoute: typeof LoginRoute
  PointsDeCollecteLesPlusProchesRoute: typeof PointsDeCollecteLesPlusProchesRoute
  ReportAreaIdRoute: typeof ReportAreaIdRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IsAuthenticatedRoute: IsAuthenticatedRouteWithChildren,
  CarteInteractiveRoute: CarteInteractiveRoute,
  LoginRoute: LoginRoute,
  PointsDeCollecteLesPlusProchesRoute: PointsDeCollecteLesPlusProchesRoute,
  ReportAreaIdRoute: ReportAreaIdRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_isAuthenticated",
        "/carte-interactive",
        "/login",
        "/points-de-collecte-les-plus-proches",
        "/report/$areaId"
      ]
    },
    "/_isAuthenticated": {
      "filePath": "_isAuthenticated.tsx",
      "children": [
        "/_isAuthenticated/",
        "/_isAuthenticated/scheduled-tours/",
        "/_isAuthenticated/scheduled-tours/$scheduledTourId/"
      ]
    },
    "/carte-interactive": {
      "filePath": "carte-interactive.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/points-de-collecte-les-plus-proches": {
      "filePath": "points-de-collecte-les-plus-proches.tsx"
    },
    "/_isAuthenticated/": {
      "filePath": "_isAuthenticated/index.tsx",
      "parent": "/_isAuthenticated"
    },
    "/report/$areaId": {
      "filePath": "report/$areaId",
      "children": [
        "/report/$areaId/_areaId",
        "/report/$areaId/confirmer-la-localisation",
        "/report/$areaId/signalement",
        "/report/$areaId/signalement-reussi"
      ]
    },
    "/report/$areaId/_areaId": {
      "filePath": "report/$areaId/_areaId.tsx",
      "parent": "/report/$areaId"
    },
    "/report/$areaId/confirmer-la-localisation": {
      "filePath": "report/$areaId/confirmer-la-localisation.tsx",
      "parent": "/report/$areaId"
    },
    "/report/$areaId/signalement": {
      "filePath": "report/$areaId/signalement.tsx",
      "parent": "/report/$areaId"
    },
    "/report/$areaId/signalement-reussi": {
      "filePath": "report/$areaId/signalement-reussi.tsx",
      "parent": "/report/$areaId"
    },
    "/_isAuthenticated/scheduled-tours/": {
      "filePath": "_isAuthenticated/scheduled-tours/index.tsx",
      "parent": "/_isAuthenticated"
    },
    "/_isAuthenticated/scheduled-tours/$scheduledTourId/": {
      "filePath": "_isAuthenticated/scheduled-tours/$scheduledTourId/index.tsx",
      "parent": "/_isAuthenticated"
    }
  }
}
ROUTE_MANIFEST_END */
