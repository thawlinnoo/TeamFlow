type BoardStatus = "To Do" | "In Progress" | "Done"
type BoardPriority = "Low" | "Medium" | "High"

interface BoardTask {
    readonly id: string
    title: string
    status: BoardStatus
    priority: BoardPriority
}

interface BoardSummary{
    total: number
    done: number
    highPriorityOpen: number
}

function isBoardStatus(value: unknown): value is BoardStatus{
    return(
        value === "To Do" ||
        value === "In Progress" ||
        value === "Done"
    )
}

function isBoardPriority(value: unknown): value is BoardPriority{
    return(
        value === "Low" ||
        value === "Medium" ||
        value === "High"
    )
}

function isBoardTask(value: unknown): value is BoardTask{
    if (typeof value !== "object" || value === null){
        return false
    }
    return (
        "id" in value && typeof value.id === "string" &&
        "title" in value && typeof value.title === "string" &&
        "status" in value && isBoardStatus(value.status) &&
        "priority" in value && isBoardPriority(value.priority)
    )
}

function isBoardTaskArray(data: unknown): data is BoardTask[]{
    return (
        Array.isArray(data) &&
        data.every(isBoardTask)
    )
}

function summarizeBoard(data: unknown): BoardSummary{
    if (!isBoardTaskArray(data)){
        throw new Error("Invalid board data")
    }
    return (
        {
            total: data.length,
            done: data.filter(task=> task.status === "Done").length,
            highPriorityOpen: data.filter(task=> task.status !== "Done" && task.priority === "High").length
        }
    )
}


const boardData: unknown = [
  {
    id: "t001",
    title: "Design landing",
    status: "To Do",
    priority: "High"
  },
  {
    id: "t002",
    title: "Write content",
    status: "To Do",
    priority: "Medium"
  },
  {
    id: "t003",
    title: "Build login",
    status: "In Progress",
    priority: "High"
  },
  {
    id: "t004",
    title: "Setup project",
    status: "Done",
    priority: "Low"
  }
];
  

const summary = summarizeBoard(boardData)

if (
    summary.total !== 4 ||
    summary.done !== 1 ||
    summary.highPriorityOpen !== 2
) {
    throw new Error("Sample board summary is incorrect")
}

const emptySummary = summarizeBoard([])

if (
    emptySummary.total !== 0 ||
    emptySummary.done !== 0 ||
    emptySummary.highPriorityOpen !== 0
) {
    throw new Error("Empty board summary is incorrect")
}

let nullThrew = false

try{
    summarizeBoard(null)
} catch {
    nullThrew = true
}

if (!nullThrew){
    throw new Error("Expected null input to throw")
}

const invalidBoardData : unknown = [
    {
        id: "t005",
        title: "Test invalid status",
        status: "Cancelled",
        priority: "High"
    }
]

let invalidStatusThrew = false
try{
    summarizeBoard(invalidBoardData)
} catch{
    invalidStatusThrew = true
}

if (!invalidStatusThrew){
    throw new Error("Status cannot be Cancelled")
}