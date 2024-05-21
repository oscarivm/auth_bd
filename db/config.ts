import { column, defineDb, defineTable } from 'astro:db';

const Productos = defineTable({
  columns:{
    id: column.number({primaryKey:true}),
    nombre: column.text(),
    descripcion:column.text(),
  },
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    Productos,
  }
});
