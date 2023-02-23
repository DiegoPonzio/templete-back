# Templete para el proyecto “Veterinaria”

Aquí se presentarán las reglas y la estructura de archivos, donde se explicaran cada una de las partes del templete así como las formas en la que se puede correr el archivo, para la creación de nuestra api, la ruta reservada para nuestros endpoints será `/api/:id`

## Iniciando

Para la instalación del templete:

```bash
git clone https://github.com/DiegoPonzio/templete-back.git
```

Para la instalación de paquetes:
```bash
npm i --save
# o
yarn add
```

Para la ejecución del proyecto en modo de desarrollo se hará con:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver tus resultados.
Puedes empezar a editar tu Código en `src/index.ts`. Esta se actualizará al mismo tiempo que editas

## Carpetas
Dentro del templete existen varias carpetas la cuales cumplen distintas funciones:
### config
Esta contendrá con nuestra conexion a base de datos `config/BDConnection.ts`
### src
Esta contendrá la lógica y las partes más importantes de nuestro proyecto las cuales estarán dentro del archivo `src/index.ts` en este podremos encontar la configuracion del puerto asi como la creaccion de nuestro escucha y es donde conectaremos con nuestros routers
## pages
Esta carpeta se guardaran todos nuestros routers que por archivo crearemos todas las rutas diseñadas para dicha pagina y dentro los diferentes tipos de peticiones que se harán a dicho endpoint 


