export const metadata = {
    title: 'Netflix',
    descriptiom: 'Login to Netflix',
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