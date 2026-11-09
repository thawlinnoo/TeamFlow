
function getTaskSummary(taskNames: string[], completedFlags: boolean[]): string {
  const total = taskNames.length;
  const completed = completedFlags.filter(done => done).length;

  return `${completed} out of ${total} tasks completed`;
}

const taskNames = ["Build login", "Setup project", "Design landing"];
const completedFlags = [false, true, false];

console.log(getTaskSummary(taskNames, completedFlags));
  