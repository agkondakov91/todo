import todoReducer, {
  addTodo,
  removeTodosCompleted,
  toggleTodoCompleted,
  setFilter,
  TTodosState,
} from "./todoSlice";

describe("[Тест]: проверка редьюсеров todoSlice", () => {
  let initialState: TTodosState;

  beforeEach(() => {
    initialState = {
      list: [
        { id: "1", text: "Todo one", completed: false },
        { id: "2", text: "Todo two", completed: true },
      ],
      filter: "all",
    };
  });

  it("Добавление новой задачи", () => {
    const newState = todoReducer(initialState, addTodo("New Todo Item"));
    expect(newState.list.length).toBe(3);
    expect(newState.list[2].text).toBe("New Todo Item");
    expect(newState.list[2].completed).toBe(false);
  });

  it("Удаление завершённой задачи", () => {
    const newState = todoReducer(initialState, removeTodosCompleted());
    expect(newState.list.length).toBe(1);
    expect(newState.list[0].text).toBe("Todo one");
  });

  it("Переключение состояния задачи (выполнено/не выполнено)", () => {
    const newState = todoReducer(initialState, toggleTodoCompleted("1"));
    expect(newState.list[0].completed).toBe(true);
  });

  it("Изменение фильтра задач", () => {
    const newState = todoReducer(initialState, setFilter("completed"));
    expect(newState.filter).toBe("completed");
  });
});
