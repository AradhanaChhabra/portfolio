"use client";

import { useEffect } from "react";

import { MotionConfig } from "framer-motion";

import favicon from "./favicon.ico";

import About from "@/modules/about";
import Contact from "@/modules/contact";
import CircleMouse from "@/modules/customMouse";
import Hero from "@/modules/hero";
import Head from "next/head";

export default function HomePage() {
	useEffect(() => {
		const scrollTop = () => {
			window.scrollTo(0, 0);
		};

		window.onunload = scrollTop;
	}, []);

	return (
		<MotionConfig transition={{ ease: [0.6, 0, 0, 0.9], duration: 1 }}>
			<CircleMouse />
			<Hero />
			{/* <About /> */}
			{/* <Contact /> */}
		</MotionConfig>
	);
}
