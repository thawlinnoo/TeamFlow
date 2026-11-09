// type TaskStatus = "To Do" | "In Progress" | "Done";

// interface Task {
//     readonly id: string;
//     title: string;
//     description?: string;
//     status: TaskStatus;
//     priority: number;
//     assigneeId?: string;
// }

// type TaskPreview = Pick<Task, "id" | "title" | "status">;

// type TaskUpdate = Partial<Omit<Task, "id">>;

// type TaskLoadState =
//     | { status: "loading" }
//     | { status: "success"; tasks: Task[] }
//     | { status: "error"; message: string };

// interface User {
//     readonly id: string;
//     name: string;
//     email: string;
//     avatarUrl?: string;
// }

// interface Workspace {
//     readonly id: string;
//     name: string;
//     ownerId: string;
//     description?: string;
// }

// interface Project {
//     readonly id: string;
//     workspaceId: string;
//     name: string;
//     description?: string;
// }

// function findById<T extends { readonly id: string }>(
//     items: T[],
//     id: string
// ): T | undefined {
//     return items.find((item) => item.id === id);
// }

// function getLastItem<T>(items: T[]): T | undefined {
//     return items[items.length - 1];
// }

// function describeTaskLoad(state: TaskLoadState): string {
//     switch (state.status) {
//         case "loading":
//             return "Loading tasks...";
//         case "success":
//             return `Loaded ${state.tasks.length} tasks`;
//         case "error":
//             return `Error: ${state.message}`;
//     }
// }

// function getWorkspaceName(
//     project: Project,
//     workspaces: Workspace[]
// ): string {
//     const matchingWorkspace = workspaces.find(
//         (workspace) => workspace.id === project.workspaceId
//     );

//     return matchingWorkspace?.name ?? "Unknown workspace";
// }

// const user: User = {
//     id: "u001",
//     name: "Alex",
//     email: "alex@example.com"
// };

// const workspace: Workspace = {
//     id: "w001",
//     name: "TeamFlow Workspace",
//     ownerId: user.id
// };

// const project: Project = {
//     id: "p001",
//     workspaceId: workspace.id,
//     name: "TeamFlow App"
// };

// const validTask: Task = {
//     id: "t001",
//     title: "Create the task model",
//     status: "To Do",
//     priority: 1
// };

// const validTask2: Task = {
//     id: "t002",
//     title: "Review the task model",
//     status: "To Do",
//     priority: 2
// };

// const taskPreview: TaskPreview = {
//     id: "t001",
//     title: "Create the task model",
//     status: "To Do"
// };

// const taskUpdate: TaskUpdate = {
//     status: "In Progress",
//     priority: 2
// };

// // Fixed: TaskPreview includes its required title.
// const correctedTaskPreview: TaskPreview = {
//     id: "t003",
//     title: "Test the task model",
//     status: "To Do"
// };

// // Fixed: TaskUpdate excludes id.
// const correctedTaskUpdate: TaskUpdate = {
//     status: "Done",
//     priority: 2
// };

// const allWorkspaces: Workspace[] = [workspace];

// const projectWithUnknownWorkspace: Project = {
//     id: "p002",
//     workspaceId: "w999",
//     name: "Other Project"
// };


// console.log(getWorkspaceName(project, allWorkspaces));


// console.log(getWorkspaceName(projectWithUnknownWorkspace, allWorkspaces));

// console.log(getWorkspaceName(project, []));


// console.log(describeTaskLoad({ status: "loading" }));


// console.log(describeTaskLoad({
//     status: "success",
//     tasks: [validTask, validTask2]
// }));


// console.log(describeTaskLoad({
//     status: "error",
//     message: "Network unavailable"
// }));

// console.log(getLastItem([10, 20, 30])); // 30
// console.log(getLastItem(["Alex", "Sam"])); // "Sam"
// console.log(getLastItem([])); // undefined
// console.log(getLastItem([validTask, validTask2])); // validTask2

// console.log(findById([validTask, validTask2], "t002")); // validTask2
// console.log(findById([user], "u001")); // user
// console.log(findById([workspace], "w999")); // undefined
// console.log(findById([], "t001")); // undefined


// function getTaskTitle(data: unknown): string {
//     if (
//     typeof data === "object" &&
//     data !== null &&
//     "title" in data &&
//     typeof data.title === "string"
//     ) {
//     return (data.title);
//     } return "Unknown task"   
  
// }
    
// console.log(getTaskTitle({ title: "Build login" }));
// // Build login

// console.log(getTaskTitle({ title: 999 }));
// // Unknown task

// console.log(getTaskTitle(null));
// // Unknown task




interface TaskSummary {
  id: string;
  title: string;
}

function isTaskSummary(data: unknown): data is TaskSummary {
    if (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "title" in data &&
    typeof data.id === "string" &&
    typeof data.title === "string"
    ) {
    return true;
    } return false  

}




// function describeTaskSummary(data: unknown): string {
//     if(isTaskSummary(data)) 
        
//      {
//     return (`${data.id}: ${data.title}`);
//     } return "Invalid task"  

// }

// console.log(describeTaskSummary({ id: "t001", title: "Build login" }))
// console.log(describeTaskSummary({ id: 101, title: "Build login" }))
// console.log(describeTaskSummary(null))

async function mockFetchTask(): Promise<Response> {
  return new Response(
    JSON.stringify({
      id: "t001",
      title: "Build login"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}


async function loadTaskSummary(): Promise<TaskSummary> {
  // 1. Await mockFetchTask()
  const response = await mockFetchTask();

  // 2. Check response.ok.
  //    Throw an Error if the HTTP status indicates failure.
  if (!response.ok) {
    throw new Error(`Failed to load task: HTTP ${response.status}`);
  }

  // 3. Parse response.json() into an unknown variable.
  const data: unknown = await response.json();

  // 4. Validate using isTaskSummary().
  //    Throw an Error if validation fails.
  if (!isTaskSummary(data)) {
    throw new Error("Invalid task summary");
  }

  // 5. Return the validated task.
  return data;
}
loadTaskSummary()
  .then(task => console.log(task))
  .catch(error => console.log(error.message));
  
