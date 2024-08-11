aimport Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup
} from "flowbite-react";

export function DefaultHeader() {
  return (
    <Navbar>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Feras Alkilani's Book Store
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
        <NavbarLink href="pricing">Pricing</NavbarLink>
        <NavbarLink href="contact">Contact</NavbarLink>
      </NavbarCollapse>
      <DarkThemeToggle />
    </Navbar>
  );
}
export function DefaultFooter() {
  return (
    <Footer container className="rounded-none">
      <Footer.Copyright href="#" by="Feras Alkilani™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
