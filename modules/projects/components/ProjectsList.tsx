import ScrollOpacity from "@/common/components/ScrollOpacity";

import Project from "./Project";

export default function ProjectsList() {
	return (
		<>
			<div className="h-[30vh] md:h-[50vh]" />
			<section
				className="mt-36 flex w-screen justify-center md:mt-0"
				id="projects"
			>
				<ScrollOpacity>
					<div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
						<Project
							title="AradhanaChhabra/Snippet-Extender-ChromeExt"
							description="A chrome extension which lets you to create your own customized text snippets and use in your browser."
							github="https://github.com/AradhanaChhabra/Snippet-Extender-ChromeExt"
							scrollTo
						/>
						<Project
							title="AradhanaChhabra/Find-Mutuals "
							description="A web app that helps you find the degree of separation between any two people"
							github="https://github.com/AradhanaChhabra/findMutuals"
							demo="degree-of-separation.netlify.app/"
						/>
						<Project
							title="AradhanaChhabra/Medi-Care"
							description="A React.js web app to help you keep and maintain the logs of your personal medical records"
							github="https://github.com/AradhanaChhabra/Medi-Care"
							demo="https://medi-care-app.netlify.app/"
						/>
					</div>

					<p className="mt-10 px-10 text-center text-2xl">
						For more info about my work, check out my{" "}
						<a
							className="text-gradient hover:hover-gradient"
							href="/pdf/aradhana.pdf"
							target="_blank"
							rel="noreferrer"
						>
							resume
						</a>
						.
					</p>
				</ScrollOpacity>
			</section>
		</>
	);
}
