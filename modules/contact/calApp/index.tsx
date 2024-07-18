import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalApp() {
	useEffect(() => {
		(async function () {
			const cal: any = await getCalApi({ namespace: "30min" });
			cal?.ns?.["30min"]("ui", {
				theme: "dark",
				styles: { branding: { brandColor: "#000000" } },
				hideEventTypeDetails: true,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<Cal
			namespace="30min"
			className="no-scrollbar rounded-lg"
			calLink="aradhana/30min"
			style={{ width: "100%", height: "100%", overflow: "scroll" }}
			config={{ layout: "month_view", hideEventTypeDetails: "true" }}
		/>
	);
}
