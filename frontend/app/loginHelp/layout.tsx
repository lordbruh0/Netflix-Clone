export const metadata = {
    title: 'Login Help | Netflix',
    descriptiom: 'Help login to Netflix',
}

type PropsLayout = {
    children: React.ReactNode
}

const RootLayout = ({ children }: PropsLayout) => {
    return (
        <div>{children}</div>
    )
}

export default RootLayout