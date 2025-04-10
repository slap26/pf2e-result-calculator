import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	base: "/pf2e-result-calculator/",
	plugins: [react()],
});
