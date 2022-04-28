import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useUserLogoutMutation } from "src/apollo/generated/graphql"

import { Key, removeItem } from "src/utils/localstorages"
import { loginRoute } from "src/hooks/route/routes"

const useSignout = (): [() => Promise<void>] => {
  const navigate = useNavigate()
  const [userLogoutMutation] = useUserLogoutMutation()

  const signOut = useCallback(() => {
    return userLogoutMutation().then((res) => {
      if (res.data?.userLogout?.authenticatable) {
        removeItem(Key.credentail)
        navigate(loginRoute.path)
      }
    })
  }, [userLogoutMutation])

  return [signOut]
}

export default useSignout
