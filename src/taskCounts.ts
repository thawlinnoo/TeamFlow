
function countDoneTasks(statuses: string[]): number {
  return statuses.filter(status => status === "Done").length;
}

const statuses = ["To Do", "Done", "In Progress", "Done"];

console.log(countDoneTasks(statuses));
  