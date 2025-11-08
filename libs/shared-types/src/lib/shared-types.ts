// Example types for Todo application

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTodoDto {
  title: string;
  description?: string;
}

export interface UpdateTodoDto {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface TodoResponse {
  data: Todo;
  message: string;
}

export interface TodoListResponse {
  data: Todo[];
  total: number;
  page: number;
  pageSize: number;
}

export enum TodoStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
}
