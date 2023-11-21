import { THEME_MODE } from '@/utils/constant';
import { create } from 'zustand';

type Store = {
  themeMode: THEME_MODE;
};

const useAppStore = create<Store>()(() => ({
    themeMode: THEME_MODE.LIGHT,
}));

export default useAppStore;