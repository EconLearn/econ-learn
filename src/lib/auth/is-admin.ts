const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || 'judewallis@gmail.com').split(',').map(e => e.trim().toLowerCase());

export function isAdmin(user: { id: string; email?: string | null }): boolean {
  if (!user.email) return false;
  return ADMIN_EMAILS.includes(user.email.toLowerCase());
}
