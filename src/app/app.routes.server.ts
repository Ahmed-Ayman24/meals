import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'category/:categoryName',
    renderMode: RenderMode.Client
    },
  {
    path: 'mealdetails/:mealId',
    renderMode: RenderMode.Client
    },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
