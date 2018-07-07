
import { isObject, assert } from './util'

// @Types

export interface CommitMap {
  type: string
  payload: any
}
export interface CommitOptions {
  silent?: boolean;
  root?: boolean;
}
export interface UnifyObjectStyleReturn {
  type: string
  payload: any
  options?: CommitOptions
}

// @Implements

export function unifyObjectStyle (type, payload, options?) {
  if (isObject(type) && (type as CommitMap).type) {
    options = payload
    payload = type
    type = (type as CommitMap).type
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', `expects string as the type, but found ${typeof type}.`)
  }

  return { type, payload, options } as UnifyObjectStyleReturn
}
