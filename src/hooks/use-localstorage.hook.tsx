import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export function useLocalStorage<T>(key: string): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      try {
        setData(JSON.parse(storedValue));
      } catch (e) {
        console.error('Error parsing localStorage value:', e);
      }
    }
  }, [key]);

  const saveData: Dispatch<SetStateAction<T | undefined>> = (newData) => {
    setData(prev => {
      const valueToStore = newData instanceof Function ? newData(prev) : newData;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      return valueToStore;
    });
  };

  return [data, saveData];
}
