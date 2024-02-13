import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Tags() {
	return (
		<div className="container flex flex-col justify-center gap-4 p-4 bg-white mt-32 w-full">
			<h2 className="w-full text-center text-[24px] font-bold">Popular Tags</h2>
			<div className="flex flex-wrap items-center justify-center mt-3 gap-4 mx-auto">
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1707066051008-ffbc2a517362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1707707366307-6996af74a6f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1707700754436-d1f36ed5318b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1707492805162-7375871503af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1707707289922-bd88c3f0e69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1695916294991-bbdf52da9dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1707650042645-f4123aeef0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1706067501075-4b3ac55d2aba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-5 h-[100px] w-[250px] border rounded-full shadow-sm">
					<Avatar className="w-[70px] h-[70px]">
						<AvatarImage
							className=""
							alt="Nature"
							src="https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
						/>
					</Avatar>

					<div>
						<div className="text-[18px] font-bold">Inspiration</div>
						<div className="text-[14px] text-gray-500">7 posts</div>
					</div>
				</div>
				<Button className="flex items-center space-x-1">
					<span>See all tags</span>
					<ArrowRightIcon className="w-4 h-4" />
				</Button>
			</div>
		</div>
	);
}

function ArrowRightIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	);
}
