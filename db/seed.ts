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
	])
}
