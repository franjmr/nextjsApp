import { ListOfPosts } from "../components/ListOfPosts"

export default async function PostsPage (){
    return (
        <section>
             {/* @ts-expect-error Server Component */}
            <ListOfPosts />
        </section>
    )
}