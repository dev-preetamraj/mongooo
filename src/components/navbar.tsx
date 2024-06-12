import React from "react";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import TodoDialog from "./todo-dialog";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-36 2xl:px-52 py-4 border-b bg-card shadow-md">
      <h1>Mongooo.</h1>
      <div className="flex items-center space-x-4">
        <SignedIn>
          <TodoDialog />
        </SignedIn>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
