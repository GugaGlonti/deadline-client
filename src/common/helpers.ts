export function env(variableName: string) {
  return import.meta.env['VITE_' + variableName.toUpperCase()];
}
