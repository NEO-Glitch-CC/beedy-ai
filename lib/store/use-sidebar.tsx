import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Actions = {
  toggleSidebar: () => void;
};

export const useSidebarStore = create<State & Actions>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));