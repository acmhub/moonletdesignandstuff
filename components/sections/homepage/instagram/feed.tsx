import { useState, useEffect } from "react";
import Image from "next/image";
import useCookieConsent from "../../../../hooks/useIsCookieConsentGiven";

function Feed() {
	const [posts, setPosts] = useState([]);
	const { cookieConsent } = useCookieConsent();
	const access_token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

	useEffect(() => {
		const fetchPosts = async () => {
			if (cookieConsent === "granted" || cookieConsent === "functionality") {
				const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${access_token}`;
				const response = await fetch(apiUrl);
				const data = await response.json();
				setPosts(data.data);
			}
		};

		fetchPosts();
	}, [cookieConsent]);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 w-fit mx-auto">
			{posts &&
				posts.map(({ id, media_url, thumbnail_url, caption, permalink }) => (
					<a
						href={permalink}
						className="relative max-xs:h-32 max-sm:h-40 h-52 max-xs:w-32 max-sm:w-40 w-52"
						target="_blank"
						rel="noopener noreferrer"
						key={id}
					>
						<Image src={media_url || thumbnail_url} alt={caption || ""} className="object-cover" fill />
					</a>
				))}
		</div>
	);
}

export default Feed;
