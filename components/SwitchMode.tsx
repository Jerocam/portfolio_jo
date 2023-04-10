import React, { useEffect, useState } from "react";
import { IconDark, IconLight } from "./Icons";
import { useTheme } from "next-themes";

type NavbarProps = {
  href: string;
  icon: string;
};

const SwitchMode: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<Boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="rounded focus:outline-none text-2xl"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <div>
            {theme === "dark" ? (
              <IconLight />
            ) : (
              <IconDark />
            )}
          </div>
        )}
      </button>
    </>
  );
};

export default SwitchMode;
