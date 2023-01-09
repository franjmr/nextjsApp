interface IPost {
    id: string
}

export default function Post ({params}:{params: IPost}){
    const {id} = params
    return (
        <h1>Esto es un post {id} </h1>
    )
}