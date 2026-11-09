
function countHighPriority(priorities: string[], includeHigh: boolean): number {
  if (!includeHigh) {
    return 0;
  }

  return priorities.filter(priority => priority === "High").length;
}

const priorities = ["High", "Low", "High", "Medium"];

console.log(countHighPriority(priorities, true)); //2
console.log(countHighPriority(priorities, false)); //0
console.log(countHighPriority([], true)); //0


  