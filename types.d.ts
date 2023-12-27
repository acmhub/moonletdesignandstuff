interface Mockup {
	_key: string;
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
}

interface Moodboard {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
}

interface Sketch {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
}

interface Project {
	_id: string;
	title: string;
	tagline: string;
	main_image: {
		asset: {
			_ref: string;
			_type: string;
		};
		_type: string;
	};
	main_description: string;
	moodboard: Moodboard;
	slug: {
		current: string;
	};
	sketch: Sketch;
	mockups: Mockup[];
	services: string;
	description1: string;
	description2: string;
	description3: string;
	description4: string;
	description5: string;
	behance_link: string;
	instagram_link: string;
}

interface Featured {
	_id: string;
	project: {
		title: string;
		services: string;
		slug: {
			current: string;
		};
	};
	image: {
		asset: {
			_ref: string;
			_type: string;
		};
		_type: string;
	};
	services: string;
	overlay: string;
	publishedAt: string;
}

interface Pack {
	_id: string;
	pack_name: string;
	pack_image: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	description: {
		ro: string;
		en: string;
	};
	includes: {
		_key: string;
		ro: string;
		en: string;
	}[];
	timeline: {
		ro: string;
		en: string;
	};
	price: string;
	_updatedAt: string;
	_createdAt: string;
	_type: string;
	_rev: string;
}

interface NavbarInterface {
	navbarState: {
		isVisible: boolean;
		isScrolled: boolean;
		isToggled: boolean;
		isMobile: boolean;
		colorCondition: string;
	};
}
