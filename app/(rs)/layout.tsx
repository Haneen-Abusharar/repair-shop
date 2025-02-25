import { Header } from "@/components/Header"

export default async function RSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <Header />
            <div className="py-2 px-4">
                {children}
            </div>
        </div>
    )
}
