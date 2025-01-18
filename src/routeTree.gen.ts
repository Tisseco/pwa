/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IsAuthenticatedImport } from './routes/_isAuthenticated'
import { Route as IsAuthenticatedIndexImport } from './routes/_isAuthenticated/index'
import { Route as mapCarteInteractiveImport } from './routes/(map)/carte-interactive'
import { Route as IsAuthenticatedScheduledToursIndexImport } from './routes/_isAuthenticated/scheduled-tours/index'
import { Route as IsAuthenticatedScheduledToursScheduledTourIdIndexImport } from './routes/_isAuthenticated/scheduled-tours/$scheduledTourId/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IsAuthenticatedRoute = IsAuthenticatedImport.update({
  id: '/_isAuthenticated',
  getParentRoute: () => rootRoute,
} as any)

const IsAuthenticatedIndexRoute = IsAuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => IsAuthenticatedRoute,
} as any)

const mapCarteInteractiveRoute = mapCarteInteractiveImport.update({
  id: '/(map)/carte-interactive',
  path: '/carte-interactive',
  getParentRoute: () => rootRoute,
} as any)

const IsAuthenticatedScheduledToursIndexRoute =
  IsAuthenticatedScheduledToursIndexImport.update({
    id: '/scheduled-tours/',
    path: '/scheduled-tours/',
    getParentRoute: () => IsAuthenticatedRoute,
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
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/(map)/carte-interactive': {
      id: '/(map)/carte-interactive'
      path: '/carte-interactive'
      fullPath: '/carte-interactive'
      preLoaderRoute: typeof mapCarteInteractiveImport
      parentRoute: typeof rootRoute
    }
    '/_isAuthenticated/': {
      id: '/_isAuthenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IsAuthenticatedIndexImport
      parentRoute: typeof IsAuthenticatedImport
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

export interface FileRoutesByFullPath {
  '': typeof IsAuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/carte-interactive': typeof mapCarteInteractiveRoute
  '/': typeof IsAuthenticatedIndexRoute
  '/scheduled-tours': typeof IsAuthenticatedScheduledToursIndexRoute
  '/scheduled-tours/$scheduledTourId': typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/carte-interactive': typeof mapCarteInteractiveRoute
  '/': typeof IsAuthenticatedIndexRoute
  '/scheduled-tours': typeof IsAuthenticatedScheduledToursIndexRoute
  '/scheduled-tours/$scheduledTourId': typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_isAuthenticated': typeof IsAuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/(map)/carte-interactive': typeof mapCarteInteractiveRoute
  '/_isAuthenticated/': typeof IsAuthenticatedIndexRoute
  '/_isAuthenticated/scheduled-tours/': typeof IsAuthenticatedScheduledToursIndexRoute
  '/_isAuthenticated/scheduled-tours/$scheduledTourId/': typeof IsAuthenticatedScheduledToursScheduledTourIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/carte-interactive'
    | '/'
    | '/scheduled-tours'
    | '/scheduled-tours/$scheduledTourId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/carte-interactive'
    | '/'
    | '/scheduled-tours'
    | '/scheduled-tours/$scheduledTourId'
  id:
    | '__root__'
    | '/_isAuthenticated'
    | '/login'
    | '/(map)/carte-interactive'
    | '/_isAuthenticated/'
    | '/_isAuthenticated/scheduled-tours/'
    | '/_isAuthenticated/scheduled-tours/$scheduledTourId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IsAuthenticatedRoute: typeof IsAuthenticatedRouteWithChildren
  LoginRoute: typeof LoginRoute
  mapCarteInteractiveRoute: typeof mapCarteInteractiveRoute
}

const rootRouteChildren: RootRouteChildren = {
  IsAuthenticatedRoute: IsAuthenticatedRouteWithChildren,
  LoginRoute: LoginRoute,
  mapCarteInteractiveRoute: mapCarteInteractiveRoute,
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
        "/login",
        "/(map)/carte-interactive"
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
    "/login": {
      "filePath": "login.tsx"
    },
    "/(map)/carte-interactive": {
      "filePath": "(map)/carte-interactive.tsx"
    },
    "/_isAuthenticated/": {
      "filePath": "_isAuthenticated/index.tsx",
      "parent": "/_isAuthenticated"
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
