import React from "react";
import { setIsAdd, setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import Header from "../../../../partials/Header";
import ModalValidate from "../../../../partials/modals/ModalValidate";
import Navigation from "../../../../partials/Navigation";
import Breadcrumbs from "../../../../partials/Breadcrumbs";
import Toast from "../../../../partials/Toast";
import ReferralTypeTable from "./ReferralTypeTable";
import ModalAddReferralType from "./ModalAddReferralType";

const ReferralType = () => {
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
          <Navigation menu="settings" submenu="settingsReferralType" />
        </aside>
        <main className="px-2 lg:pr-10">
          <Breadcrumbs param={location.search} />
          <div className="flex justify-between items-center my-5">
            <h1 className="mb-0">Referral Type</h1>
            <button className="btn btn--accent btn--sm" onClick={handleAdd}>
              Add
            </button>
          </div>
          <ReferralTypeTable setItemEdit={setItemEdit} />
        </main>
      </section>

      {store.isAdd && <ModalAddReferralType itemEdit={itemEdit} />}
      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default ReferralType;
