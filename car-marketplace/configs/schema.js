import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    vin:varchar('vin'),
    offerType:varchar('offerType'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json("features"),
    // createdBy:integer('createdBy').notNull().references(() => User.id),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull().default('User'),
    userImageUrl:varchar('userImageUrl').default('https://www.freepik.com/icon/profile_11121549#fromView=keyword&page=1&position=27&uuid=0f71639a-49c7-420c-8f14-2786129fb7bf'),
    postedOn:varchar('postedOn').notNull(),
})

export const CarImages = pgTable("carImages", {
    id:serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    carListingId: integer('carListingId').notNull().references(() => CarListing.id),
});

