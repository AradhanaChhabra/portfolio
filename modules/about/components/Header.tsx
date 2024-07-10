import { motion } from "framer-motion";

import ScrollOpacity from "@/common/components/ScrollOpacity";
import { useMouseVariant } from "@/modules/customMouse";

export default function AboutHeader() {
	const { setMouseVariant } = useMouseVariant();

	return (
		<ScrollOpacity>
			<motion.h2
				className="header my-36 h-min px-5 text-center lg:my-96"
				onMouseEnter={setMouseVariant.text}
				onMouseLeave={setMouseVariant.default}
			>
				I&apos;m Aradhana, <br /> passionate about{" "}
				<span className="text-gradient"> evolution of human interaction</span>{" "}
				<br />
				with digital landscapes <br />
			</motion.h2>
		</ScrollOpacity>
	);
}
