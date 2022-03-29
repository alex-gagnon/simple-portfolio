import React, { FC } from "react"


interface Props {
    about: String
}

export const Home: FC<Props> = ({ about }: Props) => {
    return (
        <p>{about}</p>
    )
}
