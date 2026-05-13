import { act, renderHook } from "@testing-library/react";
import { useAlert } from "./useAlert";

describe("useAlert", () => {
  it("inicia sem alerta", () => {
    const { result } = renderHook(() => useAlert());
    expect(result.current.alert).toBeNull();
  });

  it("showAlert define variant e mensagem", () => {
    const { result } = renderHook(() => useAlert());
    act(() => {
      result.current.showAlert("error", "Algo falhou");
    });
    expect(result.current.alert).toEqual({
      variant: "error",
      message: "Algo falhou",
    });
  });

  it("dismissAlert remove o alerta", () => {
    const { result } = renderHook(() => useAlert());
    act(() => {
      result.current.showAlert("success", "Tudo certo");
    });
    expect(result.current.alert).not.toBeNull();

    act(() => {
      result.current.dismissAlert();
    });
    expect(result.current.alert).toBeNull();
  });
});
