DROP INDEX "hints_id_unique";--> statement-breakpoint
DROP INDEX "hints_title_unique";--> statement-breakpoint
ALTER TABLE `hints` ALTER COLUMN "publisher_twitter" TO "publisher_twitter" text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `hints_id_unique` ON `hints` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `hints_title_unique` ON `hints` (`title`);