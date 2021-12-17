export function getTemplate(template: string): string {
  const matches = template.match(/^[A-Z]+$/gm);

  return matches ? matches[0] : '';
}

export function getPairInsertions(template: string): [string, string][] {
  const matches = [...template.matchAll(/^([A-Z]{2}) -> ([A-Z])$/gm)];
  return matches.map(([, left, right]) => [left, right]);
}