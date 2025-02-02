import { useState, useEffect, useCallback } from 'react';
import { fetchBatchData } from '../firebase/optimizedServices';

export const useRoomData = (roomId) => {
  const [data, setData] = useState({
    room: null,
    purchases: { data: [], lastVisible: null },
    products: [],
    fetchTimestamp: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async (reset = false) => {
    try {
      setLoading(true);
      const batchData = await fetchBatchData(
        roomId, 
        reset ? null : data.purchases.lastVisible
      );

      setData(prevData => {
        if (reset) return batchData;
        return {
          ...prevData,
          purchases: {
            data: [
              ...(prevData.purchases.data || []),
              ...batchData.purchases.data
            ],
            lastVisible: batchData.purchases.lastVisible
          }
        };
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [roomId, data.purchases.lastVisible]);

  useEffect(() => {
    loadData(true);
  }, [roomId, loadData]);

  return { 
    data, 
    loading, 
    error, 
    loadMore: () => loadData(),
    refresh: () => loadData(true)
  };
};
