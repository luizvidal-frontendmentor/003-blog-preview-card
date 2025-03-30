export default function AppBadge({ text }: { text: string }) {
	return (
		<div>
			<span className="rounded-sm bg-yellow px-3 py-1 inline-block text-preset-3-bold max-xs:text-xs!">
				{text}
			</span>
		</div>
	);
}
