import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoAppService } from '@application/services';
import { TodoAppServiceMock } from '@application/services/todo';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let appService: TodoAppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: TodoAppService, useClass: TodoAppServiceMock }],
      imports: [TodoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    appService = TestBed.inject(TodoAppService);
  });

  describe('load todos', () => {
    it('should load todos on init', () => {
      // Arrange
      const loadTodosSpy = spyOn(appService, 'loadTodos');

      // Act
      component.ngOnInit();

      // Assert
      expect(loadTodosSpy).toHaveBeenCalled();
    });
  });

  describe('check a todo', () => {
    it('should check a todo with given id', () => {
      // Arrange
      const checkTodosSpy = spyOn(appService, 'checkTodo');
      const todoId = crypto.randomUUID();

      // Act
      component.check(todoId);

      // Assert
      expect(checkTodosSpy).toHaveBeenCalledWith(todoId);
    });
  });

  describe('uncheck a todo', () => {
    it('should uncheck a todo with given id', () => {
      // Arrange
      const uncheckTodosSpy = spyOn(appService, 'uncheckTodo');
      const todoId = crypto.randomUUID();

      // Act
      component.uncheck(todoId);

      // Assert
      expect(uncheckTodosSpy).toHaveBeenCalledWith(todoId);
    });
  });
});
