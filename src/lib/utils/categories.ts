import {
	CreditCard,
	Image,
	Server,
	MessageSquare,
	Gamepad2,
	Brain,
	Microscope,
	Shapes,
	CircleDollarSign,
	Waypoints,
	Hammer
} from "@lucide/svelte";

// Update on db schema

export const categories = [
	{ id: "all", name: "All Categories", icon: Shapes },
	{ id: "payments", name: "Payments", icon: CreditCard },
	{ id: "defi", name: "DeFi", icon: CircleDollarSign },
	{ id: "depin", name: "DePin", icon: Waypoints },
	{ id: "nfts", name: "NFTs", icon: Image },
	{ id: "devtools", name: "Dev Tools", icon: Hammer },
	{ id: "infra", name: "Infrastructure", icon: Server },
	{ id: "social", name: "Social", icon: MessageSquare },
	{ id: "gaming", name: "Gaming", icon: Gamepad2 },
	{ id: "ai", name: "AI", icon: Brain },
	{ id: "desci", name: "DeSci", icon: Microscope }
] as const;

export type Category = (typeof categories)[number]["id"];
