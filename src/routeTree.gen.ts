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
import { Route as IsAuthenticatedScheduledToursImport } from './routes/_isAuthenticated/scheduled-tours'

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

const IsAuthenticatedScheduledToursRoute =
  IsAuthenticatedScheduledToursImport.update({
    id: '/scheduled-tours',
    path: '/scheduled-tours',
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
    '/_isAuthenticated/scheduled-tours': {
      id: '/_isAuthenticated/scheduled-tours'
      path: '/scheduled-tours'
      fullPath: '/scheduled-tours'
      preLoaderRoute: typeof IsAuthenticatedScheduledToursImport
      parentRoute: typeof IsAuthenticatedImport
    }
    '/_isAuthenticated/': {
      id: '/_isAuthenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IsAuthenticatedIndexImport
      parentRoute: typeof IsAuthenticatedImport
    }
  }
}

// Create and export the route tree

interface IsAuthenticatedRouteChildren {
  IsAuthenticatedScheduledToursRoute: typeof IsAuthenticatedScheduledToursRoute
  IsAuthenticatedIndexRoute: typeof IsAuthenticatedIndexRoute
}

const IsAuthenticatedRouteChildren: IsAuthenticatedRouteChildren = {
  IsAuthenticatedScheduledToursRoute: IsAuthenticatedScheduledToursRoute,
  IsAuthenticatedIndexRoute: IsAuthenticatedIndexRoute,
}

const IsAuthenticatedRouteWithChildren = IsAuthenticatedRoute._addFileChildren(
  IsAuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof IsAuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/scheduled-tours': typeof IsAuthenticatedScheduledToursRoute
  '/': typeof IsAuthenticatedIndexRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/scheduled-tours': typeof IsAuthenticatedScheduledToursRoute
  '/': typeof IsAuthenticatedIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_isAuthenticated': typeof IsAuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/_isAuthenticated/scheduled-tours': typeof IsAuthenticatedScheduledToursRoute
  '/_isAuthenticated/': typeof IsAuthenticatedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/login' | '/scheduled-tours' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/scheduled-tours' | '/'
  id:
    | '__root__'
    | '/_isAuthenticated'
    | '/login'
    | '/_isAuthenticated/scheduled-tours'
    | '/_isAuthenticated/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IsAuthenticatedRoute: typeof IsAuthenticatedRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IsAuthenticatedRoute: IsAuthenticatedRouteWithChildren,
  LoginRoute: LoginRoute,
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
        "/login"
      ]
    },
    "/_isAuthenticated": {
      "filePath": "_isAuthenticated.tsx",
      "children": [
        "/_isAuthenticated/scheduled-tours",
        "/_isAuthenticated/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_isAuthenticated/scheduled-tours": {
      "filePath": "_isAuthenticated/scheduled-tours.tsx",
      "parent": "/_isAuthenticated"
    },
    "/_isAuthenticated/": {
      "filePath": "_isAuthenticated/index.tsx",
      "parent": "/_isAuthenticated"
    }
  }
}
ROUTE_MANIFEST_END */
