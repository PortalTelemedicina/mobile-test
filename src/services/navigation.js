import { NavigationActions, StackActions } from 'react-navigation'

let navigator

export const setNavigator = nav => {
  if (nav) navigator = nav
}

export const navigate = (routeName, params) => {
  if (navigator && routeName)
    navigator.dispatch(NavigationActions.navigate({ routeName, params }))
}

export const resetTo = (routes, params) => {
  if (navigator)
    navigator.dispatch(
      StackActions.reset({
        index: routes.length - 1,
        actions: routes.map(route =>
          NavigationActions.navigate({ routeName: route, params })
        )
      })
    )
}

export const goBack = () => {
  if (navigator) navigator.dispatch(NavigationActions.back({}))
}
