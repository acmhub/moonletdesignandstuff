import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";

const paths = [
	{
		path: "M835.28,1449.78c-218,12.19-416.91-84.2-544.23-242.1l-76.4,61.5C361.13,1450.84,590,1561.72,840.75,1547.7A752.52,752.52,0,0,0,1006,1519.84l-27-94.3a653.83,653.83,0,0,1-143.74,24.24Z",
		fill: "#CCCCCC",
		label: "fields.stationery",
	},
	{
		path: "M148,835.27C127.9,475.8,403,168.09,762.5,148A652,652,0,0,1,953,165.31L976.08,70A749.41,749.41,0,0,0,757,50.08C343.47,73.2,27,427.19,50.08,840.75a746.57,746.57,0,0,0,164.57,428.43l76.4-61.5a648.91,648.91,0,0,1-143-372.4Z",
		fill: "#4c5f43",
		label: "fields.branding",
	},
	{
		path: "M976.09,70,953,165.31c271.88,66,480.4,303.41,496.82,597.19a648.86,648.86,0,0,1-67.12,326.69l87.82,43.74A746.4,746.4,0,0,0,1547.71,757C1528.8,419,1288.89,145.91,976.09,70Z",
		fill: "#bfb5ac",
		label: "fields.logo",
	},
	{
		path: "M979,1425.54l27,94.3c204.78-58.63,372-201.53,464.47-386.91l-87.82-43.74C1302.33,1250.33,1157,1374.56,979,1425.54Z",
		fill: "#807d8e",
		label: "fields.others",
	},
];

function PieChartForMobile() {
	const { t } = useTranslation("about");

	const [activePathIndex, setActivePathIndex] = useState<number>(0);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setActivePathIndex((activePathIndex) => (activePathIndex + 1) % paths.length);
		}, 3000);
		return () => clearInterval(intervalId);
	}, [paths.length]);

	return (
		<div className="relative max-w-[18rem] max-h-72 mx-auto">
			<p className="lg:hidden absolute top-1/2 -translate-y-1/2 w-full text-beige text-center text-2xl uppercase tracking-widest font-semibold">
				{t(paths[activePathIndex].label)}
			</p>

			<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500.01 1500">
				{paths.map(({ path, fill }, i) => (
					<path
						className={`transition-all duration-400
						${i !== activePathIndex && "fill-transparent stroke-white stroke-2"}
					`}
						d={path}
						fill={fill}
						transform="translate(-48.89 -48.89)"
						key={i}
					/>
				))}
			</svg>
		</div>
	);
}

function PieChart() {
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex-1 gap-10">
			{screenWidth < 1024 ? (
				<PieChartForMobile />
			) : (
				<div className="relative lg:h-60 lg:w-60 mx-auto">
					<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500.01 1500">
						{paths.map(({ path, fill }, i) => (
							<path d={path} fill={fill} transform="translate(-48.89 -48.89)" key={i} />
						))}
					</svg>
				</div>
			)}
		</div>
	);
}

export default PieChart;
