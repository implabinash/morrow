ALTER TABLE `hint` RENAME TO `hints`;--> statement-breakpoint
ALTER TABLE `hints` RENAME COLUMN "name" TO "publisher_name";--> statement-breakpoint
ALTER TABLE `hints` RENAME COLUMN "twitter" TO "publisher_twitter";--> statement-breakpoint
DROP INDEX `hint_id_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `hints_id_unique` ON `hints` (`id`);