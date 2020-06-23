import { put,takeLatest, all,fork } from "redux-saga/effects";
import axios from "../axios/axios-config"
import * as actionTypes from "../actions/actionTypes"

function* fetchOrders(){
    // console.log(123456)
    const orderList=yield axios.get('/orders.json')
    .then((res)=>{
        return res.data
    })
    
    yield put({type:actionTypes.FETCHEDORDERS,orderList})
}

function* actionWatcher(){
    yield takeLatest(actionTypes.FETCHORDERS, fetchOrders)
}

export default function* rootSaga() {
    yield all([
      fork(actionWatcher)
    ]);
  }
