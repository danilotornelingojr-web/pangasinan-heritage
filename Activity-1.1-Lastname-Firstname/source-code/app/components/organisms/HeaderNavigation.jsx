import NavigationItem from '../molecules/NavigationItem';

export default function HeaderNavigation() {
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="/">Pangasinan Heritage</a>
        <nav className="navLinks" aria-label="Main navigation">
          <NavigationItem href="#heritage">Heritage</NavigationItem>
          <NavigationItem href="#about">About</NavigationItem>
        </nav>
      </div>
    </header>
  );
}
