import React from "react";

import { LoginContext } from "LoginProvider";

import styles from "./HeaderUser.module.css";

import EditUserModal from "../EditUserModal";
import PortalModal from "shared/components/PortalModal";

export default function HeaderUser() {
  const [show, setShow] = React.useState(false);

  const context = React.useContext(LoginContext);

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <div>{context.userName}</div>
        <button onClick={() => setShow(true)}>Редактировать</button>
        <button onClick={() => context.logout()}>Выйти</button>
      </div>
      <div className={styles.bonuses}>Кошелек: 0.00</div>
      {show && (
        <PortalModal>
          <EditUserModal
            defaultUserName={context.userName}
            onChange={context.onChangeUserName}
            onClose={() => setShow(false)}
          />
        </PortalModal>
      )}
    </div>
  );
}
