export default function Image({
  src,
  alt,
  className = "cardImage",
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
