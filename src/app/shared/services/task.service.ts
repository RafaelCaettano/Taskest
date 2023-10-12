import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginacao } from "@interfaces/paginacao.interface";
import { Task } from "@interfaces/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly tasksUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(paginacao = new Paginacao()): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}/tasks?_page=${paginacao.pagina}&_limit=${paginacao.limite}`);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksUrl}/tasks/${id}`);
  }

  searchTask(search: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}/tasks?titulo=${search}&descricao=${search}`);
  }

  createTask(task: Task) {
    return this.http.post<Task>(`${this.tasksUrl}/tasks`, JSON.stringify(task));
  }

  updateTask(task: Task) {
    return this.http.patch<Task>(`${this.tasksUrl}/tasks/${task.id}`, JSON.stringify(task));
  }

  deleteTask(id: number): Observable<Object> {
    return this.http.delete(`${this.tasksUrl}/tasks/${id}`);
  }
}
