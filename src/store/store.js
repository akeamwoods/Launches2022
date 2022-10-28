/* eslint-disable prettier/prettier */
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      offset: 0,
      changeoffset: (newOffset) => set(() => ({ offset: newOffset })),
    }),
    {
      name: 'offset-storage',
      getStorage: () => sessionStorage,
    }
  )
);
