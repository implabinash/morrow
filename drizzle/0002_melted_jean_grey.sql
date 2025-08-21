ALTER TABLE `hints` ADD `is_approved` integer DEFAULT false;--> statement-breakpoint
CREATE UNIQUE INDEX `hints_title_unique` ON `hints` (`title`);