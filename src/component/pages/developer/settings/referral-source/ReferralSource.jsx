import React from "react";
import { setIsAdd, setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../partials/Header";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import Navigation from "../../../../partials/Navigation";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Toast from "../../../../partials/Toast";
import ReferralSourceTable from "./ReferralSourceTable";
import ModalAddReferralSource from "./ModalAddReferralSource";

const ReferralSource = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <section className={`main__grid ${store.isShow ? "open" : ""}`}>
        <aside className={`${store.isShow ? "open " : ""}   `}>
          <Navigation menu="settings" submenu="settingsReferralSource" />
        </aside>
        <main className="px-2 lg:pr-10">
          <Breadcrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Referral Source</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <ReferralSourceTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddReferralSource itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ReferralSource;
