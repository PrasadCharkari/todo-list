
import './globals.css'
import {TodosProvider} from "@/store/todos";


export const metadata = {
    title: 'Things to do',
   icons: {
    icon: '/NB.png',
  },
}


// thapa technical SUBSCRIBE

export default function RootLayout({
  children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        
        <html lang="en">
        <body>
        <TodosProvider>
            {children}
        </TodosProvider>
        </body>
        </html>
    )
}






