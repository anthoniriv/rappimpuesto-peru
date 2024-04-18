import React, { useEffect, useState } from 'react';
import localForage from 'localforage';
import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const STORAGE_KEY = 'myRucs';

const useStorage = () => {
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await localForage.defineDriver(CordovaSQLiteDriver);
      await localForage.setDriver([
        localForage.INDEXEDDB,
        localForage.WEBSQL,
        localForage.LOCALSTORAGE
      ]);
      setStorageReady(true);
    };
    init();
  }, []);

  const getData = async () => {
    if (!storageReady) return [];
    const data = await localForage.getItem(STORAGE_KEY);
    return data || [];
  };

  const addData = async (data: any) => { // Problem 1: Add type annotation for 'data'
    const storedData: any[] = await getData() || []; // Problem 2: Add type annotation for 'storedData'
    storedData.push(data);
    return localForage.setItem(STORAGE_KEY, storedData);
  };

  const removeItem = async (data: any) => { // Problem 3: Add type annotation for 'data'
    const storedData: any[] = await getData() || []; // Problem 4: Add type annotation for 'storedData'
    const index = storedData.indexOf(data);
    if (index !== -1) {
      storedData.splice(index, 1); // Problem 5: Add type annotation for 'storedData'
      return localForage.setItem(STORAGE_KEY, storedData);
    }
  };

  const getItem = async (ruc: any) => { // Problem 6: Add type annotation for 'ruc'
    const storedData: any[] = await getData() || []; // Problem 7: Add type annotation for 'storedData'
    return storedData.find((item: any) => item.rucNumber === ruc); // Problem 8: Add type annotation for 'item'
  };

  return { storageReady, getData, addData, removeItem, getItem };
};

export default useStorage;