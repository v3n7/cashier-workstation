import React from "react";

import Header from "./components/Header";
import HeaderUser from "./components/HeaderUser";
import SearchInput from "./components/SearchInput";
import SystemStatus from "./components/SystemStatus";
import SumInfo from "./components/SumInfo";
import Footer from "./components/Footer";
import KeyboardShortcut from "./components/KeyboardShortcut";

import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <Header>
        <div className={styles.headerLeftContainer}>
          <SearchInput />
          <div className={styles.headerSumContainer}>
            <SumInfo label="Сумма к оплате" value={345.6} />
            <SumInfo label="Получено" value={345.6} />
            <SumInfo label="Сдача" value={345.6} attention />
            <SumInfo label="Бонус" value={345.6} />
          </div>
        </div>
        <SystemStatus />
        <HeaderUser />
      </Header>
      <main className={styles.main}>
        <section className={styles.tableSection}></section>
      </main>
      <Footer>
        <KeyboardShortcut />
      </Footer>
    </>
  );
}

export default Main;
