# Tech Stack

| Feature        | Stack                        |
|----------------|------------------------------|
| Build Tool     | [Vite](https://vitejs.dev)   |
| UI Framework   | [React](https://reactjs.org) |
| Styling        | [TailwindCSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com) |
| Routing        | React Router DOM             |
| Microfrontend  | Module Federation Plugin for Vite |
| Form Handling  | [React Hook Form](https://react-hook-form.com) |
| State Mgmt     | [Zustand](https://github.com/pmndrs/zustand) |

## 1. ติดตั้ง Dependencies

```bash
cd host-app
npm install

cd ../remote-app
npm install


```md
## 2. วิธีรันโปรเจค

**Terminal 1**  
cd blog-viewer
npm run build
npm run preview

**Terminal 2**  
cd host-app  
npm run dev
