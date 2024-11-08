import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { categories } from "../../utils/data";
import svg from "../../assets/aiwa.svg";

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = ["Home", "About Us", "Contact Us"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#045c50] shadow-lg" : "bg-transparent"
      }`}
      isBlurred={false}
    >
      <NavbarContent className="sm-max:flex md-small:flex-row-reverse sm-max:flex-row-reverse">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden hidden sm-max:block md-small:block text-white"
        />
        <NavbarBrand>
          <img
            src={svg}
            alt="Logo"
            className="font-[600] h-[25px] text-white md-max:text-[30px] sm-max:h-[20px]"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="sm:flex gap-10 sm-max:hidden md-small:hidden"
        justify="center"
      >
        <NavbarItem>
          <Link to="/" className="text-[16px] text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about-us" className="text-[16px] text-white">
            About Us
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent hover:bg-transparent text-white text-[16px]"
                endContent={<IoIosArrowDown className="mt-[2px]" />}
                radius="sm"
                variant="light"
              >
                Brands
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Brands"
            className="w-[200px] bg-white rounded-lg backdrop-blur-md border border-white shadow-md"
          >
            <DropdownItem>
              <Link to="/products" className="text-black">
                Cuddles
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/products" className="text-black">
                Trends
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/products" className="text-black">
                Diamond
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/products" className="text-black">
                Flowers
              </Link>
            </DropdownItem>
          </DropdownMenu>
          <DropdownMenu
            aria-label="Categories"
            className="w-[200px] bg-white/10 rounded-lg backdrop-blur-md border border-white/30 shadow-md"
          >
            {categories.map((item, index) => (
              <DropdownItem key={index}>
                <Link to={item.url} className="text-black">
                  {item.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link to="/contact-us" className="text-[16px] text-white">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex justify-center items-center gap-10 bg-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
              className="w-full text-center"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Dropdown className="border border-white bg-white">
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-black text-[18px]"
                endContent={<IoIosArrowDown className="mt-[2px]" />}
                radius="sm"
                variant="light"
              >
                Brands
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px] bg-white rounded-lg backdrop-blur-md border border-white shadow-md"
          >
            <DropdownItem key="cuddles">
              <Link to="/products" className="text-[16px]">
                Cuddles
              </Link>
            </DropdownItem>
            <DropdownItem key="trends">
              <Link to="/products" className="text-[16px]">
                Trends
              </Link>
            </DropdownItem>
            <DropdownItem key="diamond">
              <Link to="/products" className="text-[16px]">
                Diamond
              </Link>
            </DropdownItem>
            <DropdownItem key="flowers">
              <Link to="/products" className="text-[16px]">
                Flowers
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
}
