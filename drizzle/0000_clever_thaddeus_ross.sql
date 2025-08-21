CREATE TABLE `hints` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`category` text NOT NULL,
	`difficulty` text NOT NULL,
	`resources` text NOT NULL,
	`is_approved` integer DEFAULT false NOT NULL,
	`publisher_name` text NOT NULL,
	`publisher_twitter` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `hints_id_unique` ON `hints` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `hints_title_unique` ON `hints` (`title`);