import styles from "./css/Background.module.css";

const Background = () => {
  const images = [...Array(10)].map((item, index) => `${index + 1}.jpg`);
  const currentImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className={styles.background_wrapper}>
      <img src={`images/${currentImage}`} alt="background" />
    </div>
  );
};
export default Background;
