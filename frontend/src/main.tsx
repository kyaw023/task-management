
import { createRoot } from 'react-dom/client'
import './index.css'

import IndexRoute from "@/routes/index.route.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <ThemeProvider>
            <IndexRoute/>
            <Toaster />
        </ThemeProvider>
    </>
)
