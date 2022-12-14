import React from 'react'
import UseEffectEmptyDependencies from '../examples/use-effect-empty-dependencies'
import UseEffectNoDependencies from '../examples/use-effect-no-dependencies'
import UseEffectWithDependencies from '../examples/use-effect-with-dependencies'
import UseEffectOnlyWhenDependenciesUpdate from '../examples/use-effect-only-when-dependencies-update'
import UseEffectCleanUpBehaviour from '../examples/use-effect-clean-up-behaviour'
import BatchedStateUpdatesSynchronous from '../examples/batched-state-updates-synchronous'
import BatchedStateUpdatesAsynchronousNested from '../examples/batched-state-updates--asynchronous-nested'
import ContextPartialUpdates from '../examples/context-partial-updates'

interface AppRoute {
  name: string
  path: string
  element: React.ReactNode
}

export const ROUTES = {
  root: '/',
  batchedStateUpdatesSynchronous: '/batched-state-updates--synchronous',
  batchedStateUpdatesAsynchronousNested:
    '/batched-state-updates--asynchronous-nested',
  contextPartialUpdates: '/context-partial-updates',
  useEffectCleanUpBehaviour: '/use-effect-clean-up-behaviour',
  useEffectNoDependencies: '/use-effect-no-dependencies',
  useEffectEmptyDependencies: '/use-effect-empty-dependencies',
  useEffectWithDependencies: '/use-effect-with-dependencies',
  useEffectOnlyWhenDependenciesUpdate:
    '/use-effect-only-when-dependencies-update',
}
export const AppRoutes: AppRoute[] = [
  {
    name: 'Batched state updates (asynchronous & nested)',
    path: ROUTES.batchedStateUpdatesAsynchronousNested,
    element: <BatchedStateUpdatesAsynchronousNested />,
  },
  {
    name: 'Batched state updates (synchronous)',
    path: ROUTES.batchedStateUpdatesSynchronous,
    element: <BatchedStateUpdatesSynchronous />,
  },
  {
    name: 'Context: partial updates',
    path: ROUTES.contextPartialUpdates,
    element: <ContextPartialUpdates />,
  },
  {
    name: 'useEffect: clean up behaviour',
    path: ROUTES.useEffectCleanUpBehaviour,
    element: <UseEffectCleanUpBehaviour />,
  },
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
    path: ROUTES.useEffectOnlyWhenDependenciesUpdate,
    element: <UseEffectOnlyWhenDependenciesUpdate />,
  },
]
