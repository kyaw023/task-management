
import { createRoot } from 'react-dom/client'
import './index.css'

import IndexRoute from "@/routes/index.route.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <ThemeProvider>
        <IndexRoute/>
        </ThemeProvider>
    </>
)
