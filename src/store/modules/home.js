import { getHomeGoodPriceData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' //帮助我们创建对应的片段

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async(payload) => {
  const res = await getHomeGoodPriceData()

  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: { //初始化数据，但是现在还不知道需要放什么数据进去
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
      console.log(payload);
      state.goodPriceInfo = payload;
    });
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
