export interface Task {
id:string;
title:string;
description:string;
status: TaskStatus
}

// to enforce only these three options
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}