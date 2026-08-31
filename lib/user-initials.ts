export function getUserInitials(name: string): string {
  const nameParts = name.trim().split(/\s+/).filter(Boolean)

  if (nameParts.length === 0) return "U"

  const firstInitial = Array.from(nameParts[0])[0]
  const lastInitial =
    nameParts.length > 1 ? Array.from(nameParts[nameParts.length - 1])[0] : ""

  return `${firstInitial}${lastInitial}`.toLocaleUpperCase("fr-FR")
}
