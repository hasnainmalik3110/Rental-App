import React from "react";
import StackNav from "./src/navigations/stackNav";
import { Provider } from "react-redux";
import { Store,persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";

// let persistor = persistStore(Store);
const App=()=>{
  return(
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
    <StackNav />
    </PersistGate>
    </Provider>
  )
}
export default App