export interface Todo {
    name: string;
    priority: Priority;
    authorId: string;
    date: Date;
}

enum Priority {
    Low = 1,
    Middle = 2,
    High = 3
}
