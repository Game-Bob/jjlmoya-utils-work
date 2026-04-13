export function calcTotalContributed(curCont: number, birthYear: number, selectedAge: number): number {
  const today = new Date().getFullYear();
  const yearsToRetirement = selectedAge - (today - birthYear);
  return curCont + Math.max(0, yearsToRetirement);
}

export function getLegalAge(totalContributed: number): number {
  return totalContributed >= 38.5 ? 65 : 67;
}

export function calcVoluntaryPenalty(diff: number, totalContributed: number): number {
  if (diff > 2) return 21;
  if (totalContributed < 38.5) return diff * 7.5;
  if (totalContributed < 41.5) return diff * 6.5;
  if (totalContributed < 44.5) return diff * 6;
  return diff * 5;
}

export function calcInvoluntaryPenalty(diff: number, totalContributed: number): number {
  if (diff > 4) return 30;
  if (totalContributed < 38.5) return diff * 6;
  if (totalContributed < 41.5) return diff * 5.5;
  if (totalContributed < 44.5) return diff * 5;
  return diff * 4.5;
}

export function calcPenalty(mode: string, selectedAge: number, legalAge: number, totalContributed: number): number {
  const diff = legalAge - selectedAge;
  if (selectedAge >= legalAge) return selectedAge === legalAge ? 0 : -(selectedAge - legalAge) * 4;
  if (mode === 'legal') return 0;
  if (mode === 'voluntaria') return calcVoluntaryPenalty(diff, totalContributed);
  if (mode === 'involuntaria') return calcInvoluntaryPenalty(diff, totalContributed);
  return 0;
}
