export function logMessage(message?: string) {
  console.count(`${window.location.pathname}${message || ''}`)
}
