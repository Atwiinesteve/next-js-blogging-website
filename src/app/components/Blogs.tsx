import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function Component() {
	return (
		<div className="bg-transparent max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-32">
			<h3 className="text-center font-extrabold text-[26px] mb-14">
				Featured Posts
			</h3>
			<div className="flex items-start justify-start gap-4">
				<div className="flex-1">
					<div className="aspect-w-16 aspect-h-9">
						<Image
							alt="Featured travel"
							className="object-cover"
							height="360"
							src="https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMG1lbW9yaWVzfGVufDB8fDB8fHww"
							style={{
								aspectRatio: "640/360",
								objectFit: "cover",
							}}
							width="640"
						/>
					</div>
					<Button className="mt-4 bg-pink-500 text-white">Travel</Button>
					<h2 className="mt-4 text-4xl font-semibold text-gray-900">
						Never let your memories be greater than your dreams.
					</h2>
					<div className="flex items-start justify-start flex-col-reverse space-y-4 bg-transparent">
						<AvatarGroup isBordered max={3} className="mt-4">
							<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
							<Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
						</AvatarGroup>
						<div className="flex flex-col flex-wrap w-[600px]">
							<p className=" text-gray-600 text-[20px] leading-8">
								Before long the searchlight discovered some distance away a
								schooner with all sails set, apparently the same vessel which
								had been noticed earlier in the evening. The wind had by this
								time backed to the east, and there was a shudder amongst the
								watchers on
							</p>
							<div className="flex items-center space-x-1 text-xs text-gray-500 mt-4">
								<ClockIcon className="h-4 w-4" />
								<span>3 min read</span>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-4 flex-[0.8]">
					<Card className="bg-white shadow-sm rounded-none">
						<CardContent className="flex items-center justify-center gap-3 p-3">
							<Image
								alt="Featured travel"
								className="object-cover"
								height={200}
								src="https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMG1lbW9yaWVzfGVufDB8fDB8fHww"
								style={{
									aspectRatio: "640/360",
									objectFit: "cover",
								}}
								width={200}
							/>
							<div>
								<Badge
									className="bg-yellow-200 text-yellow-800"
									variant="secondary">
									Lifestyle
								</Badge>
								<p className="mt-2 text-lg text-gray-700 font-bold">
									Self-observation is the first step of inner unfolding
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white shadow-sm rounded-none">
						<CardContent className="flex items-center justify-center gap-3 p-3">
							<Image
								alt="Featured travel"
								className="object-cover"
								height={200}
								src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRofGVufDB8fDB8fHww"
								style={{
									aspectRatio: "640/360",
									objectFit: "cover",
								}}
								width={200}
							/>
							<div>
								<Badge
									className="bg-blue-200 text-blue-800"
									variant="secondary">
									Health
								</Badge>
								<p className="mt-2 text-lg text-gray-700">
									The mind and body are not separate. what affects one, affects
									the other
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white shadow-sm rounded-none">
						<CardContent className="flex items-center justify-center gap-3 p-3">
							<Image
								alt="Featured travel"
								className="object-cover"
								height={200}
								src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
								style={{
									aspectRatio: "640/360",
									objectFit: "cover",
								}}
								width={200}
							/>
							<div>
								<Badge
									className="bg-green-200 text-green-800"
									variant="secondary">
									Technology
								</Badge>
								<p className="mt-2 text-lg text-gray-700">
									Technology is a useful servant but a dangerous master
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white shadow-sm rounded-none">
						<CardContent className="flex items-center justify-center gap-3 p-3">
							<Image
								alt="Featured travel"
								className="object-cover"
								height={200}
								src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D"
								style={{
									aspectRatio: "640/360",
									objectFit: "cover",
								}}
								width={200}
							/>
							<div>
								<Badge className="bg-sky-200 text-sky-600" variant="secondary">
									Wildlife
								</Badge>
								<p className="mt-2 text-lg text-gray-700">
									We can never have enough of nature. We must be refreshed by
									the sight of inexhaustible vigor
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="bg-white shadow-sm rounded-none">
						<CardContent className="flex items-center justify-center gap-3 p-3">
							<Image
								alt="Featured travel"
								className="object-cover"
								height={200}
								src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww"
								style={{
									aspectRatio: "640/360",
									objectFit: "cover",
								}}
								width={200}
							/>
							<div>
								<Badge
									className="bg-orange-200 text-orange-600"
									variant="secondary">
									Nature
								</Badge>
								<p className="mt-2 text-lg text-gray-700">
									Look deep into nature and then you will understand everything
									better
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}
