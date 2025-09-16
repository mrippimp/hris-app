import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import MyAccountMenu from "../my-account-menu";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
      <div className="flex items-center justify-start w-full gap-5 p-3 text-sm">
        <SidebarTrigger />
      </div>
      <div className="flex items-center justify-end w-full gap-5 p-3 mx-10 text-sm">
        <ThemeSwitcher />
        <MyAccountMenu />
      </div>
    </nav>
  );
};

export default Navbar;
