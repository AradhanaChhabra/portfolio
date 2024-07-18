import { motion } from "framer-motion";

import { useMouseVariant } from "@/modules/customMouse";

import { wordAnimation } from "../animations/headerAnimation";

export default function Header() {
	const { setMouseVariant } = useMouseVariant();

	return (
		<motion.h1
			className="header text-center -mt-6"
			onMouseEnter={setMouseVariant.text}
			onMouseLeave={setMouseVariant.default}
			initial="hidden"
			animate="visible"
			transition={{
				staggerChildren: 0.05,
			}}
		>
			<motion.span variants={wordAnimation}>A</motion.span>{" "}
			<motion.span variants={wordAnimation}> software engineer</motion.span>
			<br className="block md:block" />
			<motion.span variants={wordAnimation}>with a knack for</motion.span>{" "}
			<br className="block xl:hidden " />
			<motion.span variants={wordAnimation}>making each</motion.span>
			<br className="block md:hidden" />{" "}
			<motion.span variants={wordAnimation}>piece of code </motion.span>
			<br className="hidden md:block" /> <br className="block md:hidden" />
			<motion.span variants={wordAnimation} className="text-gradient">
				pixel-perfect ✨
			</motion.span>
			<br className="hidden md:block" /> <br className="block md:hidden" />
		</motion.h1>
	);
}
