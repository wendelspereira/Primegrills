import { AsideMenu } from '../AsideMenu/index';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

import banners from '../../../database/banners.json';
let timeOut: NodeJS.Timeout;

type bunner = {
    id: number;
    imgSrc: string;
    link: string;
};

export function Header() {
    const [currentImage, setCurrentImage] = useState(1);
    const [active, setActive] = useState(true);
    let [start, end] = [0, 0];

    function toggleImage(index: number) {
        clearTimeout(timeOut);
        setCurrentImage(index + 1);
    }

    function touchStart(evt) {
        clearTimeout(timeOut);
        start = evt.changedTouches[0].clientX;
    }

    function moveSlick(evt) {
        setActive(false);
        end = evt.changedTouches[0].clientX;
        if (start < end && currentImage > 1) {
            setCurrentImage(currentImage - 1);
        } else if (start > end && currentImage < banners.length) {
            setCurrentImage(currentImage + 1);
        }
    }

    useEffect(() => {
        let mounted = true;

        if (active) {
            let images = document.querySelectorAll("#slider img");
            timeOut = setTimeout(() => {
                if (mounted) {
                    images[currentImage]?.classList.remove("styles.selected");
                    setCurrentImage(currentImage + 1);

                    if (currentImage >= images.length) {
                        setCurrentImage(1);
                    }

                    images[currentImage]?.classList.add("styles.selected");
                }
            }, 5000);
        }
        // impede a mudança de estado da imagem atual na desmontagem do useEffect.
        return () => { mounted = false }
    }, [currentImage]);

    return (
        <div className={styles.containerHeader}>
            <div className={styles.btnAsideMenu}>
                <AsideMenu />
            </div>
            <div className={styles.itemsWrapper}>
                <div id="slider" className={styles.slider}>
                    {
                        banners.map((banner: bunner, index: number) => {
                            return (
                                <div key={banner.id}>
                                    <Link href={banner.link}>
                                        <a>
                                            <img
                                                src={banner.imgSrc}
                                                className={currentImage == index + 1 ?
                                                    styles.selected : ""
                                                }
                                                onTouchStart={touchStart}
                                                onTouchEnd={moveSlick}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.btnSlick}>
                    <ul>
                        {
                            banners.map((bunner: bunner, index: number) => {
                                return (
                                    <li key={bunner.id}>
                                        <button className={
                                            currentImage == index + 1 ?
                                                styles.buttonActive : styles.button
                                        }
                                            type="button"
                                            onClick={() => toggleImage(index)}
                                        ></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
