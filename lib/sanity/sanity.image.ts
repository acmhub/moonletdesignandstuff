import imageUrlBuilder from "@sanity/image-url";
import { sanityclient } from "./sanity.client";

const builder = imageUrlBuilder(sanityclient);

export default function imageUrl(source: any) {
	return builder.image(source).url();
}
