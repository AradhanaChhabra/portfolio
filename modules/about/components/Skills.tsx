import { useMouseVariant } from "@/modules/customMouse";
import javascriptSVG from "@/public/svg/javascript.svg";
import nextSVG from "@/public/svg/nextjs.svg";
import reactSVG from "@/public/svg/react.svg";
import recoilSVG from "@/public/svg/recoiljs.svg";
import tailwindSVG from "@/public/svg/tailwindcss.svg";
import typescriptSVG from "@/public/svg/typescript.svg";
import htmlSVG from "@/public/svg/html.svg";
import svelteSVG from "@/public/svg/svelte.svg";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface SkillBadgeProps {
	svg: StaticImageData;
	name: string;
	className?: string;
}

function SkillBadge({ svg, name, className }: SkillBadgeProps) {
	const { setMouseVariant } = useMouseVariant();

	return (
		<motion.div
			initial={{ opacity: 0, y: 5 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{
				amount: "all",
			}}
			transition={{ duration: 0.3 }}
		>
			<Image
				src={svg}
				alt={name}
				className={className || "h-10 w-max md:h-12 lg:h-16"}
				priority
				onMouseEnter={() => setMouseVariant.technology(name)}
				onMouseLeave={setMouseVariant.default}
			/>
		</motion.div>
	);
}

export default function Skills() {
	return (
		<div className="mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
			<SkillBadge svg={javascriptSVG} name="JavaScript" />
			<SkillBadge svg={typescriptSVG} name="TypeScript" />
			<SkillBadge svg={nextSVG} name="Next.js" />
			<SkillBadge svg={reactSVG} name="React.js" />
			<SkillBadge svg={svelteSVG} name="Svelte" />
			<SkillBadge svg={htmlSVG} name="HTML" />
			<SkillBadge svg={recoilSVG} name="Recoil.js" />
			<SkillBadge
				svg={tailwindSVG}
				name="TailwindCSS"
				className="h-7 w-max lg:h-10"
			/>
		</div>
	);
}
