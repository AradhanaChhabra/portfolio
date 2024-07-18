import { motion } from "framer-motion";
import { BsChevronUp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import ScrollOpacity from "@/common/components/ScrollOpacity";

import { useMouseVariant } from "../customMouse";
import CalApp from "./calApp";

const Contact = () => {
	const { setMouseVariant } = useMouseVariant();

	return (
		<section className="relative">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<div className="h-[20vh] md:h-[10vh]" />
				<div className="h-[10vh] md:h-[10vh]" id="contact" />
				<ScrollOpacity>
					<div
						className="flex flex-col gap-10 items-center justify-center"
						id="contact"
					>
						<div className="flex flex-col gap-4 items-center justify-center">
							<h1
								className="header -mt-10 w-full px-10 text-center sm:mt-0"
								onMouseEnter={setMouseVariant.text}
								onMouseLeave={setMouseVariant.default}
							>
								Let&apos;s work together.
							</h1>
							<p className="text-lg text-zinc-400  lg:text-xl">
								aradhanachhabra03@gmail.com
							</p>
							<a
								className="w-full max-w-max primary-gradient scale-btn hover:hover-gradient rounded-2xl p-2 px-2 text-lg transition-all duration-300 lg:p-3 lg:px-6 lg:text-xl"
								href="mailto:aradhanachhabra03@gmail"
							>
								Contact me
							</a>
						</div>

						<div className="relative flex-1 max-w-[80vw] md:max-w-[80vw] w-[80vw] md:w-[58vw] max-h-[50vh] md:max-h-[400px] overflow-y-scroll  bg-scroll border border-gray-700 rounded-lg p-4 z-[1000000000]">
							<CalApp />
						</div>

						<div className="h-[30vh] md:h-[20vh]" />
					</div>
				</ScrollOpacity>

				<motion.button
					className="absolute bottom-20 flex flex-col items-center rounded-lg bg-transparent p-2 font-sans text-lg transition-colors hover:bg-zinc-800"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
				>
					<BsChevronUp />
					Back to top
				</motion.button>

				<div className="absolute bottom-0 h-20 w-full">
					<div className="flex h-full w-full items-center justify-center gap-5 text-lg text-zinc-400 lg:text-xl">
						<p>© {getCopyrightYear()} Aradhana</p>
						<a
							href="https://twitter.com/aradhanaaaaaa"
							target="_blank"
							rel="noreferrer"
							aria-label="Twitter"
							className="scale-btn"
						>
							<FaTwitter />
						</a>

						<a
							href="https://www.linkedin.com/in/aradhanachhabra"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							className="scale-btn"
						>
							<FaLinkedin />
						</a>

						<a
							href="https://github.com/AradhanaChhabra"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							className="scale-btn"
						>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

const getCopyrightYear = () => {
	const date = new Date();
	const year = date.getFullYear();

	return year;
};
