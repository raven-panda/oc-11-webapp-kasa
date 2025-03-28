/**
 * @param width {number} SVG width
 * @param height {number} SVG height
 * @param rotate {number} SVG rotation
 * @returns {JSX.Element}
 */
export default function ChevronCarousel({
  width = 46,
  height = 79,
  rotate = 0,
}) {
  return (
    <svg
      width={width}
      height={height}
      style={{ rotate: rotate + "deg" }}
      viewBox="0 0 48 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
    </svg>
  );
}
