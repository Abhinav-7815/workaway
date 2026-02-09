tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#4DD0E1", // Teal from the logo/header
                "primary-dark": "#00ACC1", // Darker shade for hover/active
                secondary: "#546E7A", // Grey from the logo
                "background-light": "#F9FAFB",
                "background-dark": "#111827",
                "surface-light": "#FFFFFF",
                "surface-dark": "#1F2937",
                "text-light": "#374151",
                "text-dark": "#D1D5DB",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Public Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
};
