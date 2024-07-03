import { create } from 'zustand';
import { cloneDeep } from 'lodash-es';
import type { User } from '@/src/types/index';

type State = {
  user: User | null;
  isLoading: boolean;
};

type Action = {
  setUser: ({ user, isLoading }: { user: User | null; isLoading: boolean }) => void;
};

const initialState: State = {
  user: null,
  isLoading: true,
};

const useUserStore = create<State & Action>((set) => ({
  ...cloneDeep(initialState),
  setUser: ({ user, isLoading }) => {
    set({ user, isLoading });
  },
}));

export default useUserStore;
