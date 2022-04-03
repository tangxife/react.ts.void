import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useUserLoginMutation, CredentialFragment } from "src/graphql/generated/graphql"
import { Key, setItem } from "src/utils/localstorages"

import { userRoute } from "src/hooks/route/routes"

const useSignIn = (): [(email: string, password: string) => Promise<void>] => {
  const [userLoginMutation] = useUserLoginMutation()
  const navigate = useNavigate()

  const signIn = useCallback(
    (email: string, password: string) => {
      return userLoginMutation({ variables: { email, password } }).then((res) => {
        const credential = res.data?.userLogin?.credentials

        if (credential) {
          setItem<CredentialFragment>(Key.credentail, credential)
          navigate(userRoute.path)
        }
      })
    },
    [useUserLoginMutation]
  )

  return [signIn]
}

export default useSignIn
