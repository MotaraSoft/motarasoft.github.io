export type InvitationKind = 'friend' | 'session'

export interface Invitation {
  kind: InvitationKind
  token: string
}

const TOKEN_PATTERN = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/
const MAXIMUM_SEARCH_LENGTH = 8192

export function parseInvitationQuery(search: string, expectedKind: InvitationKind): Invitation | null {
  if (!search || search.length > MAXIMUM_SEARCH_LENGTH) return null
  const match = /^\?token=([A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)$/.exec(search)
  return match && TOKEN_PATTERN.test(match[1]) ? { kind: expectedKind, token: match[1] } : null
}

export function buildMotaraUri(invitation: Invitation): string {
  if (!['friend', 'session'].includes(invitation.kind) || !TOKEN_PATTERN.test(invitation.token)) {
    throw new TypeError('Invalid Motara invitation.')
  }
  return `motara://invite/${invitation.kind}/${invitation.token}`
}

export function buildLocalizedInvitationPath(locale: 'en' | 'zh', invitation: Invitation): string {
  if (!['friend', 'session'].includes(invitation.kind) || !TOKEN_PATTERN.test(invitation.token)) {
    throw new TypeError('Invalid Motara invitation.')
  }
  const prefix = locale === 'zh' ? '/zh' : ''
  return `${prefix}/invite/${invitation.kind}/?token=${invitation.token}`
}
