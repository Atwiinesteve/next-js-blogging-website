import { Badge } from "@/components/ui/badge";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OtherBlogs() {
	return (
		<div className="container">
			<div className="conatiner flex items-center justify-center flex-col">
				<div className="flex justify-center space-x-8 space-y-6 mt-32 flex-wrap gap-4">
					<Card className="w-[350px]">
						<Image
							alt="Colorful outfit"
							className="rounded-t-lg"
							height="400"
							src="https://images.unsplash.com/photo-1541820936806-cacd476e440d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbG9yZnVsJTIwb3V0Zml0fGVufDB8fDB8fHww"
							style={{
								aspectRatio: "350/200",
								objectFit: "cover",
								backgroundPosition: "top center",
							}}
							width="350"
						/>
						<CardContent>
							<Badge variant="secondary">Nature</Badge>
							<h2 className="mt-4 text-xl font-semibold">
								Autumn is a second spring when every leaf is a flower
							</h2>
							<p className="mt-2 text-gray-600">
								She then expatiated very warmly upon the advantages I should
								reap from her plan; talked in a high style of my future
								grandeur; assured me how heartily I should despise almost every
								body and...
							</p>
							<div className="flex items-center mt-4 space-x-2">
								<Avatar>
									<AvatarImage
										alt="@shadcn"
										src="https://github.com/shadcn.png"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>4 min read</span>
							</div>
						</CardContent>
					</Card>
					<Card className="w-[350px]">
						<Image
							alt="Woman posing"
							className="rounded-t-lg"
							height="400"
							src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwb3Npbmd8ZW58MHx8MHx8fDA%3D"
							style={{
								aspectRatio: "350/200",
								objectFit: "cover",
								backgroundPosition: "top center",
							}}
							width="350"
						/>
						<CardContent>
							<Badge variant="secondary">Travel</Badge>
							<h2 className="mt-4 text-xl font-semibold">
								Never let your memories be greater than your dreams
							</h2>
							<p className="mt-2 text-gray-600">
								Before long the searchlight discovered some distance away a
								schooner with all sails set, apparently the same vessel which
								had been noticed earlier in the evening. The wind had by...
							</p>
							<div className="flex items-center mt-4 space-x-2">
								<Avatar>
									<AvatarImage
										alt="@shadcn"
										src="https://github.com/shadcn.png"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>3 min read</span>
							</div>
						</CardContent>
					</Card>
					<Card className="w-[350px]">
						<Image
							alt="Woman looking up"
							className="rounded-t-lg"
							height="400"
							src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbG9va2luZyUyMHVwfGVufDB8fDB8fHww"
							style={{
								aspectRatio: "350/200",
								objectFit: "cover",
							}}
							width="350"
						/>
						<CardContent>
							<Badge variant="secondary">Food</Badge>
							<h2 className="mt-4 text-xl font-semibold">
								Dramatically improve your cooking.
							</h2>
							<p className="mt-2 text-gray-600">
								You cannot too assiduously attend to Madame Duval herself; but I
								would wish you to mix as little as possible with her associates,
								who are not likely to be among those whose acquaintance would...
							</p>
							<div className="flex items-center mt-4 space-x-2">
								<Avatar>
									<AvatarImage
										alt="@shadcn"
										src="https://github.com/shadcn.png"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>4 min read</span>
							</div>
						</CardContent>
					</Card>
					<Card className="w-[350px] !ml-0">
						<Image
							alt="Colorful outfit"
							className="rounded-t-lg"
							height="400"
							src="https://images.unsplash.com/photo-1519488120670-9d0d7c133f9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFuJTIwbG9va2luZyUyMHVwfGVufDB8fDB8fHww"
							style={{
								aspectRatio: "350/200",
								objectFit: "cover",
							}}
							width="350"
						/>
						<CardContent>
							<Badge variant="secondary">Nature</Badge>
							<h2 className="mt-4 text-xl font-semibold">
								Autumn is a second spring when every leaf is a flower
							</h2>
							<p className="mt-2 text-gray-600">
								She then expatiated very warmly upon the advantages I should
								reap from her plan; talked in a high style of my future
								grandeur; assured me how heartily I should despise almost every
								body and...
							</p>
							<div className="flex items-center mt-4 space-x-2">
								<Avatar>
									<AvatarImage
										alt="@shadcn"
										src="https://github.com/shadcn.png"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>4 min read</span>
							</div>
						</CardContent>
					</Card>
					<Card className="w-[350px] ">
						<Image
							alt="Woman posing"
							className="rounded-t-lg"
							height="400"
							src="https://images.unsplash.com/photo-1475048975523-705992b13a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwbG9va2luZyUyMHVwfGVufDB8fDB8fHww"
							style={{
								aspectRatio: "350/200",
								objectFit: "cover",
							}}
							width="350"
						/>
						<CardContent>
							<Badge variant="secondary">Travel</Badge>
							<h2 className="mt-4 text-xl font-semibold">
								Never let your memories be greater than your dreams
							</h2>
							<p className="mt-2 text-gray-600">
								Before long the searchlight discovered some distance away a
								schooner with all sails set, apparently the same vessel which
								had been noticed earlier in the evening. The wind had by...
							</p>
							<div className="flex items-center mt-4 space-x-2">
								<Avatar>
									<AvatarImage
										alt="@shadcn"
										src="https://github.com/shadcn.png"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>3 min read</span>
							</div>
						</CardContent>
					</Card>
					<Card className="w-[350px] ">
						<Image
							alt="Woman looking up"
							className="rounded-t-lg"
							height="400"
							src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBsb29raW5nJTIwdXB8ZW58MHx8MHx8fDA%3D"
							style={{
								aspectRatio: "350/200",
								objectFit: "cover",
							}}
							width="350"
						/>
						<CardContent>
							<Badge variant="secondary">Food</Badge>
							<h2 className="mt-4 text-xl font-semibold">
								Dramatically improve your cooking.
							</h2>
							<p className="mt-2 text-gray-600">
								You cannot too assiduously attend to Madame Duval herself; but I
								would wish you to mix as little as possible with her associates,
								who are not likely to be among those whose acquaintance would...
							</p>
							<div className="flex items-center mt-4 space-x-2">
								<Avatar>
									<AvatarImage
										alt="@shadcn"
										src="https://github.com/shadcn.png"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span>4 min read</span>
							</div>
						</CardContent>
					</Card>
				</div>

				<Button className="mt-5 rounded-none w-full py-7 uppercase tracking-widest text-[20px] font-light bg-transparent text-black border border-black hover:text-white"> Load More</Button>
			</div>
		</div>
	);
}
