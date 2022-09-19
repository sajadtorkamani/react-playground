import React from 'react'
import UseEffectEmptyDependencies from '../examples/use-effect-empty-dependencies'
import UseEffectNoDependencies from '../examples/use-effect-no-dependencies'
import UseEffectWithDependencies from '../examples/use-effect-with-dependencies'
import UseEffectOnlyWhenDependenciesUpdate from '../examples/use-effect-only-when-dependencies-update'

interface AppRoute {
  name: string
  path: string
  element: React.ReactNode
}

export const ROUTES = {
  root: '/',
  useEffectNoDependencies: '/use-effect-no-dependencies',
  useEffectEmptyDependencies: '/use-effect-empty-dependencies',
  useEffectWithDependencies: '/use-effect-with-dependencies',
  useEffectOnlyWhenDependenciesChange:
    '/use-effect-only-when-dependencies-change',
}
export const AppRoutes: AppRoute[] = [
  {
    name: 'useEffect: no dependencies',
    path: ROUTES.useEffectNoDependencies,
    element: <UseEffectNoDependencies />,
  },
  {
    name: 'useEffect: empty dependencies',
    path: ROUTES.useEffectEmptyDependencies,
    element: <UseEffectEmptyDependencies />,
  },
  {
    name: 'useEffect: with dependencies',
    path: ROUTES.useEffectWithDependencies,
    element: <UseEffectWithDependencies />,
  },
  {
    name: 'useEffect: only when dependencies change',
    path: ROUTES.useEffectOnlyWhenDependenciesChange,
    element: <UseEffectOnlyWhenDependenciesUpdate />,
  },
]
