export const pageDown = {
    initial:{
        y:"100vh"
    },
    in: {
        y: "0"
    },
    out: {
        y: "-100vh",
    }
}

export const pageTransition = {
    type: "spring",
    duration: 0.75,
}