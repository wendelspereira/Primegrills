import { GetStaticProps } from "next";
import React from "react";
import { Header } from "../components/Header/SimpleHeader";
import { Menu } from "../components/Menu/index";
import { MainCards } from "../components/MainCards/index";
import { MainProvider } from "../contexts/MainContext";
import styles from "../styles/pages/Home.module.scss";
import { connectToDatabase } from "../utils/mongodb";
import tempProducts from "../../database/db.json"

export default function Home(props) {
  let dist = 100;
  function fixaMenu() {
    dist = document.querySelector("main").getBoundingClientRect().top;
    let menu = document.getElementById("menu");

    if (dist < menu.offsetHeight) {
      menu.classList.remove(styles.menu);
      menu.classList.add(styles.menuFixed);
    } else {
      menu.classList.remove(styles.menuFixed);
      menu.classList.add(styles.menu);
    }
  }

  return (
    <MainProvider products={JSON.parse(props.data)}>
      <div className={styles.container}>
        <div className={styles.wrapper} onScroll={fixaMenu}>
          <header>
            <Header />
          </header>

          <section>
            <div className={styles.menuContent}>
              <div className={styles.menu} id="menu">
                <Menu />
              </div>
            </div>
            <main>
              <MainCards />
            </main>
          </section>
        </div>
      </div>
    </MainProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  let data = null

  try {
    // const { db } = await connectToDatabase()
    // const _data = await db.collection('products').find().sort({ 'category': 1 }).toArray()
    // data = JSON.stringify(_data)
    data = JSON.stringify(tempProducts.products)
    console.log(data)
  } catch (err) {
    throw err
  }

  // {"products":[{"_id":

  // [{"_id":"6120265a429ea413adeb8def","category":"AÇAÍ","name":"CLÁSSICO 300ML","cardDescription":"O magnifico sabor clássico de açaí...","description":"O magni

  return {
    props: { data },
    revalidate: 60 * 60 * 24   //1 dias 
  }
}
