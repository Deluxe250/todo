import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import {
  CheckTodoUsecase,
  LoadTodosUsecase,
  UncheckTodoUsecase,
} from '@application/usecases';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const mockLoadTodosUseCase = jasmine.createSpyObj('LoadTodosUseCase', [
    'execute',
  ]);
  const mockCheckTodoUseCase = jasmine.createSpyObj('CheckTodoUsecase', [
    'execute',
  ]);
  const mockUncheckTodoUseCase = jasmine.createSpyObj('UncheckTodoUsecase', [
    'execute',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: LoadTodosUsecase,
          useValue: mockLoadTodosUseCase,
        },
        {
          provide: CheckTodoUsecase,
          useValue: mockCheckTodoUseCase,
        },
        {
          provide: UncheckTodoUsecase,
          useValue: mockUncheckTodoUseCase,
        },
      ],
      imports: [TodoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('load todos', () => {
    it('should load todos on init', () => {
      // Act
      component.ngOnInit();

      // Assert
      expect(mockLoadTodosUseCase.execute).toHaveBeenCalled();
    });
  });

  describe('check a todo', () => {
    it('should check a todo with given id', () => {
      // Arrange
      const todoId = crypto.randomUUID();

      // Act
      component.check(todoId);

      // Assert
      expect(mockCheckTodoUseCase.execute).toHaveBeenCalledWith(todoId);
    });
  });

  describe('uncheck a todo', () => {
    it('should uncheck a todo with given id', () => {
      // Arrange
      const todoId = crypto.randomUUID();

      // Act
      component.uncheck(todoId);

      // Assert
      expect(mockUncheckTodoUseCase.execute).toHaveBeenCalledWith(todoId);
    });
  });
});
