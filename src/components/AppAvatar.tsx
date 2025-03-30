import Image from "next/image";

export default function AppAvatar() {
	return (
		<div className="flex gap-3! items-center">
			<Image
				src="/003-blog-preview-card/images/avatar.webp"
				alt="Avatar"
				width={32}
				height={32}
			/>

			<p className="text-preset-3-bold">Greg Hooper</p>
		</div>
	);
}
