import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("themeMode");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const saveTheme = (mode) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("themeMode", mode);
  }
};

const initialState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      saveTheme(state.mode);
    },
    setTheme: (state, action) => {
      const nextMode = action.payload === "dark" ? "dark" : "light";
      state.mode = nextMode;
      saveTheme(nextMode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
