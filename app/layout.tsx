import "./global.css";

import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import localFont from "next/font/local";

const ArticulateFont = localFont({
	src: "../common/fonts/ArticulatCF-Bold.otf",
});

export const metadata: Metadata = {
	title: "Aradhana | Software Engineer",
	description:
		"Discover the portfolio of Aradhana Chhabra, a software engineer proficient in building comprehensive web-apps using technologies such as React.js, Next.js, Tailwind CSS, TypeScript, Redux.js etc with eagerness to learn and grow.",
	keywords: [
		"Aradhana",
		"Aradhana Chhabra",
		"Frontend Engineer",
		"Frontend Expert",
		"React",
		"React.js",
		"TypeScript",
		"Next.js",
	],
	authors: {
		name: "Aradhana Chhabra",
		url: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN_URL,
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={ArticulateFont.className}>{children}</body>
			<Analytics />
		</html>
	);
}
