import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/views/Inicio.vue'; 
import Productos from '@/views/Productos.vue';
import Contacto from '@/views/Contacto.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio, 
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos,
    props: {
      nombre: 'Desayunos',
      descripcion: 'Contamos con desayunos nutritivos y deliciosos',
      precio: '$2000',
      cantidad: 'Para dos personas',
      imagen: require('@/assets/img/desayunos.jpg'),
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

