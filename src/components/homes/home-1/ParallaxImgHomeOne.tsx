const ParallaxImgHomeOne = () => {
	return (
		<>
			<style>{`
				@media (max-width: 767px) {
					.parallax-image {
						height: auto !important;
					}
					.parallax-image .background-image {
						position: relative !important;
						height: 100vw !important;
						background-size: cover !important;
						background-position: center center !important;
					}
				}
			`}</style>
			<div className="parallax-image">
				<div
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
