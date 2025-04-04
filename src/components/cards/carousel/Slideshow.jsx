import styles from "./Slideshow.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import ChevronCarousel from "../../../assets/icon/ChevronCarousel.jsx";

/**
 * @param pictures {string[]} The Pictures path to show in the carousel
 * @param alt {string} Alt text used for each picture if not found
 * @returns {JSX.Element}
 */
export default function Slideshow({ pictures, alt }) {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // When set to false, autoplay is disabled for 5 seconds
  const [isAutoPlaying, setAutoPlay] = useState(true);

  // Slides the carousel to the desired picture. Called every time selectedIndex changes.
  // Scroll used clientWidth of carouselRef to satisfy responsive
  const scrollCarousel = useCallback(() => {
    carouselRef?.current?.scrollTo({
      left: carouselRef.current.clientWidth * selectedIndex,
      top: 0,
      behavior: "smooth",
    });
  }, [selectedIndex]);

  // Callbacks for slide updates
  const selectPreviousPicture = useCallback(() => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : pictures.length - 1));
  }, [pictures.length]);

  const selectNextPicture = useCallback(() => {
    setSelectedIndex((prev) => (prev < pictures.length - 1 ? prev + 1 : 0));
  }, [pictures.length]);

  // Autoplay timeout to select next picture very 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => isAutoPlaying && selectNextPicture(), 5000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying, selectNextPicture, selectedIndex]);

  // Timeout for autoplay reactivation
  useEffect(() => {
    if (isAutoPlaying) return;

    const timer = setTimeout(() => setAutoPlay(true), 5000);
    return () => clearTimeout(timer);
  }, [isAutoPlaying]);

  // Calling once the callback, and then it will be re-called every time one of its dependencies changed
  useEffect(() => {
    scrollCarousel();
  }, [scrollCarousel]);

  return (
    <>
      <section className={styles.carousel_section}>
        <div ref={carouselRef} className={styles.carousel}>
          {pictures.map((picturePath, i) => (
            <img
              key={picturePath}
              src={picturePath}
              width={1240}
              height={415}
              alt={`Image de ${alt} ${i}`}
            />
          ))}
        </div>
        {pictures.length > 1 && (
          <>
            <button
              className={styles.nav_previous_picture}
              onClick={() => {
                selectPreviousPicture();
                setAutoPlay(false);
              }}
            >
              <ChevronCarousel />
            </button>
            <button
              className={styles.nav_next_picture}
              onClick={() => {
                selectNextPicture();
                setAutoPlay(false);
              }}
            >
              <ChevronCarousel rotate={180} />
            </button>
            <p className={styles.nav_index}>
              {selectedIndex + 1} / {pictures.length}
            </p>
          </>
        )}
      </section>
    </>
  );
}
