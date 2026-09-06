export default function Button({ children, href = '#', ariaLabel }) {
  return <a className="button" href={href} aria-label={ariaLabel}>{children}</a>;
}
