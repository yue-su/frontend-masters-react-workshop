export const timerMachineConfig = {
  // ...
}

export const timerMachine = (state, event) => {
  switch (state) {
    case "idle":
      if (event.type === "TOGGLE") {
        return "running"
      }
      return state
    case "running":
      if (event.type === "TOGGLE") {
        return "paused"
      }
      return state
    case "paused":
      if (event.type === "TOGGLE") {
        return "running"
      }
      if (event.type === "RESET") {
        return "idle"
      }
      return state
    default:
      return state
  }
}
