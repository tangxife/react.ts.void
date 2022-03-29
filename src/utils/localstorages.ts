export enum Key {
  credentail = "__credentail__"
}

export const getItem = <T>(key: Key): T | undefined => {
  const item = window.localStorage.getItem(key)

  if (!item) return
  else {
    return JSON.parse(item) as T
  }
}

export const setItem = <T>(key: Key, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const removeItem = (key: Key) => {
  window.localStorage.removeItem(key)
}

export const clear = () => {
  window.localStorage.clear()
}
