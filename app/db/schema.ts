import {
    pgTable,
    serial,
    text,
    timestamp,
    integer,
    uniqueIndex,
} from 'drizzle-orm/pg-core';


export const users = pgTable(
    'users',{
        id: serial('id').primaryKey(),
        userId: text('userId').notNull(),
        email: text('email').notNull(),
        username: text('username').notNull(),
        roleid: integer('role').references(() => roles.roleId).notNull()

    })

export const roles = pgTable('roles',{
    roleId: serial('roleId').primaryKey(),
    roleName: text('roleName').notNull()
})