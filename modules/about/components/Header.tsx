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
				I&apos;m Aradhana, <br />a Frontend{" "}
				<span className="text-gradient">Engineer</span> <br /> that creates
				interactive <br />
				<span className="text-gradient">web</span> applications.
			</motion.h2>
		</ScrollOpacity>
	);
}
