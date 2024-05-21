import { db, Productos } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Productos).values([
		{
			id:1,
			nombre:"PC",
			descripcion:"pc de escritorio",
		},
		{
			id:2,
			nombre:"Note",
			descripcion:"pc de escritorio",
		},
		{
			id:3,
			nombre:"TV",
			descripcion:"pc de escritorio",
		}

	])
}
