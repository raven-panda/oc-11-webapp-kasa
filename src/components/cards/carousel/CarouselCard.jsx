import styles from './CarouselCard.module.scss';
import { useCallback, useEffect, useRef, useState } from "react";
import ChevronLogo from "../../../assets/icon/ChevronLogo.jsx";
import ChevronCarousel from "../../../assets/icon/ChevronCarousel.jsx";

export default function CarouselCard({ pictures, alt }) {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollCarousel = useCallback(() => {
    carouselRef?.current?.scrollTo({
      left: 1240 * selectedIndex,
      top: 0,
      behavior: "smooth",
    });
  }, [selectedIndex]);

  const selectPreviousPicture = useCallback(() => {
    setSelectedIndex(prev => (prev > 0 ? prev - 1 : pictures.length - 1));
  }, [pictures.length]);

  const selectNextPicture = useCallback(() => {
    setSelectedIndex(prev => (prev < pictures.length - 1 ? prev + 1 : 0));
  }, [pictures.length]);

  useEffect(() => {
    const timer = setTimeout(selectNextPicture, 8000);
    return () => clearTimeout(timer);
  }, [selectNextPicture, selectedIndex]);

  useEffect(() => {
    scrollCarousel();
  }, [scrollCarousel]);

  return (
    <>
      <section className={styles.carousel_section}>
        <div ref={carouselRef} className={styles.carousel}>
          {pictures.map(
            (picturePath, i) => <img key={picturePath} src={picturePath} width={1240} height={415} alt={`Image de ${alt} ${i}`} />
          )}
        </div>
        {pictures.length > 1 && <>
          <button className={styles.nav_previous_picture} onClick={selectPreviousPicture}>
            <ChevronCarousel />
          </button>
          <button className={styles.nav_next_picture} onClick={selectNextPicture}>
            <ChevronCarousel rotate={180} />
          </button>
          <p className={styles.nav_index}>{selectedIndex + 1} / {pictures.length}</p>
        </>}
      </section>
    </>
  );
}
