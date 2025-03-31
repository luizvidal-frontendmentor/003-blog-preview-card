import Image from "next/image";
import AppAvatar from "./AppAvatar";
import AppBadge from "./AppBadge";

export default function AppBlogPreviewCard() {
	return (
		<section className="p-6 bg-white border border-gray-950 w-full max-w-96! flex flex-col gap-6 rounded-[20px] card-shadow mx-6 sm:mx-0">
			<header className="w-full h-50 relative">
				<Image
					className="rounded-[10px] object-cover"
					src="/003-blog-preview-card/images/card-image.svg"
					alt="Blog preview card image"
					fill={true}
				/>
			</header>
			<div className="flex flex-col gap-3">
				<AppBadge text="Learning" />
				<span className="text-preset-3 max-xs:text-xs!">
					Published 21 Dec 2023
				</span>
				<h1 className="text-preset-1 max-xs:text-xl! hover:cursor-pointer hover:text-yellow">HTML & CSS foundations</h1>
				<p className="text-preset-2  max-xs:text-sm! text-gray-500">
					These languages are the backbone of every website, defining structure,
					content, and presentation.
				</p>
			</div>
			<footer>
				<AppAvatar />
			</footer>
		</section>
	);
}
