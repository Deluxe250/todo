import { Injectable } from '@angular/core';
import { UseCase } from '@shared/use-case.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class UncheckTodoUsecase implements UseCase<string, void> {
  execute(): Observable<void> {
    return of();
  }
}
