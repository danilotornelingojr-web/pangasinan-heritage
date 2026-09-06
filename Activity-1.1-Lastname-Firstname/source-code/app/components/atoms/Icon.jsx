export default function Icon({ name = 'arrow' }) {
  const icons = { arrow: '→', search: '⌕', location: '⌖' };
  return <span aria-hidden="true">{icons[name] || icons.arrow}</span>;
}
