# theme Switch

### when using tailwind css
>  store theme value local storage..
    create a hook : 

                import React, { useEffect, useState } from "react";
                const useThemeSwitcher = () => {
                const preferDarkQuery = "(prefer-color-scheme: dark)";
                const [mode, setMode] = useState("");
                useEffect(() => {
                const mediaQuery = window.matchMedia(preferDarkQuery);
                const userProf = window.localStorage.getItem("theme");

                const handleChange = () => {
                if (userProf) {
                    let check = userProf === "dark" ? "dark" : "light";
                    setMode(check);
                    if (check === "dark") {
                    document.documentElement.classList.add("dark");
                    } else {
                    document.documentElement.classList.remove("dark");
                    }
                }
                // First time, when user open the website there is no user preference.. so else condition work
                else {
                    let check = mediaQuery.matches ? "dark" : "light";
                    setMode(check);

                    if (check === "dark") {
                    document.documentElement.classList.add("dark");
                    } else {
                    document.documentElement.classList.remove("dark");
                    }
                }
                };

                mediaQuery.addEventListener("change", handleChange);

                return () => mediaQuery.removeEventListener("change", handleChange);
            }, []);

- 
            useEffect(() => {
                if (mode === "dark") {
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
                } else {
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
                }
            }, [mode]);

            return [mode, setMode];
            };

            export default useThemeSwitcher;

> Add a line to tailwind.config file

      darkMode : "class",



> Add onClick function into buton to navigate mode     

    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="ml-3 flex items-center justify-center rounded-full p-1">
                {mode === "dark" ? (
                    <SunIcon className={"fill-dark"} />
                ) : (
                    <MoonIcon className={"fill-dark"} />
                )}
    </button>



# FOUC