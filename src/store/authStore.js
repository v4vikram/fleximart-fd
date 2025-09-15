// store/authStore.js
import { create } from "zustand";
import { useQueryClientStore } from "./queryClientStore";
import axiosInstance from "@/lib/axiosIntrance";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  errors: null,

  register: async (user) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post(`/auth/signup`, user);

      const queryClient = useQueryClientStore.getState().queryClient;
      // queryClient.setQueryData(["me"], user); // set cache for getMe
      return res.data;
    } catch (err) {
      set({ loading: false });
      console.error(err);
      throw err.response?.data || { general: "Something went wrong" };

    }
  },

  login: async (userdata) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post(`/auth/login`, userdata);
      const { token, user } = res.data;
      

      set({ token, user, loading: false });

      // Update QueryClient cache
      const queryClient = useQueryClientStore.getState().queryClient;
      queryClient.setQueryData(["me"], user); // set cache for getMe
       return res.data;
    } catch (err) {
      set({ loading: false });
      console.error(err.response?.data);
      throw err.response?.data || { general: "Something went wrong" };
    }
  },

  // Logout action
  logout: () => {
    set({ user: null, token: null });

    const queryClient = useQueryClientStore.getState().queryClient;
    queryClient.removeQueries(["me"]); // clear cache
  },

  // Fetch current user
  getMe: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("/api/auth/me");
      set({ user: res.data, loading: false });

      // Update cache
      const queryClient = useQueryClientStore.getState().queryClient;
      queryClient.setQueryData(["me"], res.data);
    } catch (err) {
      set({ loading: false, user: null });
      console.error(err);
    }
  },
}));
