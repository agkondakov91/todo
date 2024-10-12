import store from "./store";

describe("[Тест]: интеграционный тест store", () => {
  it("Инициализация с правильным состоянимем по умолчанию", () => {
    const state = store.getState();
    expect(state.actionTodo).toBeDefined();
    expect(state.actionTodo.list).toEqual([]);
    expect(state.actionTodo.filter).toBe("all");
  });
});
