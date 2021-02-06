import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { initialState } from "./initialState";
import { authenticationReducer } from "./reducers/authenticationReducer";

let store;

const reducer = (state = initialState.reducer, action) => {
  let { type, payload } = action;
  switch (type) {
    case "MODAL_ALERT":
      console.log(action);
      return {
        ...state,
        modal: payload,
      };
    case "UPLOAD_IMG":
      // let getUrl = async () => {
      //   storage
      //     .ref(`goodsImg/${action.payload.name}`)
      //     .put(action.payload)
      //     .on(
      //       "state_changed",
      //       (snapshot) => {
      //         console.log(snapshot);
      //       },
      //       (error) => {},
      //       () => {
      //         storage
      //           .ref("goodsImg")
      //           .child(`${action.payload.name}`)
      //           .getDownloadURL()
      //           .then((newUrl) => {
      //             return {
      //               ...state,
      //               newGood: {
      //                 ...newGood,
      //                 url: newUrl,
      //               },
      //             };
      //           });
      //       }
      //     );
      // };
      return alert("Sorry? but this function is not available");
    case "CREAT_GOOD":
      return {
        ...state,
        newGood: payload,
      };
    case "ADD_GOOD":
      let myGoods = async () => {
        return await store
          .collection("Categories")
          .doc(payload.category)
          .set(payload);
      };
      return {
        ...state,
        myGoods,
        newGood: {
          title: "",
          price: "",
          description: "",
          category: "",
        },
      };
    default:
      return state;
  }
};

//** Combine our reducers **
const reducers = combineReducers({
  reducer,
  authenticationReducer,
});

function initStore(preloadedState = initialState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
