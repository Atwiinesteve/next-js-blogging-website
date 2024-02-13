import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<div className="bg-transparent text-black py-12 px-4 mt-32">
			<div className="max-w-6xl mx-auto flex flex-col items-center text-center">
				<h1 className="text-6xl font-bold leading-[4rem]">
					Hello
					<span aria-label="waving hand" role="img">
						👋
					</span>
					, we are Porto, exploring{"\n            "}
					<span className=" bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
						fashion,
					</span>
					<span className=" bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
						lifestyle,
					</span>
					and{" "}
					<span className=" bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
						health.
					</span>
				</h1>
				<p className="mt-4 text-xl mx-48 leading-7">
					Introducing a modern and sleek theme for Ghost.{" "}
					<span className="font-bold">
						Perfect for magazine, newsletter, professional and personal blog
					</span>{" "}
					publishing.
				</p>
				<Button className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 rounded-full">
					Join now - it&apos;s free!
				</Button>
			</div>
		</div>
	);
}
