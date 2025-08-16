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

export const categories = [
	{ name: "All Categories", icon: Shapes },
	{ name: "Payments", icon: CreditCard },
	{ name: "DeFi", icon: CircleDollarSign },
	{ name: "DePin", icon: Waypoints },
	{ name: "NFTs", icon: Image },
	{ name: "Developer Tooling", icon: Hammer },
	{ name: "Infrastructure", icon: Server },
	{ name: "Social", icon: MessageSquare },
	{ name: "Gaming", icon: Gamepad2 },
	{ name: "AI", icon: Brain },
	{ name: "DeSci", icon: Microscope }
] as const;

export type Category = (typeof categories)[number]["name"];
