import {takeLatest, call, all, fork, put} from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

// import {getStore} from "../../store/configureStore";
import {store} from "store/index";

function* updateTrip({ data }) {
    // console.log("GETALL SAGA");
    const formData = new FormData();
    const fields = ['id', 'trip_name', 'origin', 'start_date', 'end_date', 'group_type', 'trip_type', 'users', 'trip_banenr'];

    fields.forEach(field => {
        if (data[field]) {
          if (field === 'users') {
            data[field].forEach((user) => {
              formData.append('users[]', user);
            })
          } else {
            formData.append(field, data[field]);
          }
        }
    });   
    // // let store = getStore().getState();

    let token = store.getState().PROFILE.userSession.data;

    // console.log("token: ", token);

    const headers = { Authorization: `Bearer ${token}` };

    // pass to the api
    const { response, error } = yield call(api.updateTrip, formData, headers);

    console.log("RESPONSE ", response, error);
    // yield put();

    if (response) {
        yield put(Actions.getAll());
        yield put(Actions.updateTripSuccess(response.data));
        // yield put(Actions.updateTrip(response.data));
    }

    if (error) {
        yield put(Actions.updateTripFail(error));
    }
}

// this code runs first and call above
function* watchUpdateTrip() {
    yield takeLatest(Actions.UPDATE_TRIP, updateTrip)
}

export default function* submit() {
    yield all([fork(watchUpdateTrip)]);
}