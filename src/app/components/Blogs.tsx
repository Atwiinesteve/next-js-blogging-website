import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
	return (
		<div className="bg-transparent max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-32">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				<div className="lg:col-span-2">
					<div className="aspect-w-16 aspect-h-9">
						<Image
							alt="Featured travel"
							className="object-cover"
							height="360"
							src="/placeholder.svg"
							style={{
								aspectRatio: "640/360",
								objectFit: "cover",
							}}
							width="640"
						/>
					</div>
					<Button className="mt-4 bg-pink-500 text-white">Travel</Button>
					<h2 className="mt-4 text-4xl font-semibold text-gray-900">
						Never let your memories be greater than your dreams
					</h2>
				</div>
				<div className="space-y-4">
					<Card className="bg-white shadow-sm">
						<CardContent>
							<Badge
								className="bg-yellow-200 text-yellow-800"
								variant="secondary">
								Lifestyle
							</Badge>
							<p className="mt-2 text-lg text-gray-700">
								Self-observation is the first step of inner unfolding
							</p>
						</CardContent>
					</Card>
					<Card className="bg-white shadow-sm">
						<CardContent>
							<Badge className="bg-blue-200 text-blue-800" variant="secondary">
								Health
							</Badge>
							<p className="mt-2 text-lg text-gray-700">
								The mind and body are not separate. what affects one, affects
								the other
							</p>
						</CardContent>
					</Card>
					<Card className="bg-white shadow-sm">
						<CardContent>
							<Badge
								className="bg-green-200 text-green-800"
								variant="secondary">
								Technology
							</Badge>
							<p className="mt-2 text-lg text-gray-700">
								New tech innovation for low cost ocean cleanup
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
