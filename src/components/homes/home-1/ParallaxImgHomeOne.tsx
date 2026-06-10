import { useEffect, useRef } from "react";

const ParallaxImgHomeOne = () => {
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const isMobile = window.innerWidth <= 767;
		if (!isMobile) return;

		const handleScroll = () => {
			if (!bgRef.current) return;
			const rect = bgRef.current.parentElement!.getBoundingClientRect();
			const offset = rect.top * 0.3;
			bgRef.current.style.transform = `translateY(${offset}px)`;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="parallax-image">
				<div
					ref={bgRef}
					className="background-image"
					style={{
						backgroundImage: `url(/9192458.jpg)`,
					}}
				></div>
			</div>
		</>
	);
};

export default ParallaxImgHomeOne;
