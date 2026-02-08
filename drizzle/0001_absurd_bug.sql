CREATE TABLE `applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`programType` varchar(100) NOT NULL,
	`fullName` text NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`institution` text NOT NULL,
	`yearOfStudy` varchar(50),
	`interests` text,
	`experience` text,
	`status` enum('submitted','under_review','accepted','rejected') NOT NULL DEFAULT 'submitted',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `applications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `consultations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`name` text NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`preferredDate` timestamp NOT NULL,
	`preferredTime` varchar(50) NOT NULL,
	`message` text,
	`status` enum('pending','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `consultations_id` PRIMARY KEY(`id`)
);
