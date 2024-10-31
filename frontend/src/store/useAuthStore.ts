import {create} from "zustand";

interface user {
    _id: number;
    name: string;
    email: string;
    role: string;
}

interface AuthState {
    user: user| null;
    token: string | null;
    loading: boolean;
    error: string | null;
    loggedIn: boolean;
    login: (user: user, token: string) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    loading: false,
    error: null,
    loggedIn: false,
    login: (user, token) => set({ user, token, loggedIn: true }),
    logout: () => set({ user: null, token: null, loggedIn: false }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));

export  default useAuthStore;