import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from './cryptoData';

const randomChange = () => (Math.random() * 2 - 1).toFixed(2);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updatePrices(state) {
      state.assets = state.assets.map(asset => ({
        ...asset,
        price: (asset.price * (1 + randomChange() / 100)).toFixed(2),
        change1h: randomChange(),
        change24h: randomChange(),
        volume24h: Math.floor(asset.volume24h * (1 + Math.random() * 0.1)),
      }));
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
