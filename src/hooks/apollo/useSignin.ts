import { useCallback } from "react"
import { useUserLoginMutation } from "src/graphql/generated/graphql"

import { Key, setItem } from "src/utils/localstorages"

const useSignIn = (): [(email: string, password: string) => void] => {
  const [userLoginMutation] = useUserLoginMutation()

  const signIn = useCallback((email: string, password: string) => {
    return userLoginMutation({ variables: { email, password } })
      .then((res) => {
        console.log("Sucess: ", res)
        const credential = res.data?.userLogin?.credentials
        credential && setItem(Key.credentail, credential)
      })
      .catch(() => {
        console.log("Error: login")
      })
  }, [])

  return [signIn]
}

export default useSignIn
