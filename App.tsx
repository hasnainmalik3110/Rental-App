import React from "react";
import StackNav from "./src/navigations/stackNav";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";
import { Persistor } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
PersistGate
let persistor = persistStore(Store);
const App=()=>{
  return(
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
    <StackNav />
    </PersistGate>
    </Provider>
  )
}
export default App